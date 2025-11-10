@echo off
REM Script para abrir o projeto no Visual Studio Code
cd ..
IF EXIST "%LOCALAPPDATA%\Programs\Microsoft VS Code\Code.exe" (
  echo Abrindo projeto no Visual Studio Code...
  "%LOCALAPPDATA%\Programs\Microsoft VS Code\Code.exe" .
) ELSE (
  REM Se VS Code não estiver instalado no local padrão, tenta usar comando code se estiver no PATH
  echo Tentando abrir com comando 'code'...
  code .
)