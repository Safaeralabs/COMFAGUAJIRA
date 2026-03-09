export const setupCosts = [
  { item: "Activacion del sistema", value: 5500000, iva: true },
  { item: "Integracion canal web", value: 500000, iva: true },
  { item: "Integracion WhatsApp Business API", value: 500000, iva: true },
  { item: "Integracion Facebook", value: 500000, iva: true },
  { item: "Integracion Instagram", value: 500000, iva: true },
  { item: "Despliegue en app (opcional)", value: 1900000, iva: true },
  { item: "Avatar predisenado", value: 220000, iva: true },
  { item: "Avatar a medida", value: 1050000, iva: true }
];

export const monthlyUsage = [
  { conversations: 300, value: 360000 },
  { conversations: 500, value: 590000 },
  { conversations: 1000, value: 1150000 },
  { conversations: 2000, value: 1920000 },
  { conversations: 3000, value: 2380000 },
  { conversations: 5000, value: 2750000 },
  { conversations: 10000, value: 3900000 },
  { conversations: 15000, value: 5500000 },
  { conversations: 20000, value: 6800000 },
  { conversations: 30000, value: 9100000 },
  { conversations: 50000, value: 11300000 },
  { conversations: 100000, value: 16000000 }
];

export const commercialScenarios = [
  {
    id: "pilot",
    name: "Escenario Piloto",
    description: "1 canal + automatizacion de FAQs y escalamiento basico.",
    setup: 6500000,
    monthly: 1150000,
    highlights: ["Web + WhatsApp", "Flujos base", "Analitica inicial"]
  },
  {
    id: "multichannel",
    name: "Escenario Multicanal",
    description: "4 canales activos y bandeja unificada de atencion.",
    setup: 7800000,
    monthly: 2750000,
    highlights: ["Web + WhatsApp + Instagram + TikTok", "Bandeja omnicanal", "Reportes ejecutivos"]
  },
  {
    id: "full",
    name: "Escenario Full",
    description: "Omnicanal con avatar a medida, BI y operacion ampliada.",
    setup: 9900000,
    monthly: 6800000,
    highlights: ["Operacion comercial completa", "Campanas y plantillas", "Dashboard premium"]
  }
];
