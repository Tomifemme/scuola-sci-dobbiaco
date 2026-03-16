import kidsImage from "@/assets/kids-skiing.jpg";
import freerideImage from "@/assets/freeride.jpg";
import snowboardImage from "@/assets/snowboard.jpg";
import privateLessonImage from "@/assets/private-lesson.jpg";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Lezioni Private",
    description: "Lezioni individuali personalizzate per tutti i livelli. Massima attenzione e progressi rapidi con il tuo maestro dedicato.",
    image: privateLessonImage,
    alt: "Lezione privata di sci nelle Dolomiti",
  },
  {
    title: "Bambini & Junior Club",
    description: "Corsi speciali per i più piccoli con il miglior campo scuola della zona. Fun for Kids, Junior Club e Special Full Day.",
    image: kidsImage,
    alt: "Bambini che imparano a sciare con maestro",
  },
  {
    title: "Freeride",
    description: "Avventura nella neve fresca delle Dolomiti. Percorsi per principianti e per esperti con guide alpine certificate.",
    image: freerideImage,
    alt: "Freeride nella neve fresca delle Dolomiti",
  },
  {
    title: "Snowboard",
    description: "Lezioni private e corsi collettivi di snowboard per tutti i livelli. Impara con i nostri maestri specializzati.",
    image: snowboardImage,
    alt: "Lezione di snowboard sulle piste",
  },
];

const ServicesSection = () => {
  return (
    <section id="servizi" className="alpine-section bg-secondary/50">
      <div className="alpine-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            I Nostri Corsi
          </p>
          <h2 className="alpine-heading text-foreground mb-4">
            Scegli la tua avventura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Dai corsi per principianti al freeride estremo, abbiamo l'esperienza perfetta per te.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="alpine-card bg-card group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-alpine-deep/20 group-hover:bg-alpine-deep/10 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
