# COMFAGUAJIRA Chatbot — PoC Comercial

> **Prueba de Concepto funcional** de plataforma omnicanal de atención al afiliado con IA, lista para demo ejecutiva.

---

## Vista rápida

| Módulo | Descripción |
|--------|-------------|
| **Landing / Home** | KPIs, propuesta de valor, CTA a demo y costos |
| **Demo Web Chat** | Portal ficticio + widget de chat interactivo con IA |
| **WhatsApp Simulator** | UI estilo WhatsApp, 5 escenarios, etiquetas de categoría |
| **Instagram DM** | Lista + chat con detección de intención y sentimiento |
| **TikTok Captación** | Flujo conceptual comentario → DM → CTA |
| **Inbox Omnicanal** | Bandeja unificada con filtros, timeline y acciones |
| **Analytics BI** | Dashboard ejecutivo con 4 gráficas + 2 tablas |
| **Costos** | Piloto, planes recurrentes, add-ons, modelo WhatsApp |

---

## Requisitos previos

- **Node.js** ≥ 20 (para el frontend en local)
- **Docker Desktop** ≥ 4.x + **Docker Compose** v2

---

## Setup en menos de 10 minutos

### Opción A — Docker completo (recomendado para demo)

```bash
# 1. Clonar / entrar al proyecto
cd Comfguajira

# 2. Levantar infraestructura (DB + Redis + API + Frontend)
docker compose up -d --build

# 3. Poblar la BD con datos realistas (sólo la primera vez)
docker compose --profile seed run --rm seed

# 4. Abrir el browser
open http://localhost:5173   # Frontend
open http://localhost:8000/docs  # Swagger UI del backend
```

### Opción B — Frontend local + Backend Docker

```bash
# Terminal 1 — Backend + DB
docker compose up -d db redis api --build

# Terminal 2 — Frontend Vite
cd frontend-vite
cp .env.example .env
npm install
npm run dev
```

> El frontend funciona **sin backend** (usa datos mock automáticamente). Ideal para demo sin infraestructura.

---

## Variables de entorno

### Backend (`backend/.env`)

| Variable | Default | Descripción |
|----------|---------|-------------|
| `DATABASE_URL` | `postgresql://comfa_user:comfa_pass@db:5432/comfaguajira` | Cadena de conexión PostgreSQL |
| `SECRET_KEY` | *(ver .env)* | Clave para firmar JWT (cambiar en producción) |
| `ALGORITHM` | `HS256` | Algoritmo JWT |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | `480` | Duración del token (8h) |
| `REDIS_URL` | `redis://redis:6379/0` | Cola de eventos / caché |

### Frontend (`frontend-vite/.env`)

| Variable | Default | Descripción |
|----------|---------|-------------|
| `VITE_API_URL` | `http://localhost:8000` | URL base del backend |

---

## Credenciales de demo

| Asesor | Email | Contraseña |
|--------|-------|------------|
| Carlos Pérez | `carlos.perez@comfaguajira.com` | `demo1234` |
| Laura Gutiérrez | `laura.gutierrez@comfaguajira.com` | `demo1234` |
| Andrés Morales | `andres.morales@comfaguajira.com` | `demo1234` |
| Diana Suárez | `diana.suarez@comfaguajira.com` | `demo1234` |

---

## Estructura del proyecto

```
Comfguajira/
├── frontend-vite/              # React + Vite + TypeScript
│   ├── src/
│   │   ├── types/index.ts      # Tipos TypeScript compartidos
│   │   ├── data/mock.ts        # Datos mock (funciona sin backend)
│   │   ├── services/api.ts     # Cliente HTTP hacia el backend
│   │   ├── components/
│   │   │   ├── layout/         # MainLayout con nav coloreada por audiencia
│   │   │   └── ui/             # primitives: Card, KpiCard, Badge, Button...
│   │   └── pages/
│   │       ├── home-page.tsx           # Landing con KPIs y CTAs
│   │       ├── demo-web-page.tsx       # Chat interactivo (web widget)
│   │       ├── whatsapp-page.tsx       # Simulador WhatsApp
│   │       ├── instagram-page.tsx      # Simulador Instagram DM
│   │       ├── tiktok-page.tsx         # Captación TikTok
│   │       ├── inbox-page.tsx          # Bandeja omnicanal
│   │       ├── analytics-page.tsx      # Dashboard BI
│   │       └── costos-page.tsx         # Planes y precios
│   └── package.json
│
├── backend/                    # Python + FastAPI + SQLAlchemy
│   ├── app/
│   │   ├── main.py             # FastAPI app, CORS, WebSocket /ws/inbox
│   │   ├── database.py         # Engine + SessionLocal
│   │   ├── models.py           # ORM: users, agents, conversations...
│   │   ├── schemas.py          # Pydantic v2 schemas
│   │   ├── auth.py             # bcrypt + JWT
│   │   ├── deps.py             # get_current_agent dependency
│   │   └── routers/
│   │       ├── auth.py         # POST /auth/login
│   │       ├── conversations.py # CRUD + escalate + resolve
│   │       ├── metrics.py       # KPIs + channels + intents
│   │       └── pricing.py       # Catálogo de precios
│   ├── seed.py                 # Seed de datos realistas (50 afiliados, 100 conv.)
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .env
│
└── docker-compose.yml          # DB + Redis + API + Frontend
```

