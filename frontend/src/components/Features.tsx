import { Volume2, Zap, Lock, Gauge, Headphones, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Detection",
    description: "Instant analysis with less than 50ms latency for immediate feedback.",
  },
  {
    icon: BarChart3,
    title: "Decibel Monitoring",
    description: "Track sound levels and receive warnings when they exceed safe thresholds.",
  },
  {
    icon: Headphones,
    title: "Frequency Analysis",
    description: "Identify harmful frequency ranges that can damage hearing over time.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "All processing happens locally. Your audio never leaves your device.",
  },
  {
    icon: Volume2,
    title: "Multi-source Support",
    description: "Analyze audio from microphone, uploaded files, or streaming sources.",
  },
  {
    icon: Gauge,
    title: "Risk Assessment",
    description: "Get detailed reports on exposure duration and recommended safe limits.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced AI capabilities designed to keep your hearing safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card/60 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
