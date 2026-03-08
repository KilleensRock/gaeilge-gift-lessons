import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Payment Successful!</h1>
        <p className="font-body text-muted-foreground text-lg mb-8">
          Thank you for your purchase. You'll receive your gift voucher and lesson details by email shortly.
        </p>
        <Button onClick={() => navigate("/")} className="bg-primary text-primary-foreground hover:bg-primary/90 font-body">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
