import { ImageStyle } from '@/types';
import { cn } from '@/lib/utils';

interface StylePickerProps {
  value: ImageStyle;
  onChange: (style: ImageStyle) => void;
}

const styles: Array<{ id: ImageStyle; label: string; icon: string }> = [
  { id: 'default', label: 'Standard', icon: '🎨' },
  { id: 'anime', label: 'Anime', icon: '🎌' },
  { id: 'cartoon', label: 'Cartoon', icon: '📺' },
  { id: 'sketch', label: 'Skizze', icon: '✏️' },
  { id: 'oil-painting', label: 'Ölgemälde', icon: '🖼️' },
  { id: 'van-gogh', label: 'Van Gogh', icon: '🌟' },
  { id: 'landscape', label: 'Landschaft', icon: '🏞️' },
  { id: 'cyberpunk', label: 'Cyberpunk', icon: '🤖' },
  { id: 'fantasy-3d', label: 'Fantasy 3D', icon: '🎮' },
];

export function StylePicker({ value, onChange }: StylePickerProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
      {styles.map((style) => (
        <button
          key={style.id}
          onClick={() => onChange(style.id)}
          className={cn(
            "flex flex-col items-center p-2 rounded-lg transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            value === style.id ? "bg-primary text-primary-foreground" : "bg-background"
          )}
          type="button"
        >
          <span className="text-2xl mb-1">{style.icon}</span>
          <span className="text-xs font-medium">{style.label}</span>
        </button>
      ))}
    </div>
  );
}