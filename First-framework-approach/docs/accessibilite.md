# ♿ Accessibilité (a11y)

## Qu'est-ce que l'accessibilité web ?

L'accessibilité web consiste à rendre votre site **utilisable par tous**, y compris les personnes en situation de handicap :

- Déficience visuelle (lecteurs d'écran)
- Déficience motrice (navigation au clavier)
- Déficience auditive (sous-titres, transcriptions)
- Troubles cognitifs (contenu clair)

## Pourquoi c'est important ?

- **Légal** : Obligation légale dans de nombreux pays
- **Éthique** : Inclure tout le monde
- **Business** : Plus d'utilisateurs = plus de trafic
- **SEO** : Les bonnes pratiques d'accessibilité améliorent le référencement

## Les bases de l'accessibilité

### 1. Attribut `alt` sur les images

**Toujours** ajouter un attribut `alt` descriptif :

```html
<!-- ✅ BON : Image informative -->
<img
  src="hero.jpg"
  alt="Personne travaillant sur ordinateur portable dans un café"
/>

<!-- ✅ BON : Image décorative -->
<img src="decoration.jpg" alt="" />

<!-- ❌ MAUVAIS : Pas d'attribut alt -->
<img src="hero.jpg" />
```

### 2. Contraste des couleurs

Le texte doit avoir un **contraste suffisant** avec le fond :

- **Texte normal** : Ratio de contraste minimum 4.5:1
- **Texte grand** (18px+) : Ratio de contraste minimum 3:1

**Outils de vérification** :

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Extension Chrome "WAVE"

### 3. Navigation au clavier

Tous les éléments interactifs doivent être **accessibles au clavier** :

```html
<!-- ✅ BON : Bouton accessible -->
<button type="button">Cliquer</button>

<!-- ✅ BON : Lien accessible -->
<a href="/page.html">Aller à la page</a>

<!-- ❌ MAUVAIS : Div cliquable non accessible -->
<div onclick="doSomething()">Cliquer</div>
```

### 4. Focus visible

Les éléments focusables doivent avoir un **indicateur de focus visible** :

```css
/* ✅ BON : Focus visible */
button:focus,
a:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ❌ MAUVAIS : Supprimer le focus */
button:focus {
  outline: none; /* ❌ Ne jamais faire ça ! */
}
```

### 5. Structure sémantique

Utiliser les **bonnes balises HTML** :

```html
<!-- ✅ BON -->
<header>
  <nav>
    <ul>
      <li><a href="/">Accueil</a></li>
    </ul>
  </nav>
</header>

<!-- ❌ MAUVAIS -->
<div class="header">
  <div class="nav">
    <div class="menu-item">Accueil</div>
  </div>
</div>
```

Voir : [Documentation sémantique HTML](semantique-html.md)

### 6. Attributs ARIA (quand nécessaire)

ARIA complète le HTML sémantique :

```html
<!-- Bouton avec état -->
<button aria-expanded="false" aria-controls="menu">Menu</button>

<!-- Image décorative -->
<img src="decoration.jpg" alt="" aria-hidden="true" />

<!-- Landmark -->
<nav aria-label="Navigation principale">...</nav>
```

### 7. Formulaires accessibles

```html
<!-- ✅ BON : Label associé -->
<label for="email">Email</label>
<input type="email" id="email" name="email" required />

<!-- ✅ BON : Label implicite -->
<label>
  Email
  <input type="email" name="email" required />
</label>

<!-- ❌ MAUVAIS : Pas de label -->
<input type="email" name="email" placeholder="Email" />
```

### 8. Texte alternatif pour les icônes

```html
<!-- ✅ BON : Texte visible ou aria-label -->
<button aria-label="Fermer la modale">
  <svg aria-hidden="true">...</svg>
</button>

<!-- ✅ BON : Texte visible -->
<button>
  <svg aria-hidden="true">...</svg>
  <span>Fermer</span>
</button>
```

## Checklist d'accessibilité

### Images

- [ ] Toutes les images ont un attribut `alt`
- [ ] Les images décoratives ont `alt=""`
- [ ] Les images informatives ont un `alt` descriptif

### Couleurs

- [ ] Le contraste texte/fond est suffisant (4.5:1 minimum)
- [ ] L'information n'est pas véhiculée uniquement par la couleur

### Navigation

- [ ] Tous les liens et boutons sont accessibles au clavier
- [ ] Le focus est visible sur tous les éléments interactifs
- [ ] L'ordre de tabulation est logique

### Structure

- [ ] Utilisation de balises sémantiques (`<header>`, `<nav>`, `<main>`, etc.)
- [ ] Hiérarchie des titres respectée (`h1` → `h2` → `h3`)
- [ ] Un seul `<h1>` par page

### Formulaires

- [ ] Tous les champs ont un `<label>` associé
- [ ] Les erreurs sont clairement indiquées
- [ ] Les champs obligatoires sont marqués

### Contenu

- [ ] Le texte est lisible (taille minimale 16px)
- [ ] Les liens sont reconnaissables (pas seulement par la couleur)
- [ ] Le contenu fonctionne sans JavaScript

## Outils de vérification

1. **WAVE** (extension navigateur)

   - Analyse l'accessibilité de votre page
   - Indique les erreurs et avertissements

2. **Lighthouse** (Chrome DevTools)

   - Audit d'accessibilité intégré
   - Score et recommandations

3. **axe DevTools** (extension)

   - Analyse automatique
   - Suggestions d'amélioration

4. **Navigation au clavier**
   - Tester manuellement avec `Tab`, `Enter`, `Escape`
   - Vérifier que tout est accessible

## Ressources

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN - Accessibilité](https://developer.mozilla.org/fr/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
