# COMFAGUAJIRA Chatbot

Asistente virtual multicanal para atencion 24/7.  
Este repositorio contiene un **MVP demo comercial frontend-only**, diseñado para presentar a cliente una experiencia completa de atencion digital omnicanal para COMFAGUAJIRA.

## Resumen ejecutivo

El MVP muestra, de forma visual y navegable, como funcionaria una operacion real en:

- Sitio Web
- WhatsApp
- Instagram
- TikTok
- Bandeja unificada de atencion
- Dashboard BI
- Vista de costos comerciales

Objetivo de negocio: demostrar reduccion de tiempos de respuesta, mayor automatizacion, mejor experiencia del afiliado y control operativo para el equipo de atencion.

## Que se puede demostrar en la reunion

1. Atencion automatizada 24/7 con escalamiento a asesor humano.
2. Centralizacion de conversaciones en una sola bandeja omnicanal.
3. Clasificacion por intencion, sentimiento y estado del caso.
4. Analitica ejecutiva para toma de decisiones.
5. Escenarios de costos para propuesta comercial (Piloto, Multicanal, Full).

## Vistas del demo

- `/` Inicio: propuesta de valor, beneficios, canales y KPIs.
- `/demo-web`: experiencia del cliente en portal web con widget flotante.
- `/whatsapp`: simulador de conversaciones con escenarios y etiquetas.
- `/instagram`: simulador DM con intencion y sentimiento.
- `/tiktok`: modelo de captacion y derivacion a canales de conversion.
- `/inbox`: bandeja del asesor (CRM/helpdesk) con filtros y timeline.
- `/analytics`: indicadores y graficas ejecutivas.
- `/costos`: estructura de costos y paquetes comerciales.

## Cliente vs Operacion interna

- Vistas de experiencia del cliente:
  - `/demo-web`
  - `/whatsapp`
  - `/instagram`
  - `/tiktok`
- Vistas de operacion interna:
  - `/inbox` (asesores)
  - `/analytics` (coordinacion/gerencia)
  - `/costos` (equipo comercial)

## Stack tecnologico

- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS
- Componentes UI reutilizables (estilo shadcn/ui)
- lucide-react
- Recharts
- Framer Motion

## Estructura del proyecto

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

## Ejecucion local

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

Build de produccion:

```bash
npm run build
npm run start
```

## Mock data editable

Todos los datos del MVP son locales y editables:

- `data/conversations.ts`
- `data/users.ts`
- `data/metrics.ts`
- `data/pricing.ts`
- `data/intents.ts`
- `data/campaigns.ts`

## Aclaraciones

- No incluye backend real.
- No incluye autenticacion real.
- No incluye integraciones API reales.
- No incluye base de datos real.
- El enfoque es comercial y de validacion de experiencia.
