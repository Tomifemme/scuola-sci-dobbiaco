import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type Message = { role: "user" | "bot"; text: string };

const COPY = {
  it: {
    open: "Apri chat assistenza", close: "Chiudi chat", title: "Assistenza",
    subtitle: "Risposte a domande generali",
    greeting: "Ciao! Posso rispondere a domande generali sulla scuola. Per prenotazioni e disponibilità contattaci direttamente.",
    placeholder: "Scrivi una domanda…", send: "Invia", typing: "Sto scrivendo…",
    unavailable: "La chat non è disponibile al momento. Contattaci:",
    note: "Le risposte non confermano prenotazioni né disponibilità.",
  },
  de: {
    open: "Support-Chat öffnen", close: "Chat schließen", title: "Support",
    subtitle: "Antworten auf allgemeine Fragen",
    greeting: "Hallo! Ich beantworte allgemeine Fragen zur Skischule. Für Buchungen und Verfügbarkeit kontaktieren Sie uns bitte direkt.",
    placeholder: "Frage eingeben…", send: "Senden", typing: "Schreibt…",
    unavailable: "Der Chat ist derzeit nicht verfügbar. Kontaktieren Sie uns:",
    note: "Antworten bestätigen keine Buchungen oder Verfügbarkeit.",
  },
  en: {
    open: "Open support chat", close: "Close chat", title: "Support",
    subtitle: "Answers to general questions",
    greeting: "Hi! I can answer general questions about the school. For bookings and availability please contact us directly.",
    placeholder: "Type a question…", send: "Send", typing: "Typing…",
    unavailable: "Chat is currently unavailable. Please contact us:",
    note: "Replies don't confirm bookings or availability.",
  },
} as const;

const newSessionId = () => `s_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

const ChatWidget = () => {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const sessionId = useRef("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, unavailable]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    if (!sessionId.current) sessionId.current = newSessionId();
    setInput("");
    setUnavailable(false);
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.slice(0, 1000), sessionId: sessionId.current, lang }),
      });
      const data = res.ok ? await res.json() : null;
      if (data && typeof data.reply === "string" && data.reply.trim()) {
        setMessages((m) => [...m, { role: "bot", text: data.reply }]);
      } else setUnavailable(true);
    } catch {
      setUnavailable(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? c.close : c.open}
        aria-expanded={open}
        aria-controls="support-chat"
        className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        style={{ background: "var(--gradient-alpine)" }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="support-chat"
            role="dialog"
            aria-label={c.title}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 left-4 z-[60] flex max-h-[70vh] flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-2xl sm:left-auto sm:w-[360px]"
          >
            <div className="flex items-start justify-between bg-alpine-deep px-4 py-3 text-primary-foreground">
              <div>
                <p className="font-display font-semibold">{c.title}</p>
                <p className="text-xs opacity-80">{c.subtitle}</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label={c.close}
                className="rounded p-1 hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm" aria-live="polite">
              <div className="max-w-[85%] rounded-lg bg-secondary px-3 py-2 text-secondary-foreground">{c.greeting}</div>
              {messages.map((m, i) => (
                <div key={i}
                  className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2 ${m.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" /> {c.typing}
                </div>
              )}
              {unavailable && (
                <div role="alert" className="rounded-lg border border-destructive/40 bg-destructive/5 px-3 py-2">
                  <p className="mb-2">{c.unavailable}</p>
                  <a href="mailto:info@scuolasci-dobbiaco.com" className="flex items-center gap-2 text-primary underline">
                    <Mail className="h-4 w-4" /> info@scuolasci-dobbiaco.com
                  </a>
                  <a href="tel:+390474972581" className="mt-1 flex items-center gap-2 text-primary underline">
                    <Phone className="h-4 w-4" /> +39 0474 972581
                  </a>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <form onSubmit={(e) => { e.preventDefault(); send(); }} className="border-t border-border p-3">
              <div className="flex items-end gap-2">
                <label htmlFor="chat-input" className="sr-only">{c.placeholder}</label>
                <textarea
                  id="chat-input"
                  ref={inputRef}
                  rows={1}
                  maxLength={1000}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                  placeholder={c.placeholder}
                  className="max-h-24 flex-1 resize-none rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <button type="submit" disabled={loading || !input.trim()} aria-label={c.send}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">{c.note}</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
