import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  marginTop?: string;
}

const PageHero = ({ title, subtitle, image, marginTop = "mt-[10px]" }: PageHeroProps) => {
  return (
    <section
      className={`relative h-[65vh] min-h-[500px] flex items-end justify-center overflow-hidden pb-12 ${marginTop}`}
    >
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="alpine-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-alpine-ice/90 font-body"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
