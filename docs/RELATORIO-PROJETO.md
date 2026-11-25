# bela360 - Relatório Completo do Projeto

**Data de Criaçêo:** 2025-01-04
**Status:** Em Desenvolvimento

---

## 1. Visêo Geral do Projeto

### 1.1 O que é o bela360?

O **bela360** é uma plataforma de automaçêo ponta a ponta para negócios de beleza no Brasil (salões, barbearias, estéticas, manicures, sobrancelhas). O produto oferece um MVP gratuito que gera valor imediato através de automaçêo via WhatsApp, agendamento inteligente e gestêo simplificada de clientes.

### 1.2 Problema Resolvido

- **Agendamento Manual:** WhatsApp pessoal cheio de mensagens, dificuldade de organizaçêo
- **No-shows (Faltas):** Perda de 15-30% do faturamento por faltas sem aviso
- **Falta de Fidelizaçêo:** Clientes somem sem retorno, sem estratégia de retençêo
- **Gestêo Caótica:** Sem visibilidade de métricas, clientes ou histórico
- **Tempo Perdido:** Horas gastas respondendo mensagens repetitivas

### 1.3 Proposta de Valor

| Aspecto | Concorrentes | bela360 |
|---------|--------------|---------|
| Preço MVP | R$ 50-300/mês | **Gratuito** |
| Canal Principal | App/Web | **WhatsApp** |
| Curva de Aprendizado | Alta | **Mínima** |
| Setup | Dias/Semanas | **Minutos** |

---

## 2. Arquitetura Técnica

### 2.1 Stack Tecnológica

| Categoria | Tecnologia | Versêo |
|-----------|------------|--------|
| **Frontend** | Next.js | 14.x |
| **Backend** | Express + Node.js | 4.18+ / 20 LTS |
| **Linguagem** | TypeScript | 5.3+ |
| **Banco de Dados** | PostgreSQL | 15+ |
| **Cache/Fila** | Redis + BullMQ | 7+ / 5.x |
| **ORM** | Prisma | 5.x |
| **WhatsApp** | Evolution API | 2.x |
| **UI** | Tailwind CSS + shadcn/ui | 3.4+ |
| **Testes** | Vitest + Playwright | 1.x |

### 2.2 Estrutura de Serviços Docker

```
┌─────────────────────────────────────────────────────────┐
│                    bela360 Stack                         │
├─────────────────────────────────────────────────────────┤
│  Frontend (Next.js)        → localhost:3000             │
│  Backend (Express)         → localhost:3001             │
│  Evolution API (WhatsApp)  → localhost:8080             │
│  Bull Board (Queues)       → localhost:3002             │
│  PostgreSQL                → localhost:5432             │
│  Redis                     → localhost:6379             │
│  Adminer (DB UI)           → localhost:8081 (dev)       │
│  Nginx (Prod)              → localhost:80/443           │
└─────────────────────────────────────────────────────────┘
```

### 2.3 Diagrama de Arquitetura

```
┌──────────────┐     ┌──────────────┐
│   Cliente    │     │ Profissional │
│   (WhatsApp) │     │   (Web App)  │
└──────┬───────┘     └──────┬───────┘
       │                    │
       ▼                    ▼
┌──────────────┐     ┌──────────────┐
│ Evolution    │     │   Next.js    │
│    API       │     │   Frontend   │
└──────┬───────┘     └──────┬───────┘
       │                    │
       └────────┬───────────┘
                ▼
        ┌───────────────┐
        │   Express     │
        │   Backend     │
        └───────┬───────┘
                │
       ┌────────┴────────┐
       ▼                 ▼
┌──────────────┐  ┌──────────────┐
│  PostgreSQL  │  │    Redis     │
│   (Dados)    │  │ (Cache/Fila) │
└──────────────┘  └──────────────┘
```

---

## 3. Modelos de Dados

### 3.1 Entidades Principais

| Entidade | Descriçêo |
|----------|-----------|
| **Business** | Salêo/negócio cadastrado |
| **Service** | Serviços oferecidos (corte, manicure, etc) |
| **Client** | Clientes que agendam |
| **Appointment** | Agendamentos |
| **BlockedSlot** | Horários bloqueados |
| **Notification** | Log de mensagens enviadas |

### 3.2 Relacionamentos

