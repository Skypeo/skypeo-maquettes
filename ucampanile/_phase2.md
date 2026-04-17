# Phase 2 — U Campanile (en attente validation)

**État** : proposée le 2026-04-16, à valider par le user avant Phase 3.
**Contrainte majeure** : contenu strictement verbatim du site d'origine (pas de lorem ipsum, pas d'horaires/adresse inventés, pas d'actualités simulées). Les 2 téléphones + email + Bastia/Piève/Ajaccio suffisent.

---

## 1. Registre retenu

**Registre 1 — Éditorial Artisan**, angle "**registre d'inventaire du campaniste**" (carnet de cloches restaurées numérotées).

Pourquoi pas les autres :
- R2 Technique → trop froid, ignore le patrimoine.
- R3 Sensoriel → hors sujet.
- R4 Urgence → pas un service 24/7.
- R5 Institutionnel → manque l'ancrage matière/bronze.

Démarcation vs les 4 autres R1 existants :
- ≠ Trubert (charpente, drop cap Bodoni, yellow)
- ≠ Sigot (polaroids, chiffres 03/04/06)
- ≠ Toit Service (magazine Pl. I→VI, fil à plomb rouge, tampon GARANTI)
- ≠ Top Utilitaires (plaque FR moutarde, planche Manufrance, bornes km)
- ≠ ancienne U Campanile ratée (heures canoniales latines, cartouche lapidaire)

---

## 2. Boîte à outils

**Palette (3 hex)** :
- `#f4eee2` — crème parchemin chaud (fond)
- `#580a12` — bourgogne client original (accent principal)
- `#8b6a3a` — bronze patiné (matière cloche, accent secondaire)
- `#1a1414` — texte (légèrement bordeaux, pas noir pur)

**Typographie** :
- Display : **DM Serif Display** (non utilisé en R1, présence magistrale)
- Emphase : DM Serif Display Italic (même famille)
- Body : **Manrope** (Google Fonts, non utilisé sur le projet)
- Mono : **JetBrains Mono** (fiches techniques)

**3 patterns signature** :
1. **Fiches d'inventaire N°01 → N°08** — chaque cloche restaurée a sa carte avec specs mono (Ø diamètre · kg poids · note musicale · % alliage bronze · commune d'origine)
2. **Schéma de cloche en coupe** SVG au trait qui se trace au scroll (cerveau → vase → pince → panse → bord) avec annotations chiffrées
3. **Carte Corse SVG au trait** avec pins pulsants Bastia / Piève / Ajaccio + ligne côtière

---

## 3. Concept (10 mots max)

**"Carnet d'un campaniste corse — bronze, note, volée, patrimoine."**

---

## 4. Geste métier signature

**LA VOLÉE** (le balancement de la cloche qui fait sonner) — exploité deux fois :
- Mot-leitmotiv dans le masthead, les titres de sections et le ticker
- Schéma SVG de cloche en hero qui **oscille en continu** (rotation ±3°, loop 4s) = la volée visible à l'arrêt, avant tout scroll

---

## 5. Les 3 mouvements ambiants (obligatoires)

1. **Ticker métier** (loop 28s) :
   `BOURDON · BATTANT · VOLÉE · TINTEMENT · JOUG · BRONZE · ANGELUS · GLAS · CARILLON · BASTIA · PIÈVE ·`

2. **Élément ambiant** : onde sonore sinusoïdale SVG en fond hero, pulse continue (période 0.7s — tempo réel d'un battement de cloche moyen)

3. **Signal hero** : cloche SVG au trait qui se balance à ±3° (loop 4s) — la volée visible avant tout scroll

---

## À faire en Phase 3 (après validation)

1. Global CSS (variables, reset, fonts, texture parchemin) + header + hero avec les 3 mouvements ambiants
2. Screenshot desktop + mobile → lire
3. Si hero moyen → corriger
4. Sections par groupes de 2-3 + screenshots
5. Gate anti-cliche-check sur 4 captures (320/375/768/1440)
6. Commit + push sur main

## Rappels contenu verbatim (voir `_brief.md`)

- H1 : "Un campaniste au service de vos bâtiments religieux à Bastia"
- H1 /a-propos : "Un artisan campanaire réalise tous vos projets à Piève"
- H2 services : installation/réparation/restauration cloche · protection foudre · sonorisation église · filets anti-pigeons
- Services menu (9) : installation cloche, restauration, électrification, équipements clocher (horloge), protection foudre, parafoudre, paratonnerre, sonorisation, anti-pigeons
- CTA verbatim : "Devis gratuit" · "Contactez notre entreprise" · "Je contacte mon campaniste" · "Je protège mon clocher !" · "Je m'informe sur la sonorisation d'église" · "Besoin d'une protection contre la foudre ?"
- Bloc "Notre entreprise" → SUPPRIMÉ (lorem ipsum sur original)
- Actualités → SUPPRIMÉ ("Pas d'actualité aujourd'hui" sur original)
- Pas d'adresse postale complète (manquante sur site)
- Pas d'horaires (manquants sur site)
