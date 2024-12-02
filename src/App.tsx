import { useState } from 'react';
import { ImagePromptForm } from '@/components/ImagePromptForm';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { UsageGuide } from '@/components/UsageGuide';
import { QuotaDisplay } from '@/components/QuotaDisplay';
import { GeneratedImagesSection } from '@/components/GeneratedImagesSection';
import { BlogSection } from '@/components/BlogSection';
import { GeneratedImage, ImageSize, ImageStyle } from '@/types';
import { Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateImage } from '@/lib/api';
import { canGenerateImage, incrementQuota } from '@/lib/quota';

function App() {
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getStylePrompt = (basePrompt: string, style: ImageStyle): string => {
    const stylePrompts: Record<ImageStyle, string> = {
      'default': basePrompt,
      'anime': `${basePrompt}, anime style, high quality anime art`,
      'cartoon': `${basePrompt}, cartoon style, vibrant colors, clean lines`,
      'sketch': `${basePrompt}, pencil sketch style, detailed drawing`,
      'oil-painting': `${basePrompt}, oil painting style, textured, classical art`,
      'van-gogh': `${basePrompt}, in the style of Van Gogh, post-impressionist, swirling brushstrokes`,
      'landscape': `${basePrompt}, scenic landscape, panoramic view, nature photography style`,
      'cyberpunk': `${basePrompt}, cyberpunk style, neon colors, futuristic, high tech`,
      'fantasy-3d': `${basePrompt}, 3D rendered, fantasy art style, detailed, magical`
    };

    return stylePrompts[style];
  };

  const handleGenerateImage = async (prompt: string, size: ImageSize, style: ImageStyle) => {
    if (!canGenerateImage()) {
      toast({
        title: "Limit erreicht",
        description: "Sie haben Ihr tägliches Limit für Bildgenerierungen erreicht. Versuchen Sie es morgen wieder.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const styledPrompt = getStylePrompt(prompt, style);
      const result = await generateImage(styledPrompt, size);
      
      if (result.error || !result.url) {
        throw new Error(result.error || 'Keine Bild-URL erhalten');
      }

      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url: result.url,
        prompt,
        revisedPrompt: result.revisedPrompt || prompt,
        size,
        style,
        createdAt: new Date()
      };
      
      setImages(prev => [newImage, ...prev]);
      incrementQuota();
      
      toast({
        title: "Bild erfolgreich generiert",
        description: "Ihr Bild wurde erfolgreich erstellt.",
      });
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: "Fehler bei der Bildgenerierung",
        description: error instanceof Error ? error.message : "Bei der Bildgenerierung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <header className="w-full border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Kostenloser KI-Bildgenerator
            </h1>
          </div>
        </div>
      </header>

      <main className="w-full">
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Erstellen Sie Ihr KI-generiertes Bild
          </h2>
          <QuotaDisplay />
          <div className="max-w-2xl mx-auto">
            <ImagePromptForm 
              onGenerate={handleGenerateImage}
              isLoading={isLoading} 
            />
          </div>
          
          <div className="mt-12">
            <GeneratedImagesSection images={images} isLoading={isLoading} />
          </div>
        </section>

        <Features />
        <UsageGuide />
        <BlogSection />
      </main>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-6">
            KI-Bildgenerator: Die Zukunft der Bildgestaltung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Vielseitige Anwendungsmöglichkeiten</h3>
              <p className="text-muted-foreground">
                Unser KI-Bildgenerator eignet sich perfekt für verschiedenste Bereiche:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>Social Media Content und Marketing-Materialien</li>
                <li>Webdesign und grafische Gestaltung</li>
                <li>Produktvisualisierungen und Konzeptkunst</li>
                <li>Bildung und wissenschaftliche Illustrationen</li>
                <li>Persönliche kreative Projekte</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Technologie und Innovation</h3>
              <p className="text-muted-foreground">
                Basierend auf modernsten KI-Modellen bietet unser Generator:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>Hochauflösende Bildausgabe in verschiedenen Formaten</li>
                <li>Intelligente Prompt-Optimierung für bessere Ergebnisse</li>
                <li>Schnelle Verarbeitungszeit durch optimierte Algorithmen</li>
                <li>Regelmäßige Updates und Verbesserungen</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium mb-4">Datenschutz und Sicherheit</h3>
            <p className="text-muted-foreground">
              Wir legen höchsten Wert auf den Schutz Ihrer Daten und die Sicherheit unseres Services. 
              Alle Übertragungen erfolgen verschlüsselt, und wir speichern nur die notwendigsten Informationen 
              gemäß DSGVO-Richtlinien. Die von Ihnen generierten Bilder gehören ausschließlich Ihnen und 
              können uneingeschränkt für private und kommerzielle Zwecke verwendet werden.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Häufig gestellte Fragen</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Wie viele Bilder kann ich kostenlos generieren?</h4>
                <p className="text-muted-foreground">
                  Mit unserem kostenlosen Plan können Sie täglich bis zu 3 Bilder generieren. 
                  Für unbegrenzte Generierungen empfehlen wir unseren Premium-Plan.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Welche Bildformate werden unterstützt?</h4>
                <p className="text-muted-foreground">
                  Wir unterstützen verschiedene Formate: Quadratisch (1024x1024), Querformat (1792x1024) 
                  und Hochformat (1024x1792), optimal für verschiedene Anwendungszwecke.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Wie kann ich die besten Ergebnisse erzielen?</h4>
                <p className="text-muted-foreground">
                  Verwenden Sie detaillierte Beschreibungen und experimentieren Sie mit verschiedenen Stilen. 
                  Je präziser Ihre Eingabe, desto besser das Ergebnis. Nutzen Sie auch unsere Stilvorlagen 
                  für optimierte Resultate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
      <div className="relative">
        <div className="flex flex-col items-center text-center">
          <Sparkles className="h-12 w-12 text-primary-foreground mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Entdecken Sie noch mehr Möglichkeiten
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mb-8">
            Besuchen Sie Mind-Verse für fortgeschrittene Bildgenerierung, 
            KI-gestützte Bildbearbeitung und professionelle Kreativtools. 
            Erleben Sie die volle Kraft der KI-Bildgenerierung.
          </p>
          <a 
            href="https://www.mind-verse.de" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-background text-primary hover:bg-background/90 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Wand2 className="h-5 w-5" />
            Jetzt Mind-Verse entdecken
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-foreground/90">
          <div className="flex flex-col items-center text-center">
            <ImageIcon className="h-8 w-8 mb-3" />
            <h3 className="font-medium mb-2">Erweiterte Bildbearbeitung</h3>
            <p className="text-sm">Professionelle KI-Tools für perfekte Ergebnisse</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="h-8 w-8 mb-3" />
            <h3 className="font-medium mb-2">Schnellere Verarbeitung</h3>
            <p className="text-sm">Optimierte Performance für Ihre Projekte</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Settings className="h-8 w-8 mb-3" />
            <h3 className="font-medium mb-2">Mehr Kontrolle</h3>
            <p className="text-sm">Erweiterte Einstellungen und Anpassungen</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <footer className="w-full border-t mt-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Über uns</h3>
              <p className="text-sm text-muted-foreground">
                Wir bieten modernste KI-Technologie für die Bildgenerierung, 
                optimiert für beste Ergebnisse und maximale Benutzerfreundlichkeit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <p className="text-sm text-muted-foreground">
                E-Mail: info@mind-verse.de
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Rechtliches</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><a href="https://www.mind-verse.de/legals/impressum" target="_blank" rel="noopener noreferrer">Impressum</a></li>
                <li><a href="https://www.mind-verse.de/legals/impressum" target="_blank" rel="noopener noreferrer">AGB</a></li>
                <li><a href="https://www.mind-verse.de/legals/impressum" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} KI-Bildgenerator. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;



