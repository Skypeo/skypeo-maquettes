# Skypeo-maquettes — Atelier de maquettes web premium

## Description
Dossier parent contenant tous les projets de maquettes one-page pour clients. Chaque sous-dossier = un client = un site redesigné.

## Setup automatique des nouveaux dossiers

Quand un **nouveau sous-dossier** est détecté ou créé dans ce répertoire, installer automatiquement :

### 1. `.claude/settings.local.json`
```json
{
  "permissions": {
    "allow": [
      "Bash(npx skills:*)",
      "Bash(plugin marketplace:*)",
      "Read(//c/Users/monke/.agents/skills/design-taste-frontend/**)",
      "Read(//c/Users/monke/.agents/skills/stitch-design-taste/**)",
      "WebSearch",
      "WebFetch(domain:unsplash.com)",
      "WebFetch(domain:images.unsplash.com)"
    ]
  }
}
```

### 2. `.vscode/settings.json`
```json
{
  "liveServer.settings.port": 5501
}
```

### 3. Initialiser git
```bash
git init
```

---

## Le standard de qualité

Les maquettes **Trubert** et **Sigot** sont le niveau attendu — ce sont les deux étalons. Chaque maquette doit être à ce niveau ou au-dessus. Si en regardant le screenshot tu te dis "c'est un template", c'est raté.

**AVANT toute Phase 2, LIRE obligatoirement** :
- `memory/references/trubert-desktop.png`
- `memory/references/sigot-desktop.png`
- `memory/references/reference-guide.md`

Ces trois fichiers définissent le niveau de finition attendu et les patterns du registre Éditorial Artisan.

---

## Matrice des 5 registres visuels

**Un projet = UN registre, jamais un mix.** Le choix du registre est la décision #1 de chaque projet — il détermine palette, typo, patterns signature, mouvement, interdits.

### Registre 1 — Éditorial Artisan (étalons : Trubert, Sigot)
- **Métiers** : charpentier, traiteur, boulanger, ébéniste, tonnelier, vigneron, horloger, restaurateur d'art, atelier d'art, marbrier
- **Signal** : tradition, matière, geste ancien, patrimoine familial
- **Palette** : crème + noir + 1 accent chaud (ocre, jaune moutarde, bourgogne) — **3 couleurs max, zéro gradient**
- **Typo display** : serif à fort caractère (Libre Bodoni, Abril Fatface, Recoleta, PP Editorial, Fraunces) + sans neutre pour le corps (Public Sans, Inter Tight autorisé en body uniquement)
- **Patterns signature** : numérotation romaine/arabe géante comme chapitres, pull quote fond noir avec « décoratif, grain papier, image légendée "Pl. I", ticker vocabulaire métier, drop cap, sticker rotatif
- **Mouvement obligatoire** : 1 ticker métier + 1 sticker rotatif (loop 20s) + 1 counter animé
- **Interdits** : gradient, glassmorphism, bento, hexagones, dark mode

