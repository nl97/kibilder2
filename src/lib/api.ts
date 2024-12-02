import { API_CONFIG } from './config';
import { ImageGenerationResponse, ImageSize, ApiResponse } from '@/types';

export async function generateImage(prompt: string, size: ImageSize): Promise<ImageGenerationResponse> {
  try {
    const response = await fetch(`${API_CONFIG.endpoint}?api-version=${API_CONFIG.apiVersion}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_CONFIG.apiKey,
      },
      body: JSON.stringify({
        prompt,
        size,
        n: 1,
        model: 'dall-e-3',
        quality: 'standard'
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error?.message || `API-Fehler: ${response.status}`);
    }

    const data = responseData as ApiResponse;
    
    if (!data.data?.[0]?.url) {
      throw new Error('Keine Bild-URL in der API-Antwort gefunden');
    }

    return {
      url: data.data[0].url,
      revisedPrompt: data.data[0].revised_prompt
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