# Projeto Redação+ 

Este repositório contém uma versão modularizada da landing page do **Redação+**, construída com React e Tailwind CSS, seguindo as diretrizes do **Guia Método Amarelo**. O código foi organizado em pequenos componentes reutilizáveis e todos os nomes de variáveis e funções estão em português quando possível, conforme recomendado no guia.

## Pré‑requisitos

Para executar este projeto em um computador **Windows** você precisará dos seguintes itens:

1. **Node.js** (versão 18 ou superior) – use o instalador oficial em <https://nodejs.org> ou instale via [Chocolatey](https://chocolatey.org/) executando `choco install nodejs` em um terminal com permissões de administrador.
2. **Um editor de código** – recomendamos o [Visual Studio Code](https://code.visualstudio.com/), mas qualquer editor que suporte TypeScript funcionará.
3. **Git** (opcional, mas útil para clonar o repositório e versionar alterações). Disponível em <https://git-scm.com/download/win>.

> **Observação:** As instruções a seguir assumem que você já possui o Node.js instalado no seu sistema. Se não tiver, instale o Node antes de continuar.

## Instalação

1. **Clone ou copie** este repositório para uma pasta no seu computador:

   ```cmd
   git clone <URL_DO_REPOSITORIO>
   cd projeto-redacao
   ```

2. **Instale as dependências** do projeto usando o script fornecido. No Windows você pode utilizar os arquivos `.bat` dentro da pasta `scripts` para automatizar este passo:

   ```cmd
   cd projeto-redacao\scripts
   instalar_dependencias.bat
   ```

   Este script executa `npm install` na raiz do projeto para baixar todas as bibliotecas necessárias (React, Tailwind CSS, Vite, etc.).

## Execução do servidor de desenvolvimento

Após instalar as dependências, inicie o servidor de desenvolvimento para visualizar a landing page localmente. Você pode fazer isso de duas maneiras:

### Método 1 – Manual

Na raiz do projeto (`projeto-redacao`), execute:

```cmd
npm run dev
```

O Vite abrirá um servidor local (por padrão em `http://localhost:5173`) e recarregará automaticamente quando você modificar os arquivos.

### Método 2 – Script automatizado

Na pasta `scripts`, execute o arquivo `executar_servidor.bat`:

```cmd
cd scripts
executar_servidor.bat
```

Esse script chama `npm run dev` e mantém o processo em execução. O endereço do servidor será exibido no terminal.

## Editando o código

Os componentes estão organizados em subpastas dentro de `src/`. Você pode abrir o projeto no Visual Studio Code usando o script `editar_codigo.bat`:

```cmd
cd scripts
editar_codigo.bat
```

Este script simplesmente executa `code ..` (assumindo que o VS Code está no PATH). Se você usa outro editor, abra a pasta `projeto-redacao` manualmente.

### Estrutura de pastas

```
projeto-redacao/
├── package.json             # Configurações de dependências e scripts npm
├── postcss.config.cjs       # Configuração do PostCSS (requerido pelo Tailwind)
├── tailwind.config.cjs      # Configuração do Tailwind com diretório fonte
├── tsconfig.json            # Configuração do TypeScript
├── vite.config.cjs          # Configuração do Vite
├── public/                  # Arquivos públicos (favicon, etc.)
├── scripts/                 # Scripts de automação para Windows
│   ├── instalar_dependencias.bat
│   ├── executar_servidor.bat
│   ├── editar_codigo.bat
│   └── abrir_navegador.bat
└── src/
    ├── main.tsx            # Ponto de entrada da aplicação React
    ├── index.css           # Importações de Tailwind e estilos globais
    ├── App.tsx             # Componente principal que monta a landing
    ├── componentes/
    │   ├── CartaoEtapa.tsx
    │   ├── CartaoPlano.tsx
    │   └── PerguntaFrequente.tsx
    ├── layout/
    │   └── Secao.tsx
    └── componentes/ui/
        └── Botao.tsx
```

## Abrindo no navegador

Se desejar abrir o endereço local automaticamente após iniciar o servidor, você pode usar o script `abrir_navegador.bat` depois de executar o servidor. Esse script abre o endereço padrão do Vite (`http://localhost:5173`) no navegador padrão do Windows:

```cmd
cd scripts
abrir_navegador.bat
```

## Como personalizar o design

Os estilos são definidos majoritariamente via Tailwind CSS. Para alterar cores, espaçamentos ou fontes, veja o arquivo `tailwind.config.cjs`. O guia **Método Amarelo** recomenda:

* Utilizar cores com alto contraste para acessibilidade.
* Evitar prometer segurança ou privacidade que o produto não oferece; todos os textos foram ajustados para refletir isso.
* Escrever código e comentários em português salvo termos técnicos consolidados.

Os componentes foram extraídos para arquivos separados para facilitar a manutenção e a reutilização.

## Próximos passos

Depois de executar localmente, você pode adaptar o conteúdo, integrar uma API ou publicar a landing em um serviço de hospedagem estática (por exemplo, Vercel ou Netlify). O projeto já está configurado para deploy com uma simples `npm run build`, que gera os arquivos estáticos em `dist/`. Para enviar esses arquivos para produção, siga as instruções do provedor de hospedagem.

Caso tenha dúvidas ou queira sugerir melhorias, abra um pull request ou crie uma *issue* no repositório original.
