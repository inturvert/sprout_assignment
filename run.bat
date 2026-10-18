@echo off
setlocal

echo Preparing the Sprout application...
cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 exit /b 1
)

echo Starting Sprout on the Vite development server...
call npm run dev

endlocal
