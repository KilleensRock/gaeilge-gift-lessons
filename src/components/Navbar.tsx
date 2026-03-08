import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, LogIn } from "lucide-react";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      <a href="/" className="font-display text-xl font-bold text-primary-foreground drop-shadow-md">
        Gaeilge
      </a>
      <div>
        {user ? (
          <Button
            size="sm"
            variant="outline"
            onClick={handleSignOut}
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body backdrop-blur-sm bg-primary-foreground/5"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        ) : (
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/auth")}
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body backdrop-blur-sm bg-primary-foreground/5"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
