import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contatto" className="bg-foreground text-background">
      <div className="alpine-container py-16 px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Scuola Sci Dobbiaco</h3>
            <p className="text-background/70 font-body mb-6">
              La prima e miglior scuola sci a Dobbiaco. Dal divertimento per i bambini al freeride estremo nelle Dolomiti.
            </p>
            <a
              href="https://www.facebook.com/542722895799650"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-body">Seguici su Facebook</span>
            </a>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3 font-body">
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Via Dolomiti 5, 39040 Dobbiaco (BZ)</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+390474972581" className="hover:text-background transition-colors">
                  +39 0474 972581
                </a>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@scuolasci-dobbiaco.com" className="hover:text-background transition-colors">
                  info@scuolasci-dobbiaco.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Link Rapidi</h4>
            <div className="grid grid-cols-2 gap-2 font-body">
              {["Programma", "Lezioni", "Bambini", "Freeride", "Snowboard", "Prezzi", "Team", "Galleria"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-background/70 hover:text-background transition-colors py-1"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm font-body">
          <p>© {new Date().getFullYear()} Scuola Sci Dobbiaco. Tutti i diritti riservati.</p>
          <p className="mt-1">Direttore: Niederkofler Walter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
