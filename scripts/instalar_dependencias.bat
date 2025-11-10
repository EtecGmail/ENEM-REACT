@echo off
REM Script para instalar dependências Node.js
cd ..
echo Instalando dependências com npm install...
npm install
IF %ERRORLEVEL% NEQ 0 (
  echo Houve um erro na instalação. Verifique se o Node.js está instalado e no PATH.
  exit /B %ERRORLEVEL%
)
echo Dependências instaladas com sucesso.