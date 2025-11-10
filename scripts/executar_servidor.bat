@echo off
REM Script para iniciar o servidor de desenvolvimento
cd ..
echo Iniciando servidor de desenvolvimento Vite...
npm run dev
IF %ERRORLEVEL% NEQ 0 (
  echo Houve um erro ao iniciar o servidor. Verifique se as dependências estão instaladas.
  exit /B %ERRORLEVEL%
)