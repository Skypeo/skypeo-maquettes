---
name: gsap-patterns
description: Patterns GSAP copy-paste testés par registre pour les maquettes Skypeo. Utiliser quand il faut implémenter les 3 mouvements ambiants obligatoires (ticker, élément ambiant, signal hero), un effet signature de registre (path qui se trace, blob qui morph, signature manuscrite, ligne ECG), ou une animation scroll-driven (ScrollTrigger, SplitText, Flip, DrawSVG, MorphSVG). Ne jamais réinventer — piocher dans les patterns.
---

# gsap-patterns — Patterns GSAP par registre

## Objectif

Fournir des patterns GSAP **prêts à coller** dans une maquette single-file, organisés par registre. Chaque pattern est :

- Autonome (HTML + CSS + JS, à insérer dans `index.html`)
- Testé dans le contexte Skypeo
- Accompagné d'un paramétrage clair
- Wrappé dans `@media (prefers-reduced-motion: no-preference)`

## Import GSAP (toujours la même base)

Dans `<head>` de chaque maquette :

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/ScrollTrigger.min.js"></script>
```

Plugins optionnels (ajouter seulement si utilisés) :
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/Flip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/DrawSVGPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/MorphSVGPlugin.min.js"></script>
```

En JS, au début du script :
```js
gsap.registerPlugin(ScrollTrigger);
// + autres plugins selon besoin
```

Wrapper toutes les animations dans :
```js
if (matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  // ici les animations
}
```

---

## Patterns universels (valables tous registres)

### Ticker / marquee métier

Obligatoire sur chaque maquette. Vocabulaire métier spécifique, jamais générique.

```html
<div class="ticker">
  <div class="ticker__track">
    <!-- dupliquer le contenu 2 fois pour boucle seamless -->
    <span>Charpente</span><span>·</span><span>Ossature bois</span><span>·</span><span>Toiture</span><span>·</span>
    <span>Bardage</span><span>·</span><span>Extension</span><span>·</span><span>Rénovation</span><span>·</span>
    <span>Charpente</span><span>·</span><span>Ossature bois</span><span>·</span><span>Toiture</span><span>·</span>
    <span>Bardage</span><span>·</span><span>Extension</span><span>·</span><span>Rénovation</span><span>·</span>
  </div>
</div>
```

```css
.ticker { overflow: hidden; white-space: nowrap; }
.ticker__track { display: inline-flex; gap: 2rem; will-change: transform; }
```

```js
// Animation continue, pas de ScrollTrigger
gsap.to('.ticker__track', {
  xPercent: -50,          // -50% car le contenu est dupliqué
  duration: 30,           // vitesse : 20-40s selon longueur
  ease: 'none',
  repeat: -1
});
```

### Counter animé (reveal au scroll)

```html
<div class="stat"><span class="stat__num" data-target="47">0</span><span class="stat__unit">ans</span></div>
```

```js
gsap.utils.toArray('.stat__num').forEach(el => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      const target = +el.dataset.target;
      gsap.to({ v: 0 }, {
        v: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function() { el.textContent = Math.round(this.targets()[0].v); }
      });
    }
  });
});
```

### Reveal signifiant (below-the-fold uniquement)

```js
gsap.utils.toArray('[data-reveal]').forEach(el => {
  gsap.from(el, {
    y: 24,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 85%', once: true }
  });
});
```

**Interdit sur le hero** — le hero est visible immédiatement.

### Sticker rotatif en boucle (Registre 1, 3, parfois 2)

```html
<div class="sticker">Depuis 1952 · Depuis 1952 · </div>
```

```js
gsap.to('.sticker', { rotation: 360, duration: 20, ease: 'none', repeat: -1 });
```

---

## Patterns par registre

### Registre 1 — Éditorial Artisan

**Drop cap qui s'imprime au reveal**
```js
gsap.from('.drop-cap', {
  scale: 1.3, opacity: 0, duration: 0.8, ease: 'power3.out',
  scrollTrigger: { trigger: '.drop-cap', start: 'top 85%', once: true }
});
```

**Pull quote fond noir qui glisse**
```js
gsap.from('.pullquote', {
  clipPath: 'inset(100% 0 0 0)', // sortie de bas → haut
  duration: 1, ease: 'power3.inOut',
  scrollTrigger: { trigger: '.pullquote', start: 'top 75%', once: true }
});
```
Exception : clip-path autorisé en `scrollTrigger` avec `once: true` sur un élément isolé, pas en reveal générique.

