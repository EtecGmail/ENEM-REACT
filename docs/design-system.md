# Design System Redação+

## Componentes

### Botões (`src/componentes/ui/Botao.tsx`)

- **Variantes**:
  - `primario`: CTAs principais (azul)
  - `neutro`: Ações secundárias (cinza)
  - `placeholder`: Estado de "em breve" (cinza desabilitado)
- **Tamanhos**: `md` (padrão), `lg`
- **Largura**: `cheio`, `conteudo` (padrão)
- **Placeholders**:
  - Quando `isPlaceholder` está ativo, o botão força `disabled`, ignora handlers de mouse/teclado (incluindo `onClick`/`onKeyDown`) e mantém `type="button"` para evitar submits acidentais.
  - A variante `placeholder` garante `cursor-not-allowed` e remove efeitos de hover/foco via atributos `disabled`.

### Seções (`src/layout/Secao.tsx`)

- Componente de layout para divisão de conteúdo
- Suporta variações de fundo e espaçamento

### Cartões

- `CartaoEtapa.tsx`: Passos do processo
- `CartaoPlano.tsx`: Planos de assinatura
- `PerguntaFrequente.tsx`: FAQ expansível

## Tokens de cor

Os valores abaixo estão definidos em `src/index.css` como variáveis CSS e são a referência oficial para futuras telas.

| Token | Valor | Uso atual |
| --- | --- | --- |
| `--cor-primaria` | `#2563eb` | CTAs ativos, links e destaques informativos |
| `--cor-primaria-hover` | `#1d4ed8` | Hover em CTAs ativos |
| `--cor-secundaria` | `#8c734e` | Detalhes terrosos, badges de plano, elementos do rodapé |
| `--cor-secundaria-hover` | `#71593b` | Hover em elementos secundários |
| `--cor-fundo-claro` | `#F7F3E8` | Textura do rodapé e áreas terrosas |
| `--cor-fundo-escuro` | `#1f2937` | Texto invertido e planos futuros com fundo escuro |
| `--cor-texto-primaria` | `#111827` | Títulos e copy principal |
| `--cor-texto-secundaria` | `#4b5563` | Parágrafos, microtextos |
| `--cor-texto-clara` | `#f3f4f6` | Textos sobre fundo escuro |
| `--cor-placeholder` | `#9ca3af` | Estados “em breve”, botões sem fluxo ativo |
| `--cor-placeholder-hover` | `#6b7280` | Referência futura para interação em placeholders |
| `--cor-acento` | `#8c734e` | Mantido para compatibilidade e uso manual |

### Combinações sob observação

- `text-gray-600` sobre `bg-gray-50` (cards de planos): manter monitorado e escurecer levemente se o texto ficar pequeno.
- `text-blue-100` sobre `bg-blue-600` (CTA final): se adicionarmos mais conteúdo, reforçar contraste com `text-blue-50` ou similar.
- `text-[#4A4A4A]` sobre `#F7F3E8` (rodapé): contraste ok para parágrafos médios, mas revisar se houver textos menores.

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

### Placeholders e fluxos futuros
- Botões sem fluxo ativo devem usar `isPlaceholder` no componente `Botao`, exibindo o rótulo “em breve/fluxo em preparação”.
- Nas seções de planos, manter microtexto explicando o que ocorrerá quando o fluxo for publicado (cadastro → pagamento → acesso).
- Links de documentos legais e itens de menu sem destino definitivo precisam sinalizar “em construção” ou “em finalização”.

## Evolução Futura

### Prioridades
1. Mapear classes Tailwind para tokens em arquivo central (sem alterar estrutura atual).
2. Ajustar contraste dos cenários listados acima conforme evoluírem.
3. Manter hero e CTA finais com toques terrosos (bordas, tipografia) para aproximar visualmente do rodapé.
4. Reforçar consistência de microtextos explicando placeholders em todas as telas.

### Regras
- Novas animações devem respeitar `prefers-reduced-motion`.
- Estados de hover não podem depender apenas de cor.
- Mensagens de segurança e legais devem deixar claro quando algo estiver “em preparação” ou “em finalização”.

## Acessibilidade e navegação (backlog imediato)

- **Menu mobile**: comportamento de foco já mapeado em `App.tsx`. Manter requisito para novas iterações (abrir → foco no primeiro link, fechar → foco volta ao acionador).
- **Horas úteis (tooltip)**: texto associado via `aria-describedby` em `CartaoPlano`. Garantir que alterações futuras mantenham associação e sejam acessíveis por teclado.
- **Preferência por menos movimento**: qualquer animação nova deve ter fallback estático ou ser desativada quando `prefers-reduced-motion` estiver ativo.
- **Ícones sociais**: `aria-label` presente. Estados futuros (hover, focus) precisam de variações adicionais além de cor.

## Direção visual

- Hero, seções de conteúdo e rodapé devem compartilhar o clima “brasileiro, humano e literário”. Use tipografia serifada para títulos-chave e detalhes em `--cor-secundaria`.
- Para novos componentes, considere texturas leves ou microdetalhes que remetam ao papel artesanal do rodapé, sem sobrecarregar o layout.