# Ambulances Doré — Maquette one-page

## Client
Ambulances Doré — société de taxis conventionnés, ambulances, VSL, transport PMR et missions SAMU en Loir-et-Cher (La Chaussée-Saint-Victor + Oucques). Créée en 2007.

## Source
https://www.ambulances-dore.fr/

## Palette
- `#0c76f4` bleu primaire
- `#00398c` bleu profond
- `#001f4d` bleu nuit (footer/hero)
- `#eaf2ff` / `#d4e4ff` / `#a8c8ff` bleus pâles
- Fond général `#f4f8ff` (bleuté léger, pas blanc pur — demande client)

## Typographie
- **Montserrat** 500-900 : titres, CTA, chiffres
- **Comfortaa** 400-700 : body, labels

## Signature visuelle
- **Trame moléculaire médicale** (hexagones + connexions SVG animés en fond de hero et formulaire)
- **Ligne ECG** en séparateur animé bas de hero
- **Cadre hexagonal** pour photo ambulance en hero (clip-path) + petits hexagones flottants "CPAM" / "24/7"
- **Cards services** avec hover bordure hexagonale dashed qui apparaît
- Gradient bleu profond hero + radial halos

## Structure one-page
1. Header sticky pill (glass)
2. Hero split : texte + hex-frame ambulance + badges flottants + ECG bottom
3. Services (6 cards, grid asymétrique 5-4-3 / 4-4-4, première en bleu plein)
4. Stats band bleu nuit (4 / 7 / 3 / 24-7)
5. À propos split image + 4 features
6. Split cards sécurité/CPAM (dark + light)
7. Formulaire de réservation (fond molécules, card blanche flottante, 4 vehicle options)
8. Avis clients (3 cards, étoiles, quotes)
9. Agences (2 cards split info/map avec pin animé)
10. Footer bleu nuit 4 colonnes

## Photos reprises du site original
- Hero : photo van client `279453865_...-1920w.jpg` (véhicule "AMBULANCES DORÉ" branded, dans leur hangar — photo authentique du site)
- À propos : `AdobeStock_357246586-1920w.jpg`

## Note "moins blanc" (demande client)
Backgrounds des cards/sections passés en gradients bleutés `#f1f5fb → #e3ebf8`.
Variables `--bg: #dde6f2`, `--bg-warm: #e7edf6`, `--bg-card: #f1f5fb`. Plus jamais de `#fff` pur en fond large — réservé au hero badges glass et bouton primary.

## Textes
100% repris mot pour mot du site original (H1, intro, sécurité, CPAM, avis clients, adresses, téléphones).

## Fichier unique
`index.html` — CSS + JS inline, dépend uniquement de Google Fonts et du CDN client pour images.
