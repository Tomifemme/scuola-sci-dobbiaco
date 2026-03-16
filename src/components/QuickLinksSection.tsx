import { Users, Award, Mountain, Snowflake } from "lucide-react";

const stats = [
  { icon: Users, value: "1.700+", label: "Follower Facebook" },
  { icon: Award, value: "30+", label: "Anni di esperienza" },
  { icon: Mountain, value: "3 Zinnen", label: "Comprensorio Dolomiti" },
  { icon: Snowflake, value: "100%", label: "Successo garantito" },
];

const quickLinks = [
  { label: "News & Offerte", href: "https://www.scuolasci-dobbiaco.com/it/NEWS-%26-OFFERTE" },
  { label: "Video", href: "https://www.scuolasci-dobbiaco.com/it/VIDEO" },
  { label: "Web Cam", href: "https://www.scuolasci-dobbiaco.com/it/WEB-CAM" },
  { label: "Skilift", href: "http://www.ski-rienza.it/" },
  { label: "Noleggio", href: "http://www.ski-rent.it/it/HOME/" },
  { label: "Galleria", href: "https://www.scuolasci-dobbiaco.com/it/GALLERIA" },
];

const QuickLinksSection = () => {
  return (
    <section className="alpine-section bg-alpine-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-alpine-sky blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="alpine-container relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-alpine-gold mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-alpine-ice/70 font-body">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="text-center">
          <h3 className="alpine-subheading text-primary-foreground mb-8">Link Utili</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-alpine-ice/20 text-alpine-ice/90 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
