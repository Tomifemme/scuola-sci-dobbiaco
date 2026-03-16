import { Cloud, Sun, Snowflake, Thermometer, Wind, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const WeatherSection = () => {
  const { lang } = useLanguage();

  const title = { it: "Meteo & Condizioni Piste", de: "Wetter & Pistenbedingungen", en: "Weather & Slope Conditions" }[lang];
  const subtitle = { it: "Dobbiaco - Alta Pusteria", de: "Toblach - Hochpustertal", en: "Dobbiaco - Alta Pusteria" }[lang];

  return (
    <section className="alpine-section bg-secondary/50">
      <div className="alpine-container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            {{ it: "Condizioni Attuali", de: "Aktuelle Bedingungen", en: "Current Conditions" }[lang]}
          </p>
          <h2 className="alpine-heading text-foreground mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground font-body">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Sun className="w-6 h-6 text-primary" />
              {{ it: "Meteo Dobbiaco", de: "Wetter Toblach", en: "Dobbiaco Weather" }[lang]}
            </h3>
            <iframe
              src="https://www.meteoblue.com/en/weather/widget/daily?geoloc=detect&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windgust=0&winddirection=0&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&pressure=0&layout=light&location_url=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fweek%2Fdobbiaco_italy_3177340&location_mainUrl=https%3A%2F%2Fwww.meteoblue.com%2Fen%2Fweather%2Fweek%2Fdobbiaco_italy_3177340"
              className="w-full border-0 rounded-lg"
              height="220"
              loading="lazy"
              title="Weather Dobbiaco"
              sandbox="allow-scripts allow-same-origin"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-primary" />
              {{ it: "Info Piste - 3 Zinnen", de: "Pisteninfo - 3 Zinnen", en: "Slope Info - 3 Zinnen" }[lang]}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <Snowflake className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">{{ it: "Neve in quota", de: "Schnee oben", en: "Snow at summit" }[lang]}</span>
                </div>
                <span className="font-semibold text-foreground">80 cm</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <Snowflake className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">{{ it: "Neve a valle", de: "Schnee unten", en: "Snow at base" }[lang]}</span>
                </div>
                <span className="font-semibold text-foreground">30 cm</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <Thermometer className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">{{ it: "Temperatura", de: "Temperatur", en: "Temperature" }[lang]}</span>
                </div>
                <span className="font-semibold text-foreground">-5°C / 2°C</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <Wind className="w-5 h-5 text-primary" />
                  <span className="font-body text-foreground">{{ it: "Vento", de: "Wind", en: "Wind" }[lang]}</span>
                </div>
                <span className="font-semibold text-foreground">15 km/h</span>
              </div>
            </div>
            <a
              href="https://www.3zinnen.com/it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-primary hover:underline font-semibold text-sm"
            >
              {{ it: "Vedi condizioni complete su 3 Zinnen →", de: "Alle Bedingungen auf 3 Zinnen anzeigen →", en: "See full conditions on 3 Zinnen →" }[lang]}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
