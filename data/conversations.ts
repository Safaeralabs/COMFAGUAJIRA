import { Conversation } from "@/types";

export const conversations: Conversation[] = [
  {
    id: "cv-1001",
    userId: "u1",
    channel: "WhatsApp",
    status: "escalado",
    intent: "Subsidio familiar",
    sentiment: "neutro",
    priority: "media",
    assignedAgent: "Luisa Romero",
    lastMessage: "Te confirmo en un momento el estado de tu subsidio.",
    unread: 1,
    updatedAt: "Hoy, 10:42",
    tags: ["subsidio", "validacion"],
    messages: [
      { id: "m1", sender: "user", text: "Hola, quiero saber mi subsidio.", time: "10:34" },
      { id: "m2", sender: "bot", text: "Con gusto. Dame tu tipo de documento.", time: "10:34" },
      { id: "m3", sender: "user", text: "CC 11223344", time: "10:35" },
      {
        id: "m4",
        sender: "bot",
        text: "Veo tu caso, te voy a comunicar con un asesor.",
        time: "10:36"
      },
      {
        id: "m5",
        sender: "agent",
        text: "Soy Luisa, te ayudo con el estado del pago.",
        time: "10:38"
      }
    ],
    events: [
      { id: "e1", type: "inicio_bot", label: "Inicio de atencion por bot", time: "10:34" },
      {
        id: "e2",
        type: "intencion_detectada",
        label: "Intencion detectada: Subsidio familiar",
        time: "10:34"
      },
      { id: "e3", type: "escalado", label: "Escalado a asesor humano", time: "10:36" },
      { id: "e4", type: "respuesta_asesor", label: "Asesor responde en 2 min", time: "10:38" }
    ]
  },
  {
    id: "cv-1002",
    userId: "u2",
    channel: "Web",
    status: "en proceso",
    intent: "Certificados",
    sentiment: "positivo",
    priority: "baja",
    assignedAgent: "Bot COMFAGUAJIRA",
    lastMessage: "Ya puedes descargar tu certificado en PDF.",
    unread: 0,
    updatedAt: "Hoy, 09:28",
    tags: ["autoservicio"],
    messages: [
      {
        id: "m1",
        sender: "bot",
        text: "Bienvenido, te puedo ayudar con certificados.",
        time: "09:26"
      },
      { id: "m2", sender: "user", text: "Necesito certificado de afiliacion.", time: "09:26" },
      { id: "m3", sender: "bot", text: "Listo, aqui tienes el enlace de descarga.", time: "09:28" }
    ],
    events: [
      { id: "e1", type: "inicio_bot", label: "Inicio de atencion por web", time: "09:26" },
      {
        id: "e2",
        type: "intencion_detectada",
        label: "Intencion detectada: Certificados",
        time: "09:26"
      }
    ]
  },
  {
    id: "cv-1003",
    userId: "u3",
    channel: "Instagram",
    status: "nuevo",
    intent: "Horarios",
    sentiment: "neutro",
    priority: "media",
    assignedAgent: "Sin asignar",
    lastMessage: "Cual es el horario de atencion de sede Riohacha?",
    unread: 2,
    updatedAt: "Hoy, 11:05",
    tags: ["dm", "servicio"],
    messages: [
      {
        id: "m1",
        sender: "user",
        text: "Hola, cual es el horario de la sede?",
        time: "11:05"
      }
    ],
    events: [{ id: "e1", type: "inicio_bot", label: "Nuevo DM en Instagram", time: "11:05" }]
  },
  {
    id: "cv-1004",
    userId: "u4",
    channel: "Web",
    status: "resuelto",
    intent: "Estado de solicitud",
    sentiment: "positivo",
    priority: "baja",
    assignedAgent: "Andres Cuello",
    lastMessage: "Tu solicitud fue aprobada el 3 de marzo.",
    unread: 0,
    updatedAt: "Ayer, 16:18",
    tags: ["seguimiento"],
    messages: [
      {
        id: "m1",
        sender: "user",
        text: "Como va mi solicitud de afiliacion?",
        time: "16:10"
      },
      {
        id: "m2",
        sender: "bot",
        text: "Te comparto el estado: aprobada y en proceso de activacion.",
        time: "16:12"
      },
      { id: "m3", sender: "agent", text: "Quedo todo listo, gracias.", time: "16:18" }
    ],
    events: [
      { id: "e1", type: "inicio_bot", label: "Inicio de atencion por web", time: "16:10" },
      {
        id: "e2",
        type: "intencion_detectada",
        label: "Intencion detectada: Estado de solicitud",
        time: "16:11"
      },
      { id: "e3", type: "resuelto", label: "Caso marcado como resuelto", time: "16:18" }
    ]
  },
  {
    id: "cv-1005",
    userId: "u5",
    channel: "TikTok",
    status: "en proceso",
    intent: "Servicios",
    sentiment: "positivo",
    priority: "media",
    assignedAgent: "Bot COMFAGUAJIRA",
    lastMessage: "Te comparto el enlace para ampliar informacion.",
    unread: 0,
    updatedAt: "Hoy, 08:50",
    tags: ["captacion", "derivacion"],
    messages: [
      {
        id: "m1",
        sender: "user",
        text: "Vi su video, que beneficios tienen para jovenes?",
        time: "08:48"
      },
      {
        id: "m2",
        sender: "bot",
        text: "Tenemos programas de educacion y recreacion. Te envio opciones.",
        time: "08:49"
      }
    ],
    events: [
      { id: "e1", type: "inicio_bot", label: "Interaccion desde TikTok", time: "08:48" },
      {
        id: "e2",
        type: "intencion_detectada",
        label: "Intencion detectada: Servicios",
        time: "08:49"
      }
    ]
  }
];

