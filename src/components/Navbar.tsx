import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo.jpeg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLanguage();
  const location = useLocation();
  const n = translations.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t(n.home, lang), href: "/" },
    {
      label: t(n.lessons, lang),
      href: "/lessons",
      children: [
        { label: t(n.privateLessons, lang), href: "/lessons#private" },
        { label: t(n.groupLessons, lang), href: "/lessons#group" },
        { label: t(n.superCourses, lang), href: "/lessons#super" },
        { label: t(n.weekendCourse, lang), href: "/lessons#weekend" },
      ],
    },
    {
      label: t(n.kids, lang),
      href: "/kids",
      children: [
        { label: t(n.kidsPrivate, lang), href: "/kids#private" },
        { label: t(n.kidsGroup, lang), href: "/kids#group" },
        { label: t(n.juniorClub, lang), href: "/kids#junior" },
        { label: t(n.fullDay, lang), href: "/kids#fullday" },
      ],
    },
    {
      label: t(n.freeride, lang),
      href: "/freeride",
      children: [
        { label: t(n.freerideBeginner, lang), href: "/freeride#beginners" },
        { label: t(n.freerideExpert, lang), href: "/freeride#experts" },
      ],
    },
    {
      label: t(n.snowboard, lang),
      href: "/snowboard",
      children: [
        { label: t(n.snowboardPrivate, lang), href: "/snowboard#private" },
        { label: t(n.snowboardGroup, lang), href: "/snowboard#group" },
      ],
    },
    { label: t(n.prices, lang), href: "/prices" },
    { label: t(n.contact, lang), href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-alpine-deep/98 backdrop-blur-lg shadow-lg" : "bg-alpine-deep/80 backdrop-blur-md"} border-b border-primary/20`}>
      <div className="alpine-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Scuola Sci Dobbiaco" className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover" />
            <span className="font-display text-lg md:text-xl font-bold text-primary-foreground tracking-tight">
              Scuola Sci Dobbiaco
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === item.href
                      ? "text-alpine-gold"
                      : "text-alpine-ice/90 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-0 bg-card rounded-lg shadow-lg border border-border py-2 min-w-[200px]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-card-foreground hover:bg-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "var(--gradient-gold)" }}
            >
              {t(n.bookNow, lang)}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-primary-foreground" aria-label="Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-alpine-deep/98 backdrop-blur-md border-t border-primary/20 overflow-hidden"
          >
            <div className="py-4 px-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => !item.children && setIsOpen(false)}
                    className="block px-4 py-3 text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-alpine-ice/70 hover:text-primary-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mx-4 mt-4 px-5 py-3 rounded-lg text-sm font-semibold text-accent-foreground text-center"
                style={{ background: "var(--gradient-gold)" }}
              >
                {t(n.bookNow, lang)}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
