// Data models for CRCLE app

export interface AudioFile {
  id: string;
  name: string;
  duration: number;
  size: number;
  uploadedAt: Date;
  status: 'uploading' | 'processing' | 'completed' | 'failed';
  progress?: number;
}

export interface Summary {
  id: string;
  timestamp: Date;
  snippet: string;
  fullSummary: string;
  transcript: string;
  audioFileId: string;
  duration: number;
}

export interface ChatMessage {
  id: string;
  text: string;
  timestamp: Date;
  role: 'user' | 'assistant';
}

export interface ChatThread {
  id: string;
  messages: ChatMessage[];
  createdAt: Date;
}

