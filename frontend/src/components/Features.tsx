import { Volume2, Zap, Lock, Gauge, Headphones, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Zap, titleKey: "features.items.realtime.title", descriptionKey: "features.items.realtime.description" },
    { icon: BarChart3, titleKey: "features.items.decibel.title", descriptionKey: "features.items.decibel.description" },
    { icon: Headphones, titleKey: "features.items.frequency.title", descriptionKey: "features.items.frequency.description" },
    { icon: Lock, titleKey: "features.items.privacy.title", descriptionKey: "features.items.privacy.description" },
    { icon: Volume2, titleKey: "features.items.multisource.title", descriptionKey: "features.items.multisource.description" },
    { icon: Gauge, titleKey: "features.items.risk.title", descriptionKey: "features.items.risk.description" },
  ] as const;

  return (
    <section className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            {t("features.title.prefix")} <span className="text-gradient">{t("features.title.emphasis")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.titleKey}
              className="group p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card/60 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground text-sm">{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
