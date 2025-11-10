# Instruções para IA — Projeto Redação+

Este documento orienta agentes de IA que atuam sobre a landing page **Redação+**, baseada em React e alinhada ao **Guia Método Amarelo**. Ele esclarece convenções de código, padrões arquiteturais e cuidados de acessibilidade que precisam ser mantidos ou aprimorados ao evoluir este projeto.

## Visão Geral

- **Tipo**: aplicação React + TypeScript com Tailwind CSS.
- **Objetivo**: promover o serviço de correção de redações Redação+.
- **Política de idioma**: variáveis, funções e comentários em português sempre que possível; termos técnicos consolidados podem permanecer em inglês.
- **Guia**: segue as diretrizes do Guia Método Amarelo para simplicidade, segurança, acessibilidade e design tokens centralizados.

## Padrões Arquiteturais

### Estrutura de Componentes

- **UI Primitivas** (`src/componentes/ui/`): botões e elementos reutilizáveis com variantes definidas via class‑variance‑authority.
- **Componentes de negócio** (`src/componentes/`): cartões de etapas, planos, perguntas frequentes.
- **Layout** (`src/layout/`): define seções com espaçamentos e cores de fundo predefinidas.

### Gestão de Estado

- Usa `useState`, `useRef`, `useEffect` locais; sem estado global.
- Gerenciamento de foco em menus modais: ao abrir, o foco vai para o primeiro item; ao fechar, retorna ao botão que abriu.

### Estilização e Tokens de Design

- Tailwind CSS com configuração personalizada.
- Variáveis CSS em `:root` definem fontes e cores (como `--cor-acento` e `--cor-acento-hover`).
- Cores, tipografias e sombras são centralizadas em tokens, garantindo contraste mínimo 4,5:1 e consistência de design.
- A utilidade `juntarClasses.ts` combina classes Tailwind de forma segura.

## Acessibilidade e UX

- Navegação completa por teclado com foco visível; menus e abas usam `aria-expanded`, `aria-controls` e `role` apropriados.
- Respeita `prefers-reduced-motion`: animações e microinterações (ex.: sublinhados) desligam a transição para usuários que pedem movimento reduzido.
- Tamanhos de alvo (botões, links) são ≥ 44px, e contrastes de cores seguem as recomendações da WCAG 2.2.
- Mensagens e rótulos escritos de forma clara e concisa, evitando jargões técnicos e promessas exageradas.

## Fluxo de Desenvolvimento

### Instalação

Consulte o `README.md` para preparar o ambiente em Windows e rodar os scripts de instalação (`scripts/instalar_dependencias.bat`) e execução (`scripts/executar_servidor.bat`).

### Comandos Principais

- `npm run dev`: inicia servidor Vite em `localhost:5173`.
- `npm run build`: gera build de produção.
- `npm run preview`: pré-visualiza a build.

### Criação de Componentes

1. Crie um arquivo em `componentes/` ou `componentes/ui/` conforme a função.
2. Siga a convenção de nomes em português (e.g. `CartaoPlano`, `PerguntaFrequente`).
3. Use TypeScript para tipagem explícita.
4. Prefira utilitários Tailwind e tokens de cor; evite espalhar códigos hex nos componentes.

### Estilo

1. Use utilitários Tailwind para margens, tamanhos e cores; use tokens CSS para cores e fontes.
2. Estilos adicionais ou overrides devem ser colocados em `src/index.css` ou em um arquivo específico, sempre respeitando `prefers-reduced-motion`.
3. Não prometa segurança, privacidade ou desempenho além do implementado; os textos e rótulos devem ser honestos e alinhados ao Guia.

## Conformidade com o Guia Método Amarelo

- **Simplicidade e foco**: componentes enxutos, sem camadas desnecessárias; usar YAGNI/DRY.
- **Separação de responsabilidades**: UI, aplicação e domínio separados.
- **Design tokens e cores acessíveis**: paletas e tipografia centralizadas para assegurar contraste e consistência.
- **Acessibilidade**: foco visível, rotação de cores, suporte a leitores de tela, e respeito a `prefers-reduced-motion`.
- **UX Writing**: clareza e concisão; evitar jargões técnicos; tom acolhedor e transparente.

Seguindo estas instruções, o projeto permanecerá aderente ao Guia Método Amarelo e pronto para evoluções seguras e acessíveis. (See <attachments> above for file contents. You may not need to search or read the file again.)

## Versão e referência

- Este documento complementa o `README.md` e está embasado no anexo **"Guia Yuri Garcia Pardinho — Método Amarelo.pdf"** presente em `attachments/`.
- Ao propor mudanças que afetem UX, tokens de design ou acessibilidade, mencione explicitamente qual princípio do Guia foi atendido (ex.: contraste, redução de movimento, simplicidade).

