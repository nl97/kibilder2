import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionButton } from './SubscriptionButton';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Wählen Sie Ihren Plan
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Starten Sie kostenlos oder upgraden Sie für unbegrenzte Möglichkeiten
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Kostenlos</CardTitle>
              <p className="text-2xl font-bold">€0/Monat</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>3 Bilder pro Tag</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Standardqualität</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Alle Bildformate</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Perfekt zum Testen und für gelegentliche Nutzung
              </p>
            </CardFooter>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Unlimited</CardTitle>
              <p className="text-2xl font-bold">€9/Monat</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Unbegrenzte Bilder</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Höchste Qualität</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Prioritäts-Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Erweiterte Bildanpassungen</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <SubscriptionButton />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}