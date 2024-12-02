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