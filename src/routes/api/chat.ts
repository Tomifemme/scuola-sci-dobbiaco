import { createFileRoute } from "@tanstack/react-router";

// Server-side proxy to the n8n chatbot webhook. The webhook URL (and optional
// secret) live only in server env vars and are never sent to the browser.
//   CHAT_WEBHOOK_URL    – n8n production webhook URL (required to enable chat)
//   CHAT_WEBHOOK_SECRET – optional; forwarded as the X-Chat-Secret header
export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const url = process.env['CHAT_WEBHOOK_URL'];
        if (!url) return Response.json({ error: "unavailable" }, { status: 503 });

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "bad_request" }, { status: 400 });
        }
        const { message, sessionId, lang } = (body ?? {}) as Record<string, unknown>;
        if (
          typeof message !== "string" || !message.trim() || message.length > 1000 ||
          typeof sessionId !== "string" || !/^[a-zA-Z0-9_-]{8,80}$/.test(sessionId) ||
          (lang !== "it" && lang !== "de" && lang !== "en")
        ) {
          return Response.json({ error: "bad_request" }, { status: 400 });
        }

        try {
          const headers: Record<string, string> = { "Content-Type": "application/json" };
          const secret = process.env['CHAT_WEBHOOK_SECRET'];
          if (secret) headers["X-Chat-Secret"] = secret;
          const res = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({ chatInput: message.trim(), sessionId, lang }),
            signal: AbortSignal.timeout(25000),
          });
          if (!res.ok) {
            console.error(`Chat webhook failed [${res.status}]: ${await res.text()}`);
            return Response.json({ error: "upstream" }, { status: 502 });
          }
          const text = await res.text();
          let reply = "";
          let showBooking = false;
          let showContact = false;
          try {
            const data = JSON.parse(text);
            const d = Array.isArray(data) ? data[0] : data;
            reply = typeof d === "string" ? d : d?.reply ?? d?.output ?? d?.text ?? "";
            showBooking = d?.showBooking === true;
            showContact = d?.showContact === true;
          } catch {
            reply = text;
          }
          if (typeof reply !== "string" || !reply.trim()) {
            return Response.json({ error: "empty" }, { status: 502 });
          }
          return Response.json({ reply: reply.trim().slice(0, 4000), showBooking, showContact });
        } catch (e) {
          console.error("Chat webhook error", e);
          return Response.json({ error: "upstream" }, { status: 502 });
        }
      },
    },
  },
});
