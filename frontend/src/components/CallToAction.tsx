import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Protect Your Hearing <span className="text-gradient">Today</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Start analyzing sounds for free. No signup required. 
              Your hearing health is just one click away.
            </p>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow px-8 py-6 text-lg font-semibold group">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
