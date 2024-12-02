import { Sparkles, Wand2, Image as ImageIcon, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Hero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Kostenloser KI-Bildgenerator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Verwandeln Sie Ihre Ideen in beeindruckende Bilder mit der Kraft der künstlichen Intelligenz.
          Schnell, einfach und intuitiv.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                {feature.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
    title: "KI-gestützte Generierung",
    description: "Modernste KI-Technologie für hochwertige Bildgenerierung",
    icon: <Sparkles className="h-8 w-8 mx-auto text-primary" />,
  },
  {
    title: "Intuitive Bedienung",
    description: "Einfache Texteingabe für sofortige Bilderstellung",
    icon: <Wand2 className="h-8 w-8 mx-auto text-primary" />,
  },
  {
    title: "Flexible Nutzung",
    description: "Verschiedene Bildgrößen und Download-Optionen",
    icon: <ImageIcon className="h-8 w-8 mx-auto text-primary" />,
  },
];