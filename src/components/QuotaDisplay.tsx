import { getRemainingGenerations, getQuotaResetTime } from '@/lib/quota';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { useEffect, useState } from 'react';

export function QuotaDisplay() {
  const [remaining, setRemaining] = useState(getRemainingGenerations());
  const resetTime = getQuotaResetTime();

  // Update remaining count every second
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemainingGenerations());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Verbleibende Generierungen heute: <strong>{remaining}</strong>
            {remaining === 0 && (
              <span className="ml-2">
                (Zurückgesetzt um {format(resetTime, 'HH:mm', { locale: de })} Uhr)
              </span>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}