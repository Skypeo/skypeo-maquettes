# Skypeo-maquettes — Atelier de maquettes web premium

## Description

Atelier de refonte one-page pour PME/artisans. Vincent et Tim envoient une URL, Claude sort une maquette moderne dans un sous-dossier, push git → Vercel déploie auto sur `https://skypeo-maquettes.vercel.app/<slug>`.

**Rythme visé : 5-6 maquettes par jour.** Tout le workflow est calibré pour cette vélocité. La qualité vient de la rigueur sur trois points non-négociables : **le registre**, **le mouvement ambiant**, **le responsive**. Tout le reste est automatisable.

---

## Stack technique — single-file HTML vanilla

**Décision de fond :** chaque maquette est UN fichier `index.html` autonome (HTML + CSS + JS inline). Zéro build, zéro `npm install`, ouvrable au double-clic, pushable sur Vercel tel quel. C'est ce qui permet le rythme.

### Ce qui est autorisé dans `<head>`

```html
<!-- Google Fonts (display + body) -->
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">

<!-- GSAP : référence pro, gratuit depuis Webflow 2024 -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/ScrollTrigger.min.js"></script>
<!-- Optionnel selon besoins : SplitText, Flip, MorphSVGPlugin, DrawSVGPlugin -->
<!-- Tous les plugins GSAP sont gratuits depuis 2024 (Webflow rachat) -->

<!-- Motion One (optionnel) : 3.8kb, utile pour des animations simples réactives -->
<script type="module">
  import { animate, scroll, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@11/+esm";
  window.M = { animate, scroll, inView, stagger };
</script>
```

### Ce qui est interdit

- **React / Next / Vite / bundler** — incompatible avec le rythme et le livrable single-file
- **Framer Motion** — requiert React (le skill `motion` existant est documentaire seulement, pas utilisé sur ce projet)
- **Tailwind compilé** — pas de build step. CSS natif uniquement
- **AOS, WOW.js, Animate.css** — génériques, trahissent un site IA
- **Smooth scroll JS custom** — cassé sur Windows
- **Curseur custom** — tic de designer
- **jQuery** — 2026, faut arrêter

### Ce qui est préféré au JS

- `animation-timeline: scroll()` et `view()` (Chrome/Edge 115+) pour scroll-driven natif
- `@starting-style` pour les enter animations (Chrome 117+)
- `@property` pour animer des gradients
- `container queries` pour du responsive par composant
- SVG natif avec `stroke-dasharray` + `stroke-dashoffset` pour les paths qui se tracent

**Règle :** si CSS peut le faire, CSS le fait. Si non, GSAP. Motion One en dernier recours.

---

## Setup automatique des nouveaux dossiers

Quand un nouveau sous-dossier est détecté ou créé dans ce répertoire, installer automatiquement :

### 1. `.claude/settings.local.json`
```json
{
  "permissions": {
    "allow": [
      "Bash(npx skills:*)",
      "Bash(node screenshot.js:*)",
      "Read(//c/Users/monke/.agents/skills/design-taste-frontend/**)",
      "Read(//c/Users/monke/.agents/skills/stitch-design-taste/**)",
      "WebSearch",
      "WebFetch(domain:unsplash.com)",
      "WebFetch(domain:images.unsplash.com)",
      "WebFetch(domain:fonts.googleapis.com)",
      "WebFetch(domain:cdn.jsdelivr.net)"
    ]
  }
}
```

### 2. `.vscode/settings.json`
```json
{ "liveServer.settings.port": 5501 }
```

### 3. Git
Un seul repo git à la racine `Skypeo-maquettes/` (déjà init). Chaque projet = un sous-dossier committé dans le repo principal.

---

## ⚡ Discipline de vitesse — non négociable

**Objectif : 30-45 min par maquette, pas 2 heures.** Le rythme 5-6 maquettes/jour n'est atteignable que si Claude ne s'enferme pas dans des ping-pongs inutiles.

