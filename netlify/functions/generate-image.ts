import { Handler } from '@netlify/functions';

const AZURE_ENDPOINT = 'https://ai-noel-4338.cognitiveservices.azure.com/openai/deployments/dall-e-3/images/generations';
const API_VERSION = '2024-02-01';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { prompt, size } = JSON.parse(event.body || '{}');

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Prompt is required' }),
      };
    }

    // Get API key from environment variable
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    if (!apiKey) {
      console.error('AZURE_OPENAI_API_KEY environment variable is not set');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Call Azure OpenAI API
    const response = await fetch(`${AZURE_ENDPOINT}?api-version=${API_VERSION}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        prompt,
        size: size || '1024x1024',
        n: 1,
        model: 'dall-e-3',
        quality: 'standard',
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Azure API error:', responseData);
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: responseData.error?.message || `API-Fehler: ${response.status}`,
        }),
      };
    }

    // Validate response structure
    if (!responseData.data?.[0]?.url) {
      console.error('Invalid API response structure:', responseData);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Keine Bild-URL in der API-Antwort gefunden' }),
      };
    }

    // Return successful response
    return {
      statusCode: 200,
      body: JSON.stringify({
        url: responseData.data[0].url,
        revisedPrompt: responseData.data[0].revised_prompt,
      }),
    };
  } catch (error) {
    console.error('Image generation error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error instanceof Error 
          ? error.message 
          : 'Ein unerwarteter Fehler ist aufgetreten bei der Bildgenerierung',
      }),
    };
  }
};

