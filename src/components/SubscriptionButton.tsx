import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createSubscriptionSession, stripePromise, setCustomerId } from '@/lib/api/stripe';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function SubscriptionButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      const { sessionId, error } = await createSubscriptionSession();
      
      if (error || !sessionId) {
        throw new Error(error || 'Keine Session-ID erhalten');
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe konnte nicht initialisiert werden');
      }

      const { error: redirectError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (redirectError) {
        throw redirectError;
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Fehler beim Abonnieren",
        description: error instanceof Error 
          ? error.message 
          : "Bei der Verarbeitung Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSubscribe}
      disabled={isLoading}
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      size="lg"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Wird verarbeitet...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" />
          Jetzt unbegrenzt generieren
        </>
      )}
    </Button>
  );
}