import heroImage from "@/assets/hero-ireland.jpg";
import celticKnot from "@/assets/celtic-knot.png";
import { Button } from "@/components/ui/button";
import { Gift, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(145, 45%, 12%, 0.85), hsla(145, 45%, 20%, 0.65))" }} />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img src={celticKnot} alt="Celtic knot" className="w-20 h-20 mx-auto mb-6 opacity-90 animate-fade-up" />
        <p className="font-body text-secondary uppercase tracking-[0.3em] text-sm mb-4 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          Fáilte — Welcome
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Learn Irish,<br />
          <span className="italic font-semibold" style={{ color: "hsl(38, 55%, 55%)" }}>the Living Language</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          Live online beginner lessons — 45 minutes of pronunciation, everyday phrases, and Irish culture. Notes &amp; handouts included.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body text-lg px-8 py-6 rounded-lg shadow-lg">
            <BookOpen className="mr-2 h-5 w-5" />
            Book a Lesson — $99
          </Button>
          <a href="#gift">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-lg px-8 py-6 rounded-lg">
              <Gift className="mr-2 h-5 w-5" />
              Give as a Gift
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