---

## Endpoints del API

Base URL: `http://localhost:8000`
Swagger UI: `http://localhost:8000/docs`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/health` | Health check |
| POST | `/auth/login` | Login asesor → JWT |
| GET | `/conversations` | Lista (filtros: canal, estado) |
| GET | `/conversations/{id}` | Detalle con mensajes y timeline |
| POST | `/conversations/{id}/messages` | Agregar mensaje |
| POST | `/conversations/{id}/escalate` | Escalar conversación |
| POST | `/conversations/{id}/resolve` | Marcar resuelta |
| GET | `/metrics/overview` | KPIs ejecutivos |
| GET | `/metrics/channels` | Métricas por canal |
| GET | `/metrics/intents` | Distribución de intenciones |
| GET | `/pricing` | Catálogo de precios |
| WS | `/ws/inbox` | WebSocket tiempo real |

---

## Checklist de demo comercial

### Paso 1 — Inicio (2 min)
- [ ] Abrir `http://localhost:5173`
- [ ] Mostrar hero con KPIs: 74% automatización, 12.8K conv/mes, 38s tiempo, 91% satisfacción
- [ ] Explicar la propuesta de valor omnicanal

### Paso 2 — Demo Web Chat (3 min)
- [ ] Ir a **Demo Web** (menú verde "Cliente")
- [ ] Hacer clic en el botón de chat flotante
- [ ] Clic en "💰 Subsidio familiar" → ver respuesta del bot
- [ ] Clic en "👤 Hablar con asesor" → mostrar escalamiento
- [ ] Destacar: typing indicator, quick replies, UX mobile-first

### Paso 3 — WhatsApp (2 min)
- [ ] Ir a **WhatsApp** (menú verde)
- [ ] Cambiar escenario a "PQRS" → mostrar conversación con sentimiento negativo
- [ ] Cambiar a "Campaña" → explicar etiquetas marketing/utilidad/autenticación
- [ ] Señalar la nota de ventana de 24h

### Paso 4 — Instagram DM (1 min)
- [ ] Ir a **Instagram** (menú verde)
- [ ] Mostrar el banner "Intención detectada: PQRS · 87%"
- [ ] Mostrar badge de sentimiento negativo (rojo)
- [ ] Señalar botones "Responder con IA" y "Escalar a asesor"

### Paso 5 — Inbox Omnicanal (3 min)
- [ ] Ir a **Inbox** (menú azul "Asesor")
- [ ] Filtrar por canal "WhatsApp" → ver conversaciones filtradas
- [ ] Filtrar por estado "Escalado" → ver caso de María Fernanda
- [ ] Clic en la conversación → ver thread completo
- [ ] Mostrar timeline de eventos en panel derecho
- [ ] Mostrar acciones: Plantilla, IA, Escalar, Resolver

### Paso 6 — Analytics (2 min)
- [ ] Ir a **Analytics** (menú azul)
- [ ] Cambiar rango a "30 días"
- [ ] Señalar gráfica de conversaciones por canal (WhatsApp domina)
- [ ] Señalar gráfica de horarios pico (9am-11am y 2pm-4pm)
- [ ] Mostrar tabla de desempeño de asesores

### Paso 7 — Costos (3 min)
- [ ] Ir a **Costos** (menú azul)
- [ ] Mostrar "Escenario Piloto" — $6.500.000 COP, 1 mes
- [ ] Explicar la sección "Costo real de WhatsApp" — 0 USD para soporte reactivo
- [ ] Mostrar planes recurrentes (Profesional highlighted)
- [ ] Señalar add-ons disponibles

**Total estimado de demo: ~16 minutos**

---

## Modelo de datos

```
users ←──── conversations ───→ agents
              │
              ├─── messages
              ├─── events_timeline
              └─── tickets

metrics_snapshots  (serie temporal por canal)
pricing_catalog    (planes, add-ons)
intents            (catálogo de intenciones)
```

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19 + Vite 7 + TypeScript 5 + Tailwind CSS 3 |
| Animaciones | Framer Motion 12 |
| Gráficas | Recharts 3 |
| Iconos | Lucide React |
| Router | React Router 7 |
| Backend | Python 3.12 + FastAPI 0.115 |
| ORM | SQLAlchemy 2 |
| Base de datos | PostgreSQL 16 |
| Caché / Colas | Redis 7 |
| Auth | JWT (python-jose) + bcrypt (passlib) |
| Infraestructura | Docker + Docker Compose |

---

*Generado para COMFAGUAJIRA · Demo comercial PoC · Marzo 2026*
