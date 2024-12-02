import { Loader2 } from 'lucide-react';

interface LoadingAnimationProps {
  size?: number;
}

export function LoadingAnimation({ size = 32 }: LoadingAnimationProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="animate-spin text-primary" style={{ width: size, height: size }} />
    </div>
  );
}