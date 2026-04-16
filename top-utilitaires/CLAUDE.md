# Top Utilitaires — Maquette one-page

## Projet
Redesign de https://www.top-utilitaires.fr/ — vente et location de véhicules utilitaires (fourgons, dépanneuses, bennes, frigos, bétaillères, remorques) basé à Varennes-le-Grand (71) avec 3 agences : Chalon-sur-Saône, Dijon, Bourg-en-Bresse. Entreprise familiale depuis 1991, 500+ remorques en stock.

## Stack
- HTML/CSS/JS vanilla, fichier unique `index.html`
- Google Fonts : Fraunces (display serif) + Oswald (plaque condensed) + Public Sans (body)
- SVG inline pour plaques d'immat, carte agences, bornes kilométriques
- IntersectionObserver pour counters
- Texture papier kraft en overlay (feTurbulence)

## Registre choisi — Éditorial Artisan (catalogue de garage rural)
Étalons : Trubert + Sigot. Variante ici : catalogue de véhicules façon Manufrance 1960, esthétique Bourgogne rurale.

## Palette (imposée par client)
- Crème papier : `#f4eed8`
- Vert forêt : `#004900` (accent prononcé, bandeaux, pull quote, footer)
- Moutarde : `#c3ac2b` (accent léger, plaque d'immat, stickers)
- Encre noire : `#141411`

## Typos
- Display serif : **Fraunces** (titres magazine, opsz)
- Plaque / numéros : **Oswald** (condensée, évoque plaques FR)
- Body : **Public Sans**

## Patterns signature uniques
1. Plaque d'immatriculation jaune moutarde monumentale = carte d'identité de chaque véhicule
2. Ticker vocabulaire garage : FOURGON · BÉTAILLÈRE · DÉPANNEUSE · BENNE · FRIGO · REMORQUE · ATTELAGE
3. Chiffres monumentaux 500 / 1991 / 3 avec bornes kilométriques au scroll
4. Masthead magazine daté MCMXCI (édition N° XXXIV)

## Mouvements ambiants (3 obligatoires)
- Ticker bandeau vert (loop 22s)
- Sticker rotatif "DEPUIS 1991 · BOURGOGNE · 500 REMORQUES ·" (loop 18s)
- Trait routier vertical qui se trace au scroll + counters animés

## Fichiers
- `index.html` — maquette unique, autonome
- `index_screenshot.png` / `index_screenshot_mobile.png` — captures Puppeteer
