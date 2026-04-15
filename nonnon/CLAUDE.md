# Nonnon Plomberie — Maquette Skypeo

## Description
Maquette one-page pour **Tony Nonnon**, plombier artisan à Saint-François, Guadeloupe (971). Site original : plomberie-nonnon.fr.

## Stack
- HTML/CSS/JS vanilla, fichier unique `index.html`
- Google Fonts : **Fraunces** (display serif editorial) + **Inter Tight** (body)
- Images : **4 photos réelles du client** récupérées via Puppeteer (elles étaient en `background-image` CSS, pas dans des `<img>`) :
  - `IMG-20210715-WA0006-1152w.jpg` — plombier au travail
  - `IMG-20210622-WA0002-1920w.jpg` — chantier (utilisée en hero bg)
  - `IMG-20210622-WA0009-675h.jpg` — citerne
  - `Image-1+(1)-856h.jpg` — réalisation plomberie
- **Zéro image stock / Unsplash**

## Style signature
**"L'eau, métier d'îlien"** — fond océan profond avec vraies photos du plombier en hero, vagues SVG animées en bas de hero, typographie Fraunces éditoriale avec soulignement cuivré, gouttes d'eau SVG, citation poétique centrée en intro, photo essay 4 chantiers, section citerne avec stats ACS.

## Palette — couleurs officielles du site original
- `--deep: #042B4D` (bleu nuit profond — couleur officielle)
- `--mid: #63B4D1` (bleu eau clair — couleur officielle)
- `--cream: #F5EEDF` (crème sable, fond principal)
- `--copper: #C08242` (cuivre tuyauterie, accent CTA)

## Structure
1. **Hero** — Photo chantier en fond + overlay bleu nuit, H1 "L'eau, un métier d'îlien", coordonnées GPS, vagues animées
2. **Intro** — Grande citation centrée avec icône goutte SVG
3. **À propos** — Photo client + tag cuivré incliné + drop signature "T. Nonnon"
4. **Services (dark)** — 4 cards avec photos réelles, numérotation italique cuivre, tags
5. **Citerne ACS** — Photo chantier + stats (ACS, 24/7, 100%, Sur mesure)
6. **Photo essay** — Grid 4 photos asymétrique (big/small/small/big)
7. **Pull quote (dark)** — « L'énergie est notre avenir, économisons-la »
8. **Contact** — 3 cartes + formulaire dark
9. **Footer** — Logo big + 3 colonnes, gradient vers ink

## Décisions importantes
- Palette **officielle du site original** (#63B4D1 + #042B4D)
- Hero en **image immersive** avec overlay plutôt que split
- Vagues SVG animées avec 3 couches (flow décalé)
- Typographie Fraunces avec soulignement cuivré sur les italiques
- Aucun schéma technique (v1 rejetée par le client)
- Texture feTurbulence subtile teintée bleu 0.35 opacity

## Contact client
- Tony Nonnon — 06 90 39 55 66 — tony.nonnon@gmail.com
- Route de Dubedou, 97118 Saint-François
