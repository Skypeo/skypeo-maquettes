# Vachette Thomas — Chauffagiste Avermes

**Source** : https://www.chauffage-vachette.fr/ (scrapé OK via WebFetch)

## Identité
- **Nom commercial** : Vachette Thomas
- **Métier** : Chauffagiste, plombier, rénovation salle de bain, clim/ventil
- **Siège** : 15 Rue Pasteur, 03000 Avermes (Allier, Auvergne)
- **Depuis 2010** (15 ans de savoir-faire)
- **Équipe familiale** : 7 personnes
- **Tel mobile** : 06 10 57 68 14
- **Tel fixe** : 09 83 77 18 98
- **Email** : thomas.vachette@live.fr

## Métiers
- Chauffage / pompe à chaleur (RGE Quali PAC)
- Gaz condensation (Pro Gaz)
- Climatisation / ventilation (Ventil+)
- Rénovation de salle de bains (douche italienne, meuble, carrelage)
- Plomberie
- Dépannage (chauffage, chauffe-eau, climatisation)

## Horaires
- Lun → Jeu : 08:00 - 12:00 / 14:00 - 18:00
- Vendredi : 08:00 - 12:00
- Sam/Dim : Fermé

## Registre
**R2 — Relevé Technique**. Chauffagiste = précision, relevé thermique, schéma hydraulique, cotations techniques.

## Palette
- Crème technique : `#f4f1e8`
- Crème chaude fond : `#ede7d6`
- Encre : `#141820`
- Ardoise : `#2f3a4b`
- Rouge brique (chauffage) : `#b51515`
- Rouge chaud profond : `#8a0e0e`

## Typos (Google Fonts)
- Display : **Fraunces** (opsz variable, italique pour manifeste)
- Body : **Inter Tight**
- Mono : **JetBrains Mono** (relevés, unités, numéros)

## Angle distinctif
**Banc d'essai thermique / fiche de relevé d'intervention.** Chaque bloc est une "fiche" avec N°, date, lieu, puissance, ∆T — vocabulaire du compte-rendu de technicien chauffagiste.

Vocabulaire section : **"Relevé 01/02/…"** (pas "Chapitre" — déjà pris par desan-couverture).

## Mouvements ambiants (obligatoire ≥ 3)
1. Ticker unités + vocabulaire (°C · bar · kW · COP · m³/h · PAC · GAZ CONDENSATION · VMC · DOUCHE ITALIENNE · CHAUFFE-EAU)
2. Thermomètre SVG en hero avec mercure qui oscille en continu (loop 8s)
3. Ligne ECG thermique en bas de hero qui trace en continu (simule un relevé)
4. Diagramme de flux thermique (PAC → maison) qui se trace au scroll sur la section chauffage
5. Sticker rotatif "RGE · QUALI PAC · PRO GAZ · VENTIL+" (loop 22s)

## Ticker
`°C · bar · kW · COP · ∆T · POMPE À CHALEUR · GAZ CONDENSATION · PLANCHER CHAUFFANT · CLIMATISATION · VMC · CHAUFFE-EAU · DOUCHE ITALIENNE · MEUBLE VASQUE · CARRELAGE · ROBINETTERIE · RGE QUALI PAC · PRO GAZ`

## Photos client (à déposer par user dans `img/`)
1. `douche-italienne-noir.jpg` — douche italienne contemporaine, barres noires
2. `salle-de-bain-marbre.jpg` — SdB marbre en cours, verrière noire
3. `pac-exterieur.jpg` — unité extérieure PAC ouverte
4. `pac-interieur.jpg` — chaudière intérieure Atlantic sous-sol
5. `plomberie-atelier.jpg` — installation plomberie complexe
6. `meuble-vasque.jpg` — meuble vasque bois et miroir galet

## Structure
1. Header (nav + tél monumental)
2. Hero : fiche d'intervention + "15" ans + thermomètre + ECG trace
3. Relevé 01 · L'équipe (7 compagnons, depuis 2010, esprit familial)
4. Relevé 02 · Chauffage & Énergie (PAC, gaz, VMC) + schéma flux
5. Relevé 03 · Rénovation salle de bain (photos douche/marbre/vasque)
6. Relevé 04 · Plomberie & Dépannage
7. Zone + Horaires (live : ouvert/fermé, calcul JS)
8. Contact (tel monumental + adresse)
9. Footer
