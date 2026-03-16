import { Phone, Mail, MapPin, Clock } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section id="benvenuto" className="alpine-section bg-background">
      <div className="alpine-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Benvenuti
            </p>
            <h2 className="alpine-heading text-foreground mb-6">
              Il nostro Team di Maestri vi dà il benvenuto!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-body">
              Sci, Snowboard, Freeride, Fun for Kids, gite con gli sci nelle Dolomiti e tanta emozione vi offriamo nella nostra Scuola di Sci. Potete scegliere se partecipare ad un corso di gruppo, lezioni individuali, o ad un Supercorso.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
              I nostri maestri esperti e locali, conoscitori dell'ambiente, saranno il tuo punto di riferimento e ti faranno imparare e vivere emozioni indimenticabili durante la tua vacanza nell'Alta Val Pusteria.
            </p>
            <p className="text-base text-muted-foreground italic font-body">
              Un caloroso saluto da parte di tutto il nostro team
              <br />
              <span className="font-semibold text-foreground not-italic">— Walter Niederkofler, Direttore</span>
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-elevated)" }}>
            <h3 className="alpine-subheading text-foreground mb-6">Informazioni</h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Indirizzo</p>
                  <p className="text-muted-foreground">Via Dolomiti 5, 39040 Dobbiaco (BZ), Italia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Orari Uffici</p>
                  <p className="text-muted-foreground">09:00 – 11:00 | 15:00 – 19:00</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Periodo natalizio: 09:30 – 12:00 | 15:00 – 19:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefono</p>
                  <a href="tel:+390474972581" className="text-primary hover:underline">
                    +39 0474 972581
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:info@scuolasci-dobbiaco.com" className="text-primary hover:underline">
                    info@scuolasci-dobbiaco.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
