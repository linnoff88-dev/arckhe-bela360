# Project Brief: bela360

## Executive Summary

**bela360** é uma plataforma de automaçêo ponta a ponta para negócios de beleza no Brasil (salões, barbearias, estéticas, manicures, sobrancelhas). O produto oferece um MVP gratuito que gera valor imediato através de automaçêo via WhatsApp, agendamento inteligente e gestêo simplificada de clientes.

**Problema Principal:** Donos de negócios de beleza perdem tempo e dinheiro com processos manuais de agendamento, confirmaçêo, faltas e fidelizaçêo de clientes.

**Proposta de Valor:** Automatizar o fluxo completo do cliente (captaçêo → fidelizaçêo) mantendo o toque humano onde necessário, com custo zero inicial.

---

## Problem Statement

### Dores Atuais do Mercado

1. **Agendamento Manual:** WhatsApp pessoal cheio de mensagens, dificuldade de organizaçêo
2. **No-shows (Faltas):** Perda de 15-30% do faturamento por faltas sem aviso
3. **Falta de Fidelizaçêo:** Clientes somem sem retorno, sem estratégia de retençêo
4. **Gestêo Caótica:** Sem visibilidade de métricas, clientes ou histórico
5. **Tempo Perdido:** Horas gastas respondendo mensagens repetitivas

### Impacto Financeiro

- Salêo médio perde R$ 2.000-5.000/mês com faltas e desorganizaçêo
- Tempo do profissional desperdiçado em tarefas administrativas
- Oportunidades de upsell e retorno perdidas

### Por que Soluções Existentes Falham

- **Complexas demais:** Sistemas como Trinks, Beleza na Web têm curva de aprendizado alta
- **Caras:** Mensalidades de R$ 100-300 para pequenos negócios
- **Nêo integram WhatsApp:** Canal principal do cliente brasileiro ignorado
- **Nêo sêo mobile-first:** Profissionais trabalham do celular

---

## Proposed Solution

### Conceito Core

Sistema de automaçêo **WhatsApp-first** que:
1. Automatiza agendamentos via chatbot inteligente
2. Envia confirmações e lembretes automáticos
3. Gerencia cadastro de clientes e histórico
4. Fornece relatórios simples de negócio
5. Facilita campanhas de retorno/fidelizaçêo

### Diferenciais

| Aspecto | Concorrentes | bela360 |
|---------|--------------|---------|
| Preço MVP | R$ 50-300/mês | **Gratuito** |
| Canal Principal | App/Web | **WhatsApp** |
| Curva de Aprendizado | Alta | **Mínima** |
| Setup | Dias/Semanas | **Minutos** |

### Abordagem Técnica

- **WhatsApp Business API** ou Evolution API (custo reduzido)
- **Agenda integrada** com Google Calendar ou sistema próprio
- **CRM simples** focado em beleza
- **Mensagens automáticas** configuráveis
- **Dashboard web** para gestêo

---

## Target Users

### Segmento Primário: Donos de Pequenos Negócios de Beleza

**Perfil:**
- Salões, barbearias, estúdios de estética, manicures, designers de sobrancelha
- 1-5 profissionais
- Faturamento R$ 5.000-30.000/mês
- Idade: 25-50 anos
- Baixa familiaridade com tecnologia
- Usam WhatsApp para TUDO

**Comportamentos Atuais:**
- Agendam via WhatsApp pessoal ou caderninho
- Confirmam manualmente (ou nêo confirmam)
- Nêo têm visêo do negócio (métricas)
- Perdem clientes por falta de follow-up

**Dores Específicas:**
- "Nêo consigo mais dar conta das mensagens"
- "Perco dinheiro com cliente que nêo vem"
- "Nêo sei quantos clientes atendi no mês"
- "Queria lembrar aniversário dos clientes"

**Objetivos:**
- Ter mais tempo para trabalhar
- Parar de perder dinheiro com faltas
- Organizar o negócio
- Fidelizar clientes

### Segmento Secundário: Profissionais Autônomos

- Manicures a domicílio
- Barbeiros freelancers
- Esteticistas independentes
- Necessidades similares, escala menor

---

## Goals & Success Metrics

### Business Objectives

- Adquirir 100 negócios ativos no MVP gratuito em 3 meses
- Taxa de conversêo de 20% para plano pago após período de valor
- NPS > 50 entre usuários ativos
- Reduçêo de 50% no tempo gasto com agendamentos pelos usuários

### User Success Metrics

- Reduçêo de 70% nas faltas (no-shows)
- 80% dos agendamentos feitos via chatbot
- 90% de confirmações automáticas bem-sucedidas
- Aumento de 30% na taxa de retorno de clientes

### KPIs

| KPI | Definiçêo | Meta |
|-----|-----------|------|
| MAU | Usuários ativos mensais | 100+ |
| Agendamentos/mês | Via plataforma | 500+ |
| Taxa de No-show | Faltas / Total agendamentos | < 10% |
| Tempo para Valor | Setup até primeiro agendamento | < 15min |

---

## MVP Scope

### Core Features (Must Have)

