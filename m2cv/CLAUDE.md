# M2CV — Maquette climatisation & chauffage

## Description
Maquette one-page pour M2CV SARL — artisan-technicien CVC indépendant en Meurthe-et-Moselle (54), gérée par Nicolas Watrin.

**Pas de site web original** — contenu construit à partir de la carte de visite + 4 avis Google + 3 photos client + logo officiel fourni.

## Stack technique
- HTML / CSS / JS vanilla (fichier unique `index.html`)
- Google Fonts : **Fraunces** (variable opsz 144) + **Manrope** + **Space Mono**
- Logo client + 3 photos `.webp` locales

## Fichiers principaux
- `index.html` — Maquette complète
- `Logo_M2CV.png` — logo officiel du client
- `M2cv (1,2,3).webp` — photos réalisations client
- `.claude/settings.local.json` — Permissions Claude
- `.vscode/settings.json` — Config Live Server

## Style : "Artisan moderne chaleureux"
Direction contemporaine, accessible, avec du caractère — **sans tomber dans l'éditorial too much** (première version v2 était trop "manuel technique 1975").

### Palette (imposée par le logo client)
- Background crème doux `#f6f2ea`
- Encre `#1a2332`
- **Orange `#f39b23`** — accent chaud, CTAs, soleil du logo
- **Bleu `#5b8dc6`** — accent froid, chiffres, sous-titre du logo
- Gradient bleu→orange = dualité froid/chaud (clim/chauffage)

### Éléments conservés de la v2
- Thermomètre fixe scroll-lié (mercure monte, couleur bleu→orange)
- Numérotation discrète § 01 / § 02 / § 03 / § 04
- Typo Fraunces + Space Mono
- Schémas SVG techniques dans procédures

### Éléments abandonnés
- Grille millimétrée omniprésente (remplacée par trame 80px très discrète)
- Crop marks aux coins
- Numéro de page "p. 01 — 04" en bas
- Tampons rouges inclinés (EN SERVICE, CERTIFIÉ 54)
- Annotations manuscrites SVG avec flèches
- Drop caps géantes italiques rouges
- Dents découpées du "Bon d'intervention"
- Chiffres romains I-VI (remplacés par 01-06)
- "Rapport N° 001 — Conforme classé" (remplacé par cards témoignages modernes)

## Features
1. **Thermomètre scroll-lié** : SVG fixe à droite, mercure monte avec scroll, couleur interpolée bleu `#5b8dc6` → orange `#f39b23`, graduations -40/+40°C
2. Header sticky avec blur, logo image client, CTA téléphone en pilule noire qui devient orange au hover
3. Hero : titre Fraunces avec italiques orange+bleu, **photo client** à droite (maison+clim ext) avec tag "Chantier réalisé"
4. § 01 Procédures : 6 lignes, hover slide-in noir avec numéro orange, alternance photos clients et schémas SVG bi-couleur
5. § 02 Garanties : photo overlay "10+" orange + liste 4 engagements en bleu
6. § 03 Témoignages : 4 cards avec avatars gradient bleu→orange, étoiles orange, guillemets Fraunces orange
7. § 04 Contact : card sombre avec glow radial orange animé, téléphone géant Fraunces, SVG carte Lorraine

## Décisions importantes (3 itérations)
- **v1 rejetée** : trop "SaaS IA générique" (gradients thermique, cards rounded, stats 2x2, badge pulse dot)
- **v2 rejetée** : trop éditorial vintage 1970 pour un artisan — *"un peu too much pour ce genre de métier"*
- **v3 retenue** : moderne accessible + éléments signature (thermomètre scroll-lié, numérotation §, Fraunces italiques colorés), charte logo client, photos client intégrées
