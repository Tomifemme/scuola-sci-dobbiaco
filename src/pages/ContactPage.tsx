import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";
import SEO from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Phone, Mail, MapPin, Clock } from "lucide-react";


const ContactPage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.contact;
  const w = translations.welcome;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={{
          it: "Contatti e Prenotazioni | Scuola Sci Dobbiaco",
          de: "Kontakt und Buchung | Skischule Toblach",
          en: "Contact and Booking | Ski School Dobbiaco",
        }}
        description={{
          it: "Contatta la Scuola Sci Dobbiaco: prenota lezioni di sci, snowboard e freeride. Telefono, email e modulo di prenotazione.",
          de: "Kontaktieren Sie die Skischule Toblach: Buchen Sie Ski-, Snowboard- und Freeride-Unterricht. Telefon, E-Mail und Buchungsformular.",
          en: "Contact Ski School Dobbiaco: book ski, snowboard and freeride lessons. Phone, email and booking form.",
        }}
        path="/contact"
      />
      <Navbar />
      <div className="pt-24 pb-8 text-center bg-secondary/30">
        <h1 className="alpine-heading text-4xl md:text-5xl text-foreground mb-3">{t(p.title, lang)}</h1>
        <p className="text-lg text-muted-foreground font-body">{t(p.subtitle, lang)}</p>
      </div>

      <section className="alpine-section">
        <div className="alpine-container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                {{ it: "Informazioni di Contatto", de: "Kontaktinformationen", en: "Contact Information" }[lang]}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">{t(w.address, lang)}</p>
                    <a
                      href="https://maps.google.com/?q=Via+Dolomiti+5,+39040+Dobbiaco+BZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-body"
                    >
                      Via Dolomiti 5<br />39040 Dobbiaco (BZ)<br />Italia
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">{t(w.officeHours, lang)}</p>
                    <p className="text-muted-foreground font-body">09:00 – 11:00 | 15:00 – 19:00</p>
                    <p className="text-sm text-muted-foreground mt-1">{t(w.christmasHours, lang)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">{t(w.phone, lang)}</p>
                    <a href="tel:+390474972581" className="text-primary hover:underline text-lg font-body">+39 0474 972581</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">{t(w.email, lang)}</p>
                    <a href="mailto:info@scuolasci-dobbiaco.com" className="text-primary hover:underline font-body">info@scuolasci-dobbiaco.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {{ it: "Direttore", de: "Direktor", en: "Director" }[lang]}
                </h3>
                <p className="text-lg text-foreground font-body font-semibold">Niederkofler Walter</p>
                <p className="text-muted-foreground font-body mt-2">
                  {{ it: "A disposizione per qualsiasi informazione sui nostri corsi e programmi.", de: "Für alle Informationen zu unseren Kursen und Programmen stehen wir Ihnen gerne zur Verfügung.", en: "Available for any information about our courses and programs." }[lang]}
                </p>
              </div>

              <div className="mt-6 bg-card rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.123!2d12.2225!3d46.7350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ0JzA2LjAiTiAxMsKwMTMnMjEuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Scuola Sci Dobbiaco Map"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
