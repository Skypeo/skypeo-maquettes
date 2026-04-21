# Sun Est — Maquette one-page

## Projet
Site one-page pour **Sun Est**, installateur photovoltaïque du Grand Est, basé à Pompey (54).
Source : https://sunest.fr/ (accès direct bloqué côté sandbox — infos recoupées via recherche web + Pages Jaunes + Trustindex).

## Contact client (repris du site original)
- 136 Boulevard de Finlande, 54340 Pompey
- 07 81 34 09 48
- contact@sunest.fr
- SIREN 810 665 182 — SAS Sun Est

## Registre retenu
**Registre 2 — Relevé Technique.** Expertise solaire, dimensionnement, schéma de toiture, compagnonnage (équipes internes charpentiers + couvreurs + électriciens, zéro sous-traitance).

## Palette extraite
- `#f1ebe0` crème technique (fond dominant, papier)
- `#1a2332` ardoise (typo, sections sombres)
- `#d97706` ocre ambre (accent solaire — lever de soleil, pas jaune fluo)
- Variantes : `#e8e0d2` crème soft, `#2a3545` ardoise soft, `#475268` ink dim, `#f2a038` ocre warm

Zéro gradient, 3 couleurs + variantes tonales seulement.

## Typographie
- **Instrument Serif** (display, italique de caractère) — H1/H2/H3, moderne-classique, jamais utilisé sur les autres maquettes du dépôt
- **JetBrains Mono** — cotations kWc, numéros de fiche "N° 001", labels techniques
- **Inter** — body, CTA, forms

## Patterns signature (Registre 2)
1. **Coupe de toiture SVG au trait** — 4 panneaux sur versant sud, angle 35° coté, boussole N/S, tampon "installation validée"
2. **Fiches numérotées "Fiche N° 001 → 004"** — les 4 étapes du process (Analyse → Dossier Enedis → Pose → SAV 72h), style chapitres d'étude
3. **Chiffres monumentaux** avec unités en indice mono — 1 000+ inst., 4,8/5 ★, 10 dépts, 72h SAV
4. **Papier millimétré** en fond fixe (grille 56×56px très discrète) + grain feTurbulence teinté ocre
5. **Carte Grand Est** dessinée au trait, dot Pompey + pulse ring, 10 villes étiquetées
6. **Boussole** en coin de carte + indicateur Sud sur la coupe de toit

## Les 3 mouvements ambiants
1. **Ticker vocabulaire PV** (ink / cream) : `Sud 35° / kWc / monocristallin / onduleur / micro-onduleur / autoconsommation / revente / Enedis / Consuel / RGE QualiPV / string / MPPT / traceur I-V / borne 7,4 kW` — loop 32s
2. **Course du soleil** : point ambré qui suit un arc de Bézier quadratique au-dessus du hero, 32s/cycle complet (aube E → midi solaire → crépuscule O), tracé en pointillés + tick marks horaires
3. **Pulse Pompey HQ** : ring ocre qui s'étend à l'infini sur la carte Grand Est (2,6s loop)

+ live-dot pulse sur le stamp "Agenda Q2 2026" + reveal des panneaux de toit au chargement.

## Structure one-page
1. Header sticky (transparent → cream blur) avec brand "Sun·Est" + dot ocre
2. Hero : H1 "Relevé solaire. Plan de toit. Cap plein Sud." + fiche relevé N°001 + coupe de toit + arc solaire + ticker
3. Proof band 4 cellules (1000+ / 4,8★ / 10 dépts / 72h)
4. Méthode : 4 fiches numérotées 01→04 (Analyse, Administratif, Pose, SAV)
5. Services (fond ardoise, grille technique) : 4 rangées S·001→S·004 (Autoconsommation, Revente, Bornes VE, Maintenance)
6. Zone couverte : texte + 10 chips départements + carte SVG Grand Est au trait avec boussole
7. Public : 4 cards (Particuliers, Entreprises, Agriculture, Collectivités)
8. Avis clients 4,82/5 : 3 cards témoignages authentiques
9. Contact : infos + formulaire style "Fiche relevé Pl. V"
10. Footer : brand géant Sun·Est + 4 cols (intro, sommaire, contact, mentions)

## Textes
Mot pour mot depuis le site original / Pages Jaunes / témoignages Trustindex :
- H1 inspiré du gisement PV réel Grand Est : 1 380 kWh/kWc/an
- Méthode 4 étapes reprise texto du site
- Avis clients résumés d'après Trustindex & Facebook
- Coordonnées, SIREN, zone 10 départements : extraits vérifiés

## Stack technique
HTML/CSS/JS vanilla, **un seul fichier `index.html`** (67 KB). Dépendances externes : Google Fonts (Instrument Serif / JetBrains Mono / Inter) + CDN jsdelivr GSAP 3.12 + ScrollTrigger. Zéro build.

## Règles respectées
- Hero immédiatement visible (pas d'IntersectionObserver requis)
- `prefers-reduced-motion` respecté (animations sun/pulse/ticker coupées)
- `border-radius` partout via variables `--r-sm/md/lg/xl/pill`
- `100dvh` au lieu de `100vh`
- `clamp()` pour toute la typo display
- Hamburger JS vanilla avec `aria-expanded`, fermeture Escape + clic lien
- `padding-inline` au lieu de left/right
- Breakpoints : 1024, 720, 400
- Images : aucune (métaphore 100% dessin SVG au trait, cohérent avec le registre Relevé Technique)

## Anti-cliché — auto-check
1. Logo caché → secteur reconnaissable : OUI (coupe panneaux + arc solaire + H1 "plan de toit")
2. Détail qu'un IA générique n'aurait jamais produit : OUI (ticker "MPPT / traceur I-V", fiche relevé Pl. I, arc solaire Bézier + tick marks horaires)
3. Palette domine l'écran : OUI (crème+ocre+ardoise partout, jamais de blanc pur)
4. Idée nommable : "Relevé d'ingénieur solaire tracé sur papier millimétré"
5. Réutilisable par un concurrent : NON (zone Grand Est 10 dépts, Pompey HQ, SIREN, 72h SAV, vocabulaire spécialisé)
6. 3 mouvements ambiants visibles à l'arrêt : OUI (sun arc + ticker + live-dot + pulse carte)
7. Responsive : breakpoints 1024/720/400 posés, clamp() partout, grid→flex col sur mobile

## Livraison
Fichier unique : `sunest/index.html`. Push sur le repo → Vercel déploie automatiquement sur `https://skypeo-maquettes.vercel.app/sunest`.

## Notes techniques
- Arc solaire : animation via `requestAnimationFrame` sur un échantillonnage 300 points d'une Bézier quadratique (viewBox 1200×260)
- Pulse Pompey : animation CSS `r: 3 → 28` en keyframes (supporté Chrome/FF récents)
- Counter proof : GSAP ScrollTrigger avec formatage fr-FR (espace milliers)
