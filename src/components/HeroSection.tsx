import { useState } from "react";
import heroImage from "@/assets/hero-ireland.jpg";
import { supabase } from "@/integrations/supabase/client";
import celticKnot from "@/assets/celtic-knot.png";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    // For now, just show success — can be wired to a backend later
    setTimeout(() => {
      toast({ title: "Subscribed!", description: "Thanks for signing up. We'll be in touch!" });
      setOpen(false);
      setFirstName("");
      setEmail("");
      setLevel("");
      setSubmitting(false);
    }, 600);
  };

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
          <Button
            size="lg"
            onClick={() => setOpen(true)}
            className="bg-primary-foreground/15 backdrop-blur-sm border-2 border-secondary/60 text-secondary hover:bg-primary-foreground/25 font-body text-lg px-8 py-6 rounded-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Subscribe to our Newsletter
          </Button>
        </div>

        {/* St. Patrick's Day Offer CTA */}
        <a href="#stpatricks" className="inline-block mt-8 animate-fade-up" style={{ animationDelay: "0.55s", opacity: 0 }}>
          <div className="inline-flex items-center gap-3 bg-secondary/20 backdrop-blur-md border border-secondary/40 rounded-full px-6 py-3 hover:bg-secondary/30 transition-all cursor-pointer group">
            <span className="text-2xl">☘️</span>
            <span className="font-body text-secondary font-semibold text-base">St. Patrick's Day Special — <span className="line-through opacity-60">$99</span> $69!</span>
            <span className="font-body text-secondary/70 text-sm group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>

      {/* Newsletter Subscribe Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Subscribe to our Newsletter</DialogTitle>
            <DialogDescription className="font-body">
              Stay updated with Irish language tips, lesson schedules, and special offers.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubscribe} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-body">First Name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                required
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="level" className="font-body">Level <span className="text-muted-foreground">(optional)</span></Label>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="some-irish">Some Irish</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-lg py-5"
            >
              {submitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
