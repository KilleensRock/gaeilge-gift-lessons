import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const handleSubscribe = () => {
    window.location.href = "YOUR_STRIPE_CHECKOUT_LINK";
  };

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <p className="font-body text-secondary uppercase tracking-[0.2em] text-sm mb-3">Simple Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Simple Pricing
          </h2>
        </div>
        <p className="text-center text-muted-foreground font-body mb-16 text-lg">
          One lesson a week, cancel anytime
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Subscription card */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col">
            <div className="p-10 text-center" style={{ background: "linear-gradient(135deg, hsl(145, 45%, 28%), hsl(145, 40%, 22%))" }}>
              <p className="font-body text-primary-foreground/70 uppercase tracking-widest text-sm mb-2">Weekly Course</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display text-6xl font-bold text-primary-foreground">€15</span>
                <span className="font-body text-primary-foreground/60 text-lg">/week</span>
              </div>
              <p className="font-body text-primary-foreground/70 mt-2">9 lessons • Cancel anytime</p>
            </div>
            <div className="p-10 flex flex-col flex-1">
              <ul className="space-y-4 mb-8 flex-1">
                {["One lesson delivered every week", "Written lesson + audio pronunciation", "Beginner-friendly Irish", "Cancel anytime"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                onClick={handleSubscribe}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-lg py-6 rounded-lg"
              >
                Start for free — Lesson 1 on us
              </Button>
            </div>
          </div>

          {/* 1-on-1 upsell card */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col">
            <div className="p-10 text-center bg-muted">
              <p className="font-body text-muted-foreground uppercase tracking-widest text-sm mb-2">Optional Add-on</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-bold text-foreground">1-on-1</span>
              </div>
              <p className="font-body text-muted-foreground mt-2">Personal tuition</p>
            </div>
            <div className="p-10 flex flex-col flex-1">
              <ul className="space-y-4 mb-8 flex-1">
                {["Live session with a native tutor", "Personalised to your pace", "Pronunciation feedback", "Book when you're ready"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                variant="outline"
                className="w-full font-body text-lg py-6 rounded-lg"
              >
                Find out more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
