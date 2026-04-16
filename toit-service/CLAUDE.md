# Toit Service — maquette one-page

## Projet
Maquette one-page premium pour **Toit Service**, entreprise de couverture familiale à Gaillon (27600) et Muids (27430), Normandie. 40 ans d'expérience, 9 artisans, 2 agences, installateurs Velux® agréés.

Site source : https://www.toitservice-couverture-eure.fr/
Couleur client imposée : `#e43147`

## Registre visuel
**Registre 1 — Éditorial Artisan** (variante "Revue de Couverture").

Rationale : « de père en fils depuis 40 ans » = signal exact du registre (transmission, patrimoine, geste artisanal).

## Stack technique
- HTML/CSS/JS vanilla, fichier unique `index.html` (autonome sauf Google Fonts + images CDN client)
- Fonts : **Instrument Serif** (display italique) + **Public Sans** (body) — jamais utilisées dans le dossier Skypeo
- Palette : crème `#f6f1ea` / noir encre `#141414` / rouge client `#e43147` (3 couleurs strictes, zéro gradient)
- Grain papier SVG feTurbulence global (opacity 0.45, mix-blend-mode multiply, animation steps)
- Responsive : clamp() partout, flex column < 900px, testé 320/375/768/1440

## Signatures visuelles (ne pas réutiliser pour d'autres projets)
1. **Planches numérotées** en chiffres romains `Pl. I → Pl. VI` (format traité d'architecture)
2. **Fil à plomb rouge** — SVG fixe en marge gauche avec stroke-dasharray animé (outil métier du couvreur)
3. **Tampon circulaire rotatif SVG** "GARANTI · DEPUIS 1986 · PÈRE & FILS · TOIT SERVICE" avec textPath
4. **Masthead revue** "TOIT SERVICE · REVUE DE COUVERTURE · N° XL · GAILLON — MUIDS · DEPUIS 1986"
5. **Pull quote italique monumental** 28rem avec guillemet « décoratif en rouge
6. **Compteur flip** 00→40 années au chargement (tabular-nums)
7. **Ticker métier** "Tuile · Ardoise · Zinc · Chéneau · Faîtage · Velux · Bardage · Shingle · Démoussage · Chevêtre" loop 38s

## Structure du site
- Masthead (barre presse noire)
- Nav sticky avec burger mobile + CTA téléphone avec dot live qui pulse
- Hero asymétrique (grid 1.35fr/1fr) : titre italique Instrument Serif énorme + photo portrait + tampon rouge rotatif + compteur 40 + drop cap T rouge
- Ticker vocabulaire métier (bandeau noir)
- Atelier (intro père en fils) : grid photos 2x2 + lede italique + stats 40/09/02
- Pull quote monumentale (section noire) : « Quarante ans / de toits posés / réparés / entretenus » + N° XL
- Intro planches "Six planches, six métiers de toit"
- 5 planches services alternées gauche/droite (Pl. II Couverture / Pl. III Rénovation / Pl. IV Zinguerie / Pl. V Velux / Pl. VI Bardage) avec specs ✦
- Avis clients (grille 2x2) : 4 témoignages éditoriaux avec guillemet italique
- Contact 2 agences (Gaillon + Muids) en colonnes type carnet + bandeau horaires avec dot live
- Footer noir monumental

## Décisions
- **loading="eager"** sur toutes les images pour que le screenshot capture tout (le lazy ratait le screenshot)
- **Fil à plomb sans mix-blend-mode** (trop discret sur crème clair)
- **URLs images du CDN client** (le-de.cdn-website.com) — versions avec hash simple fonctionnent, versions à double hash ratent
- **"de père en fils, depuis plus de quarante ans"** repris mot pour mot du site source
- **Agences en colonnes avec tel: links** — priorité appel immédiat (client TPE)

## Outils
- `node screenshot.js toit-service/index.html` pour capture 1440 + 375
- Puppeteer MCP pour 320 et 768
