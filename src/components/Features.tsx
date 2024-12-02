import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Zap, Lock, Image as ImageIcon } from 'lucide-react';

export function Features() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Warum unser KI-Bildgenerator?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Fortschrittliche KI-Technologie",
    description: "Nutzen Sie modernste KI-Algorithmen für beeindruckende Ergebnisse.",
    icon: <Brain className="h-5 w-5 text-primary" />,
    benefits: [
      "Hochauflösende Bildgenerierung",
      "Präzise Umsetzung Ihrer Beschreibungen",
      "Kontinuierliche KI-Verbesserungen",
    ],
  },
  {
    title: "Blitzschnelle Generierung",
    description: "Sparen Sie Zeit mit unserer optimierten Verarbeitungsgeschwindigkeit.",
    icon: <Zap className="h-5 w-5 text-primary" />,
    benefits: [
      "Sofortige Bildvorschau",
      "Parallele Bildverarbeitung",
      "Effiziente Ressourcennutzung",
    ],
  },
  {
    title: "Maximale Sicherheit",
    description: "Ihre Daten und Kreationen sind bei uns sicher aufgehoben.",
    icon: <Lock className="h-5 w-5 text-primary" />,
    benefits: [
      "Verschlüsselte Übertragung",
      "DSGVO-konform",
      "Sichere Datenspeicherung",
    ],
  },
  {
    title: "Flexible Bildoptionen",
    description: "Passen Sie die Generierung an Ihre Bedürfnisse an.",
    icon: <ImageIcon className="h-5 w-5 text-primary" />,
    benefits: [
      "Mehrere Bildformate",
      "Anpassbare Bildstile",
      "Einfacher Download",
    ],
  },
];