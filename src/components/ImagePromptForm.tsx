import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImageSize, ImageStyle } from '@/types';
import { Wand2 } from 'lucide-react';
import { StylePicker } from './StylePicker';

interface ImagePromptFormProps {
  onGenerate: (prompt: string, size: ImageSize, style: ImageStyle) => Promise<void>;
  isLoading: boolean;
}

export function ImagePromptForm({ onGenerate, isLoading }: ImagePromptFormProps) {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>('1024x1024');
  const [style, setStyle] = useState<ImageStyle>('default');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      await onGenerate(prompt, size, style);
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          placeholder="Beschreiben Sie das gewünschte Bild..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full"
        />
        <div className="flex flex-col sm:flex-row gap-4">
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
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Bildstil auswählen:</label>
        <StylePicker value={style} onChange={setStyle} />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading || !prompt.trim()}
      >
        <Wand2 className="mr-2 h-4 w-4" />
        {isLoading ? 'Generiere Bild...' : 'Bild generieren'}
      </Button>
    </form>
  );
}