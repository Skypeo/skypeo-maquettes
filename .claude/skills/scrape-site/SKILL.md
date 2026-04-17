---
name: scrape-site
description: Phase 1 du workflow Skypeo - scrape une URL client, extrait textes mot pour mot, images, palette CSS, coordonnées, et produit un _brief.md structuré prêt à utiliser pour la Phase 2. Utiliser systématiquement quand Vincent ou Tim envoient une URL à refondre.
---

# scrape-site — Phase 1 automatisée

## Objectif

À partir d'une URL de site client, produire en moins de 3 minutes un fichier `<slug>/_brief.md` qui contient **tout** ce qu'il faut pour démarrer la Phase 2 sans jamais retourner sur le site source.

**Principe directeur :** zéro invention. Tous les textes sont extraits mot pour mot. Si une info manque, on le note "(manquant)" — on n'invente pas.

## Quand l'utiliser

- Vincent ou Tim envoient une URL du type "fais-moi une refonte de https://..."
- Le user demande "scrape-moi ce site" ou "prépare le brief pour X"
- Au démarrage de chaque nouveau projet dans ce dossier

## Quand NE PAS l'utiliser

- Si le brief existe déjà (`<slug>/_brief.md` présent) → le lire au lieu de le recréer
- Si le user demande juste d'analyser une section précise
- Si le site source est inaccessible (captcha, login, erreur 403) → prévenir le user et demander les infos directement

## Procédure

### Étape 1 — Créer la structure projet

1. Déterminer le slug depuis l'URL (`https://www.plomberie-nonnon.fr` → `nonnon`, `https://www.toitures-des-gones.fr` → `toitures-des-gones`). Demander au user si le slug est ambigu.
2. Créer le sous-dossier : `mkdir -p <slug>/_scrape <slug>/_scrape/images`
3. Créer `<slug>/.claude/settings.local.json` et `<slug>/.vscode/settings.json` selon le CLAUDE.md racine

### Étape 2 — Aspirer la page d'accueil

**One-page = on scrape UNIQUEMENT la page d'accueil.** Pas de sous-pages (à propos, services, etc.) — tout le contenu de la maquette vient de la home. Si des infos critiques manquent (tel, adresse), vérifier la page contact en dernier recours.

```bash
curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
  "<URL>" -o <slug>/_scrape/home.html
```

Si le site est bloqué par curl (cloudflare, etc.) → utiliser `WebFetch` avec un prompt d'extraction ou `mcp__puppeteer__puppeteer_navigate` suivi de `mcp__puppeteer__puppeteer_evaluate` pour récupérer le HTML.

### Étape 3 — Extraire le contenu structuré

Parser le HTML avec le script `scripts/extract.js` (node, vanilla, pas de dépendance). Ce script produit un JSON intermédiaire avec :

- `title` (meta og:title ou `<title>`)
- `description` (meta description)
- `headings` : tous les `h1`, `h2`, `h3` avec texte mot pour mot
- `paragraphs` : tout le texte hors nav/footer
- `images` : URLs absolues de toutes les images (hors icônes <32x32)
- `contact` : téléphone (regex `(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}`), email, adresse
- `hours` : chaînes contenant "h", "lundi-vendredi", etc.
- `colors` : palette CSS dominante (voir étape 4)
- `cta` : textes des boutons et liens mis en avant

### Étape 4 — Détecter la palette

Parser les `<style>` inline et les fichiers CSS liés. Extraire toutes les couleurs (hex, rgb, hsl, named). Compter les occurrences, garder le top 6, convertir en hex. Si aucune couleur CSS dominante n'est trouvée (site trop générique), signaler "(à définir en Phase 2)".

### Étape 5 — Produire `_brief.md`

Structure imposée :

