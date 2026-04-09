
# Plano — Landing Page Ideal Rádios do Brasil

## Visão Geral
Landing page de alta conversão para Google Ads, com design system azul institucional, alternância de seções escuras/claras com transições arredondadas, animações de blur orbs e rádios flutuantes, tipografia Barlow/Barlow Condensed, e formulário de captação de leads com Supabase.

---

## Fase 1 — Fundação (esta implementação)

### 1. Setup do Design System
- Configurar paleta de cores (azul primário #0E4AAD, família de azuis, fundos escuros/claros)
- Importar Google Fonts: Barlow (400/600/700/900) + Barlow Condensed (700/900)
- Criar variantes de botões (primário gradiente, outline dark, outline light, tech)
- Definir animações CSS: float, float-orb, scan de entrada

### 2. Extrair e organizar assets
- Copiar imagens dos rádios (ZIPs enviados) para `/public/assets/radios/`
- Copiar logos dos clientes para `/public/assets/clientes/`
- Copiar logo branca da Ideal e imagem dos rádios do hero

### 3. Navbar
- Sticky, fundo translúcido com blur, logo "IDEAL RÁDIOS" em gradiente
- Links: Produtos · Setores · Empresa · Contato
- CTA "Solicitar cotação" gradiente
- Menu hamburger no mobile

### 4. Hero (seção escura)
- Gradiente dark com 3 blur orbs animados
- Ondas de radar/sonar em SVG
- Rádios flutuando com labels tecnológicos (DMR/TETRA, GPS, Criptografia)
- Headline: "Sua operação não pode parar por falta de comunicação"
- CTAs: "Quero uma cotação agora" + "Falar no WhatsApp"
- Badge de credencial Wings+ Hytera

### 5. Seção Credenciais (clara, layer arredondada)
- Pills/badges: 18 anos, 200+ empresas, Cobertura nacional, 48h assistência

### 6. Seção "Por que a Ideal" (clara)
- 4 cards com ícone: Locação imediata, Assistência autorizada, Sistemas DMR/TETRA, Wings+ Hytera

### 7. Seção "18 Anos" (escura com blur orbs)
- Texto institucional + 2 cards destaque

### 8. Slider Infinito de Clientes (clara)
- Duas linhas de logos em direções opostas com ProgressiveBlur
- Logos em grayscale, cor no hover

### 9. Seção CTA Final (gradiente)
- Formulário: Nome, Empresa, WhatsApp, Necessidade (select)
- Botão "Quero uma proposta agora"
- Alternativas de contato (WhatsApp, e-mail)

### 10. Footer (escuro)
- Logo, informações de contato, links, copyright

### 11. Banco de Dados (Supabase)
- Criar tabela `leads` com campos: nome, empresa, telefone, necessidade, created_at
- RLS habilitado com política para insert anônimo
- Formulário conectado ao Supabase

### 12. Regra de transição entre seções
- Toda transição escuro↔claro: border-radius 24px topo, margin-top -32px, z-index empilhado

---

## Fase 2 (próxima iteração)
- Seções de Rádios Hytera e Motorola (grids de cards de produto)
- Carrossel drag de Locação (Framer Motion)
- Seção ATEX/Seguros
- Seção Serviços (4 cards grandes)
- Seção Setores (grid ícone + texto)

## Fase 3 (polimento)
- Animações de scroll (Framer Motion IntersectionObserver)
- Micro-interações nos cards e botões
- Responsividade mobile completa
- SEO e meta tags para Google Ads
- Seção FAQ (quebra de objeções)
