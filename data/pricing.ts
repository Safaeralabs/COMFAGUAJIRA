export const setupCosts = [
  { item: "Activacion del sistema", value: 4200000, iva: false },
  { item: "Integracion canal web", value: 380000, iva: false },
  { item: "Integracion WhatsApp Business API", value: 380000, iva: false },
  { item: "Integracion Facebook", value: 380000, iva: false },
  { item: "Integracion Instagram", value: 380000, iva: false },
  { item: "Despliegue en app (opcional)", value: 1500000, iva: false },
  { item: "Avatar predisenado", value: 180000, iva: false },
  { item: "Avatar a medida", value: 820000, iva: false }
];

export const monthlyUsage = [
  { conversations: 300, value: 290000 },
  { conversations: 500, value: 460000 },
  { conversations: 1000, value: 890000 },
  { conversations: 2000, value: 1490000 },
  { conversations: 3000, value: 1850000 },
  { conversations: 5000, value: 2150000 },
  { conversations: 10000, value: 3050000 },
  { conversations: 15000, value: 4300000 },
  { conversations: 20000, value: 5300000 },
  { conversations: 30000, value: 7100000 },
  { conversations: 50000, value: 8900000 },
  { conversations: 100000, value: 12600000 }
];

export const commercialScenarios = [
  {
    id: "pilot",
    name: "Escenario Piloto",
    description: "1 canal + automatizacion de FAQs y escalamiento basico.",
    setup: 4900000,
    monthly: 890000,
    highlights: ["Web + WhatsApp", "Flujos base", "Analitica inicial"]
  },
  {
    id: "multichannel",
    name: "Escenario Multicanal",
    description: "4 canales activos y bandeja unificada de atencion.",
    setup: 6200000,
    monthly: 2150000,
    highlights: ["Web + WhatsApp + Instagram + TikTok", "Bandeja omnicanal", "Reportes ejecutivos"]
  },
  {
    id: "full",
    name: "Escenario Full",
    description: "Omnicanal con avatar a medida, BI y operacion ampliada.",
    setup: 7900000,
    monthly: 5300000,
    highlights: ["Operacion comercial completa", "Campanas y plantillas", "Dashboard premium"]
  }
];
