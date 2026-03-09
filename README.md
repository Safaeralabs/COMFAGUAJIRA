# COMFAGUAJIRA Chatbot MVP

Demo comercial frontend-only para presentar el asistente virtual multicanal de COMFAGUAJIRA.

## Stack

- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS
- Componentes estilo shadcn/ui (locales)
- lucide-react
- Recharts
- Framer Motion

## Que incluye el MVP

- Landing / Home con propuesta de valor y KPIs
- Demo Web con widget de chat flotante
- Simulador WhatsApp con escenarios y etiquetas
- Simulador Instagram DM con intencion y sentimiento
- Simulador TikTok para captacion y derivacion
- Bandeja unificada omnicanal (estilo CRM/helpdesk)
- Dashboard BI / analitica con graficas
- Vista de costos y escenarios comerciales

## Rutas

- `/` Inicio
- `/demo-web`
- `/whatsapp`
- `/instagram`
- `/tiktok`
- `/inbox`
- `/analytics`
- `/costos`

## Estructura

```txt
app/
components/
  common/
  inbox/
  layout/
  ui/
data/
lib/
types/
public/
```

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abrir `http://localhost:3000`.

## Build de produccion

```bash
npm run build
npm run start
```

## Mock data

Los datos del MVP se editan en:

- `data/conversations.ts`
- `data/users.ts`
- `data/metrics.ts`
- `data/pricing.ts`
- `data/intents.ts`
- `data/campaigns.ts`

## Modulos principales

- `app/demo-web/page.tsx`: simulacion de chat en sitio web institucional.
- `app/whatsapp/page.tsx`: mockup de telefono y escenarios de WhatsApp.
- `app/instagram/page.tsx`: flujo de DM con clasificacion de intencion.
- `app/tiktok/page.tsx`: demo conceptual de captacion y CTA a canales de conversion.
- `app/inbox/page.tsx`: bandeja omnicanal con filtros y panel de agente.
- `app/analytics/page.tsx`: KPIs y graficas ejecutivas.
- `app/costos/page.tsx`: propuesta comercial de costos y escenarios.

## Notas

- No hay backend real.
- No hay autenticacion real.
- No hay base de datos real.
- Todo funciona con datos mock locales.