```markdown
# Brief — <Nom client>

**URL source** : <url>
**Scraped** : <date ISO>
**Slug** : <slug>

## Identité
- **Nom** : <nom officiel>
- **Tagline** : <tagline si présente>
- **Secteur** : <métier déduit>
- **Zone** : <ville/département>

## Contact
- **Téléphone** : <tel>
- **Email** : <email>
- **Adresse** : <adresse>
- **Horaires** : <horaires ou "(manquant)">

## Textes extraits mot pour mot

### Titres (H1/H2/H3)
1. <h1 verbatim>
2. <h2 verbatim>
...

### Descriptions / paragraphes clés
> <paragraphe 1 verbatim>

> <paragraphe 2 verbatim>

### CTA repérés
- "<texte bouton 1>"
- "<texte bouton 2>"

## Palette détectée
- `#xxxxxx` (X occurrences) — <rôle supposé : fond / accent / texte>
- `#yyyyyy` (Y occurrences)
...

## Images disponibles
Total : N images

- `<slug>/_scrape/images/img-01.jpg` — source : <URL> — <dimensions si connues>
- `<slug>/_scrape/images/img-02.jpg` — source : <URL>
...

## Registre pressenti
<1 ou 2 registres candidats parmi les 5, avec 1 ligne de justification. Ex : "Registre 2 Relevé Technique (couvreur) OU Registre 1 Éditorial Artisan si l'angle patrimoine familial est fort.">

## Notes / pièges
- <ambiguïté à trancher avec le user>
- <info qu'on n'a pas pu récupérer>
```

### Étape 6 — Télécharger les images en local

Pour chaque image listée, télécharger dans `<slug>/_scrape/images/img-01.jpg`, `img-02.jpg`, etc. Avec `curl -sL`. Ignorer les images < 32×32px (icônes) et les images < 50 Ko (a priori logos ou pictos). Garder le SVG s'il y a un logo SVG.

Si une image renvoie 403 ou 404, le noter dans `_brief.md` section "Images indisponibles".

### Étape 7 — Afficher un résumé

Une fois le brief produit, répondre au user en 5-6 lignes max :

- Nombre de pages scrapées
- Nombre d'images récupérées
- Registre pressenti + alternative si ambigu
- Lien vers `<slug>/_brief.md`
- Question piège éventuelle à trancher avant Phase 2

## Règles strictes

- **Zéro paraphrase** sur les textes. Tout est verbatim. Si le texte original est médiocre, on le signale en Phase 2 (pas ici).
- **Toutes les images locales** avant la Phase 2, pour pouvoir bosser sans réseau
- **Pas d'invention de contact** : si pas de téléphone dans le site, on écrit "(manquant)" et on le demandera au user
- **Lire une seule fois** les fichiers HTML source, tout le reste se fait sur le brief

## Exemple d'usage

User : "fais-moi une refonte de https://www.boulangerie-martin.fr"

Claude :
1. Déduit slug `boulangerie-martin`
2. Crée la structure
3. Scrape home + à propos + contact
4. Parse, détecte palette crème + brun
5. Télécharge 18 images
6. Produit `_brief.md` avec registre pressenti = 1 (Éditorial Artisan)
7. Répond au user : "Brief prêt. Registre pressenti : Éditorial Artisan. 18 photos récupérées, 2 textes à clarifier (liste ici). Prêt pour Phase 2 ?"

## Scripts associés

- `scripts/extract.js` — parser HTML vers JSON (à créer lors du premier usage)
- `scripts/download-images.js` — télécharge les images depuis le JSON

Si ces scripts n'existent pas encore dans `.claude/skills/scrape-site/scripts/`, les créer au vol lors du premier usage, puis les réutiliser. Ils sont vanilla Node (pas de `npm install`), utilisent `fs`, `path`, `https`, et des regex.

## Fallback

Si le site est trop protégé (Cloudflare challenge, bot detection agressive) :
1. Prévenir le user
2. Demander qu'il paste les textes et URLs d'images manuellement
3. Construire le brief à partir de ses réponses
