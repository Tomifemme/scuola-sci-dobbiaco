import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

type Message = { role: "user" | "bot"; text: string };

const ChatWidget = () => {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(`session_${Date.now()}_${Math.random().toString(36).slice(2)}`);

  const labels = {
    title: { it: "Assistente FAQ", de: "FAQ-Assistent", en: "FAQ Assistant" }[lang]!,
    placeholder: { it: "Scrivi una domanda...", de: "Stellen Sie eine Frage...", en: "Ask a question..." }[lang]!,
    greeting: {
      it: "Ciao! 👋 Sono l'assistente della Scuola Sci Dobbiaco. Come posso aiutarti?",
      de: "Hallo! 👋 Ich bin der Assistent der Skischule Toblach. Wie kann ich Ihnen helfen?",
      en: "Hello! 👋 I'm the Ski School Dobbiaco assistant. How can I help you?",
    }[lang]!,
    error: {
      it: "Mi dispiace, si è verificato un errore. Riprova più tardi.",
      de: "Es tut mir leid, ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      en: "Sorry, an error occurred. Please try again later.",
    }[lang]!,
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", text: labels.greeting }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const webhookUrl =
        import.meta.env.VITE_N8N_WEBHOOK_URL ||
        "https://tomifemme.app.n8n.cloud/webhook/dceb4d90-ab4a-490c-80ed-75b12f5fa2be";

      if (!webhookUrl) {
        setMessages((prev) => [...prev, { role: "bot", text: labels.error }]);
        setLoading(false);
        return;
      }

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: userMsg, sessionId: sessionId.current, lang }),
      });

      const text = await res.text();
      let reply: string;
      try {
        const data = JSON.parse(text);
        reply = data.output || data.response || data.text || data.message || (typeof data === "string" ? data : text);
      } catch {
        // Response is plain text (from n8n Respond to Webhook)
        reply = text;
      }
      if (!reply || reply.trim() === "") reply = labels.error;
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: labels.error }]);
    } finally {
      setLoading(false);
    }
  };

  return null;
};

export default ChatWidget;
