import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";

const OFFER_END = new Date("2026-03-31T23:59:59");

const StPatricksOffer = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const now = new Date();
  if (now > OFFER_END) return null;

  const handleBuy = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-stpatricks-payment");
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
    <section id="stpatricks" className="relative overflow-hidden py-16 px-6" style={{ background: "linear-gradient(135deg, hsl(145, 50%, 20%), hsl(145, 45%, 28%), hsl(130, 40%, 22%))" }}>
      {/* Decorative shamrocks */}
      <div className="absolute top-4 left-8 text-5xl opacity-10 rotate-12">☘️</div>
      <div className="absolute bottom-6 right-12 text-7xl opacity-10 -rotate-6">☘️</div>
      <div className="absolute top-1/2 left-1/3 text-4xl opacity-5 rotate-45">☘️</div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-secondary/30">
          <Clock className="h-4 w-4 text-secondary" />
          <span className="font-body text-sm text-secondary font-semibold">Offer ends March 31st!</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3 leading-tight">
          ☘️ St. Patrick's Day Offer
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Celebrate with a special price on your first Irish lesson. Purchase now and schedule your lesson whenever suits you.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="font-display text-2xl text-primary-foreground/40 line-through">$99</span>
          <span className="font-display text-6xl font-bold text-secondary">$69</span>
        </div>

        <Button
          size="lg"
          onClick={handleBuy}
          disabled={loading}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body text-lg px-10 py-6 rounded-lg shadow-xl"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          {loading ? "Processing..." : "Grab the Deal — $69"}
        </Button>

        <p className="font-body text-primary-foreground/50 text-sm mt-4">
          Same 45-minute lesson • Same expert tutor • Notes & handouts included
        </p>
      </div>
    </section>
  );
};

export default StPatricksOffer;
