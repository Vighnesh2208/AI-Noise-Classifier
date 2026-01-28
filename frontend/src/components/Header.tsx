import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <nav className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Volume2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">SoundGuard</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Demo</a>
          </div>

          {/* CTA */}
          <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Try Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
