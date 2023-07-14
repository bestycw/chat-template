export interface Message {
    content: string;
    role: string;
    isChat: boolean;
  }
export interface DialogueProps{
  message:Message

}