### Règles dures pour Claude
- **Phase 2 = UNE réponse ultra-courte, pas 5 blocs.** Juste : registre + palette (3 hex) + typos + geste signature. 6 lignes max. Attendre validation en UN tour.
- **Ne pas proposer de variations de direction artistique** si le user n'en a pas demandé. Partir, montrer, ajuster. Ne pas me proposer "A/B/C" sauf si explicitement demandé.
- **Ne jamais refondre une section déjà validée** pour "repenser le concept". Corriger en place.
- **Demander UNE fois les préférences clés** (polices si hésitation, style de hero) AVANT de partir, pas après avoir écrit 2000 lignes.
- **Un screenshot à la fin, pas à chaque itération.** Sauf si on itère spécifiquement sur un bloc.
- **Pas de chat-essais** en réponse : réponse 2-4 lignes + action. Pas de récap ni de "voilà ce que j'ai fait".
- **Pas de Phase 2 proposée** si le registre et l'angle sont évidents depuis le brief — partir direct en Phase 3, montrer, le user corrigera ce qu'il y a à corriger.
- **Verbatim strict du scrape + brief.** Ne pas inventer de sous-titres, descriptions, CTAs. Si un bloc manque de matière → le supprimer ou demander au user, ne pas combler.
- **Max 3 ronds de retours utilisateur** avant de livrer (commit + push). Si plus, c'est que le concept est à reprendre en Phase 2 à zéro, pas à rafistoler.

---

## Matrice des 5 registres visuels

**Un projet = UN registre, jamais un mix.** Le registre est la décision n°1 du projet — il détermine palette, typo, patterns signature, mouvement, interdits.

### Registre 1 — Éditorial Artisan
- **Métiers** : charpentier, traiteur, boulanger, ébéniste, tonnelier, vigneron, horloger, restaurateur d'art, atelier d'art, marbrier
- **Signal** : tradition, matière, geste ancien, patrimoine familial
- **Palette** : crème + noir + 1 accent chaud (ocre, jaune moutarde, bourgogne) — 3 couleurs max, zéro gradient
- **Typo display** : serif à fort caractère (Libre Bodoni, Abril Fatface, Recoleta, PP Editorial, Fraunces) + sans neutre en body
- **Patterns signature** : numérotation romaine/arabe géante comme chapitres, pull quote fond noir avec « décoratif, grain papier, image légendée "Pl. I", ticker vocabulaire métier, drop cap, sticker rotatif
- **Mouvement obligatoire** : 1 ticker métier + 1 sticker rotatif (loop 20s) + 1 counter animé
- **Interdits** : gradient, glassmorphism, bento, hexagones, dark mode

### Registre 2 — Relevé Technique
- **Métiers** : couvreur, plombier, électricien, maçon, carreleur, charpentier côté technique, géomètre, bureau d'études, frigoriste, serrurier métier
- **Signal** : précision, expertise, plan, schéma, cotation, compagnonnage
- **Palette** : crème technique OU blanc technique + ardoise/encre + UN accent (rouge brique `#b51515` OU bleu plan) — jamais les deux
- **Typo display** : serif variable (Fraunces opsz + SOFT) + mono (JetBrains Mono, IBM Plex Mono) pour cotations et numéros
- **Patterns signature** : coupe SVG au trait qui se trace au scroll, papier millimétré en fond, fiches numérotées "N° 001", chapitres "Chapitre 01 · L'atelier", boussole + échelle, chiffres monumentaux avec unités en indice, tampon/sceau incliné
- **Mouvement obligatoire** : 1 schéma SVG qui se trace au scroll (stroke-dashoffset) + 1 cotation qui s'étire au reveal + 1 boussole qui réagit au scroll
- **Interdits** : photos lifestyle, gradient, glassmorphism, icônes Lucide

### Registre 3 — Sensoriel / Bien-être
- **Métiers** : ostéopathe, kiné, spa, institut de beauté, massage, coach bien-être, sophrologue, naturopathe, yoga, pilates
- **Signal** : douceur, rituel, respiration, organique, tactile
- **Palette** : nude/crème + terracotta OU vert sauge OU nude rosé + doré sobre — tons chauds, désaturés
- **Typo display** : serif élégant (Italiana, Cormorant Garamond, Playfair Display, PP Editorial) + sans humaniste en body
- **Patterns signature** : blobs SVG morphing continu avec 8 border-radius custom, photos masquées avec border-radius variés, rituel en étapes numérotées avec respiration, espaces larges, italique décorative, halos colorés
- **Mouvement obligatoire** : blobs morphing 18-26s + gradient qui respire + photos qui flottent (translateY loop 6-8s décalées)
- **Interdits** : lignes droites dominantes, noir pur, hexagones, grilles rigides, gradient violet/bleu

