export const pilotScenario = {
  name: "Escenario Piloto - Validacion de atencion automatizada con IA",
  price: 6500000,
  duration: "1 mes",
  objective: "Validar la automatizacion de atencion digital antes de una implementacion completa.",
  channels: ["WhatsApp", "Chat Web"],
  capabilities: [
    "Comprension de preguntas de usuarios",
    "Generacion automatica de respuestas",
    "Automatizacion de preguntas frecuentes",
    "Mejora continua del chatbot con aprendizaje conversacional"
  ],
  sampleQueries: [
    "Cuanto tengo de subsidio familiar?",
    "Estoy afiliado?",
    "Como solicito el subsidio de vivienda?",
    "Cuando pagan el subsidio?",
    "Quiero descargar mi certificado."
  ],
  integrations: [
    "Integracion con base de datos o API del cliente",
    "Consulta de informacion en sistemas internos",
    "Acceso a datos de afiliacion, subsidios y certificados"
  ],
  operation: [
    "Bandeja de atencion para asesores",
    "Escalamiento a agente humano",
    "Historial de conversaciones",
    "Dashboard analitico basico"
  ],
  includedVolume: "Hasta 3.000 conversaciones durante el mes piloto",
  extraConversationPrice: 180,
  infrastructure: ["Hosting", "Configuracion inicial", "Pruebas y despliegue", "Soporte durante el piloto"],
  aiNote: "El costo operacional de inteligencia artificial puede variar segun el modelo de IA utilizado."
};

export const whatsappExplanation = {
  intro:
    "Para soporte al cliente, normalmente WhatsApp no genera costo si el usuario inicia la conversacion y se responde dentro de la ventana de servicio de 24 horas.",
  serviceWindow: [
    "Respuestas",
    "Informacion",
    "Archivos",
    "Menus",
    "Documentos"
  ],
  noCostExample: {
    affiliates: "50.000 afiliados",
    inquiries: "5.000 consultas al mes",
    messagesPerInquiry: "5 mensajes por consulta",
    totalMessages: "25.000 mensajes",
    cost: "$0 USD (dentro de ventana de servicio)"
  },
  paidCases: [
    "Recordatorio de subsidio (utilidad): aprox. $0.0009 USD",
    "Campana de servicios (marketing): aprox. $0.014 USD",
    "Codigo de verificacion (autenticacion): aprox. $0.007 USD"
  ]
};

export const recurringPlans = [
  {
    id: "base",
    name: "Plan Base",
    priceLabel: "$1.799.000 COP / mes",
    includedConversations: "Hasta 5.000 conversaciones mensuales",
    channels: ["WhatsApp", "Chat Web"],
    features: [
      "Chatbot automatizado",
      "Respuestas a preguntas frecuentes",
      "Bandeja de atencion para asesores",
      "Escalamiento a agente humano",
      "Dashboard analitico"
    ],
    aiNote: "Compatible con chatbot inteligente. El costo operacional de IA puede variar segun el modelo."
  },
  {
    id: "pro",
    name: "Plan Profesional",
    priceLabel: "$3.299.000 COP / mes",
    includedConversations: "Hasta 10.000 conversaciones mensuales",
    channels: ["WhatsApp", "Chat Web"],
    features: [
      "Chatbot automatizado",
      "Bandeja de atencion para agentes",
      "Dashboard analitico avanzado",
      "Integracion con sistemas internos",
      "Clasificacion automatica de conversaciones"
    ],
    aiNote:
      "Compatible con chatbot conversacional, analisis de intencion y automatizacion de respuestas. Costo IA variable."
  },
  {
    id: "enterprise",
    name: "Plan Enterprise",
    priceLabel: "Contactar ventas",
    includedConversations: "Mas de 10.000 conversaciones mensuales",
    channels: ["Omnicanal"],
    features: [
      "Chatbot omnicanal",
      "Integraciones empresariales",
      "Analitica avanzada",
      "Automatizaciones personalizadas",
      "Soporte prioritario"
    ],
    aiNote: "Disenado para organizaciones con integraciones complejas y operacion de alto volumen."
  }
];

export const addons = [
  {
    name: "Canal adicional",
    from: 450000,
    examples: ["Instagram", "Facebook Messenger", "Telegram", "Email"],
    includes: ["Configuracion del canal", "Conexion con la plataforma", "Pruebas funcionales"]
  },
  {
    name: "Integracion CRM",
    from: 900000,
    examples: ["HubSpot", "Zoho", "Salesforce", "CRM interno"],
    includes: ["Conexion via API", "Sincronizacion de datos", "Pruebas de integracion"]
  },
  {
    name: "Integracion con sistema interno / ERP",
    from: 1200000,
    examples: ["Afiliaciones", "Subsidios", "Certificados", "Estados de solicitud"],
    includes: ["Conexion API", "Validacion de seguridad", "Pruebas tecnicas"]
  },
  {
    name: "Inteligencia Artificial avanzada",
    from: 900000,
    examples: ["Respuestas generativas", "Analisis de intencion", "Mejora de respuestas", "Automatizacion conversacional"],
    includes: ["Configuracion IA", "Ajustes iniciales", "Validacion de respuestas"]
  }
];

export const whatsappAdvantages = [
  "95-98% tasa de lectura",
  "Canal que casi todos los usuarios utilizan",
  "Reduce llamadas al call center"
];

export const importantNotes = {
  technicalEffort: [
    "Seguridad de acceso a datos",
    "Integracion con sistemas internos",
    "Verificacion del usuario",
    "Proteccion de datos personales"
  ],
  secureDataAccess: ["Afiliaciones", "Subsidios", "Certificados", "Estado de solicitudes"]
};
