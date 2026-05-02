# 📝 Sémantique HTML

## Qu'est-ce que la sémantique ?

La sémantique HTML consiste à utiliser les **bonnes balises** pour donner du **sens** à votre contenu, pas seulement pour le style.

## Pourquoi c'est important ?

- **Accessibilité** : Les lecteurs d'écran comprennent mieux la structure
- **SEO** : Les moteurs de recherche comprennent votre contenu
- **Maintenabilité** : Code plus clair et compréhensible
- **Styling** : Plus facile à styler avec CSS

## Balises sémantiques principales

### Structure de page

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Mon site</title>
  </head>
  <body>
    <!-- En-tête du site -->
    <header>
      <nav>...</nav>
    </header>

    <!-- Contenu principal -->
    <main>
      <article>...</article>
      <section>...</section>
    </main>

    <!-- Pied de page -->
    <footer>...</footer>
  </body>
</html>
```

### Balises de contenu

| Balise      | Usage                      | Exemple                           |
| ----------- | -------------------------- | --------------------------------- |
| `<header>`  | En-tête de page ou section | Header du site, en-tête d'article |
| `<nav>`     | Navigation principale      | Menu principal                    |
| `<main>`    | Contenu principal unique   | Contenu principal de la page      |
| `<article>` | Contenu autonome           | Article de blog, carte produit    |
| `<section>` | Section thématique         | Section "À propos", "Services"    |
| `<aside>`   | Contenu complémentaire     | Barre latérale, encadré           |
| `<footer>`  | Pied de page ou section    | Footer du site, footer d'article  |

### Balises de texte

| Balise          | Usage                | Exemple                                              |
| --------------- | -------------------- | ---------------------------------------------------- |
| `<h1>` à `<h6>` | Titres hiérarchiques | `<h1>` titre principal, `<h2>` sous-titre            |
| `<p>`           | Paragraphe           | Texte courant                                        |
| `<strong>`      | Importance forte     | **Texte important**                                  |
| `<em>`          | Emphase              | _Texte en italique pour emphase_                     |
| `<mark>`        | Texte surligné       | Texte à mettre en évidence                           |
| `<small>`       | Texte secondaire     | Mentions légales, copyright                          |
| `<time>`        | Date/heure           | `<time datetime="2026-01-15">15 janvier 2026</time>` |

### Balises de liste

```html
<!-- Liste non ordonnée -->
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>

<!-- Liste ordonnée -->
<ol>
  <li>Première étape</li>
  <li>Deuxième étape</li>
</ol>

<!-- Liste de définitions -->
<dl>
  <dt>Terme</dt>
  <dd>Définition</dd>
</dl>
```

### Balises de liens et boutons

```html
<!-- Lien vers une autre page -->
<a href="/about.html">À propos</a>

<!-- Lien vers une ancre -->
<a href="#section1">Aller à la section 1</a>

<!-- Bouton (pour actions) -->
<button type="button">Cliquer</button>

<!-- Lien stylisé comme bouton (pour navigation) -->
<a href="/contact.html" class="button">Contact</a>
```

## Hiérarchie des titres

**Règle importante** : Ne sautez jamais de niveau !

```html
<!-- ✅ BON -->
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Sous-sous-titre</h3>

<!-- ❌ MAUVAIS -->
<h1>Titre principal</h1>
<h3>Sous-titre</h3>
<!-- ❌ Saut de h2 à h3 -->
```

## Exemple de structure sémantique

```html
<header class="header">
  <nav class="header__nav">
    <a href="/" class="header__logo">Mon Site</a>
    <ul class="header__menu">
      <li><a href="/about.html">À propos</a></li>
      <li><a href="/services.html">Services</a></li>
    </ul>
  </nav>
</header>

<main class="main">
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">Titre de l'article</h1>
      <time class="article__date" datetime="2026-01-15">15 janvier 2026</time>
    </header>

    <section class="article__content">
      <p>Premier paragraphe...</p>
      <p>Deuxième paragraphe...</p>
    </section>
  </article>
</main>

<footer class="footer">
  <p><small>&copy; 2026 Mon Site</small></p>
</footer>
```

## À éviter

### ❌ Utiliser des `<div>` partout

```html
<!-- ❌ MAUVAIS -->
<div class="header">...</div>
<div class="content">...</div>
<div class="footer">...</div>

<!-- ✅ BON -->
<header>...</header>
<main>...</main>
<footer>...</footer>
```

### ❌ Utiliser des balises pour le style uniquement

```html
<!-- ❌ MAUVAIS -->
<span style="font-size: 24px;">Titre</span>

<!-- ✅ BON -->
<h2>Titre</h2>
```

### ❌ Mauvais usage des titres

```html
<!-- ❌ MAUVAIS : utiliser h1 pour le style -->
<h1 class="small-title">Petit titre</h1>

<!-- ✅ BON : utiliser la bonne balise et styler avec CSS -->
<h3 class="small-title">Petit titre</h3>
```

## Checklist sémantique

- [ ] Utiliser `<header>`, `<main>`, `<footer>` pour la structure
- [ ] Utiliser `<nav>` pour la navigation
- [ ] Utiliser `<article>` pour le contenu autonome
- [ ] Utiliser `<section>` pour les sections thématiques
- [ ] Respecter la hiérarchie des titres (`h1` → `h2` → `h3`)
- [ ] Utiliser `<strong>` et `<em>` plutôt que `<b>` et `<i>`
- [ ] Ajouter des attributs `alt` aux images
- [ ] Utiliser `<button>` pour les actions, `<a>` pour la navigation
