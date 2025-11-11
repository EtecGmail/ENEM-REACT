import { useState, useRef, useEffect } from 'react';
import Botao from './componentes/ui/Botao';
import Secao from './layout/Secao';
import CartaoEtapa from './componentes/CartaoEtapa';
import CartaoPlano from './componentes/CartaoPlano';
import PerguntaFrequente from './componentes/PerguntaFrequente';
import RodapeRaizesLingua from './componentes/RodapeRaizesLingua';
import { MaskedButton } from './lib/masked-button-component/src';

export default function App() {
  const [menuAberto, definirMenuAberto] = useState(false);
  const [indiceFaqAberto, definirIndiceFaqAberto] = useState<number | null>(null);

  /**
   * Referências para gerenciamento de foco.
   * Quando o menu móvel abre, o foco vai para o primeiro link.
   * Quando fecha, devolve o foco ao botão de menu. Isso melhora
   * acessibilidade para usuários de teclado e leitores de tela.
   */
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const primeiroLinkMenuRef = useRef<HTMLAnchorElement | null>(null);

  // Gerencia foco de acordo com o estado do menu
  useEffect(() => {
    if (menuAberto) {
      primeiroLinkMenuRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [menuAberto]);

  const etapas = [
    {
      numero: 1,
      titulo: 'Envie sua redação',
      descricao:
        'Faça upload do texto ou escreva diretamente na plataforma, escolhendo o tema proposto.',
    },
    {
      numero: 2,
      titulo: 'Correção dentro do prazo do plano',
      descricao:
        'Nossa equipe analisa com base nas 5 competências oficiais do ENEM e registra comentários claros.',
    },
    {
      numero: 3,
      titulo: 'Aplique o plano de ação',
      descricao:
        'Você recebe orientações práticas, acompanha sua evolução e ajusta a escrita com segurança.',
    },
  ];

  const planos = [
    {
      nome: 'Essencial',
      preco: '97',
      periodo: '/mês',
      redacoes: 'Até 2 redações por mês',
      prazo: 'Correção em até 96 horas úteis',
      recursos: [
        'Correção completa por competências do ENEM',
        'Comentários objetivos sobre organização, repertório e coesão',
        'Plano de estudo quando erros estruturais se repetem',
        'Acesso a trilhas com fundamentos do método',
      ],
      destaque: false,
    },
    {
      nome: 'Avançado',
      preco: '157',
      periodo: '/mês',
      redacoes: 'Até 4 redações por mês',
      prazo: 'Correção em até 72 horas úteis',
      recursos: [
        'Tudo do plano Essencial',
        'Mentorias coletivas mensais com a equipe pedagógica',
        'Acompanhamento de evolução com indicadores simples',
        'Créditos extras com desconto para redações adicionais',
      ],
      destaque: true,
    },
    {
      nome: 'Premium',
      preco: '247',
      periodo: '/mês',
      redacoes: 'Até 6 redações por mês',
      prazo: 'Correção em até 48 horas úteis',
      recursos: [
        'Tudo do plano Avançado',
        'Prioridade máxima na fila de correção',
        'Plano de ação quinzenal revisado por especialista',
        'Suporte dedicado em horário comercial (segunda a sábado)',
      ],
      destaque: false,
    },
  ];

  const faqs = [
    {
      pergunta: 'Como funciona o processo de correção?',
      resposta:
        'A redação é avaliada com base nas 5 competências do ENEM, com notas, comentários específicos em cada parte do texto e orientações claras sobre próximos passos.',
    },
    {
      pergunta: 'Qual o prazo para receber a correção?',
      resposta:
        'Depende do plano contratado: Essencial (até 96 horas úteis), Avançado (até 72 horas úteis) e Premium (até 48 horas úteis). Você é avisado assim que a correção é publicada.',
    },
    {
      pergunta: 'Posso enviar mais redações do que o limite do meu plano?',
      resposta:
        'Sim. Você pode adquirir créditos adicionais. Nos planos Avançado e Premium, esses créditos têm condições especiais em relação ao valor avulso.',
    },
    {
      pergunta: 'Minhas redações e dados são protegidos?',
      resposta:
        'Estamos finalizando a camada completa de segurança: a versão pública terá conexão segura (HTTPS), controle de acesso apenas para sua conta e equipe pedagógica, além de fluxos alinhados à LGPD. Já prevemos opções para solicitar alteração ou remoção de dados conforme a lei.',
    },
    {
      pergunta: 'Posso cancelar quando quiser?',
      resposta:
        'Sim. O cancelamento é feito pelo painel, sem multa. As correções já entregues permanecem disponíveis na sua conta.',
    },
    {
      pergunta: 'Como funcionam as mentorias coletivas?',
      resposta:
        'As mentorias são mensais, voltadas para leitura comentada de redações, análise de temas e dúvidas. A agenda é comunicada com antecedência nos canais dos alunos.',
    },
  ];

  function alternarFaq(indice: number) {
    definirIndiceFaqAberto(indiceFaqAberto === indice ? null : indice);
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* Link de pulo para acessibilidade */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Ir para o conteúdo principal
      </a>
      {/* Cabeçalho */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#topo" className="flex items-center" aria-label="Redação+ - Início">
            <div className="bg-blue-600 text-white font-bold text-xl w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              R+
            </div>
            <span className="text-xl font-bold text-gray-900">Redação+</span>
          </a>
          {/* Menu mobile */}
          <button
            ref={menuButtonRef}
            className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            onClick={() => definirMenuAberto(!menuAberto)}
            aria-expanded={menuAberto}
            aria-label={menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
          {/* Navegação desktop */}
          <nav className="hidden lg:block" aria-label="Navegação principal">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#como-funciona"
                  className="font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Perguntas
                </a>
              </li>
              <li className="flex items-center">
                <MaskedButton
                  aria-label="Área do aluno, recurso em breve"
                  className="shadow-none"
                />
              </li>
            </ul>
          </nav>
        </div>
        {/* Menu mobile aberto */}
        {menuAberto && (
          <div className="lg:hidden border-b border-gray-200 bg-white shadow-md" aria-label="Menu móvel">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav>
                <ul className="space-y-4">
                  {[
                    { href: '#como-funciona', rotulo: 'Como funciona' },
                    { href: '#planos', rotulo: 'Planos' },
                    { href: '#faq', rotulo: 'Perguntas' },
                    { href: '#cta-final', rotulo: 'Entrar / Começar', indicador: 'em breve' },
                  ].map((item, index) => (
                    <li key={item.href}>
                      {item.indicador ? (
                        <MaskedButton
                          href={item.href}
                          aria-label={`${item.rotulo}, ${item.indicador}`}
                          className="w-full"
                          label={item.rotulo}
                          statusLabel={item.indicador}
                          onClick={() => definirMenuAberto(false)}
                        />
                      ) : (
                        <a
                          href={item.href}
                          ref={index === 0 ? primeiroLinkMenuRef : undefined}
                          className="block font-medium hover:text-blue-600 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                          onClick={() => definirMenuAberto(false)}
                        >
                          <span className="flex items-center gap-2">
                            {item.rotulo}
                            {item.indicador ? (
                              <span className="text-xs uppercase tracking-wide text-gray-500">
                                {item.indicador}
                              </span>
                            ) : null}
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>
      {/* Hero */}
      <main id="conteudo-principal" className="flex-grow">
        <Secao id="topo" tom="hero" centralizar>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Correção humanizada de redação ENEM com critérios oficiais
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Feedback respeitoso, técnico e direto ao ponto, para você evoluir de verdade sem
            terrorismo pedagógico.
          </p>
          <Botao tamanho="lg" onClick={() => {
            const el = document.getElementById('planos');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Ver planos nesta página
          </Botao>
          <p className="mt-6 text-gray-600 text-sm">
            Sem fidelidade obrigatória • Cancelamento simples direto na plataforma
          </p>
        </Secao>
        {/* Como funciona */}
        <Secao id="como-funciona">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Como funciona</h2>
            <p className="text-lg text-gray-600">
              Três passos claros, acompanhados por quem entende de ENEM e de estudante real.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {etapas.map((etapa) => (
              <CartaoEtapa key={etapa.numero} {...etapa} />
            ))}
          </div>
        </Secao>
        {/* Planos */}
        <Secao id="planos" tom="cinza">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Planos simples, critérios claros
            </h2>
            <p className="text-lg text-gray-600">
              Você escolhe o volume de redações e o prazo. Nós garantimos correção séria e orientação
              compreensível.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {planos.map((plano, indice) => (
              <CartaoPlano key={indice} plano={plano} />
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12 text-center text-gray-600">
            <p className="text-lg">
              <span className="font-medium text-blue-600">Transparência total:</span> limites,
              prazos e histórico de correções visíveis no painel, sem letras miúdas.
            </p>
          </div>
        </Secao>
        {/* FAQ */}
        <Secao id="faq">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Perguntas frequentes
              </h2>
              <p className="text-lg text-gray-600">
                Antes de assinar, você precisa entender exatamente o que está contratando.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((item, indice) => (
                <PerguntaFrequente
                  key={indice}
                  indice={indice}
                  pergunta={item.pergunta}
                  resposta={item.resposta}
                  aberta={indiceFaqAberto === indice}
                  aoAlternar={() => alternarFaq(indice)}
                />
              ))}
            </div>
          </div>
        </Secao>
      </main>
      {/* CTA final */}
      <Secao id="cta-final" tom="azul" centralizar>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Pronto para levar sua redação a outro nível?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Método claro, correção humanizada, critérios oficiais e acompanhamento contínuo. Sem
          fórmulas mágicas, com trabalho sério.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Botao
            variante="primario"
            tamanho="lg"
            onClick={() => {
              const el = document.getElementById('planos');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Conferir planos e novidades
          </Botao>
          <p className="text-blue-100 text-sm max-w-xl">
            Fluxo de assinatura em preparação: avisaremos aqui quando o cadastro com pagamento estiver ativo.
          </p>
        </div>
      </Secao>
      {/* Rodapé */}
      <RodapeRaizesLingua />
    </div>
  );
}