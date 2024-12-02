import { Card, CardContent } from '@/components/ui/card';
import { Image as ImageIcon, Sparkles, Palette, Lock } from 'lucide-react';

export function BlogSection() {
  return (
    <article className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          KI Bilder kostenlos erstellen: Der ultimative Leitfaden 2024
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Kostenlose KI Bilder für jeden Zweck
              </h2>
              <p className="text-muted-foreground">
                Mit unserem KI-Bildgenerator können Sie kostenlos hochwertige KI Bilder erstellen. 
                Die Technologie basiert auf modernsten Algorithmen und ermöglicht es Ihnen, 
                professionelle Visualisierungen für verschiedenste Anwendungen zu generieren.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" />
                Vielfältige Einsatzmöglichkeiten von KI-generierten Bildern
              </h2>
              <p className="text-muted-foreground">
                KI Bilder revolutionieren die Art und Weise, wie wir visuelle Inhalte erstellen. 
                Von Social Media Posts über Marketingmaterialien bis hin zu Websitedesigns - 
                die Möglichkeiten sind nahezu unbegrenzt.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground">
            Warum KI Bilder die Zukunft der digitalen Bildgestaltung sind
          </h2>
          
          <p>
            Die Nachfrage nach hochwertigen visuellen Inhalten steigt kontinuierlich. 
            KI-generierte Bilder bieten hier eine innovative und kostengünstige Lösung. 
            Mit unserem kostenlosen KI-Bildgenerator können Sie sofort loslegen und 
            Ihre kreativen Ideen in beeindruckende Visualisierungen umwandeln.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="flex items-start gap-3">
              <Palette className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Grenzenlose Kreativität</h3>
                <p className="text-sm">
                  Experimentieren Sie mit verschiedenen Stilen und lassen Sie Ihrer 
                  Fantasie freien Lauf. Unsere KI versteht Ihre künstlerische Vision 
                  und setzt sie präzise um.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Rechtssichere Nutzung</h3>
                <p className="text-sm">
                  Alle mit unserem KI-Bildgenerator erstellten Bilder können Sie 
                  uneingeschränkt für Ihre Projekte verwenden - ohne Sorgen um 
                  Lizenzen oder Urheberrechte.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mt-12">
            So erstellen Sie kostenlos KI Bilder
          </h2>
          
          <p>
            Der Prozess ist denkbar einfach: Beschreiben Sie das gewünschte Motiv 
            in Ihren eigenen Worten, wählen Sie einen passenden Stil und Format aus, 
            und lassen Sie die KI arbeiten. Innerhalb weniger Sekunden erhalten Sie 
            ein einzigartiges Bild, das Sie direkt herunterladen und verwenden können.
          </p>

          <p>
            Mit unserem kostenlosen Kontingent von drei Bildern pro Tag können Sie 
            die Möglichkeiten der KI-Bildgenerierung ausgiebig testen. Die generierten 
            Bilder sind hochauflösend und eignen sich für professionelle Anwendungen.
          </p>

          <div className="bg-primary/5 p-6 rounded-lg mt-8">
            <h3 className="font-semibold text-foreground mb-3">
              Expertentipps für optimale KI Bilder
            </h3>
            <p className="text-sm">
              Je detaillierter Ihre Beschreibung, desto besser das Ergebnis. 
              Verwenden Sie spezifische Begriffe und beschreiben Sie gewünschte 
              Stilelemente genau. Experimentieren Sie mit verschiedenen 
              Formulierungen, um das perfekte KI Bild zu erstellen.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}