```
Business
    ├── has many → Services
    ├── has many → Clients
    ├── has many → Appointments
    ├── has many → BlockedSlots
    └── has many → Notifications

Client
    └── has many → Appointments

Appointment
    ├── belongs to → Business
    ├── belongs to → Client
    ├── belongs to → Service
    └── has many → Notifications
```

---

## 4. Backlog do Produto

### 4.1 Épicos

| # | Épico | Stories | Prioridade | Status |
|---|-------|---------|------------|--------|
| 1 | Foundation & Core Setup | 6 | P0 | Ready |
| 2 | Scheduling Core | 6 | P0 | Ready |
| 3 | Notifications & Reminders | 5 | P0 | Ready |
| 4 | Client Management (CRM) | 4 | P1 | Ready |
| 5 | Analytics & Dashboard | 5 | P1 | Ready |

**Total: 26 Stories**

### 4.2 Stories por Épico

#### Epic 1: Foundation & Core Setup
1. Story 1.1: Project Setup & Infrastructure
2. Story 1.2: CI/CD Pipeline
3. Story 1.3: Database Setup
4. Story 1.4: WhatsApp Integration Setup
5. Story 1.5: Authentication via WhatsApp
6. Story 1.6: Health Check & Status Page

#### Epic 2: Scheduling Core
1. Story 2.1: Business Profile Setup
2. Story 2.2: Service Catalog Management
3. Story 2.3: Calendar & Availability
4. Story 2.4: WhatsApp Booking Bot - Flow Design
5. Story 2.5: Appointment Creation & Storage
6. Story 2.6: Appointment List for Professional

#### Epic 3: Notifications & Reminders
1. Story 3.1: Confirmation Message
2. Story 3.2: 24h Reminder
3. Story 3.3: 2h Confirmation Request
4. Story 3.4: No-Show Detection & Notification
5. Story 3.5: Queue System for Messages

#### Epic 4: Client Management (CRM)
1. Story 4.1: Client Auto-Registration
2. Story 4.2: Client List & Search
3. Story 4.3: Client Profile & History
4. Story 4.4: Client Notes & Tags

#### Epic 5: Analytics & Dashboard
1. Story 5.1: Dashboard Overview
2. Story 5.2: Appointment Statistics
3. Story 5.3: Client Analytics
4. Story 5.4: Revenue Insights (Basic)
5. Story 5.5: Export & Reports

---

## 5. Estrutura de Arquivos do Projeto

```
bela360/
├── apps/
│   ├── api/                          # Backend Express
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── auth/             # Autenticaçêo
│   │   │   │   ├── scheduling/       # Agendamentos
│   │   │   │   ├── crm/              # Clientes
│   │   │   │   ├── notifications/    # Notificações
│   │   │   │   ├── analytics/        # Métricas
│   │   │   │   └── whatsapp/         # Bot WhatsApp
│   │   │   ├── common/               # Middleware, utils
│   │   │   └── config/               # Configurações
│   │   ├── prisma/                   # Schema e migrations
│   │   └── tests/                    # Testes
│   │
│   └── web/                          # Frontend Next.js
│       └── src/
│           ├── app/                  # App Router
│           │   ├── (auth)/           # Login
│           │   └── (dashboard)/      # Páginas protegidas
│           ├── components/           # Componentes React
│           ├── hooks/                # Custom hooks
│           └── lib/                  # Utilitários
│
├── packages/
│   └── shared/                       # Tipos compartilhados
│
├── docker/                           # Configurações Docker
│   ├── api/Dockerfile
│   ├── web/Dockerfile
│   ├── postgres/init.sql
│   └── nginx/nginx.conf
│
├── scripts/                          # Scripts de automaçêo
│   ├── dev.sh
│   └── setup.sh
│
├── docs/                             # Documentaçêo
│   ├── brief.md                      # Project Brief
│   ├── prd.md                        # Product Requirements
│   ├── architecture.md               # Arquitetura
│   ├── backlog.md                    # Backlog
│   └── stories/                      # Stories detalhadas
│
├── docker-compose.yml                # Dev environment
├── docker-compose.prod.yml           # Production
├── Makefile                          # Comandos make
├── .env.example                      # Template de env
└── README.md                         # Documentaçêo principal
```

---

