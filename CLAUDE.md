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

Les maquettes **Trubert** et **Trouillet** sont le niveau attendu. Chaque maquette doit être à ce niveau ou au-dessus. Si en regardant le screenshot tu te dis "c'est un template", c'est raté.

**Trubert** (charpentier) : texture bois SVG 0.55 opacity, drop cap Bodoni, service lines avec yellow slide-up hover, hard shadow 8px 8px 0, pull quote géant noir, photo essay asymétrique, counter animé.

**Trouillet** (ostéopathe) : blobs morphing 18-26s avec 8 border-radius custom, underline cyan animé, menu fullscreen clip-path circle, gradient text, ombres teintées vert, bento grid avec border-radius variés par card, palette crème + accents cyan/vert.

---

## Outils obligatoires

### Puppeteer (vérification visuelle)

Puppeteer est installé. **UTILISER OBLIGATOIREMENT** pour vérifier le rendu à chaque étape :

```bash
node screenshot.js <dossier>/index.html
```

Produit `index_screenshot.png` (desktop 1440px) et `index_screenshot_mobile.png` (375px). **Lire les screenshots** avec l'outil Read pour voir le résultat.

### Context7 MCP (documentation à jour)

Context7 est configuré comme serveur MCP. L'utiliser pour consulter la documentation à jour de CSS, JS, ou toute lib utilisée. Quand tu hésites sur une propriété CSS moderne ou une API JS, **vérifie avec Context7** au lieu de deviner.

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
   Si 0 résultats → synonymes anglais. Pas plus de 2-3 tentatives, le but c'est l'inspiration, pas la conformité.
3. **Choisir un style** non utilisé par un autre projet (vérifier `memory/styles-used.md`).

### PHASE 2 — Imaginer (5 min)

Avant d'écrire une seule ligne de code, décrire en 10 lignes max le site fini :
- **L'ambiance** en une phrase ("chantier au lever du soleil", "atelier artisan haut de gamme")
- **Le hero** : exactement quoi, quelle image/typo, quel layout
- **L'élément signature** : la chose qu'on retient (pas un trick CSS, une vraie idée visuelle liée au métier)
- **Le rythme** : alternance clair/sombre, quelles sections se distinguent
- **Les 2-3 interactions** les plus impactantes (pas "hover scale", des vrais effets)

**Si tu ne peux pas décrire le site en mots et que ça sonne excitant, tu n'es pas prêt à coder.**

Envoyer cette description à l'utilisateur et attendre sa validation avant de coder.

### PHASE 3 — Construire section par section

**NE PAS écrire le fichier complet d'un coup.** Construire et vérifier visuellement :

1. **Écrire le fichier** avec le CSS global + header + hero (les 2 premières choses qu'on voit)
2. **Screenshot** → Lire le screenshot → Le hero a-t-il de l'impact ? Le texte est-il lisible ? Les couleurs marchent ?
3. **Si le hero est moyen** → corriger AVANT de continuer. Le hero = 80% de la première impression.
4. **Ajouter les sections suivantes** par groupes de 2-3
5. **Screenshot** → vérifier chaque ajout
6. **Répéter** jusqu'au footer

⚠️ **INTERDIT de livrer sans avoir pris au moins 3 screenshots et vérifié visuellement.**

### PHASE 4 — Vérification finale

Screenshot desktop + mobile. Lire les deux. Vérifier :
- Le contenu est visible et lisible (pas caché par des animations non déclenchées)
- Les images se chargent
- Le responsive ne casse rien
- Le design a de la personnalité (pas un template)

---

## Règles non négociables

### Contenu
- **Zéro invention** : tous les textes viennent du site original, mot pour mot
- **Zéro lorem ipsum**
- **Zéro stock générique** : utiliser les vraies photos du client. Si pas assez → Unsplash du même secteur, le préciser.
- **Palette du site original** : extraire les couleurs CSS exactes. Variantes clair/foncé OK, nouvelles teintes interdites.

### Technique
- **Fichier unique** `index.html` (CSS + JS inline), autonome sauf Google Fonts et images
- **Responsive** : 0 débordement horizontal à 320px, 768px, 1440px
- **Hamburger fonctionnel** sur mobile (JS vanilla)
- **`prefers-reduced-motion`** respecté
- **`border-radius` partout** : aucun bord carré sur les éléments visibles. Variables CSS : `--r-sm`, `--r-md`, `--r-lg`, `--r-pill`.
- **Images** : `max-width: 100%`, `object-fit: cover`, `loading="lazy"`
- **Animations GPU** : uniquement `transform` et `opacity`, jamais `top/left/width/height`
- **Pas de `height: 100vh`** → utiliser `min-height: 100dvh`

### Le hero doit être immédiatement visible
Le H1 et le contenu above-the-fold ne doivent JAMAIS dépendre d'une animation ou d'un IntersectionObserver pour être visibles. Ils doivent être visibles au chargement. Les animations de reveal sont pour le contenu below-the-fold uniquement.

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
- Teintée au secteur via `feColorMatrix` (brun pour bois, gris pour béton, etc.)
- `isolation: isolate` + `z-index: 9999` sur les images/cards pour qu'elles ne soient pas affectées

### Ce qui est interdit entre les projets
- Ne pas réutiliser un style déjà pris (voir `memory/styles-used.md`)
- Ne pas copier les éléments signature d'un autre projet (polaroids = Sigot, blobs = Trouillet, etc.)
- Ne pas mettre de marquee/ticker sur chaque site
- Ne pas utiliser clip-path pour les reveals (bug récurrent) → utiliser opacity + transform

---

## Après livraison

Mettre à jour :
- `memory/<projet>.md` avec le résumé du projet
- `memory/styles-used.md` avec le nouveau style
- `memory/MEMORY.md` avec le lien vers le fichier mémoire
