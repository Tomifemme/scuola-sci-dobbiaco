import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import instructorsImg from "@/assets/instructors.jpg";

const WelcomeSection = () => {
  const { lang } = useLanguage();
  const w = translations.welcome;

  return (
    <section id="benvenuto" className="alpine-section bg-background">
      <div className="alpine-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">{t(w.label, lang)}</p>
            <h2 className="alpine-heading text-foreground mb-6">{t(w.title, lang)}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-body">{t(w.text1, lang)}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-body">{t(w.text2, lang)}</p>
            
            <div className="relative rounded-xl overflow-hidden mb-6">
              <img src={instructorsImg} alt="Il nostro team" className="w-full h-48 object-cover rounded-xl" />
            </div>

            <p className="text-base text-muted-foreground italic font-body">
              {t(w.greeting, lang)}
              <br />
              <span className="font-semibold text-foreground not-italic">{t(w.director, lang)}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <h3 className="alpine-subheading text-foreground mb-6">{t(w.info, lang)}</h3>
            <div className="space-y-5">
              <Link to="/contact" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t(w.address, lang)}</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">Via Dolomiti 5, 39040 Dobbiaco (BZ), Italia</p>
                </div>
              </Link>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t(w.officeHours, lang)}</p>
                  <p className="text-muted-foreground">09:00 – 11:00 | 15:00 – 19:00</p>
                  <p className="text-sm text-muted-foreground mt-1">{t(w.christmasHours, lang)}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t(w.phone, lang)}</p>
                  <a href="tel:+390474972581" className="text-primary hover:underline">+39 0474 972581</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t(w.email, lang)}</p>
                  <a href="mailto:info@scuolasci-dobbiaco.com" className="text-primary hover:underline">info@scuolasci-dobbiaco.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
