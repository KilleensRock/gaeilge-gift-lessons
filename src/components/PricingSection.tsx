import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Check, BookOpen } from "lucide-react";

const included = [
  "45-minute live lesson",
  "Expert native-speaking tutor",
  "Pronunciation coaching",
  "Irish culture & context",
  "Downloadable notes & handouts",
  "Beginner-friendly — no experience needed",
];

const PricingSection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleBook = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment");
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, hsl(40, 33%, 98%), hsl(145, 20%, 95%))" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-secondary uppercase tracking-[0.2em] text-sm mb-3">Simple Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            One Lesson, Everything Included
          </h2>
        </div>
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden max-w-lg mx-auto">
          <div className="p-10 text-center" style={{ background: "linear-gradient(135deg, hsl(145, 45%, 28%), hsl(145, 40%, 22%))" }}>
            <p className="font-body text-primary-foreground/70 uppercase tracking-widest text-sm mb-2">Beginner Lesson</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-display text-6xl font-bold text-primary-foreground">$99</span>
              <span className="font-body text-primary-foreground/60 text-lg">/ session</span>
            </div>
            <p className="font-body text-primary-foreground/70 mt-2">45 minutes • Live online</p>
          </div>
          <div className="p-10">
            <ul className="space-y-4 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              onClick={handleBook}
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-lg py-6 rounded-lg"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {loading ? "Processing..." : "Book Your Lesson"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
