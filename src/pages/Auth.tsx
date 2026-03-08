import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

type AuthView = "login" | "signup" | "forgot";

const Auth = () => {
  const [view, setView] = useState<AuthView>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (view === "forgot") {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        console.error("Password reset error:", error.message);
        toast({ title: "Error", description: "Unable to send reset link. Please try again.", variant: "destructive" });
      } else {
        toast({
          title: "Check your email",
          description: "We've sent you a password reset link.",
        });
      }
    } else if (view === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        console.error("Login error:", error.message);
        toast({ title: "Error", description: "Invalid email or password.", variant: "destructive" });
      } else {
        navigate("/");
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) {
        console.error("Signup error:", error.message);
        toast({ title: "Error", description: "Unable to create account. Please try again.", variant: "destructive" });
      } else {
        toast({
          title: "Check your email",
          description: "We've sent you a confirmation link. Please verify your email before signing in.",
        });
      }
    }
    setLoading(false);
  };

  const title = view === "login" ? "Welcome back" : view === "signup" ? "Create account" : "Reset password";
  const subtitle = view === "login" ? "Sign in to purchase your lesson" : view === "signup" ? "Sign up to get started" : "Enter your email and we'll send you a reset link";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </button>
        <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">{title}</h1>
          <p className="font-body text-muted-foreground mb-8">{subtitle}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="font-body">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1" />
            </div>
            {view !== "forgot" && (
              <div>
                <Label htmlFor="password" className="font-body">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="mt-1" />
              </div>
            )}
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body py-6" disabled={loading}>
              {loading ? "Please wait..." : view === "login" ? "Sign In" : view === "signup" ? "Sign Up" : "Send Reset Link"}
            </Button>
          </form>
          {view === "login" && (
            <button onClick={() => setView("forgot")} className="font-body text-sm text-muted-foreground hover:text-primary mt-4 block mx-auto">
              Forgot your password?
            </button>
          )}
          <p className="font-body text-center text-muted-foreground mt-6">
            {view === "forgot" ? (
              <button onClick={() => setView("login")} className="text-primary font-semibold hover:underline">Back to sign in</button>
            ) : view === "login" ? (
              <>Don't have an account?{" "}<button onClick={() => setView("signup")} className="text-primary font-semibold hover:underline">Sign up</button></>
            ) : (
              <>Already have an account?{" "}<button onClick={() => setView("login")} className="text-primary font-semibold hover:underline">Sign in</button></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