### Registre 2 — Relevé Technique (réf actuelle : Toitures Des Gones, Nonnon)
- **Métiers** : couvreur, plombier, électricien, maçon, carreleur, charpentier côté technique, géomètre, bureau d'études, frigoriste, serrurier métier
- **Signal** : précision, expertise, plan, schéma, cotation, compagnonnage
- **Palette** : crème technique OU blanc technique + ardoise/encre + UN accent (rouge brique #b51515 OU bleu plan) — **jamais les deux**
- **Typo display** : serif variable (Fraunces opsz + SOFT) + mono (JetBrains Mono, IBM Plex Mono) pour cotations et numéros
- **Patterns signature** : coupe SVG au trait qui se trace au scroll, papier millimétré en fond, fiches numérotées "N° 001", chapitres "Chapitre 01 · L'atelier", boussole + échelle, chiffres monumentaux avec unités en indice, tampon/sceau incliné
- **Mouvement obligatoire** : 1 schéma SVG qui se trace au scroll (stroke-dashoffset) + 1 cotation qui s'étire au reveal + 1 boussole qui réagit au scroll
- **Interdits** : photos lifestyle, gradient, glassmorphism, icônes Lucide

### Registre 3 — Sensoriel / Bien-être (réf : Trouillet)
- **Métiers** : ostéopathe, kiné, spa, institut de beauté, massage, coach bien-être, sophrologue, naturopathe, yoga, pilates
- **Signal** : douceur, rituel, respiration, organique, tactile
- **Palette** : nude/crème + terracotta OU vert sauge OU nude rosé + doré sobre — tons chauds, désaturés
- **Typo display** : serif élégant (Italiana, Cormorant Garamond, Playfair Display, PP Editorial) + sans humaniste (Manrope, Work Sans, DM Sans autorisé en body)
- **Patterns signature** : blobs SVG morphing continu avec 8 border-radius custom, photos masquées avec border-radius variés, rituel en étapes numérotées avec respiration, espaces larges, italique décorative, halos colorés
- **Mouvement obligatoire** : blobs morphing 18-26s + gradient qui respire (radial qui bouge lentement) + photos qui flottent (translateY loop 6-8s décalées)
- **Interdits** : lignes droites dominantes, noir pur, hexagones, grilles rigides, gradient violet/bleu

### Registre 4 — Service d'Urgence / Confiance Active (AUCUNE réf réussie — Ambulances Doré a raté)
- **Métiers** : ambulance, VSL, taxi sanitaire, dépannage 24/7, serrurier urgence, SOS, sécurité, plombier urgence, remorquage
- **Signal** : disponibilité, fiabilité, contact immédiat, terrain, action
- **Palette** : **blanc franc** (#fff ou #f8f8f8) + noir + UN accent vital (rouge urgence #e60012 OU bleu franc #0066cc) — **jamais de navy gradient foncé, jamais de glass**
- **Typo display** : grotesque industrielle condensée (Bricolage Grotesque, Archivo Narrow, Anton, Monument Extended) + mono pour numéros (JetBrains, Space Mono)
- **Patterns signature** : **numéro de téléphone MONUMENTAL (120px+)**, carte terrain du secteur d'intervention en SVG au trait, horaires en grille lisible monumentale, état "disponible maintenant" live avec dot qui pulse, bandeau contact sticky, chronologie "J'appelle → Diagnostic → Prise en charge" avec flèche qui avance, sirène LED SVG discrète en coin
- **Mouvement obligatoire** : dot vert qui pulse (scale + box-shadow loop) + ligne ECG qui trace en continu en bas hero + numéro de téléphone avec compteur flip au chargement + carte avec pin qui bounce
- **Interdits ABSOLUS** : gradient bleu foncé, hexagones médicaux, stats en grille centrée "X années / Y véhicules", glassmorphism, fonds bleu nuit — ce sont **exactement** les clichés IA du secteur

### Registre 5 — Institutionnel / Expertise Libérale (aucune réf encore)
- **Métiers** : avocat, notaire, architecte, expert-comptable, cabinet conseil, audit, gestion de patrimoine, étude d'huissier
- **Signal** : sérieux, discrétion, livre, signature, tradition intellectuelle
- **Palette** : ivoire + encre + 1 accent feutré (bourgogne #6b1f2a, vert bouteille #1f3d2e, bleu nuit #1a2847)
- **Typo display** : serif classique (Cormorant Garamond, EB Garamond, Libre Caslon) + sans géométrique discret (Inter Tight, Neue Haas autorisé)
- **Patterns signature** : mise en page livre, table des matières, sceau, signature manuscrite qui se trace, marges larges, filets fins, petites capitales, pagination
- **Mouvement obligatoire** : signature manuscrite qui se trace au reveal + sceau qui s'imprime (scale 1.2 → 1 au reveal) + ligne horizontale fine qui s'étire à chaque nouveau paragraphe. **Registre le plus sobre — moins c'est mieux.**
- **Interdits** : photos lifestyle, emojis, gradients, icônes, bento, couleurs vives

---

## Cahier de mouvement — la page doit vivre au chargement

**Règle transversale absolue :** avant même que l'utilisateur scrolle ou hover, **3 éléments minimum** doivent être en animation continue (boucle infinie). Sinon le site est mort à l'arrivée.

### Obligatoire sur CHAQUE maquette

- [ ] **1 ticker / marquee** avec vocabulaire métier qui défile en continu (loop 10-40s)
- [ ] **1 élément ambiant** en fond (forme qui morph, halo qui pulse, trame qui respire, grain animé, dégradé qui bouge imperceptiblement)
- [ ] **1 micro-signal de vie** sur le hero (sticker rotatif, curseur clignotant, chiffre qui s'incrémente, dot "live" qui pulse, trait qui se trace en boucle)

Si en regardant le screenshot statique la page ressemble à une image figée → raté. **Test obligatoire :** lancer la page 5 secondes sans toucher à rien. Compter visuellement combien de choses bougent. Si < 3 → retravailler.

### Patterns de mouvement par registre

Chaque registre a son vocabulaire de mouvement (voir matrice ci-dessus). **Ne pas mélanger** : pas de blobs morphing dans un site technique, pas de ligne ECG dans un éditorial artisan.

### Interdits de mouvement

- **Fade-in-up générique sur tout le contenu** au scroll → l'utilisateur voit du vide pendant 200ms partout. Si reveal, il doit être signifiant, rapide (<400ms), et **JAMAIS sur le hero**.
- **Hover scale 1.05 sur toutes les cards** → mort sans interaction. Préférer un hover spécifique (slide, underline, glissement de couleur, rotation minuscule).
- **Parallax lourd sur 3+ couches** → saccades sur mobile, bannir.
- **Smooth scroll JS custom** → cassé sur Windows, interdit. Laisser le scroll natif.
- **Curseur custom** qui suit la souris → tic de designer, inutile.
- **Clip-path pour les reveals** → bug récurrent, utiliser opacity + transform.

### Stack autorisée (rester single-file vanilla)

- **CSS natif** : `@keyframes`, `animation-timeline: scroll()` et `view()` pour scroll-driven (Chrome/Edge OK), `@starting-style` pour enter animations
- **SVG** : SMIL ou CSS pour les paths qui se tracent (`stroke-dasharray` + `stroke-dashoffset`), `<animate>` pour les morph simples
- **JS vanilla** : `IntersectionObserver` pour counters et reveals signifiants
- **Exception CDN autorisée** : **Motion One** (3.8kb, vanilla, API proche de Framer Motion) si vraiment besoin de physics spring ou stagger complexe. Via `<script type="module">` depuis unpkg
- **Interdit** : Framer Motion (React), GSAP (lourd + licence), AOS (générique), WOW.js
- **Toujours** wrapper dans `@media (prefers-reduced-motion: no-preference)` pour l'accessibilité

---

## Responsive strict — aucune exception

**Problème récurrent constaté :** trop de maquettes ratent le mobile ou le très petit écran. C'est non négociable.

### Tailles à tester

Tester et screenshoter à ces 5 largeurs. **Aucune ne doit casser** :

- **320px** (le plus petit — iPhone SE 1ère gen, Android entry-level)
- **375px** (iPhone moderne standard)
- **768px** (iPad portrait / grand mobile paysage)
- **1024px** (iPad paysage / petit laptop)
- **1440px** (desktop standard)

### Règles non négociables

- **Zéro débordement horizontal à 320px.** Aucune valeur fixe en `px` qui dépasse 320 sur les éléments root. Si un élément fait 400px de large, il devient illisible sur petit mobile.
- **`overflow-x: hidden` sur body** en filet de sécurité — mais ne doit jamais masquer un débordement volontaire ignoré.
- **Typo display fluide obligatoire** : utiliser `clamp()` partout. Ex : `font-size: clamp(2.5rem, 8vw, 7rem);`. Une typo figée à 120px casse à 320px.
- **Grid → flex column** sur mobile. `grid-template-columns: repeat(3, 1fr)` devient `1fr` en dessous de 768px.
- **Images** : `max-width: 100%`, `height: auto`, `object-fit: cover`, `loading="lazy"` systématiques
- **Touch targets** : les boutons, liens, et éléments cliquables font **44×44px minimum** sur mobile (Apple HIG / WCAG). Un lien texte dans un menu doit avoir du padding, pas juste la hauteur du texte.
- **Pas d'interaction hover-only** : tout hover doit avoir un équivalent tap. Les menus, dropdowns, tooltips doivent s'ouvrir au tap.
- **Hamburger fonctionnel** sur mobile (vanilla JS, `aria-expanded`, fermeture au clic extérieur et à l'échap).
- **Viewport meta tag** : `<meta name="viewport" content="width=device-width, initial-scale=1">` — pas de `maximum-scale=1` (empêche le zoom accessibilité).
- **Pas de `height: 100vh`** → utiliser `min-height: 100dvh` (dynamic viewport, gère la barre d'URL mobile).
- **Unités** : préférer `rem`, `em`, `%`, `vw`/`vh`/`dvh`, `clamp()` aux valeurs fixes en `px` pour tout ce qui est typographie ou layout.
- **`padding-inline` / `margin-inline`** plutôt que `padding-left/right` (RTL-safe et plus propre).
- **Safe area insets** : si bandeau sticky en bas, utiliser `padding-bottom: max(1rem, env(safe-area-inset-bottom))` pour les iPhones avec encoche.

### Vérification obligatoire

À la fin de Phase 3 et en Phase 4, exécuter dans l'ordre :

```bash
node screenshot.js <dossier>/index.html
```

Ceci produit `index_screenshot.png` (1440px) et `index_screenshot_mobile.png` (375px). **LIRE les deux avec Read.**

Puis, pour vérifier 320px et 768px (pas couverts par le script de base), utiliser Puppeteer MCP :
```
mcp__puppeteer__puppeteer_navigate → file:///<chemin>/index.html
mcp__puppeteer__puppeteer_screenshot width=320 height=800
mcp__puppeteer__puppeteer_screenshot width=768 height=1024
```

**Si ces 4 captures ne sont pas prises et lues, la maquette n'est pas finie.**

---

## Outils obligatoires

### Puppeteer (vérification visuelle)

Puppeteer est installé. **UTILISER OBLIGATOIREMENT** à chaque étape :

```bash
node screenshot.js <dossier>/index.html
```

Produit desktop 1440px + mobile 375px. Pour les largeurs 320px, 768px, 1024px → utiliser le MCP Puppeteer (navigate + screenshot paramétré).

**Lire les screenshots** avec l'outil Read pour vraiment voir le résultat.

### Context7 MCP (documentation à jour)

Context7 configuré comme serveur MCP. À utiliser pour vérifier :
- `animation-timeline`, `scroll()`, `view()` (scroll-driven CSS moderne)
- `@starting-style`, `@property`, `container queries`
- API `IntersectionObserver` et `ResizeObserver`
- Motion One si utilisé

Quand tu hésites sur une propriété CSS moderne ou une API JS, **vérifie avec Context7** au lieu de deviner.

---

## Workflow de création de maquette

Quand l'utilisateur donne une URL de site à redesigner :

### PHASE 1 — Collecter (10 min)

1. **Scraper le site** (toutes les pages) : logo, TOUS les textes mot pour mot, TOUTES les URLs d'images, couleurs CSS, infos contact.
2. **1-2 recherches skill** pour l'inspiration typo et style :
   ```
   py src/ui-ux-pro-max/scripts/search.py "<secteur en anglais>" --domain style -n 5
   py src/ui-ux-pro-max/scripts/search.py "<style ou secteur>" --domain typography -n 5
   ```
   Si 0 résultats → synonymes anglais. Pas plus de 2-3 tentatives.
3. **Vérifier `memory/styles-used.md`** pour ne pas répéter un style pris.

### PHASE 2.0 — Choix du registre (OBLIGATOIRE, AVANT Phase 2)

**Lire les références** :
- `memory/references/trubert-desktop.png`
- `memory/references/sigot-desktop.png`
- `memory/references/reference-guide.md`

Puis **répondre par écrit à l'utilisateur** :

1. **Registre retenu** (1-5) + **justification en 1 phrase** liée au métier concret du client
2. **Pourquoi pas les 4 autres** (éliminer explicitement — 1 phrase chacun suffit)
3. **La boîte à outils extraite du registre** : palette (3 couleurs max), typo display + body, 3 patterns signature retenus

Si le métier est ambigu (ex : boulanger moderne vs artisan traditionnel), proposer 2 registres et laisser l'utilisateur trancher.

**Attendre validation utilisateur avant de passer à Phase 2.**

### PHASE 2 — Imaginer (5 min)

Décrire en 10 lignes max le site fini :
- **L'ambiance** en une phrase ("chantier au lever du soleil", "atelier artisan haut de gamme")
- **Le hero** : exactement quoi, quelle image/typo, quel layout (asymétrique obligatoire)
- **L'élément signature** : la chose qu'on retient (liée au registre + au métier)
- **Le rythme** : alternance clair/sombre, quelles sections se distinguent
- **Les 3 mouvements ambiants** (ticker, ambiant, micro-signal hero)
- **Les 2-3 interactions** les plus impactantes

Envoyer à l'utilisateur et attendre validation avant de coder.

### PHASE 2.5 — Test de distinction (OBLIGATOIRE)

Répondre par écrit à ces **5 questions** :

1. **5 mots du métier** qui apparaissent visuellement dans le site (outils, matières, gestes, vocabulaire pro). **UN de ces 5 mots doit devenir le geste graphique signature**, pas juste de la déco décorative. Ex couvreur : "tuile, liteau, faîtage, zinc, chevron" → "chevron" devient la coupe technique en sticky.
2. **Ce que le site partage PAS avec un site IA générique du même secteur**. Nommer concrètement ce qu'un ChatGPT aurait pondu et dire **en quoi** la maquette s'en éloigne.
3. **La typo display choisie et sa justification métier**. Interdit : Inter, Geist, DM Sans, Plus Jakarta, Space Grotesk, Manrope (en display), Poppins.
4. **Le geste graphique signature en une phrase** — concret, pas "scroll reveal".
5. **Les 3 mouvements ambiants de la page** (ceux qui tournent sans scroll ni hover) en 1 ligne chacun. Si tu ne peux pas les nommer avant de coder, la page sera statique.

Si une réponse tient en moins de 5 mots ou pourrait s'appliquer à un autre projet, recommencer.

### PHASE 2.75 — Checklist anti-clichés avant de coder

Cocher **AVANT** d'écrire la première ligne de CSS :

- [ ] Le hero n'est PAS un titre centré + 2 boutons. Layout asymétrique (grille éditoriale, superposition photo/typo, plein champ photo avec étiquette).
- [ ] Pas de section "Features" en grille de 3 avec icône + titre + 2 lignes.
- [ ] Pas de timeline verticale numérotée 1→4.
- [ ] Pas de stats centrées "+X clients / Y ans" sur fond uni.
- [ ] Palette sans gradient violet/bleu par défaut.
- [ ] Background travaillé (texture, papier, matière) — pas un fond uni ou un mesh gradient.
- [ ] Au moins UN élément casse la symétrie.
- [ ] Typo mélange ≥ 2 familles à caractère fort (pas deux sans-serifs neutres).
- [ ] Les 3 mouvements ambiants sont planifiés (Phase 2.5 question 5).
- [ ] Les interdits du registre retenu sont tous respectés.

Si un point ne peut pas être coché, retour en Phase 2.

### PHASE 3 — Construire section par section

**NE PAS écrire le fichier complet d'un coup.** Construire et vérifier visuellement :

1. **Écrire** CSS global + header + hero avec les 3 mouvements ambiants déjà en place
2. **Screenshot** desktop + mobile → Lire les deux
3. **Vérifier** : le hero a-t-il de l'impact ? Le texte est lisible ? Les 3 mouvements ambiants sont visibles ? La palette fonctionne ?
4. **Si le hero est moyen** → corriger AVANT de continuer. Le hero = 80% de la première impression.
5. **Ajouter** les sections suivantes par groupes de 2-3
6. **Screenshot** à chaque ajout, desktop + mobile
7. **Répéter** jusqu'au footer

⚠️ **INTERDIT de livrer sans avoir pris au moins 4 screenshots (2 itérations × 2 viewports) et vérifié visuellement.**

### PHASE 4 — Gate de livraison (OBLIGATOIRE, exécuté pas mental)

**1. Captures sur 4 viewports** (dans l'ordre, toutes sauvegardées) :
- `index_screenshot.png` (1440px) via `node screenshot.js`
- `index_screenshot_mobile.png` (375px) via `node screenshot.js`
- Capture 320px via MCP Puppeteer
- Capture 768px via MCP Puppeteer

**2. Lire les 4 captures** avec Read.

**3. Répondre PAR ÉCRIT dans le chat aux 7 questions suivantes** (NON = retravailler, pas de débat) :

1. Si je cache le logo et le nom du client, est-ce que je reconnais le **secteur** en 2 secondes ?
2. Y a-t-il ≥ 1 détail qu'un site IA générique n'aurait JAMAIS produit ? (geste métier, chiffre monumental, déséquilibre assumé, texture travaillée, typo qui raconte)
3. La palette et les photos **dominent l'écran** — ou est-ce que c'est blanc + boutons colorés ?
4. Le site a-t-il une **vraie idée** nommable en une phrase — ou juste des sections empilées ?
5. Un concurrent du même secteur pourrait-il utiliser ce site **tel quel** en changeant juste le nom ?
6. Les **3 mouvements ambiants** sont-ils visibles à l'arrêt (ticker + ambiant + signal hero) ?
7. Le responsive **ne casse pas** à 320px, 375px, 768px, 1440px ? (débordement, illisibilité, chevauchement, touch targets < 44px)

**Une seule NON = pas livrable, retour en Phase 3.**

---

## Règles non négociables

### Contenu
- **Zéro invention** : tous les textes viennent du site original, mot pour mot
- **Zéro lorem ipsum**
- **Zéro stock générique** : vraies photos client. Si insuffisant → Unsplash du même secteur, le préciser
- **Palette du site original** : couleurs CSS exactes. Variantes clair/foncé OK, nouvelles teintes interdites (sauf contraintes du registre qui le justifient)

### Technique
- **Fichier unique** `index.html` (CSS + JS inline), autonome sauf Google Fonts et images
- **`prefers-reduced-motion`** respecté partout
- **`border-radius` partout** : aucun bord carré sur les éléments visibles. Variables : `--r-sm`, `--r-md`, `--r-lg`, `--r-pill`
- **Animations GPU** : uniquement `transform` et `opacity`, jamais `top/left/width/height`
- **Pas de `height: 100vh`** → `min-height: 100dvh`

### Le hero doit être immédiatement visible
Le H1 et le contenu above-the-fold ne dépendent JAMAIS d'une animation ou d'un IntersectionObserver pour être visibles. Les reveals sont pour le below-the-fold uniquement.

### Texture de fond
Chaque maquette a une texture thématique liée au secteur :
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

### Ce qui est interdit entre les projets
- Ne pas réutiliser un style déjà pris (voir `memory/styles-used.md`)
- Ne pas copier les signatures d'un autre projet (polaroids = Sigot, blobs = Trouillet, hexagones = tentative ratée Ambulances, coupe technique = Toitures Des Gones)
- Pas de marquee/ticker copié-collé identique — chaque ticker a son vocabulaire métier unique
- Pas de clip-path pour les reveals (bug récurrent) → opacity + transform

---

## Anti-IA — ce qui trahit un site généré

Si le résultat ressemble à un site pondu par ChatGPT/Lovable/v0, c'est raté.

### Couleurs et effets
- **Gradients violet/indigo/bleu** par défaut (`#6366f1`, `#8b5cf6`). Si gradient, justifié par la palette client et le registre.
- **Glassmorphism gratuit** — à n'utiliser que si registre le justifie (aucun des 5 registres définis ne le justifie par défaut).
- **Neon glow / shadows colorées** génériques sur les boutons.
- **Dark mode "tech startup"** par défaut si le client n'est pas dans la tech.
- **Mesh gradients** flous en background.

### Layouts paresseux
- **Hero centré générique** : H1 + sous-titre + 2 boutons centrés. Marqueur n°1 de site IA.
- **Bento grid sans raison** : 6 cards de tailles variées pour "faire moderne". Le bento doit raconter.
- **Features en grille de 3** avec icône + titre + 2 lignes.
- **Timeline verticale** "Notre processus" 1→4.
- **Stats centrées** "+150 clients / 10 ans".
- **Tout centré, tout symétrique.** L'asymétrie est humaine.

### Typo et iconographie
- **Inter / Geist / DM Sans / Plus Jakarta** comme display.
- **Icônes Lucide / Heroicons / Feather** alignées en grille.
- **Emojis** dans les titres ou comme "icônes".
- **Tailles timides** 14-48px. Oser le 12px ET le 180px sur la même page.

### Contenu et copy
- **Headlines vagues** "Transformez votre business", "L'avenir de X".
- **CTA génériques** "Get started", "Learn more". Préférer verbes métier.
- **Témoignages en 3 cards** avec avatar rond + ★★★★★.
- **"Trusted by"** logos gris.
- **FAQ accordion** générique si le client n'en a pas besoin.

### Composants suspects
- **Badge "✨ New" / "🚀 Beta"** en haut du hero.
- **Sticky CTA flottant** bas-droite.
- **Cookie banner** stylé sur une maquette.
- **"Scroll to explore"** flèche qui bounce.
- **Pricing cards** "Starter / Pro / Enterprise" si le client ne vend pas par abonnement.

### Le test final
**"Est-ce que ce site pourrait appartenir à n'importe quel autre business du même secteur ?"** Si oui, il manque l'ADN. Ajouter métier, matière, imperfection assumée.

---

## Après livraison

Mettre à jour :
- `memory/<projet>.md` avec le résumé du projet
- `memory/styles-used.md` avec le nouveau style + registre utilisé
- `memory/MEMORY.md` avec le lien vers le fichier mémoire
- Si la maquette atteint le niveau Trubert/Sigot pour son registre → copier les screenshots dans `memory/references/` comme nouvelle référence du registre
