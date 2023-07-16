export interface Message {
  content?: string;
  role?: string;
  isChat?: boolean;
  status?:"waiting" | "processing" | "done"
}
export interface DialogueProps {
  message: Message;
}

interface reqBaseConfig {
  baseUrl?: string;
  timeout?: number;
  isRetry?: boolean;
  // header?:any
}