export const webChatQuickReplies = [
  "Subsidio familiar",
  "Certificados",
  "Estado de afiliacion",
  "PQRS",
  "Hablar con asesor"
];

export const whatsappScenarios = [
  {
    id: "ws1",
    title: "Consulta subsidio",
    label: "Utilidad",
    messages: [
      { from: "user", text: "Hola, cuando me llega el subsidio?", time: "09:14" },
      {
        from: "bot",
        text: "Estoy validando tu informacion. El pago esta programado para el 12 de marzo.",
        time: "09:14"
      }
    ]
  },
  {
    id: "ws2",
    title: "Solicitud de certificado",
    label: "Utilidad",
    messages: [
      { from: "user", text: "Me regalas certificado laboral?", time: "11:03" },
      { from: "bot", text: "Claro. Te envio el PDF en menos de 1 minuto.", time: "11:03" }
    ]
  },
  {
    id: "ws3",
    title: "PQRS / reclamo",
    label: "Utilidad",
    messages: [
      { from: "user", text: "Quiero poner una queja del servicio", time: "12:21" },
      {
        from: "bot",
        text: "Lamento lo sucedido. Registrare tu PQRS y te asignare un radicado.",
        time: "12:21"
      }
    ]
  },
  {
    id: "ws4",
    title: "Escalamiento a humano",
    label: "Autenticacion",
    messages: [
      { from: "user", text: "No me reconoce el documento", time: "15:08" },
      { from: "bot", text: "Te voy a comunicar con un asesor.", time: "15:08" },
      { from: "agent", text: "Hola, soy Daniel. Te ayudo enseguida.", time: "15:10" }
    ]
  },
  {
    id: "ws5",
    title: "Campana informativa",
    label: "Marketing",
    messages: [
      {
        from: "bot",
        text: "Inscripciones abiertas para escuela de futbol infantil.",
        time: "08:00"
      },
      { from: "user", text: "Me interesa, como aplico?", time: "08:05" }
    ]
  }
];

export const instagramScenarios = [
  { id: "ig1", title: "Pregunta por servicios", intent: "Servicios", sentiment: "positivo" },
  { id: "ig2", title: "Consulta de horarios", intent: "Horarios", sentiment: "neutro" },
  { id: "ig3", title: "Inconformidad", intent: "PQRS", sentiment: "negativo" },
  { id: "ig4", title: "Usuario molesto", intent: "PQRS", sentiment: "negativo" },
  { id: "ig5", title: "Lead interesado", intent: "Afiliacion", sentiment: "positivo" }
];

export const tiktokScenarios = [
  {
    id: "tk1",
    title: "Comentario en publicacion",
    source: "Comentario",
    message: "Como me afilio para acceder a los beneficios?"
  },
  {
    id: "tk2",
    title: "Mensaje pidiendo informacion",
    source: "DM",
    message: "Tienen cursos para jovenes en Riohacha?"
  },
  {
    id: "tk3",
    title: "Derivacion a WhatsApp",
    source: "Comentario",
    message: "Escribenos por WhatsApp para validar datos en minutos."
  },
  {
    id: "tk4",
    title: "Derivacion al sitio web",
    source: "DM",
    message: "Consulta todos los programas en el portal web oficial."
  }
];
