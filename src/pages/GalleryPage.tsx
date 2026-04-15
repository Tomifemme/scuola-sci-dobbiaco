import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import instructorsImg from "@/assets/instructors.jpg";
import lezioneImg from "@/assets/lezione.jpg";
import kidsLessonImg from "@/assets/kids-lesson.jpg";
import scuolaSci1Img from "@/assets/scuola-sci1.jpg";
import img20211218 from "@/assets/20211218_113244.jpg";
import imgERJZ from "@/assets/ERJZ9913.JPG";
import img5705 from "@/assets/IMG_5705.JPG";
import img5854 from "@/assets/IMG_5854.JPG";
import imgOTBA from "@/assets/OTBA3681.JPG";

const GalleryPage = () => {
  const { lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const title = { it: "Galleria Fotografica", de: "Fotogalerie", en: "Photo Gallery" }[lang]!;
  const subtitle = {
    it: "Momenti indimenticabili dalla nostra scuola sci",
    de: "Unvergessliche Momente aus unserer Skischule",
    en: "Unforgettable moments from our ski school",
  }[lang]!;

  const images = [
    instructorsImg,
    lezioneImg,
    img20211218,
    kidsLessonImg,
    imgERJZ,
    img5705,
    img5854,
    scuolaSci1Img,
    imgOTBA,
  ];

  const navigate = (dir: number) => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + dir + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={{
          it: "Galleria Foto | Scuola Sci Dobbiaco",
          de: "Fotogalerie | Skischule Toblach",
          en: "Photo Gallery | Ski School Dobbiaco",
        }}
        description={{
          it: "Galleria fotografica della Scuola Sci Dobbiaco: momenti sulle piste delle Dolomiti, lezioni di sci e snowboard.",
          de: "Fotogalerie der Skischule Toblach: Momente auf den Pisten der Dolomiten, Ski- und Snowboardunterricht.",
          en: "Photo gallery of Ski School Dobbiaco: moments on the Dolomites slopes, ski and snowboard lessons.",
        }}
        path="/gallery"
      />
      <Navbar />
      <PageHero title={title} subtitle={subtitle} image={scuolaSci1Img} />

      <section className="alpine-section">
        <div className="alpine-container">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                onClick={() => setSelectedIndex(i)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-white/80 hover:text-white z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-white/80 hover:text-white z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedIndex]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
