import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language ?? "en").startsWith("hi") ? "hi" : "en";

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
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("header.features")}
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("header.howItWorks")}
            </a>
            <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("header.demo")}
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-border/50 bg-card/30 backdrop-blur hover:bg-card/50">
                  <Languages className="w-4 h-4 mr-2" />
                  {t("header.language")}: {currentLanguage.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>{t("languages.en")}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => i18n.changeLanguage("hi")}>{t("languages.hi")}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              {t("header.tryNow")}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
