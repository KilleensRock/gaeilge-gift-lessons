import { Button } from "@/components/ui/button";
import { Gift, Heart } from "lucide-react";

const GiftSection = () => {
  return (
    <section id="gift" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-secondary uppercase tracking-[0.2em] text-sm mb-3">The Perfect Gift</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Give the Gift of <span className="italic" style={{ color: "hsl(145, 45%, 28%)" }}>Gaeilge</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
              Know someone with Irish roots? Or a friend fascinated by languages? A gift voucher for a live Irish lesson is a truly unique and meaningful present.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              They'll receive a beautiful digital voucher by email, redeemable for a 45-minute live beginner lesson with notes and handouts included. Valid for 12 months.
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body text-lg px-8 py-6 rounded-lg shadow-lg">
              <Gift className="mr-2 h-5 w-5" />
              Buy a Gift Voucher — $99
            </Button>
          </div>
          <div className="relative">
            <div className="bg-background rounded-2xl border border-border p-10 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="text-center">
                <Heart className="h-10 w-10 mx-auto mb-4" style={{ color: "hsl(38, 55%, 55%)" }} />
                <p className="font-body uppercase tracking-[0.2em] text-sm text-muted-foreground mb-2">Gift Voucher</p>
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">Live Irish Lesson</h3>
                <p className="font-body text-muted-foreground mb-6">45 minutes • Beginners • Online</p>
                <div className="border-t border-dashed border-border pt-6">
                  <p className="font-display text-4xl font-bold" style={{ color: "hsl(145, 45%, 28%)" }}>$99</p>
                  <p className="font-body text-sm text-muted-foreground mt-2">Includes notes & handouts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
