import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCustomerId } from '@/lib/api/stripe';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');

    if (sessionId) {
      // Store customer ID from session
      fetch(`/api/session-details?session_id=${sessionId}`)
        .then(response => response.json())
        .then(data => {
          if (data.customerId) {
            setCustomerId(data.customerId);
          }
        })
        .catch(console.error);
    }

    // Redirect to home after 5 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Vielen Dank!</h1>
          <p className="text-muted-foreground">
            Ihr Abonnement wurde erfolgreich aktiviert. Sie werden in wenigen Sekunden zurück zur Startseite geleitet.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}