export type Channel = "Web" | "WhatsApp" | "Instagram" | "TikTok";

export type TicketStatus = "nuevo" | "en proceso" | "escalado" | "resuelto";

export type Sentiment = "positivo" | "neutro" | "negativo";

export type Intent =
  | "Subsidio familiar"
  | "Afiliacion"
  | "Certificados"
  | "Estado de solicitud"
  | "Recreacion"
  | "Educacion"
  | "PQRS"
  | "Citas y asesoria"
  | "Servicios"
  | "Horarios";

export type ConversationEventType =
  | "inicio_bot"
  | "intencion_detectada"
  | "escalado"
  | "respuesta_asesor"
  | "resuelto";

export type ConversationPriority = "alta" | "media" | "baja";

export type SenderType = "user" | "bot" | "agent" | "system";

export interface Message {
  id: string;
  sender: SenderType;
  text: string;
  time: string;
}

export interface ConversationEvent {
  id: string;
  type: ConversationEventType;
  label: string;
  time: string;
}

export interface Conversation {
  id: string;
  userId: string;
  channel: Channel;
  status: TicketStatus;
  intent: Intent;
  sentiment: Sentiment;
  priority: ConversationPriority;
  assignedAgent: string;
  lastMessage: string;
  unread: number;
  updatedAt: string;
  tags: string[];
  messages: Message[];
  events: ConversationEvent[];
}

export interface UserProfile {
  id: string;
  name: string;
  city: string;
  segment: string;
  contactsHistory: number;
  preferredChannel: Channel;
}
