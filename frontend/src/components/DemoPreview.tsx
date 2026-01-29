import { ShieldCheck, ShieldAlert } from "lucide-react";
import SoundWave from "./SoundWave";
import { useTranslation } from "react-i18next";

const DemoPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            {t("demo.title.prefix")} <span className="text-gradient">{t("demo.title.emphasis")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("demo.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Safe Result */}
          <div className="glass rounded-2xl p-8 border-safe/30 hover:border-safe/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-safe/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-safe" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg">{t("demo.safe.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("demo.safe.subtitle")}</p>
              </div>
            </div>
            
            <SoundWave variant="safe" barCount={30} className="h-16 mb-6" />
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("demo.safe.riskLevel")}</span>
                <span className="text-safe font-medium">{t("demo.safe.riskValue")}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-safe rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground">
                {t("demo.safe.description")}
              </p>
            </div>
          </div>

          {/* Harmful Result */}
          <div className="glass rounded-2xl p-8 border-harmful/30 hover:border-harmful/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-harmful/20 flex items-center justify-center animate-pulse">
                <ShieldAlert className="w-6 h-6 text-harmful" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg">{t("demo.harmful.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("demo.harmful.subtitle")}</p>
              </div>
            </div>
            
            <SoundWave variant="harmful" barCount={30} className="h-16 mb-6" />
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("demo.harmful.riskLevel")}</span>
                <span className="text-harmful font-medium">{t("demo.harmful.riskValue")}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-harmful rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground">
                {t("demo.harmful.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;
