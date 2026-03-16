import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const f = translations.footer;
  const n = translations.nav;

  const links = [
    { label: t(n.lessons, lang), to: "/lessons" },
    { label: t(n.kids, lang), to: "/kids" },
    { label: t(n.freeride, lang), to: "/freeride" },
    { label: t(n.snowboard, lang), to: "/snowboard" },
    { label: t(n.prices, lang), to: "/prices" },
    { label: t(n.contact, lang), to: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="alpine-container py-16 px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Scuola Sci Dobbiaco</h3>
            <p className="text-background/70 font-body mb-6">{t(f.description, lang)}</p>
            <a
              href="https://www.facebook.com/542722895799650"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-body">{t(f.followFacebook, lang)}</span>
            </a>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t(f.contacts, lang)}</h4>
            <div className="space-y-3 font-body">
              <Link to="/contact" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Via Dolomiti 5, 39040 Dobbiaco (BZ)</span>
              </Link>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+390474972581" className="hover:text-background transition-colors">+39 0474 972581</a>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@scuolasci-dobbiaco.com" className="hover:text-background transition-colors">info@scuolasci-dobbiaco.com</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t(f.quickLinks, lang)}</h4>
            <div className="grid grid-cols-2 gap-2 font-body">
              {links.map((item) => (
                <Link key={item.to} to={item.to} className="text-background/70 hover:text-background transition-colors py-1">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm font-body">
          <p>© {new Date().getFullYear()} Scuola Sci Dobbiaco. {t(f.allRights, lang)}</p>
          <p className="mt-1">{t(f.director, lang)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