### Registre 4 — Service d'Urgence / Confiance Active
- **Métiers** : ambulance, VSL, taxi sanitaire, dépannage 24/7, serrurier urgence, SOS, sécurité, plombier urgence, remorquage
- **Signal** : disponibilité, fiabilité, contact immédiat, terrain, action
- **Palette** : blanc franc (`#fff` ou `#f8f8f8`) + noir + UN accent vital (rouge urgence `#e60012` OU bleu franc `#0066cc`) — jamais de navy gradient foncé, jamais de glass
- **Typo display** : grotesque industrielle condensée (Bricolage Grotesque, Archivo Narrow, Anton, Monument Extended) + mono pour numéros (JetBrains, Space Mono)
- **Patterns signature** : numéro de téléphone MONUMENTAL (120px+), carte terrain du secteur en SVG au trait, horaires en grille lisible monumentale, état "disponible maintenant" live avec dot qui pulse, bandeau contact sticky, chronologie "J'appelle → Diagnostic → Prise en charge" avec flèche qui avance, sirène LED SVG discrète en coin
- **Mouvement obligatoire** : dot vert qui pulse + ligne ECG qui trace en continu en bas hero + numéro de téléphone avec compteur flip au chargement + carte avec pin qui bounce
- **Interdits ABSOLUS** : gradient bleu foncé, hexagones médicaux, stats en grille centrée "X années / Y véhicules", glassmorphism, fonds bleu nuit — ce sont exactement les clichés IA du secteur

### Registre 5 — Institutionnel / Expertise Libérale
- **Métiers** : avocat, notaire, architecte, expert-comptable, cabinet conseil, audit, gestion de patrimoine, étude d'huissier
- **Signal** : sérieux, discrétion, livre, signature, tradition intellectuelle
- **Palette** : ivoire + encre + 1 accent feutré (bourgogne `#6b1f2a`, vert bouteille `#1f3d2e`, bleu nuit `#1a2847`)
- **Typo display** : serif classique (Cormorant Garamond, EB Garamond, Libre Caslon) + sans géométrique discret en body
- **Patterns signature** : mise en page livre, table des matières, sceau, signature manuscrite qui se trace, marges larges, filets fins, petites capitales, pagination
- **Mouvement obligatoire** : signature manuscrite qui se trace au reveal + sceau qui s'imprime (scale 1.2 → 1) + ligne horizontale fine qui s'étire à chaque nouveau paragraphe
- **Interdits** : photos lifestyle, emojis, gradients, icônes, bento, couleurs vives

---

## Cahier de mouvement

**Règle absolue :** avant que l'utilisateur scrolle ou hover, **3 éléments minimum** doivent être en animation continue (boucle infinie). Sinon le site est mort à l'arrivée.

### Obligatoire sur chaque maquette

