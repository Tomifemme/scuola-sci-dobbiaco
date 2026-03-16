import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Programma", href: "#programma" },
  {
    label: "Lezioni",
    href: "#lezioni",
    children: [
      { label: "Lezioni Private", href: "#lezioni-private" },
      { label: "Corso Collettivo", href: "#corso-collettivo" },
      { label: "Supercorsi", href: "#supercorsi" },
      { label: "Corso Weekend", href: "#corso-weekend" },
    ],
  },
  {
    label: "Bambini",
    href: "#bambini",
    children: [
      { label: "Lezioni Private", href: "#bambini-private" },
      { label: "Corsi Collettivi", href: "#bambini-collettivi" },
      { label: "Junior Club", href: "#junior-club" },
      { label: "Special Full Day", href: "#full-day" },
    ],
  },
  {
    label: "Freeride",
    href: "#freeride",
    children: [
      { label: "Principianti", href: "#freeride-principianti" },
      { label: "Esperti", href: "#freeride-esperti" },
    ],
  },
  {
    label: "Snowboard",
    href: "#snowboard",
    children: [
      { label: "Lezioni Private", href: "#snowboard-private" },
      { label: "Corso Collettivo", href: "#snowboard-collettivo" },
    ],
  },
  { label: "Prezzi", href: "#prezzi" },
  { label: "Contatto", href: "#contatto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-alpine-deep/95 backdrop-blur-md border-b border-primary/20">
      <div className="alpine-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3">
            <span className="font-display text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
              Scuola Sci Dobbiaco
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-alpine-ice/90 hover:text-primary-foreground transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 bg-card rounded-lg shadow-lg border border-border py-2 min-w-[200px] animate-fade-in">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-card-foreground hover:bg-secondary transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#prenota"
              className="ml-4 px-5 py-2.5 rounded-lg text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
              style={{ background: "var(--gradient-gold)" }}
            >
              Prenota Ora
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-alpine-deep/98 backdrop-blur-md border-t border-primary/20 max-h-[80vh] overflow-y-auto">
          <div className="py-4 px-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  onClick={() => !item.children && setIsOpen(false)}
                  className="block px-4 py-3 text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-alpine-ice/70 hover:text-primary-foreground transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#prenota"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 px-5 py-3 rounded-lg text-sm font-semibold text-accent-foreground text-center"
              style={{ background: "var(--gradient-gold)" }}
            >
              Prenota Ora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
