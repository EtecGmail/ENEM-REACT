import React from 'react';
import './Rodape.css';

/**
 * Componente de rodapé inspirado nas raízes da língua e na cultura brasileira.
 * Aplica textura de papel, cores terrosas e tipografia clássica, conforme as
 * especificações visuais da proposta de design.
 */
export default function RodapeRaizesLingua() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer
      className="border-t-4 border-[#6B8E23] bg-[#F7F3E8] text-[#4A4A4A] font-sans"
      style={{
        backgroundImage: "url('/imagens/papel-textura.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif text-xl mb-4">A Plataforma</h4>
            <ul className="space-y-2">
              <li>
                <a href="/sobre" className="link-manuscrito" aria-disabled="true">
                  Sobre <span className="text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em construção</span>
                </a>
              </li>
              <li>
                <a href="/faq" className="link-manuscrito" aria-disabled="true">
                  FAQ <span className="text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em construção</span>
                </a>
              </li>
              <li>
                <a href="/cursos" className="link-manuscrito" aria-disabled="true">
                  Cursos <span className="text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em construção</span>
                </a>
              </li>
              <li>
                <a href="/blog" className="link-manuscrito" aria-disabled="true">
                  Blog <span className="text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em construção</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Caminhos da Língua</h4>
            <ul className="space-y-2">
              <li>
                <span className="link-manuscrito inline-flex items-baseline gap-2 text-[#4A4A4A]">
                  Trilhas de leitura
                  <span className="text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em breve</span>
                </span>
              </li>
              <li>
                <span className="link-manuscrito inline-flex items-baseline gap-2 text-[#4A4A4A]">
                  Comunidade de revisores
                  <span className="text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em breve</span>
                </span>
              </li>
              <li>
                <span className="link-manuscrito inline-flex items-baseline gap-2 text-[#4A4A4A]">
                  Agenda de temas
                  <span className="text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em breve</span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Conexões</h4>
            <p className="mb-2">Vamos prosear?</p>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://instagram.com"
                /* Aplica cor de acento definida em CSS variável para hover,
                   mantendo coerência com o design do rodapé. */
                className="hover:text-[var(--cor-acento)]"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Ícone do Instagram */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-1.683a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-[var(--cor-acento)]"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Ícone do LinkedIn */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.452 20.452h-3.554v-5.569c0-1.327-.026-3.036-1.846-3.036-1.848 0-2.131 1.445-2.131 2.94v5.665H9.365V9h3.414v1.561h.049c.475-.899 1.639-1.846 3.372-1.846 3.604 0 4.271 2.371 4.271 5.452v6.285zM5.337 7.433a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM6.611 20.452H2.062V9h4.549v11.452z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                className="hover:text-[var(--cor-acento)]"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Ícone do YouTube */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a2.94 2.94 0 00-2.066-2.081C19.758 3.714 12 3.714 12 3.714s-7.758 0-9.432.391a2.94 2.94 0 00-2.066 2.081C0 7.869 0 12 0 12s0 4.131.502 5.814a2.94 2.94 0 002.066 2.081C4.242 20.286 12 20.286 12 20.286s7.758 0 9.432-.391a2.94 2.94 0 002.066-2.081C24 16.131 24 12 24 12s0-4.131-.502-5.814zM9.546 15.568V8.432l6.273 3.568-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Fale Conosco</h4>
            <p>Endereço: Rua da Língua, 123 – São Paulo/SP</p>
            <p>Email: contato@plataforma.com.br</p>
            <p>Telefone: (11) 1234‑5678</p>
            <p>Horário: seg–sáb, 9h às 18h</p>
          </div>
        </div>
        {/* Faixa legal */}
        <div className="mt-8 pt-4 border-t border-[#6B8E23] text-sm flex flex-col lg:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-2 lg:mb-0">
            <a href="/privacidade" className="link-manuscrito" aria-disabled="true">
              Política de Privacidade
              <span className="ml-2 text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em finalização</span>
            </a>
            <a href="/termos" className="link-manuscrito" aria-disabled="true">
              Termos de Uso
              <span className="ml-2 text-xs uppercase tracking-wide text-[color:var(--cor-secundaria-contraste)]">em finalização</span>
            </a>
          </div>
          <p>
            © {anoAtual} Nome da Plataforma. Feito com amor pela Língua Portuguesa.
          </p>
        </div>
      </div>
    </footer>
  );
}