1. **1 ticker / marquee** avec vocabulaire métier (loop 10-40s)
2. **1 élément ambiant** en fond (forme morph, halo qui pulse, trame qui respire, grain animé, gradient qui bouge imperceptiblement)
3. **1 micro-signal de vie** sur le hero (sticker rotatif, curseur clignotant, chiffre qui s'incrémente, dot "live" qui pulse, trait qui se trace en boucle)

**Test :** lancer la page 5 secondes sans toucher à rien. Compter ce qui bouge. Si < 3 → retravailler.

### Patterns de mouvement par registre

Voir le skill `gsap-patterns` pour les implémentations copy-paste testées par registre.

### Interdits de mouvement

- **Fade-in-up générique sur tout le contenu** au scroll — l'utilisateur voit du vide pendant 200ms partout. Reveals signifiants, rapides (<400ms), **JAMAIS sur le hero**
- **Hover scale 1.05 sur toutes les cards** — mort sans interaction
- **Parallax lourd sur 3+ couches** — saccades mobile
- **Smooth scroll JS custom** — cassé sur Windows
- **Curseur custom** — inutile
- **Clip-path pour les reveals** — bug récurrent, utiliser opacity + transform
- Toujours wrapper dans `@media (prefers-reduced-motion: no-preference)`

---

## Responsive strict — aucune exception

Le mobile est non négociable. Tester et screenshoter à **5 largeurs** : 320, 375, 768, 1024, 1440px.

### Règles non négociables

- **Zéro débordement horizontal à 320px**. `overflow-x: hidden` sur body en filet
- **Typo display fluide** : `clamp()` partout. Ex : `font-size: clamp(2.5rem, 8vw, 7rem)`
- **Grid → flex column** en dessous de 768px
- **Images** : `max-width: 100%`, `height: auto`, `object-fit: cover`, `loading="lazy"`
- **Touch targets** : 44×44px minimum sur mobile
- **Zéro hover-only** : tout hover a un équivalent tap
- **Hamburger fonctionnel** (vanilla JS, `aria-expanded`, fermeture escape + clic extérieur)
- **Viewport** : `<meta name="viewport" content="width=device-width, initial-scale=1">` sans `maximum-scale`
- **Pas de `100vh`** → `min-height: 100dvh`
- **Unités fluides** : `rem`, `em`, `%`, `vw`, `dvh`, `clamp()`
- **`padding-inline`** plutôt que `padding-left/right`
- **Safe area** : `padding-bottom: max(1rem, env(safe-area-inset-bottom))` pour bandeau sticky bas

### Vérification obligatoire

```bash
node screenshot.js <dossier>/index.html
```
Produit desktop 1440px + mobile 375px.

Pour 320px et 768px, via MCP Puppeteer :
```
mcp__puppeteer__puppeteer_navigate → file:///<chemin>/index.html
mcp__puppeteer__puppeteer_screenshot width=320 height=800
mcp__puppeteer__puppeteer_screenshot width=768 height=1024
```

**Les 4 captures doivent être lues avec Read, sinon la maquette n'est pas finie.**

---

## Workflow 3 phases — calibré 5-6 maquettes/jour

### PHASE 1 — Brief automatisé (via skill `scrape-site`)

Le skill `scrape-site` fait tout le travail :
- Aspire le site client (pages principales)
- Extrait tous les textes mot pour mot
- Liste toutes les URLs d'images
- Détecte la palette CSS dominante
- Extrait coordonnées, horaires, téléphone
- Output : `<slug>/_brief.md` prêt à lire

**Durée : 3 min au lieu de 10.**

Puis lire `memory/styles-used.md` pour vérifier les registres/styles déjà pris.

### PHASE 2 — Mini plan (UNE réponse de 6 lignes max)

**Format imposé, ultra-court** :
- Registre : N° X (une phrase de justification)
- Palette : 3 hex
- Typos : display + body (Google Fonts)
- Geste signature : 1 mot-clé métier
- Ticker : 5-8 mots vocabulaire métier

**Attendre validation en UN tour.** Si doute sur un choix clé (polices, style hero), poser UNE question courte, pas 3 options. Si le registre + l'angle sont évidents depuis le brief, **sauter cette phase** et partir direct en Phase 3.

Interdit : proposer "A / B / C" spontanément. Interdit : répéter le plan en fin de réponse.

### PHASE 3 — Build + gate de livraison

**Build incrémental :**
1. Écrire global CSS (variables, reset, fonts, texture fond) + header + hero avec les 3 mouvements ambiants déjà en place
2. Screenshot desktop + mobile → Lire les deux
3. Si hero moyen → corriger AVANT de continuer (80% de la première impression)
4. Ajouter les sections par groupes de 2-3, screenshots à chaque ajout
5. Répéter jusqu'au footer

**Gate de livraison (via skill `anti-cliche-check`) :**
Le skill prend les 4 captures (320/375/768/1440) et répond par écrit aux 7 questions :
1. Logo caché → secteur reconnaissable en 2 secondes ?
2. ≥ 1 détail qu'un site IA générique n'aurait jamais produit ?
3. Palette et photos dominent l'écran (pas blanc + boutons colorés) ?
4. Vraie idée nommable en une phrase ?
5. Concurrent du même secteur pourrait l'utiliser tel quel ?
6. Les 3 mouvements ambiants visibles à l'arrêt ?
7. Responsive ne casse pas à 320/375/768/1440px ?

**Une seule NON = retour en build, pas livrable.**

### Livraison

1. `git add <slug>/` → `git commit` → `git push`
2. Vercel déploie automatiquement sur `https://skypeo-maquettes.vercel.app/<slug>`
3. Donner l'URL à Vincent / Tim
4. Mettre à jour `memory/<slug>.md`, `memory/styles-used.md`, `memory/MEMORY.md`

---

## Règles non négociables

### Contenu
- **Zéro invention** : tous les textes viennent du site original, mot pour mot
- **Zéro lorem ipsum**
- **Zéro stock générique** : vraies photos client. Si insuffisant → Unsplash du même secteur, à préciser
- **Palette du site original** : couleurs CSS exactes. Variantes clair/foncé OK, nouvelles teintes interdites sauf contraintes registre

### Technique
- **Fichier unique** `index.html` (CSS + JS inline), autonome sauf Google Fonts + CDN GSAP/Motion One + images
- **`prefers-reduced-motion`** respecté partout
- **`border-radius` partout** : aucun bord carré. Variables `--r-sm`, `--r-md`, `--r-lg`, `--r-pill`
- **Animations GPU** : uniquement `transform` et `opacity`, jamais `top/left/width/height`
- **Pas de `100vh`** → `100dvh`

### Hero immédiatement visible
H1 et contenu above-the-fold ne dépendent JAMAIS d'une animation ou d'un IntersectionObserver pour être visibles. Reveals = below-the-fold uniquement.

### Texture de fond systématique
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.35-0.55;
  background-image: url("data:image/svg+xml,..."); /* feTurbulence + feColorMatrix */
  mix-blend-mode: multiply;
}
```
Teintée au secteur via `feColorMatrix`. `isolation: isolate` + `z-index: 9999` sur images/cards.

### Pas de réutilisation entre projets
- Respecter `memory/styles-used.md`
- Vérifier `memory/styles-used.md` pour la liste exhaustive des signatures consommées
- Chaque ticker a son vocabulaire métier unique
- Pas de clip-path pour les reveals (bug) → opacity + transform

### R1 Éditorial Artisan — tropes INTERDITS (feedback user récurrent)
Les R1 ont tendance à toutes converger vers un même pattern « éditorial magazine ». Pour toute nouvelle R1, **INTERDIT** de réutiliser ces 4 tropes (déjà consommés par plusieurs projets) :

1. **Masthead cartouche en haut** sous la nav (« N° XX · Carnet du X · Depuis YYYY »)
2. **Captions `Pl. I` / `Pl. II` / `Pl. III`** sur les photos
3. **Strip de chapitres numérotés `Chap. 01 → 07`**
4. **Tampon circulaire rotatif** type « DEPUIS YYYY · ARTISAN · SECTEUR »

Si la Phase 2 d'une R1 ne propose que du masthead + chapters + tampon, **reprendre la Phase 2 à zéro** — c'est un signal que le concept n'est pas assez creusé. Lire `memory/feedback_r1_tropes_a_eviter.md` pour les 10 angles R1 encore disponibles (almanach, enseigne peinte, fresque horizontale, carnet d'atelier manuscrit, catalogue fondeur, livret typographique XIXème, plaquette gaufrée, livre d'or, affiche théâtre XIXème, menu gravé).

---

## Anti-IA — ce qui trahit un site généré

Si le résultat ressemble à un site ChatGPT/Lovable/v0, c'est raté.

**Couleurs et effets** : gradients violet/indigo/bleu (`#6366f1`, `#8b5cf6`), glassmorphism gratuit, neon glow, dark mode "tech startup" sur un artisan, mesh gradients flous

