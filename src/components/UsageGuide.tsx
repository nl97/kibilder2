import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Settings, Download } from 'lucide-react';

export function UsageGuide() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          So funktioniert's
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          In nur wenigen Schritten zu Ihrem einzigartigen KI-generierten Bild
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-primary">Schritt {index + 1}:</span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Beschreiben",
    description: "Geben Sie eine detaillierte Beschreibung des gewünschten Bildes ein. Je genauer, desto besser das Ergebnis.",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: "Anpassen",
    description: "Wählen Sie die gewünschte Bildgröße und weitere Optionen aus den verfügbaren Einstellungen.",
    icon: <Settings className="h-6 w-6 text-primary" />,
  },
  {
    title: "Herunterladen",
    description: "Nach der Generierung können Sie Ihr Bild in hoher Qualität herunterladen und verwenden.",
    icon: <Download className="h-6 w-6 text-primary" />,
  },
];