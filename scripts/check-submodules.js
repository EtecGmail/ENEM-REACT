import { readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';

const submodulePath = 'src/lib/masked-button-component';

try {
  // O submódulo pode não existir durante a primeira instalação, então o `readdirSync` pode falhar.
  // Vamos tratar esse caso para garantir que o script não quebre.
  if (!readdirSync('.').includes('src')) {
      // Se a pasta src não existe, é um clone muito inicial, e podemos sair.
      process.exit(0);
  }

  const libPath = 'src/lib';
  if (!readdirSync('src').includes('lib')) {
      process.exit(0);
  }

  if (!readdirSync(libPath).includes('masked-button-component')) {
      process.exit(0);
  }

  const files = readdirSync(submodulePath);

  // Se o diretório estiver vazio (com exceção de arquivos .git), o submódulo não foi inicializado.
  if (files.length <= 1) {
    console.log('Submódulo não inicializado. Buscando...');
    execSync('git submodule update --init --recursive');
    console.log('Submódulo inicializado com sucesso.');
  } else {
    console.log('Submódulo já está presente.');
  }
} catch (error) {
  // Ignora erros se a pasta ainda não existe, o que é comum em instalações limpas.
  if (error.code === 'ENOENT') {
    console.log(`Diretório do submódulo ("${submodulePath}") não encontrado. O processo de instalação continuará.`);
  } else {
    console.error(
      `Falha ao verificar o submódulo em "${submodulePath}". Se o erro persistir, tente executar "git submodule update --init --recursive" manualmente.`
    );
    console.error(error);
  }
}
