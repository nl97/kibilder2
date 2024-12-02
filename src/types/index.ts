export type ImageSize = '1024x1024' | '1792x1024' | '1024x1792';

export type ImageStyle = 'default' | 'anime' | 'cartoon' | 'sketch' | 'oil-painting' | 'van-gogh' | 'landscape' | 'cyberpunk' | 'fantasy-3d';

export interface ContentFilterResult {
  filtered: boolean;
  severity: string;
}

export interface PromptFilterResult extends ContentFilterResult {
  detected?: boolean;
}

export interface FilterResults {
  hate: ContentFilterResult;
  self_harm: ContentFilterResult;
  sexual: ContentFilterResult;
  violence: ContentFilterResult;
  profanity?: {
    detected: boolean;
    filtered: boolean;
  };
}

export interface GeneratedImageData {
  content_filter_results: FilterResults;
  prompt_filter_results: FilterResults;
  revised_prompt: string;
  url: string;
}

export interface ApiResponse {
  created: number;
  data: GeneratedImageData[];
}

export interface ImageGenerationResponse {
  url: string;
  revisedPrompt?: string;
  error?: string;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  revisedPrompt: string;
  size: ImageSize;
  style: ImageStyle;
  createdAt: Date;
}

export interface EditableImage {
  file: File;
  previewUrl: string;
}