**Numérotation géante qui se révèle mot-par-mot (SplitText)**
```js
const split = new SplitText('.chapter-num', { type: 'chars' });
gsap.from(split.chars, {
  yPercent: 100, opacity: 0, stagger: 0.05, duration: 0.6, ease: 'power3.out',
  scrollTrigger: { trigger: '.chapter-num', start: 'top 80%', once: true }
});
```

### Registre 2 — Relevé Technique

**Schéma SVG qui se trace au scroll (DrawSVG)**
```html
<svg viewBox="0 0 600 400"><path id="coupe" d="M0 200 L150 200 L200 100 L400 100 L450 200 L600 200" fill="none" stroke="#1a1a1a" stroke-width="2"/></svg>
```

```js
gsap.from('#coupe', {
  drawSVG: '0%',
  duration: 2,
  ease: 'power2.inOut',
  scrollTrigger: { trigger: '#coupe', start: 'top 70%', end: 'bottom 30%', scrub: 0.5 }
});
```

Sans plugin DrawSVG (gratuit mais optionnel), fallback CSS :
```css
#coupe { stroke-dasharray: 2000; stroke-dashoffset: 2000; }
```
```js
gsap.to('#coupe', {
  strokeDashoffset: 0,
  scrollTrigger: { trigger: '#coupe', start: 'top 70%', end: 'bottom 30%', scrub: 0.5 }
});
```

**Cotation qui s'étire au reveal**
```js
gsap.from('.cote__line', {
  scaleX: 0, transformOrigin: 'left center',
  duration: 0.8, ease: 'power2.out',
  scrollTrigger: { trigger: '.cote', start: 'top 80%', once: true }
});
gsap.from('.cote__value', { opacity: 0, delay: 0.6, duration: 0.3, scrollTrigger: { trigger: '.cote', start: 'top 80%', once: true } });
```

**Boussole qui réagit au scroll**
```js
gsap.to('.compass-needle', {
  rotation: 360,
  ease: 'none',
  scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1 }
});
```

### Registre 3 — Sensoriel / Bien-être

**Blobs SVG morphing continu (MorphSVG)**
```html
<svg class="blob" viewBox="0 0 400 400">
  <path id="blob-shape" d="M200,50 Q350,100 380,250 Q350,380 200,380 Q50,350 20,200 Q50,50 200,50 Z" fill="#e8d5c4"/>
</svg>
<svg style="display:none">
  <path id="blob-b" d="M200,80 Q380,150 350,270 Q300,390 180,370 Q30,310 40,180 Q80,40 200,80 Z"/>
  <path id="blob-c" d="M200,40 Q320,70 370,200 Q390,340 200,390 Q60,370 30,230 Q20,90 200,40 Z"/>
</svg>
```

```js
gsap.timeline({ repeat: -1, yoyo: true })
  .to('#blob-shape', { morphSVG: '#blob-b', duration: 8, ease: 'sine.inOut' })
  .to('#blob-shape', { morphSVG: '#blob-c', duration: 8, ease: 'sine.inOut' });
```

Sans MorphSVG, fallback avec `border-radius` animé (moins riche mais fonctionne) :
```css
.blob-div { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
```
```js
gsap.to('.blob-div', {
  borderRadius: '37% 63% 46% 54% / 48% 55% 45% 52%',
  duration: 8, yoyo: true, repeat: -1, ease: 'sine.inOut'
});
```

**Gradient qui respire (@property + GSAP)**
```css
@property --g-x { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
@property --g-y { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
.breathing-bg {
  background: radial-gradient(circle at var(--g-x) var(--g-y), #f5e6d3, #e8c8a0);
}
```
```js
gsap.to('.breathing-bg', {
  '--g-x': '60%', '--g-y': '40%',
  duration: 10, yoyo: true, repeat: -1, ease: 'sine.inOut'
});
```

**Photos qui flottent en décalage**
```js
gsap.utils.toArray('.float').forEach((el, i) => {
  gsap.to(el, {
    y: -20,
    duration: 6 + i * 0.5,  // chaque élément flotte à une vitesse légèrement différente
    yoyo: true, repeat: -1, ease: 'sine.inOut',
    delay: i * 0.3
  });
});
```

