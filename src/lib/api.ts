import { ImageGenerationResponse, ImageSize } from '@/types';

export async function generateImage(prompt: string, size: ImageSize): Promise<ImageGenerationResponse> {
  try {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error || `API-Fehler: ${response.status}`);
    }

    if (!responseData.url) {
      throw new Error('Keine Bild-URL in der API-Antwort gefunden');
    }

    return {
      url: responseData.url,
      revisedPrompt: responseData.revisedPrompt
    };
  } catch (error) {
    console.error('API Error:', error);
    return { 
      url: '',
      error: error instanceof Error 
        ? error.message 
        : 'Ein unerwarteter Fehler ist aufgetreten bei der Bildgenerierung'
    };
  }
}