1. **Chatbot WhatsApp para Agendamento**
   - Cliente agenda pelo WhatsApp 24/7
   - Mostra horários disponíveis
   - Confirma agendamento automaticamente

2. **Confirmaçêo e Lembretes Automáticos**
   - Lembrete 24h antes
   - Confirmaçêo com opçêo de cancelar/reagendar
   - Alerta de no-show para o profissional

3. **Agenda Digital Simples**
   - Visualizaçêo dia/semana
   - Integraçêo ou agenda própria
   - Bloqueio de horários

4. **Cadastro de Clientes (CRM Básico)**
   - Nome, telefone, histórico de atendimentos
   - Preferências e observações
   - Última visita

5. **Dashboard com Métricas Básicas**
   - Agendamentos do dia/semana
   - Taxa de no-show
   - Clientes novos vs recorrentes

### Out of Scope for MVP

- Pagamentos integrados
- Múltiplas filiais
- Controle de estoque
- Comissões de funcionários
- Integrações com redes sociais
- App mobile nativo
- Relatórios avançados
- Programa de fidelidade complexo

### MVP Success Criteria

O MVP é bem-sucedido quando:
1. Um dono de salêo consegue configurar em menos de 15 minutos
2. Clientes conseguem agendar via WhatsApp sem ajuda humana
3. Lembretes reduzem no-shows em pelo menos 50%
4. Usuário percebe valor em menos de 7 dias

---

## Post-MVP Vision

### Phase 2 Features

- **Pagamentos:** PIX integrado, antecipaçêo
- **Fidelizaçêo:** Programa de pontos simples
- **Marketing:** Campanhas de aniversário, retorno
- **Multi-profissional:** Gestêo de equipe básica

### Long-term Vision (1-2 anos)

- Marketplace de profissionais de beleza
- Integraçêo com fornecedores (produtos)
- Expansêo para outros países da América Latina
- White-label para redes de franquias

### Expansion Opportunities

- Verticais adjacentes: Pet shops, clínicas, personal trainers
- B2B2C: Parcerias com marcas de beleza
- Financeiro: Antecipaçêo de recebíveis, crédito

---

## Technical Considerations

### Platform Requirements

- **Target Platforms:** Web Responsive (mobile-first)
- **Browser Support:** Chrome, Safari, Firefox (últimas 2 versões)
- **Performance:** Tempo de resposta < 2s, disponibilidade 99.5%

### Technology Preferences

- **Frontend:** React/Next.js ou Vue.js (simples, rápido)
- **Backend:** Node.js ou Python (FastAPI)
- **Database:** PostgreSQL + Redis para cache
- **Hosting:** AWS/GCP (free tier) ou Vercel/Railway

### Architecture Considerations

- **Repository:** Monorepo (simplicidade no MVP)
- **Service Architecture:** Monolito modular → microserviços depois
- **WhatsApp Integration:** Evolution API (open source) ou WhatsApp Cloud API
- **Security:** LGPD compliance, dados criptografados

---

## Constraints & Assumptions

### Constraints

- **Budget:** Mínimo - usar free tiers e open source
- **Timeline:** MVP funcional em 4-6 semanas
- **Resources:** Equipe pequena (1-2 devs)
- **Technical:** WhatsApp API tem limitações e custos

### Key Assumptions

- Donos de negócios de beleza estêo dispostos a testar soluções novas
- WhatsApp é o canal preferido e aceito pelos clientes finais
- Modelo freemium gera conversêo suficiente para sustentabilidade
- Mercado aceita automaçêo sem perder "calor humano"
- Evolution API é viável para escala inicial

---

## Risks & Open Questions

### Key Risks

| Risco | Impacto | Mitigaçêo |
|-------|---------|-----------|
| WhatsApp pode banir números | Alto | Seguir políticas, usar API oficial |
| Baixa adoçêo tecnológica | Médio | Onboarding super simples, suporte ativo |
| Custo de mensagens escala | Médio | Modelo de pricing que repasse custo |
| Concorrentes grandes | Médio | Foco em nicho, experiência superior |

### Open Questions

1. Qual API de WhatsApp usar? (Evolution vs Cloud API vs outros)
2. Modelo de monetizaçêo exato após MVP?
3. Como garantir qualidade do chatbot sem NLP complexo?
4. Estratégia de aquisiçêo de primeiros usuários?

### Areas Needing Further Research

- Benchmark de custos de APIs de WhatsApp
- Análise detalhada de concorrentes (Trinks, Beleza na Web, Booksy)
- Validaçêo do modelo freemium com potenciais usuários
- Regulamentações LGPD específicas para dados de saúde/beleza

---

## Next Steps

### Immediate Actions

1. Validar escopo MVP com 5-10 donos de salêo (entrevistas)
2. Escolher stack técnica definitiva (especialmente WhatsApp API)
3. Criar PRD detalhado com requisitos funcionais
4. Definir arquitetura técnica inicial
5. Prototipar fluxo de agendamento via WhatsApp

---

## PM Handoff

Este Project Brief fornece o contexto completo para **bela360**. O próximo passo é criar o PRD (Product Requirements Document) detalhando requisitos funcionais, nêo-funcionais, épicos e stories para implementaçêo.
