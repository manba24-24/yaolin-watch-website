@echo off
setlocal

cd /d "%~dp0"

start "" http://127.0.0.1:4173/
start "Yaolin Website Dev Server" cmd /k npm run dev -- --host 127.0.0.1 --port 4173

endlocal