## 6. Arquivos Docker Criados

| Arquivo | Descriçêo |
|---------|-----------|
| `docker-compose.yml` | Ambiente de desenvolvimento completo |
| `docker-compose.prod.yml` | Configuraçêo para produçêo com Nginx |
| `docker/api/Dockerfile` | Multi-stage build para backend |
| `docker/web/Dockerfile` | Multi-stage build para frontend |
| `docker/postgres/init.sql` | Script de inicializaçêo do banco |
| `docker/nginx/nginx.conf` | Reverse proxy com rate limiting |
| `.dockerignore` | Arquivos ignorados no build |
| `.env.example` | Template de variáveis de ambiente |

---

## 7. Comandos Disponíveis

### 7.1 Usando Scripts

```bash
./scripts/dev.sh start      # Iniciar serviços
./scripts/dev.sh stop       # Parar serviços
./scripts/dev.sh logs       # Ver logs
./scripts/dev.sh db migrate # Migrations
./scripts/dev.sh db seed    # Seed database
./scripts/dev.sh whatsapp   # Abrir manager
```

### 7.2 Usando Make

```bash
make dev         # Iniciar desenvolvimento
make start       # Iniciar Docker
make stop        # Parar Docker
make logs        # Ver logs
make db-migrate  # Migrations
make test        # Rodar testes
make clean       # Limpar tudo
```

### 7.3 Usando pnpm

```bash
pnpm dev         # Dev todos os apps
pnpm dev:api     # Dev apenas API
pnpm dev:web     # Dev apenas Web
pnpm build       # Build todos
pnpm test        # Testes todos
pnpm lint        # Linter todos
pnpm db:migrate  # Prisma migrate
pnpm db:studio   # Prisma Studio
```

---

## 8. URLs de Acesso

| Serviço | URL | Descriçêo |
|---------|-----|-----------|
| Frontend | http://localhost:3000 | App Next.js |
| API | http://localhost:3001 | Backend Express |
| API Health | http://localhost:3001/api/health | Health check |
| Evolution API | http://localhost:8080 | WhatsApp API |
| Bull Board | http://localhost:3002 | Dashboard de filas |
| Adminer | http://localhost:8081 | Database UI |
| Prisma Studio | http://localhost:5555 | ORM UI |

---

## 9. Métricas de Sucesso

### 9.1 MVP (Épicos 1-3)
- [ ] Cliente consegue agendar via WhatsApp em < 2 min
- [ ] Profissional vê agenda do dia no dashboard
- [ ] Lembretes automáticos funcionando
- [ ] Taxa de no-show reduzida em 50%

### 9.2 Full Product (Épicos 4-5)
- [ ] CRM com histórico completo de clientes
- [ ] Dashboard com métricas acionáveis
- [ ] Relatórios exportáveis

---

## 10. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigaçêo |
|-------|---------------|---------|-----------|
| WhatsApp API instável | Média | Alto | Usar Evolution API self-hosted |
| Complexidade do bot | Alta | Médio | Fluxo simples, iterar |
| Performance | Baixa | Médio | Indexaçêo, paginaçêo |
| Adoçêo baixa | Média | Alto | Onboarding simples, suporte |

---

## 11. Próximos Passos

1. ✅ Planejamento completo (Brief, PRD, Arquitetura)
2. ✅ Configuraçêo Docker
3. 🔄 Implementaçêo Story 1.1 (Project Setup)
4. ⏳ CI/CD Pipeline (Story 1.2)
5. ⏳ Database Setup (Story 1.3)
6. ⏳ WhatsApp Integration (Story 1.4)
7. ⏳ Autenticaçêo (Story 1.5)

---

## 12. Links para Documentaçêo

- [Project Brief](./brief.md)
- [PRD - Requisitos](./prd.md)
- [Arquitetura](./architecture.md)
- [Backlog](./backlog.md)
- [Epic 1: Foundation](./stories/epic-1-foundation.md)
- [Epic 2: Scheduling](./stories/epic-2-scheduling.md)
- [Epic 3: Notifications](./stories/epic-3-notifications.md)
- [Epic 4: CRM](./stories/epic-4-crm.md)
- [Epic 5: Analytics](./stories/epic-5-analytics.md)

---

*Documento gerado automaticamente pelo BMad Orchestrator*
