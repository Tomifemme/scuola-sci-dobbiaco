import { useEffect, useState } from "react";
import { Cloud, CloudRain, CloudSnow, Sun, Snowflake, Thermometer, Wind, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type DailyForecast = {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max: number[];
};

const weatherIcon = (code: number) => {
  if (code >= 71 && code <= 86) return CloudSnow;
  if (code >= 51) return CloudRain;
  if (code >= 2) return Cloud;
  return Sun;
};

const WeatherSection = () => {
  const { lang } = useLanguage();
  const [forecast, setForecast] = useState<DailyForecast | null>(null);

  const title = { it: "Meteo & Condizioni Piste", de: "Wetter & Pistenbedingungen", en: "Weather & Slope Conditions" }[lang];
  const subtitle = { it: "Dobbiaco - Alta Pusteria", de: "Toblach - Hochpustertal", en: "Dobbiaco - Alta Pusteria" }[lang];

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({
      latitude: "46.7351",
      longitude: "12.2225",
      daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
      timezone: "Europe/Rome",
      forecast_days: "4",
    });

    fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Weather request failed");
        return response.json() as Promise<{ daily: DailyForecast }>;
      })
      .then((data) => setForecast(data.daily))
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError") setForecast(null);
      });

    return () => controller.abort();
  }, []);

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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 min-h-[160px]" aria-label={subtitle}>
              {forecast ? forecast.time.map((date, index) => {
                const Icon = weatherIcon(forecast.weather_code[index] ?? 0);
                const day = new Intl.DateTimeFormat(lang, { weekday: "short" }).format(
                  new Date(`${date}T12:00:00`),
                );
                return (
                  <div key={date} className="flex flex-col items-center justify-center gap-2 rounded-lg bg-secondary/60 p-3 text-center">
                    <span className="text-sm font-semibold capitalize text-foreground">{day}</span>
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <span className="font-semibold text-foreground">
                      {Math.round(forecast.temperature_2m_max[index] ?? 0)}° / {Math.round(forecast.temperature_2m_min[index] ?? 0)}°
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {forecast.precipitation_probability_max[index] ?? 0}%
                    </span>
                  </div>
                );
              }) : (
                <div className="col-span-full flex items-center justify-center text-muted-foreground">
                  {{ it: "Caricamento meteo di Dobbiaco…", de: "Wetter für Toblach wird geladen…", en: "Loading Dobbiaco weather…" }[lang]}
                </div>
              )}
            </div>
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
