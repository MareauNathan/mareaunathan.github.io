# Démineur en Python

Un démineur complet avec interface graphique, écrit en Python avec tkinter
(bibliothèque standard, aucune installation supplémentaire).

![Capture d'écran du jeu](capture.png)

## Télécharger (Windows)

[Télécharger Demineur.exe](https://github.com/MareauNathan/demineur/releases/latest/download/Demineur.exe)

Au premier lancement, Windows peut afficher « Windows a protégé votre ordinateur »
parce que l'application n'est pas signée. Clique sur **Informations complémentaires**,
puis sur **Exécuter quand même**.

## Lancer depuis le code

```bash
python demineur.py
```

Python 3 est nécessaire. tkinter est inclus avec Python sous Windows et macOS ;
sous Linux, installe le paquet `python3-tk`.

## Fonctionnalités

- 3 niveaux : Facile (9×9, 10 mines), Moyen (16×16, 40 mines), Difficile (16×30, 99 mines)
- Premier clic toujours sûr, avec ouverture automatique des zones vides
- Drapeaux (clic droit) et ouverture autour d'un chiffre (clic sur le chiffre ou molette)
- Chronomètre, compteur de mines, bouton pour rejouer (aussi avec F2)
- Meilleurs temps sauvegardés dans `~/.demineur_scores.json`
- 3 thèmes : clair, sombre, et « Plaines & marécages » (herbe, mares et roseaux dessinés par le code)
- Animation d'explosion à la défaite

## Organisation du code

- La classe `Plateau` contient toute la logique du jeu (mines, cascade, drapeaux, victoire),
  sans aucune dépendance à tkinter.
- La classe `Application` s'occupe uniquement de l'affichage et des évènements.

## Fabriquer l'exe soi-même

Double-clique sur `build_exe.bat` : l'exe est créé dans `dist\Demineur.exe`.

## Réalisation

À compléter : ce que j'ai écrit moi-même, ce qui vient d'un tutoriel ou d'une aide extérieure,
et ce que ce projet m'a appris.
