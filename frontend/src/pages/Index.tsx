import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import DemoPreview from "@/components/DemoPreview";
import SafetyTips from "@/components/SafetyTips";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="demo">
          <DemoPreview />
        </div>
        <SafetyTips />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
