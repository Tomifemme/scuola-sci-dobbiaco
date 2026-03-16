import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    courseType: "",
    participants: "1",
    level: "",
    message: "",
  });

  const labels = {
    title: { it: "Prenota il Tuo Corso", de: "Buchen Sie Ihren Kurs", en: "Book Your Course" }[lang]!,
    name: { it: "Nome e Cognome", de: "Vor- und Nachname", en: "Full Name" }[lang]!,
    email: { it: "Email", de: "E-Mail", en: "Email" }[lang]!,
    phone: { it: "Telefono", de: "Telefon", en: "Phone" }[lang]!,
    date: { it: "Data preferita", de: "Wunschdatum", en: "Preferred Date" }[lang]!,
    courseType: { it: "Tipo di Corso", de: "Kursart", en: "Course Type" }[lang]!,
    participants: { it: "Partecipanti", de: "Teilnehmer", en: "Participants" }[lang]!,
    level: { it: "Livello", de: "Niveau", en: "Level" }[lang]!,
    message: { it: "Messaggio / Richieste", de: "Nachricht / Wünsche", en: "Message / Requests" }[lang]!,
    send: { it: "Invia Richiesta", de: "Anfrage Senden", en: "Send Request" }[lang]!,
    courses: [
      { it: "Lezione Privata Sci", de: "Privater Skiunterricht", en: "Private Ski Lesson" }[lang]!,
      { it: "Corso Collettivo Sci", de: "Ski-Gruppenkurs", en: "Group Ski Course" }[lang]!,
      { it: "Lezione Bambini", de: "Kinderkurs", en: "Kids Lesson" }[lang]!,
      { it: "Snowboard", de: "Snowboard", en: "Snowboard" }[lang]!,
      { it: "Freeride", de: "Freeride", en: "Freeride" }[lang]!,
      { it: "Junior Club", de: "Junior Club", en: "Junior Club" }[lang]!,
      { it: "Special Full Day", de: "Special Full Day", en: "Special Full Day" }[lang]!,
    ],
    levels: [
      { it: "Principiante", de: "Anfänger", en: "Beginner" }[lang]!,
      { it: "Intermedio", de: "Fortgeschritten", en: "Intermediate" }[lang]!,
      { it: "Avanzato", de: "Experte", en: "Advanced" }[lang]!,
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking Request - ${formData.courseType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nCourse: ${formData.courseType}\nParticipants: ${formData.participants}\nLevel: ${formData.level}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@scuolasci-dobbiaco.com?subject=${subject}&body=${body}`;
    toast({
      title: { it: "Email aperta!", de: "E-Mail geöffnet!", en: "Email opened!" }[lang],
      description: { it: "Completa l'invio nel tuo client email.", de: "Vervollständigen Sie den Versand in Ihrem E-Mail-Programm.", en: "Complete sending in your email client." }[lang],
    });
  };

  const update = (field: string, value: string) => setFormData((p) => ({ ...p, [field]: value }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-8 border border-border"
      style={{ boxShadow: "var(--shadow-elevated)" }}
    >
      <h3 className="font-display text-2xl font-bold text-foreground mb-6">{labels.title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{labels.name}</label>
            <Input value={formData.name} onChange={(e) => update("name", e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{labels.email}</label>
            <Input type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} required />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{labels.phone}</label>
            <Input type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{labels.date}</label>
            <Input type="date" value={formData.date} onChange={(e) => update("date", e.target.value)} required />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{labels.courseType}</label>
            <select
              value={formData.courseType}
              onChange={(e) => update("courseType", e.target.value)}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">--</option>
              {labels.courses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{labels.participants}</label>
            <Input type="number" min="1" max="20" value={formData.participants} onChange={(e) => update("participants", e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{labels.level}</label>
            <select
              value={formData.level}
              onChange={(e) => update("level", e.target.value)}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">--</option>
              {labels.levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{labels.message}</label>
          <textarea
            value={formData.message}
            onChange={(e) => update("message", e.target.value)}
            rows={3}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
          />
        </div>
        <Button type="submit" className="w-full gap-2" style={{ background: "var(--gradient-alpine)" }}>
          <Send className="w-4 h-4" />
          {labels.send}
        </Button>
      </form>
    </motion.div>
  );
};

export default BookingForm;
