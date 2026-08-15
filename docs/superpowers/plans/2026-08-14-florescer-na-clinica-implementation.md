# Florescer na Clínica Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir uma página de vendas responsiva e navegável para a oferta perpétua Florescer na Clínica, usando a direção Jardim editorial aprovada.

**Architecture:** Página única em React/TypeScript sobre o starter Sites, com dados de conteúdo separados da composição visual. Componentes pequenos representam módulos, público, depoimentos provisórios e FAQ; o CSS global concentra identidade, responsividade, animação e acessibilidade.

**Tech Stack:** React, TypeScript, Vinext/Vite, CSS, Vitest e Testing Library quando disponíveis no starter.

## Global Constraints

- Usar verde oliva, creme, bege quente e acentos dourados na direção “Jardim editorial”.
- Manter a headline aprovada e o preço de R$ 797.
- Não inventar trajetória, depoimentos, garantia, parcelamento, prazo de acesso ou URL de checkout.
- Usar recortes provisórios da captura fornecida até a entrega dos originais.
- Priorizar celular, garantir navegação por teclado e respeitar `prefers-reduced-motion`.
- Manter o site local; não publicar nesta etapa.

---

### Task 1: Base do site e contrato de conteúdo

**Files:**
- Create: `app/content.ts`
- Create: `app/content.test.ts`
- Modify: `app/layout.tsx`
- Modify: `package.json`

**Interfaces:**
- Produces: `salesContent`, objeto tipado contendo módulos, públicos, perguntas, preço e destino provisório do CTA.
- Produces: metadados “Florescer na Clínica” no layout.

- [ ] **Step 1: Inicializar o starter Sites e manter sua estrutura Vinext.**
- [ ] **Step 2: Criar teste que exige headline, preço `797`, cinco grupos de conteúdo, quatro FAQs e marcadores explícitos para fatos pendentes.**
- [ ] **Step 3: Executar o teste e confirmar falha pela ausência de `salesContent`.**
- [ ] **Step 4: Implementar os tipos e dados mínimos em `app/content.ts`, sem preencher fatos pendentes.**
- [ ] **Step 5: Executar o teste e confirmar aprovação.**
- [ ] **Step 6: Atualizar título e descrição da página e registrar a etapa em commit.**

### Task 2: Composição da página e interações

**Files:**
- Create: `app/components/FaqItem.tsx`
- Create: `app/components/FaqItem.test.tsx`
- Modify: `app/page.tsx`
- Delete: `app/_sites-preview/*`

**Interfaces:**
- Consumes: `salesContent` de `app/content.ts`.
- Produces: componente `FaqItem({ question, answer })` com botão acessível e estado expandido.
- Produces: página com as dez seções aprovadas e âncoras `#metodo`, `#conteudo`, `#oferta` e `#faq`.

- [ ] **Step 1: Criar teste de interação que exige FAQ fechado inicialmente, `aria-expanded=false` e abertura após clique.**
- [ ] **Step 2: Executar o teste e confirmar falha pela ausência de `FaqItem`.**
- [ ] **Step 3: Implementar o componente mínimo e executar o teste até aprovar.**
- [ ] **Step 4: Compor as dez seções em `app/page.tsx`, alimentadas por `salesContent`, com CTA provisório e áreas honestas de conteúdo em preparação.**
- [ ] **Step 5: Remover o esqueleto de prévia do starter e dependências que deixarem de ser usadas.**
- [ ] **Step 6: Executar todos os testes e registrar a etapa em commit.**

### Task 3: Direção visual Jardim editorial

**Files:**
- Modify: `app/globals.css`
- Create: `public/beatriz-referencia.png`

**Interfaces:**
- Consumes: classes semânticas usadas em `app/page.tsx` e imagem provisória.
- Produces: layout responsivo completo, foco visível, contraste, transições discretas e tratamento para redução de movimento.

- [ ] **Step 1: Copiar a captura fornecida como imagem provisória identificada no projeto.**
- [ ] **Step 2: Implementar tokens de cor, tipografia, espaçamento e superfícies orgânicas no CSS.**
- [ ] **Step 3: Implementar layouts desktop e mobile, com breakpoint principal em `780px`.**
- [ ] **Step 4: Adicionar estados de foco, hover, FAQ e `@media (prefers-reduced-motion: reduce)`.**
- [ ] **Step 5: Executar testes e build de produção; corrigir apenas falhas reais.**
- [ ] **Step 6: Registrar a etapa em commit.**

### Task 4: Prévia local e verificação final

**Files:**
- Modify: `README.md` se o starter não explicar a prévia local.

**Interfaces:**
- Consumes: aplicação completa e scripts do projeto.
- Produces: servidor local ativo e URL aberta no navegador integrado.

- [ ] **Step 1: Iniciar o servidor de desenvolvimento e abrir exatamente a URL informada pelo servidor.**
- [ ] **Step 2: Executar a suíte completa de testes e registrar contagem de aprovação.**
- [ ] **Step 3: Executar `npm run build` e confirmar código de saída zero.**
- [ ] **Step 4: Conferir no código a presença das dez seções, dos CTAs e dos marcadores pendentes, sem alegações inventadas.**
- [ ] **Step 5: Revisar o diff e registrar o estado final em commit.**
