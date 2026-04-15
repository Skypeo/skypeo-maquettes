# Top Elec Energy — Maquette

## Projet
Site one-page pour **Top Elec Energy**, électricien à Azay-le-Rideau (37190), 17 ans d'expérience, intervention 100 km, astreinte 24/7.
Source originale : https://www.top-elec-energy.com/

## Stack
HTML/CSS/JS vanilla en fichier unique `index.html`. Google Fonts (Oswald, Fraunces, Inter Tight).

## Direction artistique
**Style : Tableau de bord énergétique / Industrial Lumière**
- Palette extraite du site original : `#00294C` nuit, `#1B52AC` bleu, `#68CCD1` cyan lumière (accent voyants), `#FFFBEE` crème, `#0E1A2B` ardoise
- Typo : Fraunces (serif italique, manifeste énergie) + Oswald (display industriel, compteurs) + Inter Tight (corps)
- Signature : tableau électrique live avec LEDs cyan clignotantes + ondes sinusoïdales 50 Hz en séparateurs + horloge astreinte live + carte concentrique zone d'intervention

## Fichiers
- `index.html` — maquette complète (hero + à propos + services + domotique + urgence + zone + contact + footer)
- `screenshot.js` lancé depuis le parent pour générer les captures

## Images utilisées
- Logo original du client (`logo-41eb4cad-*.png`)
- Photo client réelle tableau électrique (`IMG_20231031_121924`)
- Stock Adobe maison connectée (`AdobeStock_134797674`)

## Règles respectées
- Zéro invention de texte, tout vient du site source
- Palette strictement extraite du CSS original
- Hero visible au chargement (pas d'IO requis)
- Responsive 320/768/1440, hamburger JS vanilla
- prefers-reduced-motion respecté
- border-radius partout via variables CSS
