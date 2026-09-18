import { useEffect, useState } from "react";
import { Cloud, CloudRain, CloudSnow, Sun, ExternalLink, Mountain } from "lucide-react";
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
            <p className="font-body leading-relaxed text-muted-foreground">
              {{
                it: "Consulta il sito ufficiale 3 Zinnen Dolomites per le condizioni aggiornate di piste, neve e impianti.",
                de: "Aktuelle Informationen zu Pisten, Schnee und Liften finden Sie auf der offiziellen Website der 3 Zinnen Dolomites.",
                en: "Visit the official 3 Zinnen Dolomites website for current slope, snow and lift conditions.",
              }[lang]}
            </p>
            <a
              href={
                {
                  it: "https://www.dreizinnen.com/it/sci-alpino",
                  de: "https://www.dreizinnen.com/de/skifahren",
                  en: "https://www.dreizinnen.com/en/skiing",
                }[lang]
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-semibold text-sm"
            >
              {{ it: "Vedi condizioni complete su 3 Zinnen →", de: "Alle Bedingungen auf 3 Zinnen anzeigen →", en: "See full conditions on 3 Zinnen →" }[lang]}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
