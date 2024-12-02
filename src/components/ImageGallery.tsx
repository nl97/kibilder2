import { GeneratedImage } from '@/types';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ImageGalleryProps {
  images: GeneratedImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const handleDownload = async (image: GeneratedImage) => {
    try {
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
    }
  };

  if (images.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        Noch keine Bilder generiert. Starten Sie mit einer Beschreibung oben.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src={image.url}
              alt={image.revisedPrompt}
              className="w-full aspect-[1/1] object-cover"
              style={{
                aspectRatio: image.size === '1792x1024' ? '16/9' : 
                           image.size === '1024x1792' ? '9/16' : 
                           '1/1'
              }}
              loading="lazy"
            />
          </CardContent>
          <CardFooter className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-start w-full">
              <div className="flex-1">
                <p className="text-sm font-medium">Originaler Prompt:</p>
                <p className="text-sm text-muted-foreground">{image.prompt}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleDownload(image)}
                title="Bild herunterladen"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
            {image.revisedPrompt !== image.prompt && (
              <div className="w-full">
                <p className="text-sm font-medium">Verbesserter Prompt:</p>
                <p className="text-sm text-muted-foreground">{image.revisedPrompt}</p>
              </div>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}