**Layouts paresseux** : hero centré H1 + sous-titre + 2 boutons (marqueur n°1), bento grid sans raison, features en grille de 3 (icône + titre + 2 lignes), timeline verticale 1→4, stats centrées "+150 clients / 10 ans", tout centré/symétrique

**Typo et icônes** : Inter/Geist/DM Sans en display, icônes Lucide/Heroicons en grille, emojis dans les titres, tailles timides 14-48px (oser 12px ET 180px sur la même page)

**Contenu** : headlines vagues ("Transformez votre business"), CTA génériques ("Get started"), témoignages en 3 cards avec avatar rond + ★★★★★, "Trusted by" logos gris, FAQ accordion si le client n'en a pas besoin

**Composants suspects** : badge "✨ New", sticky CTA flottant bas-droite, cookie banner stylé sur une maquette, "Scroll to explore" flèche qui bounce, pricing cards "Starter / Pro / Enterprise" si le client ne vend pas par abonnement

**Test final** : "Ce site pourrait-il appartenir à n'importe quel autre business du même secteur ?" Si oui → manque l'ADN. Ajouter métier, matière, imperfection assumée.

---

## Skills à utiliser

Sur ce projet, utiliser systématiquement :

- **`scrape-site`** — Phase 1 automatisée (brief complet à partir d'une URL)
- **`gsap-patterns`** — patterns GSAP copy-paste par registre (ScrollTrigger, SplitText, Flip, DrawSVG, MorphSVG)
- **`anti-cliche-check`** — gate de livraison en Phase 3 (lecture des 4 captures + réponse aux 7 questions)

Skills optionnels disponibles :
- `motion` — documentation Framer Motion (React seulement, non utilisé sur ce projet)
- `design-taste-frontend` et `stitch-design-taste` dans `C:/Users/monke/.agents/skills/` (inspiration typo/style)

---

## Après livraison

- Mettre à jour `memory/<slug>.md` avec résumé projet (registre, palette, patterns utilisés, photos d'où)
- Mettre à jour `memory/styles-used.md` avec nouveau style + registre
- Mettre à jour `memory/MEMORY.md` avec lien
