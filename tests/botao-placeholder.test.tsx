import test from 'node:test';
import assert from 'node:assert/strict';
import type { MouseEvent, KeyboardEvent } from 'react';

type BotaoComponente = typeof import('../src/componentes/ui/Botao').default;

const carregarBotao = async (): Promise<BotaoComponente> => {
  const modulo = await import('../src/componentes/ui/Botao.js');
  return modulo.default as BotaoComponente;
};

const criarEvento = () => {
  let preventions = 0;
  return {
    event: {
      preventDefault() {
        preventions += 1;
      },
    } as unknown as MouseEvent<HTMLButtonElement> & KeyboardEvent<HTMLButtonElement>,
    getPreventions: () => preventions,
  };
};

test('botão placeholder fica desabilitado e força type="button"', async () => {
  const Botao = await carregarBotao();
  const elemento = Botao({
    children: 'CTA',
    isPlaceholder: true,
    type: 'submit',
  });

  assert.equal(elemento.props.disabled, true);
  assert.equal(elemento.props.type, 'button');
  assert.equal(elemento.props['data-placeholder'], 'true');
  assert.equal(elemento.props['aria-disabled'], true);
});

test('botão placeholder substitui handlers por preventDefault', async () => {
  const Botao = await carregarBotao();
  let clicado = false;
  const elemento = Botao({
    children: 'CTA',
    isPlaceholder: true,
    onClick: () => {
      clicado = true;
    },
    onMouseDown: () => {
      clicado = true;
    },
    onKeyDown: () => {
      clicado = true;
    },
  });

  const { event, getPreventions } = criarEvento();
  elemento.props.onClick?.(event);
  elemento.props.onMouseDown?.(event);
  elemento.props.onKeyDown?.(event);

  assert.equal(clicado, false);
  assert.equal(getPreventions(), 3);
});

test('botão ativo mantém handlers originais', async () => {
  const Botao = await carregarBotao();
  let clicado = 0;
  const elemento = Botao({
    children: 'CTA',
    isPlaceholder: false,
    onClick: () => {
      clicado += 1;
    },
  });

  elemento.props.onClick?.({ preventDefault() {} } as MouseEvent<HTMLButtonElement>);
  assert.equal(clicado, 1);
});
