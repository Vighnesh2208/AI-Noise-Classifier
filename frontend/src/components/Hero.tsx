import { Button } from "@/components/ui/button";
import { Mic, Upload } from "lucide-react";
import SoundWave from "./SoundWave";

const Hero = () => {
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
          <span className="text-sm text-muted-foreground">AI-Powered Sound Analysis</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">
          <span className="text-foreground">Detect </span>
          <span className="text-gradient">Harmful</span>
          <br />
          <span className="text-foreground">Sounds Instantly</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Our AI-powered noise classifier analyzes audio in real-time to identify potentially 
          harmful sounds—protecting your hearing and well-being.
        </p>

        {/* Sound wave visualization */}
        <div className="mb-12">
          <SoundWave className="h-20" barCount={50} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow px-8 py-6 text-lg font-semibold">
            <Mic className="w-5 h-5 mr-2" />
            Start Recording
          </Button>
          <Button size="lg" variant="outline" className="border-border/50 bg-card/30 backdrop-blur hover:bg-card/50 px-8 py-6 text-lg">
            <Upload className="w-5 h-5 mr-2" />
            Upload Audio
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-safe" />
            <span>Real-time Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>99% Accuracy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Privacy First</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
