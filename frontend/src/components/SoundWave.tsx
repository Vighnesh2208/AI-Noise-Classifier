import { cn } from "@/lib/utils";

interface SoundWaveProps {
  className?: string;
  barCount?: number;
  variant?: "default" | "safe" | "harmful";
}

const SoundWave = ({ className, barCount = 40, variant = "default" }: SoundWaveProps) => {
  const getBarColor = () => {
    switch (variant) {
      case "safe":
        return "bg-safe";
      case "harmful":
        return "bg-harmful";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className={cn("flex items-center justify-center gap-[2px]", className)}>
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 rounded-full animate-wave",
            getBarColor()
          )}
          style={{
            height: `${Math.random() * 60 + 20}px`,
            animationDelay: `${i * 0.05}s`,
            animationDuration: `${0.8 + Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
