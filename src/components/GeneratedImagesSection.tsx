import { GeneratedImage } from '@/types';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { LoadingAnimation } from './LoadingAnimation';

interface GeneratedImagesSectionProps {
  images: GeneratedImage[];
  isLoading?: boolean;
}

export function GeneratedImagesSection({ images, isLoading }: GeneratedImagesSectionProps) {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (image: GeneratedImage) => {
    try {
      setDownloading(image.id);
      const response = await fetch(image.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ki-bild-${image.id}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Fehler beim Download:', error);
    } finally {
      setDownloading(null);
    }
  };

  if (isLoading) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <LoadingAnimation size={48} />
          <p className="text-center text-muted-foreground">Ihr Bild wird generiert...</p>
        </CardContent>
      </Card>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={image.url}
                  alt={image.revisedPrompt}
                  className="w-full rounded-lg shadow-lg"
                  style={{
                    aspectRatio: image.size === '1792x1024' ? '16/9' : 
                               image.size === '1024x1792' ? '9/16' : 
                               '1/1'
                  }}
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Ihr Prompt:</h3>
                  <p className="text-muted-foreground">{image.prompt}</p>
                </div>
                {image.revisedPrompt !== image.prompt && (
                  <div>
                    <h3 className="font-medium text-lg mb-2">Verbesserter Prompt:</h3>
                    <p className="text-muted-foreground">{image.revisedPrompt}</p>
                  </div>
                )}
                <div>
                  <h3 className="font-medium text-lg mb-2">Details:</h3>
                  <p className="text-sm text-muted-foreground">
                    Größe: {image.size}<br />
                    Erstellt: {new Intl.DateTimeFormat('de-DE', {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    }).format(image.createdAt)}
                  </p>
                </div>
                <Button
                  className="w-full text-black bg-white hover:bg-gray-100"
                  size="lg"
                  onClick={() => handleDownload(image)}
                  disabled={downloading === image.id}
                >
                  <Download className="h-5 w-5 mr-2" />
                  {downloading === image.id ? 'Wird heruntergeladen...' : 'Bild herunterladen'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}