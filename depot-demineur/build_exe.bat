@echo off
REM Fabrique Demineur.exe a partir de demineur.py (a lancer dans le dossier du jeu)
python -m pip install pyinstaller
python -m PyInstaller --onefile --windowed --name Demineur demineur.py
echo.
echo Termine : l'exe est dans dist\Demineur.exe
pause