### Registre 4 — Service d'Urgence

**Dot vert "disponible" qui pulse**
```css
.pulse-dot { width: 10px; height: 10px; border-radius: 50%; background: #22c55e; }
```
```js
gsap.to('.pulse-dot', {
  scale: 1.4,
  boxShadow: '0 0 0 10px rgba(34,197,94,0)',
  duration: 1.2, yoyo: true, repeat: -1, ease: 'sine.inOut'
});
```

**Ligne ECG qui trace en continu en bas du hero**
```html
<svg class="ecg" viewBox="0 0 800 60"><path d="M0 30 L200 30 L210 10 L220 50 L230 30 L800 30" stroke="#e60012" stroke-width="2" fill="none"/></svg>
```
```css
.ecg path { stroke-dasharray: 800; stroke-dashoffset: 800; }
```
```js
gsap.to('.ecg path', {
  strokeDashoffset: -800,
  duration: 3, repeat: -1, ease: 'none'
});
```

**Flip counter pour téléphone au chargement**
```html
<span class="tel-monumental">04 78 00 00 00</span>
```
```js
// Animation "flip" des chiffres un par un
const tel = document.querySelector('.tel-monumental');
const chars = tel.textContent.split('');
tel.innerHTML = chars.map(c => `<span class="flip">${c}</span>`).join('');
gsap.from('.flip', {
  rotationX: -90, opacity: 0,
  duration: 0.4, stagger: 0.04, ease: 'power2.out',
  transformOrigin: '50% 50% -15px'
});
```

**Pin de carte qui bounce**
```js
gsap.to('.map-pin', {
  y: -8, duration: 0.8, yoyo: true, repeat: -1, ease: 'sine.inOut'
});
```

### Registre 5 — Institutionnel

**Signature manuscrite qui se trace (DrawSVG ou stroke-dashoffset)**
```html
<svg viewBox="0 0 400 100"><path id="signature" d="M10,50 Q50,10 90,50 T170,50 Q200,30 240,50 L290,40" fill="none" stroke="#1a2847" stroke-width="2.5"/></svg>
```
```js
gsap.from('#signature', {
  drawSVG: '0%',
  duration: 2.5, ease: 'power1.inOut',
  scrollTrigger: { trigger: '#signature', start: 'top 75%', once: true }
});
```

**Sceau qui s'imprime**
```js
gsap.from('.seal', {
  scale: 1.3, opacity: 0, rotation: -8,
  duration: 0.6, ease: 'power3.out',
  scrollTrigger: { trigger: '.seal', start: 'top 80%', once: true }
});
```

**Filet horizontal qui s'étire entre paragraphes**
```js
gsap.utils.toArray('.rule').forEach(el => {
  gsap.from(el, {
    scaleX: 0, transformOrigin: 'left center',
    duration: 1, ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 85%', once: true }
  });
});
```

---

## ScrollTrigger — rappels utiles

- `start: 'top 80%'` → l'élément entre quand son top est à 80% de la viewport
- `end: 'bottom 20%'` → l'animation finit quand son bottom est à 20% du bas de la viewport
- `scrub: true` → lie l'animation au scroll (sens des deux côtés)
- `scrub: 0.5` → idem mais avec un lissage de 0.5s
- `once: true` → l'animation ne se déclenche qu'une fois (reveals)
- `markers: true` → affiche les repères pour debug, à retirer en prod

## Anti-patterns (à ne JAMAIS faire)

- `gsap.to('*', { opacity: 1 })` — trop large, kill perf
- Animer `width` / `height` / `top` / `left` — non-GPU, saccade. Préférer `scale`, `x`, `y`
- Empiler 10+ ScrollTrigger sur la même page sans refresh — `ScrollTrigger.refresh()` si nécessaire
- Oublier `@media (prefers-reduced-motion: no-preference)` — obligatoire
- Utiliser `autoAlpha` sur des éléments above-the-fold — le hero doit être visible immédiatement
- Animer le hero (H1, CTA principal) — règle absolue du CLAUDE.md

## Debug rapide

```js
ScrollTrigger.getAll().forEach(st => { st.vars.markers = true; st.refresh(); });
```
Puis rechargement. Retirer avant de commit.
