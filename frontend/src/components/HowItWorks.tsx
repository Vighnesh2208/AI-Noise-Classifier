import { Mic, Brain, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Mic,
    title: "Capture Sound",
    description: "Record audio from your microphone or upload an existing audio file for analysis.",
    step: "01",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced neural network processes the audio, identifying patterns and frequencies.",
    step: "02",
  },
  {
    icon: ShieldCheck,
    title: "Get Results",
    description: "Receive instant feedback on whether the sound is potentially harmful to your hearing.",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to protect your hearing with our AI-powered noise classifier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-glow/20">
                {/* Step number */}
                <span className="absolute top-4 right-4 text-6xl font-bold font-display text-muted/20 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow/50">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold font-display mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