## Contrato rápido (inputs / outputs / erros)
- Inputs esperados: componentes pequenos que recebem props tipadas em TypeScript (strings, callbacks, enums simples).
- Outputs: componentes acessíveis, responsivos e com classes Tailwind gerenciáveis via `juntarClasses.ts`.
- Erros: valide props obrigatórias; reporte quando uma mudança exigir variáveis de ambiente ou assets não presentes em `public/`.

## Checklist de acessibilidade (use sempre)
- `alt` em todas as imagens em `public/imagens/` ou `img` usados em componentes.
- `aria-*` onde necessário: `aria-expanded`, `aria-controls` para menus/abas; `role` em estruturas não-semânticas.
- Gerenciamento de foco: ao abrir modais/menus, mova foco para o primeiro item e retorne ao trigger ao fechar.
- `prefers-reduced-motion`: respeitar no CSS/JS (use `@media (prefers-reduced-motion: reduce)` ou checar via JS antes de animações).
- Alvos de toque ≥ 44px e contraste mínimo 4.5:1 para texto principal.

## Convenções importantes (faça isso aqui)
- Idioma: use português para nomes de arquivos, funções e comentários sempre que fizer sentido (ex.: `CartaoPlano`, `Botao`).
- Componentização: cada componente deve ser um arquivo em `src/componentes/` ou `src/componentes/ui/` com export default e props tipadas.
- Estilo: preferir utilitários Tailwind no JSX; atualize tokens em `tailwind.config.cjs` ou variáveis `:root` em `src/index.css` quando for necessário um token novo.
- Reutilização: primitives UI ficam em `src/componentes/ui/`. Exemplo de utilitário: `utils/juntarClasses.ts` (use para combinar classes dinamicamente).

## Fluxo de desenvolvimento (comandos verificados)
- Instalar dependências (Windows helper):

```powershell
cd scripts
.\instalar_dependencias.bat
```

- Iniciar dev server (Vite):

```powershell
npm run dev
# ou, no Windows, scripts\executar_servidor.bat
```

- Build produção:

```powershell
npm run build
```

- Preview da build:

```powershell
npm run preview
```

- Checagem rápida de tipos (local):

```powershell
npx tsc --noEmit
```

Observação: há scripts `.bat` para facilitar o uso no Windows; em macOS/Linux use os comandos npm diretamente.

## Exemplo prático — `Botao` (padrão esperado)

Assuma um componente primitivo com contrato simples. Exemplo de props e uso (conceptual):

```tsx
// props esperadas (exemplo)
type BotaoProps = {
	label: string;
	onClick?: () => void;
	variant?: 'primary' | 'secondary';
	className?: string;
};

// uso esperado
// <Botao label="Assinar" variant="primary" onClick={() => enviarEvento()} />
```

Quando alterar variantes visuais, prefira atualizar `Botao.tsx` em `src/componentes/ui/` e usar tokens do Tailwind em `tailwind.config.cjs` em vez de hex direto.

## Padrões de PR e mudanças seguras
- Mantenha diffs pequenos e revertíveis. Prefira adicionar um novo componente em vez de alterar muitos locais.
- Documente no corpo do PR quais princípios do Guia Método Amarelo foram considerados (acessibilidade, contraste, redução de movimento, simplicidade).
- Para mudanças de design tokens, inclua um screenshot e a razão (ex.: melhorar contraste para 4.5:1).

## Integrações e segredos
- Não inclua chaves ou segredos em código. Se adicionar integrações externas, use variáveis de ambiente e documente as chaves necessárias no README ou num arquivo `.env.example`.

## Lacunas detectadas (o que o agente deve reportar)
- Não há testes automáticos no repositório: peça orientação antes de adicionar frameworks de teste.
- Se uma mudança pedir criação de novas rotas, APIs ou assets, informe qual arquivo/folder será adicionado (ex.: `src/services/`, `public/imagens/`).

## Quando pedir esclarecimentos ao mantenedor
- Sempre pergunte quando a mudança:
	- afeta tokens de design (cores, fontes),
	- introduz nova dependência NPM,
	- requer armazenamento de segredos ou credenciais,
	- altera comportamento crítico de acessibilidade.

## Onde olhar primeiro (mapa rápido)
- Ponto de entrada: `src/main.tsx`, `src/App.tsx`.
- Componentes: `src/componentes/` e `src/componentes/ui/`.
- Layouts: `src/layout/Secao.tsx`.
- Utilitários: `utils/juntarClasses.ts`.
- Config e tokens: `tailwind.config.cjs`, `src/index.css`.

---

Se desejar, eu posso:
- adicionar um exemplo real com as props atuais de `Botao.tsx` e `Secao.tsx` (leio os arquivos e escrevo o snippet),
- criar um `README-CONTRIBUTING.md` com comandos cross-platform e checklist de PR.

Indique qual opção prefere e eu executo em seguida.

