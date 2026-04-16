# U Campanile — Maquette one-page

## Projet
Refonte du site ucampanile.com — artisan campanaire familial en Corse depuis 1996 (installation, restauration, électrification de cloches d'église, protection foudre, sonorisation, filets anti-pigeons).

## Registre
**Registre 1 — Éditorial Artisan** (après Trubert + Sigot, avec signature distincte).

## Signature visuelle (à ne pas réutiliser)
- **Chapitrage aux heures canoniales** romaines (VI Matines · IX Laudes · XII Angélus · XV None · XVIII Vêpres · XXI Complies) avec illumination en bourgogne à tour de rôle.
- **Cloche SVG fantôme** qui oscille dans le hero + 3 **cercles d'ondes sonores** concentriques qui pulsent.
- **Glossarium campanarium** (lexique métier en bordeaux profond) : Cerveau, Battant, Joug, Pincée, Volée, Glas, Angélus, Bélière.
- **Cartouche lapidaire latin** « VOX CAMPANAE · EX CORSICA · MMXXVI ».
- **Année en chiffres romains** MCMXCVI (1996) en or sur le hero.
- **Planches numérotées** Pl. I à Pl. XI.
- **Carte de Corse au trait** avec compass + points Bastia/Piève/Ajaccio/Bonifacio/Calvi.

## Palette
- `--cream: #f2ebe1` (parchemin)
- `--ink: #0e0b08` (encre)
- `--burgundy: #580a12` (CTA — donné par le client)
- `--gold: #8c6d3b` (inscriptions rares)

## Typographie
- Display : **Cormorant Garamond** (humaniste XVIᵉ, esprit missel)
- Inscription : **Marcellus** (capitales épigraphiques)
- Body : **Inter Tight** (exception sans)

## Stack
- `index.html` single-file, vanilla CSS + JS
- Google Fonts seul CDN
- Pas de framework, pas de build
- Photos locales dans `assets/`

## Sections (dans l'ordre)
1. Masthead « N° I — MMXXVI · Vox Campanae ex Corsica »
2. Header sticky (brand + nav + phone CTA)
3. Hero asymétrique (titre MCMXCVI + planche photo Bodel 2015)
4. Bande des **heures canoniales** (chapitrage signal)
5. Chapitre I — L'atelier (drop cap + cartouche + planche de 4 photos)
6. Ticker campanaire noir
7. Pull quote « Le glas, la volée, l'angélus »
8. Chapitre II — Les 6 métiers (liste éditoriale avec roman numerals)
9. Chapitre III — Glossarium (8 termes sur fond bourgogne)
10. Chapitre IV — Planche d'ouvrages (6 photos grid)
11. Chapitre V — Zone d'intervention (Corse au trait + stats)
12. Chapitre VI — Correspondance (contact + phone monumental)
13. Footer

## Mouvements ambiants (3, visibles sans scroll ni hover)
1. Ticker campanaire (loop 32s)
2. Cloche oscillation + ondes sonores (loop 3.6-4.2s)
3. Heures canoniales illuminées en rotation (interval 2.6s)

## Photos
Téléchargées depuis ucampanile.com (CDN Solocal) via `download.js` — 19 fichiers dans `assets/` : logo, hero-home, bell-grand, bell-close, church-exterior, clocher-01, mecanisme, team-work-01/02, restauration-01, horloge-cadran, paratonnerre-01/02, foudre-01/02/03, filet-01/02, church images.

## Script utilitaire
- `download.js` : Node script pour re-télécharger les photos depuis le CDN si besoin.

## Responsive
Testé 320 / 375 / 768 / 1440. Téléphone `white-space: nowrap`. Grilles passent en stack sur 820px et moins.
