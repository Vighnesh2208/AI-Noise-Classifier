import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Upload } from "lucide-react";
import SoundWave from "./SoundWave";
import { classifyAudio, type PredictionResult } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      const prediction = await classifyAudio(file);
      setResult(prediction);
      toast({
        title: t("hero.toast.doneTitle"),
        description: `${prediction.predicted_class} (${prediction.confidence.toFixed(2)}% confidence)`,
      });

      // Send location automatically
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Importing sendLocation here to avoid circular dependency if it was in api.ts (it is not, but good practice)
            // Actually it is in api.ts, so I need to import it at the top.
            import("@/lib/api").then(({ sendLocation }) => {
              sendLocation(latitude, longitude);
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    } catch (error) {
      console.error(error);
      toast({
        title: t("hero.toast.failedTitle"),
        description: t("hero.toast.failedDescription"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      // Allow selecting the same file again
      event.target.value = "";
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse-glow">
          <div className="w-2 h-2 rounded-full bg-safe animate-pulse" />
          <span className="text-sm text-muted-foreground">{t("hero.badge")}</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">
          <span className="text-foreground">{t("hero.headline.detect")} </span>
          <span className="text-gradient">{t("hero.headline.harmful")}</span>
          <br />
          <span className="text-foreground">{t("hero.headline.soundsInstantly")}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t("hero.description")}
        </p>

        {/* Sound wave visualization */}
        <div className="mb-12">
          <SoundWave className="h-20" barCount={50} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow px-8 py-6 text-lg font-semibold"
            disabled
          >
            <Mic className="w-5 h-5 mr-2" />
            {t("hero.startRecording")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/50 bg-card/30 backdrop-blur hover:bg-card/50 px-8 py-6 text-lg"
            onClick={handleUploadClick}
            disabled={isLoading}
          >
            <Upload className="w-5 h-5 mr-2" />
            {isLoading ? t("hero.analyzing") : t("hero.uploadAudio")}
          </Button>
        </div>


        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Prediction result */}
        {result && (
          <div className="mt-10 max-w-md mx-auto text-left glass rounded-2xl p-6 border border-border/50">
            <h2 className="text-xl font-semibold font-display mb-2">{t("hero.latest.title")}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {t("hero.latest.description")}
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("hero.latest.predictedClass")}</span>
                <span className="font-medium capitalize">{result.predicted_class.replace(/_/g, " ")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("hero.latest.confidence")}</span>
                <span className="font-medium">{result.confidence.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("hero.latest.riskAssessment")}</span>
                <span className={result.harmful ? "font-medium text-harmful" : "font-medium text-safe"}>
                  {result.harmful ? t("hero.latest.harmful") : t("hero.latest.safe")}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Trust indicators */}
        <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-safe" />
            <span>{t("hero.trust.realtime")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{t("hero.trust.accuracy")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>{t("hero.trust.privacy")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
