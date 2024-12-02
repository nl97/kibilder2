import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImageSize, EditableImage } from '@/types';
import { Wand2, Upload, X, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ImageEditFormProps {
  onEdit: (image: File, prompt: string, size: ImageSize) => Promise<void>;
  isLoading: boolean;
}

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export function ImageEditForm({ onEdit, isLoading }: ImageEditFormProps) {
  const [editableImage, setEditableImage] = useState<EditableImage | null>(null);
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>('1024x1024');
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return 'Bitte laden Sie ein Bild im JPEG, PNG oder WebP Format hoch.';
    }
    if (file.size > MAX_FILE_SIZE) {
      return 'Die Dateigröße darf 4MB nicht überschreiten.';
    }
    return null;
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(null);

    if (file) {
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        event.target.value = '';
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      setEditableImage({ file, previewUrl });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editableImage && prompt.trim()) {
      try {
        await onEdit(editableImage.file, prompt, size);
        // Reset form after successful edit
        setPrompt('');
        setEditableImage(null);
        setError(null);
      } catch (err) {
        setError('Ein Fehler ist bei der Bildbearbeitung aufgetreten. Bitte versuchen Sie es erneut.');
      }
    }
  };

  const clearImage = () => {
    if (editableImage) {
      URL.revokeObjectURL(editableImage.previewUrl);
    }
    setEditableImage(null);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col items-center gap-4">
        {editableImage ? (
          <Card className="relative">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-background/80"
              onClick={clearImage}
            >
              <X className="h-4 w-4" />
            </Button>
            <CardContent className="p-2">
              <img
                src={editableImage.previewUrl}
                alt="Zu bearbeitendes Bild"
                className="max-w-full h-auto rounded-lg"
                style={{ maxHeight: '300px' }}
              />
            </CardContent>
          </Card>
        ) : (
          <Button
            type="button"
            variant="outline"
            className="w-full h-32"
            onClick={() => document.getElementById('imageUpload')?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            Bild hochladen (max. 4MB)
          </Button>
        )}
        
        <input
          id="imageUpload"
          type="file"
          accept={ALLOWED_TYPES.join(',')}
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Beschreiben Sie die gewünschten Änderungen..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1"
        />
        <Select value={size} onValueChange={(value) => setSize(value as ImageSize)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Bildgröße" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1024x1024">Quadratisch (1024x1024)</SelectItem>
            <SelectItem value="1792x1024">Querformat (1792x1024)</SelectItem>
            <SelectItem value="1024x1792">Hochformat (1024x1792)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading || !editableImage || !prompt.trim()}
      >
        <Wand2 className="mr-2 h-4 w-4" />
        {isLoading ? 'Bearbeite Bild...' : 'Bild bearbeiten'}
      </Button>
    </form>
  );
}