import { ReactNode } from "react";

export interface Message {
  content?: string | ReactNode;
  role?: string;
  isChat?: boolean;
  // status?:"waiting" | "processing" | "done"
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
