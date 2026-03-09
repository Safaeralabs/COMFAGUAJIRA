export interface Campaign {
  id: string;
  name: string;
  channel: "WhatsApp" | "Instagram";
  type: "Marketing" | "Utilidad" | "Autenticacion";
  audience: string;
  status: "Programada" | "En curso" | "Finalizada";
  message: string;
}

export const campaigns: Campaign[] = [
  {
    id: "c1",
    name: "Feria de recreacion abril",
    channel: "WhatsApp",
    type: "Marketing",
    audience: "Afiliados con hijos entre 6 y 14 anos",
    status: "En curso",
    message: "Descubre los planes de recreacion familiar de este fin de semana."
  },
  {
    id: "c2",
    name: "Recordatorio certificados",
    channel: "WhatsApp",
    type: "Utilidad",
    audience: "Empresas afiliadas",
    status: "Programada",
    message: "Ya puedes descargar tus certificados desde el asistente virtual."
  },
  {
    id: "c3",
    name: "Validacion de identidad",
    channel: "Instagram",
    type: "Autenticacion",
    audience: "Usuarios nuevos",
    status: "Finalizada",
    message: "Comparte el codigo de verificacion para continuar tu solicitud."
  }
];
