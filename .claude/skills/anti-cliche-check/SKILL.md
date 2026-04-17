---
name: anti-cliche-check
description: Gate de livraison Phase 3. Prend les 4 captures d'une maquette (320/375/768/1440px), les lit visuellement, et répond par écrit aux 7 questions obligatoires du CLAUDE.md. Bloque la livraison si un NON. Utiliser systématiquement avant de push/livrer une maquette.
---

# anti-cliche-check — Gate de livraison

## Objectif

Vérifier qu'une maquette est livrable en répondant honnêtement aux 7 questions obligatoires. Si une seule réponse est NON → retour au build, pas de push.

Ce skill remplace les anciennes phases 2.5, 2.75 et 4. Il concentre la rigueur en un seul point de contrôle exécuté à la fin du build.

## Quand l'utiliser

- Juste avant de livrer / pusher une maquette
- Quand le user demande "est-ce que c'est prêt ?" ou "check final"
- Après avoir terminé toutes les sections + le footer

## Quand NE PAS l'utiliser

- En plein build (Phase 3 en cours) — attendre la fin
- Pour un simple screenshot intermédiaire — utiliser `node screenshot.js` directement

## Procédure

### Étape 1 — Générer les 4 captures

Les captures doivent exister **physiquement**, pas mentalement.

```bash
# Desktop 1440px + Mobile 375px (screenshot.js automatique)
node screenshot.js <slug>/index.html
```
Ceci produit `<slug>/index_screenshot.png` (1440px) et `<slug>/index_screenshot_mobile.png` (375px).

Pour les 2 largeurs manquantes, via MCP Puppeteer :
```
mcp__puppeteer__puppeteer_navigate → file:///<chemin absolu>/<slug>/index.html
mcp__puppeteer__puppeteer_screenshot width=320 height=800
mcp__puppeteer__puppeteer_screenshot width=768 height=1024
```

### Étape 2 — Lire les 4 captures avec Read

**OBLIGATOIRE.** Utiliser l'outil `Read` sur chacune des 4 images pour les voir visuellement. Pas de raccourci — si les captures ne sont pas lues, le check est invalide.

```
Read → <slug>/index_screenshot.png          (1440px)
Read → <slug>/index_screenshot_mobile.png   (375px)
Read → capture Puppeteer 320px
Read → capture Puppeteer 768px
```

### Étape 3 — Répondre aux 7 questions

Répondre **par écrit dans le chat** à chaque question avec OUI / NON + justification courte (1-2 phrases).

**Les 7 questions :**

1. **Secteur reconnaissable ?**
   "Si je cache le logo et le nom du client, est-ce que je reconnais le secteur en 2 secondes ?"
   → Indices : matière, outils, vocabulaire métier dans le ticker, photos, ambiance. Si la page ressemble à "n'importe quel business" = NON.

2. **Détail anti-IA ?**
   "Y a-t-il au moins 1 détail qu'un site IA générique n'aurait JAMAIS produit ?"
   → Exemples valides : geste métier en typographie, chiffre monumental, déséquilibre assumé, texture travaillée, typo qui raconte. Exemples invalides : fade-in-up, card avec icône, gradient.

3. **Palette et photos dominantes ?**
   "La palette et les photos dominent l'écran — ou est-ce du blanc + boutons colorés ?"
   → Si le site est à 70%+ blanc avec des sections décoratives ponctuelles = NON.

4. **Vraie idée nommable ?**
   "Le site a une vraie idée nommable en une phrase — ou juste des sections empilées ?"
   → Bonne réponse : "atelier charpente avec numérotation romaine géante comme chapitres". Mauvaise réponse : "site propre avec de belles sections".

5. **Unicité client ?**
   "Un concurrent du même secteur pourrait-il utiliser ce site tel quel en changeant juste le nom ?"
   → Si le geste signature, le vocabulaire métier, les photos, et l'ambiance sont assez spécifiques que la réponse est "non" = OUI (bon signe). Si le concurrent pourrait l'utiliser = NON (mauvais).

6. **3 mouvements ambiants ?**
   "Les 3 mouvements ambiants sont-ils visibles à l'arrêt (ticker + ambiant + signal hero) ?"
   → Vérifier sur le screenshot 1440px : peut-on imaginer 3 animations distinctes en boucle avant de scroller ? Si la page est statique visuellement = NON.

7. **Responsive valide ?**
   "Le responsive ne casse pas à 320px, 375px, 768px, 1440px ?"
   → Checklist rapide sur les 4 captures :
   - [ ] Zéro débordement horizontal à 320px
   - [ ] Texte lisible à toutes les tailles (pas tronqué, pas minuscule)
   - [ ] Pas de chevauchement d'éléments
   - [ ] Touch targets ≥ 44px sur mobile
   - [ ] Hamburger visible et fonctionnel sur mobile
   - [ ] Images pas cassées

### Étape 4 — Verdict

Compter les OUI et les NON.

- **7/7 OUI** → Maquette livrable. Procéder au push.
- **6/7 OUI** → Presque. Le point NON peut probablement être fixé en 5-10 min. Le corriger, reprendre le screenshot concerné, vérifier uniquement la question échouée.
- **≤ 5/7 OUI** → Retour au build. Lister les points à corriger, les traiter dans l'ordre d'impact (question 1, 2, 4 en priorité — ce sont les "l'ADN du site"), puis re-check complet.

### Étape 5 — Format de sortie dans le chat

```
## Anti-cliché check — <slug>

1. Secteur reconnaissable : ✅ OUI — le vocabulaire <métier> dans le ticker + la texture <matière> donnent le secteur immédiatement
2. Détail anti-IA : ✅ OUI — <décrire le geste signature>
3. Palette dominante : ✅ OUI — les tons <couleurs> couvrent 80%+ de l'écran
4. Vraie idée : ✅ OUI — "<l'idée en une phrase>"
5. Unicité client : ✅ OUI — <justifier>
6. 3 mouvements : ✅ OUI — ticker <vocabulaire>, <élément ambiant>, <signal hero>
7. Responsive : ✅ OUI — testé 320/375/768/1440

**Verdict : LIVRABLE** ✅ (ou ❌ RETOUR BUILD — points à corriger : X, Y)
```

## Checklist supplémentaire anti-clichés (rapide, pas bloquante mais mérite un warning)

Pendant la lecture des captures, vérifier aussi :

- Hero centré H1 + 2 boutons ? → WARNING
- Features en grille de 3 icônes ? → WARNING
- Timeline verticale 1→4 ? → WARNING
- Stats centrées "+X clients / Y ans" ? → WARNING
- Gradient violet/bleu ? → WARNING
- Tout symétrique ? → WARNING
- Typo display = Inter/Geist/DM Sans ? → BLOQUANT (interdit dans le CLAUDE.md)
- Icônes Lucide/Heroicons en grille ? → BLOQUANT (Registre 2 interdit)
- Glassmorphism ? → BLOQUANT (interdit sur tous les registres sauf cas exceptionnel)

Si warnings détectés, les mentionner après le verdict : "Suggestions d'amélioration (non bloquantes) : ..."
Si bloquants détectés, ça compte comme un NON.

## Règle d'or

**Être honnête.** Ce check n'a de valeur que s'il est sincère. Si la maquette est moyenne, le dire. Mieux vaut 15 min de correction que livrer un site générique — ça fait perdre le client.
