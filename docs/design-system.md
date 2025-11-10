# Design System Redação+

## Componentes

### Botões (`src/componentes/ui/Botao.tsx`)

- **Variantes**:
  - `primario`: CTAs principais (azul)
  - `neutro`: Ações secundárias (cinza)
  - `placeholder`: Estado de "em breve" (cinza desabilitado)
- **Tamanhos**: `md` (padrão), `lg`
- **Largura**: `cheio`, `conteudo` (padrão)

### Seções (`src/layout/Secao.tsx`)

- Componente de layout para divisão de conteúdo
- Suporta variações de fundo e espaçamento

### Cartões

- `CartaoEtapa.tsx`: Passos do processo
- `CartaoPlano.tsx`: Planos de assinatura
- `PerguntaFrequente.tsx`: FAQ expansível

## Cores

### Principais
- Primária: `#2563eb` (CTAs, links)
- Secundária: `#8c734e` (elementos decorativos)
- Fundo claro: `#F7F3E8` (bege)
- Fundo escuro: `#1f2937` (rodapé)

### Texto
- Primária: `#111827`
- Secundária: `#4b5563`
- Clara: `#f3f4f6`

### Estados
- Placeholder: `#9ca3af`
- Hover primário: `#1d4ed8`
- Hover secundário: `#71593b`

## Tipografia

### Famílias
- Serifa: Lora (títulos principais)
- Sans-serif: Inter (texto e interface)

### Hierarquia
- Títulos:
  - H1: Lora Bold
  - H2: Lora Bold
  - H3: Inter Semibold
- Texto:
  - Corpo: Inter Regular
  - Destaque: Inter Medium
  - Botões: Inter Semibold

## Diretrizes de Acessibilidade

### Contraste
- Texto sobre fundo claro: mínimo 4.5:1
- Elementos grandes ou decorativos: mínimo 3:1

### Interação
- Foco visível em todos elementos interativos
- Área mínima de toque: 44x44px
- Respeitar `prefers-reduced-motion`

### Placeholders
- Indicar estados "em breve" visualmente e via texto
- Manter feedback claro sobre funcionalidades futuras

## Evolução Futura

### Prioridades
1. Unificação de tokens de cor no Tailwind
2. Implementação de reduced motion
3. Revisão de contrastes em textos pequenos
4. Padronização de feedback em placeholders
5. Aproximação estética: alinhar hero e cartões de plano com o rodapé (serifa em títulos, acentos terrosos, pequenas marcas decorativas)

### Regras
- Novas animações devem respeitar preferências de movimento
- Estados de hover não podem depender apenas de cor
- Manter honestidade em promessas de funcionalidades

## Notas de ajuste visual (implementado)

- H1 do hero alterado para usar `font-serif` (Lora) para trazer tom literário.
- Pequena barra decorativa em `topo` com cor `--cor-secundaria` para reforçar a identidade.
- `CartaoPlano` usa agora `text-secundaria` e `bg-secundaria` em badges/destaques para reduzir o choque visual entre topo e rodapé.

Essas alterações são sutis e visam aproximar a linguagem visual já presente no rodapé — sem pesar a interface ou alterar a estrutura de conteúdo.