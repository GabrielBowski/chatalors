# 🔍 SEO (Search Engine Optimization)

## Qu'est-ce que le SEO ?

Le **SEO** (Search Engine Optimization) consiste à optimiser votre site web pour qu'il soit **bien référencé** dans les moteurs de recherche (Google, Bing, etc.).

## Pourquoi c'est important ?

- **Visibilité** : Plus votre site est bien référencé, plus il sera visible
- **Trafic organique** : Attirer des visiteurs sans publicité payante
- **Crédibilité** : Un site bien optimisé inspire confiance

## Les bases du SEO technique

### 1. Structure HTML sémantique

Utiliser les **bonnes balises HTML** aide les moteurs de recherche à comprendre votre contenu :

```html
<!-- ✅ BON : Structure sémantique claire -->
<header>
  <nav>
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/about.html">À propos</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Titre principal de la page</h1>
    <p>Contenu...</p>
  </article>
</main>
```

Voir : [Documentation sémantique HTML](semantique-html.md)

### 2. Balise `<title>`

Le titre de la page apparaît dans les résultats de recherche :

```html
<!-- ✅ BON : Titre descriptif et unique -->
<title>Nom du site - Page d'accueil</title>
<title>À propos - Nom du site</title>

<!-- ❌ MAUVAIS : Titre générique ou manquant -->
<title>Page 1</title>
<title>Accueil</title>
```

**Bonnes pratiques** :

- 50-60 caractères maximum
- Unique pour chaque page
- Inclure le nom du site
- Descriptif du contenu de la page

### 3. Meta description

La description apparaît sous le titre dans les résultats de recherche :

```html
<!-- ✅ BON : Description attractive et descriptive -->
<meta
  name="description"
  content="Découvrez notre agence de design UI/UX spécialisée dans la création d'interfaces utilisateur modernes et accessibles."
/>

<!-- ❌ MAUVAIS : Description trop courte ou générique -->
<meta name="description" content="Site web" />
```

**Bonnes pratiques** :

- 150-160 caractères maximum
- Unique pour chaque page
- Attractive et incitative
- Inclure des mots-clés pertinents

### 4. Hiérarchie des titres (H1-H6)

Les moteurs de recherche utilisent les titres pour comprendre la structure :

```html
<!-- ✅ BON : Hiérarchie logique -->
<h1>Titre principal de la page (un seul par page)</h1>
<h2>Section principale</h2>
<h3>Sous-section</h3>
<h2>Autre section</h2>

<!-- ❌ MAUVAIS : Plusieurs H1 ou hiérarchie incorrecte -->
<h1>Titre 1</h1>
<h1>Autre titre</h1>
<!-- ❌ Un seul H1 par page ! -->
<h3>Sous-titre</h3>
<!-- ❌ Saut de H2 à H3 -->
```

**Règles importantes** :

- **Un seul `<h1>`** par page (titre principal)
- Ne jamais sauter de niveau (h1 → h2 → h3, pas h1 → h3)
- Utiliser les titres pour structurer, pas pour le style

### 5. Attribut `alt` sur les images

Les images doivent avoir un attribut `alt` descriptif :

```html
<!-- ✅ BON : Alt descriptif -->
<img
  src="hero.jpg"
  alt="Personne travaillant sur ordinateur portable dans un café moderne"
/>

<!-- ✅ BON : Image décorative -->
<img src="decoration.jpg" alt="" />

<!-- ❌ MAUVAIS : Pas d'alt ou alt générique -->
<img src="hero.jpg" />
<img src="hero.jpg" alt="image" />
```

**Bonnes pratiques** :

- Décrire ce que montre l'image
- Inclure des mots-clés pertinents (sans abuser)
- Laisser vide (`alt=""`) pour les images décoratives

Voir : [Documentation optimisation images](optimisation-images.md)

### 6. URLs propres et descriptives

Les URLs doivent être claires et descriptives :

```html
<!-- ✅ BON : URL descriptive -->
https://monsite.com/a-propos https://monsite.com/services/design-ui

<!-- ❌ MAUVAIS : URL avec ID ou paramètres -->
https://monsite.com/page?id=123 https://monsite.com/p1
```

**Bonnes pratiques** :

- Utiliser des mots-clés pertinents
- URLs courtes et lisibles
- Utiliser des tirets (`-`) plutôt que des underscores (`_`)
- Éviter les caractères spéciaux

### 7. Attribut `lang`

Déclarer la langue de votre page :

```html
<!-- ✅ BON -->
<html lang="fr">
  ...
</html>
```

### 8. Liens internes

Créer une structure de liens logique entre vos pages :

```html
<!-- ✅ BON : Navigation claire -->
<nav>
  <ul>
    <li><a href="/">Accueil</a></li>
    <li><a href="/about.html">À propos</a></li>
    <li><a href="/services.html">Services</a></li>
    <li><a href="/contact.html">Contact</a></li>
  </ul>
</nav>
```

### 9. Performance

Un site rapide est mieux référencé :

- **Optimiser les images** (voir [Optimisation images](optimisation-images.md))
- **Minifier le CSS** (en production)
- **Utiliser le lazy loading** pour les images :

```html
<img src="image.jpg" alt="Description" loading="lazy" />
```

### 10. Structure de données (Schema.org)

Ajouter des données structurées pour aider les moteurs de recherche :

```html
<!-- Exemple : Organisation -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nom de votre organisation",
    "url": "https://monsite.com",
    "logo": "https://monsite.com/logo.png"
  }
</script>
```

## Checklist SEO

### Contenu et structure

- [ ] Un seul `<h1>` par page
- [ ] Hiérarchie des titres respectée (h1 → h2 → h3)
- [ ] Balise `<title>` unique et descriptive (50-60 caractères)
- [ ] Meta description unique et attractive (150-160 caractères)
- [ ] Attribut `lang` sur `<html>`

### Images

- [ ] Toutes les images ont un attribut `alt` descriptif
- [ ] Images optimisées (poids réduit)
- [ ] Lazy loading sur les images non critiques

### Navigation

- [ ] URLs propres et descriptives
- [ ] Navigation claire et logique
- [ ] Liens internes entre les pages

### Performance

- [ ] Site rapide à charger
- [ ] Images optimisées
- [ ] CSS organisé et efficace

### Accessibilité

- [ ] Structure sémantique HTML
- [ ] Contraste des couleurs suffisant
- [ ] Navigation au clavier fonctionnelle

Voir : [Documentation accessibilité](accessibilite.md)

## Outils de vérification

### Google Search Console

- Voir comment Google indexe votre site
- Identifier les erreurs
- Analyser les performances

### Google Lighthouse

- Audit SEO intégré dans Chrome DevTools
- Score SEO et recommandations
- Accessible via F12 → Onglet "Lighthouse"

### Outils en ligne

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema Markup Validator](https://validator.schema.org/)

## Mots-clés

### Comment choisir ses mots-clés ?

1. **Réfléchir aux termes** que vos utilisateurs pourraient chercher
2. **Utiliser des outils** comme Google Keyword Planner
3. **Analyser la concurrence** : quels mots-clés utilisent-ils ?
4. **Intégrer naturellement** dans votre contenu (sans sur-optimisation)

### Où placer les mots-clés ?

- Dans le `<title>`
- Dans la meta description
- Dans les titres (`<h1>`, `<h2>`, etc.)
- Dans le contenu (naturellement)
- Dans les attributs `alt` des images
- Dans les URLs

⚠️ **Attention** : Ne pas sur-optimiser ! Le contenu doit rester naturel et utile pour les utilisateurs.

---

## 🤖 Optimisation pour les LLM (Large Language Models)

### Qu'est-ce qu'un LLM ?

Les **LLM** (Large Language Models) sont des modèles d'intelligence artificielle comme ChatGPT, Claude, Gemini, etc. qui peuvent **indexer et comprendre** le contenu web pour répondre aux questions des utilisateurs.

### Pourquoi optimiser pour les LLM ?

Avec l'émergence des assistants IA et des réponses générées par IA dans les moteurs de recherche, il devient important que votre contenu soit **bien compris et référencé** par ces modèles.

### Comment les LLM indexent le web ?

Les LLM analysent le contenu de votre site pour :

- Comprendre le **contexte** et le **sens** de votre contenu
- Extraire des **informations structurées**
- Répondre aux questions des utilisateurs en citant votre site

### Bonnes pratiques pour les LLM

#### 1. Contenu clair et structuré

Les LLM comprennent mieux un contenu bien organisé :

```html
<!-- ✅ BON : Structure claire avec titres descriptifs -->
<article>
  <h1>Comment optimiser son site web pour le SEO</h1>
  <section>
    <h2>Les bases du référencement</h2>
    <p>Le SEO consiste à...</p>
  </section>
  <section>
    <h2>Optimisation technique</h2>
    <p>Les aspects techniques incluent...</p>
  </section>
</article>
```

#### 2. Utiliser des données structurées (Schema.org)

Les données structurées aident les LLM à comprendre votre contenu :

```html
<!-- Exemple : Article de blog -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment optimiser son site web",
    "author": {
      "@type": "Person",
      "name": "Votre Nom"
    },
    "datePublished": "2026-01-15",
    "description": "Guide complet sur l'optimisation SEO..."
  }
</script>
```

#### 3. Contenu factuel et précis

Les LLM privilégient les contenus :

- **Factuels** et vérifiables
- **Précis** et détaillés
- **À jour** et pertinents

```html
<!-- ✅ BON : Contenu factuel avec dates -->
<article>
  <h1>Guide HTML/CSS 2026</h1>
  <p><time datetime="2026-01-15">Mis à jour le 15 janvier 2026</time></p>
  <p>Ce guide couvre les dernières pratiques...</p>
</article>
```

#### 4. Utiliser des listes et des tableaux

Les LLM comprennent mieux les informations structurées :

```html
<!-- ✅ BON : Liste structurée -->
<section>
  <h2>Étapes de travail</h2>
  <ol>
    <li>Analyser la maquette</li>
    <li>Créer la structure HTML</li>
    <li>Ajouter les styles CSS</li>
  </ol>
</section>

<!-- ✅ BON : Tableau pour données comparatives -->
<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Usage</th>
      <th>Poids moyen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>JPEG</td>
      <td>Photos</td>
      <td>100-500 KB</td>
    </tr>
  </tbody>
</table>
```

#### 5. Définitions et glossaire

Ajouter des définitions aide les LLM à comprendre votre domaine :

```html
<!-- ✅ BON : Définition claire -->
<section>
  <h2>Qu'est-ce que le SEO ?</h2>
  <p>
    Le <dfn>SEO</dfn> (Search Engine Optimization) consiste à optimiser votre
    site web pour qu'il soit bien référencé dans les moteurs de recherche.
  </p>
</section>
```

#### 6. FAQ structurée

Les questions-réponses sont très bien comprises par les LLM :

```html
<!-- ✅ BON : FAQ avec Schema.org -->
<section itemscope itemtype="https://schema.org/FAQPage">
  <h2>Questions fréquentes</h2>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Qu'est-ce que le SEO ?</h3>
    <div
      itemscope
      itemprop="acceptedAnswer"
      itemtype="https://schema.org/Answer"
    >
      <p itemprop="text">Le SEO consiste à optimiser...</p>
    </div>
  </div>
</section>
```

#### 7. Meta tags descriptifs

Ajouter des meta tags pour aider les LLM à comprendre votre contenu :

```html
<head>
  <!-- Meta description classique -->
  <meta
    name="description"
    content="Guide complet sur l'optimisation SEO pour les sites web modernes"
  />

  <!-- Keywords (moins important mais peut aider) -->
  <meta
    name="keywords"
    content="SEO, référencement, optimisation web, moteurs de recherche"
  />

  <!-- Open Graph pour les réseaux sociaux (aussi utilisé par les LLM) -->
  <meta property="og:title" content="Guide SEO complet" />
  <meta
    property="og:description"
    content="Découvrez comment optimiser votre site..."
  />
  <meta property="og:type" content="article" />
</head>
```

#### 8. Contenu complet et approfondi

Les LLM privilégient les contenus **complets** plutôt que superficiels :

```html
<!-- ✅ BON : Article approfondi avec sections détaillées -->
<article>
  <h1>Titre principal</h1>
  <p>Introduction complète...</p>

  <section>
    <h2>Section détaillée 1</h2>
    <p>Contenu approfondi avec exemples...</p>
  </section>

  <section>
    <h2>Section détaillée 2</h2>
    <p>Contenu approfondi avec exemples...</p>
  </section>

  <section>
    <h2>Conclusion</h2>
    <p>Résumé et prochaines étapes...</p>
  </section>
</article>
```

### Différences avec le SEO classique

| Aspect        | SEO classique           | SEO pour LLM                     |
| ------------- | ----------------------- | -------------------------------- |
| **Focus**     | Mots-clés, liens        | Sens et contexte                 |
| **Structure** | Hiérarchie H1-H6        | Données structurées (Schema.org) |
| **Contenu**   | Optimisé pour mots-clés | Complet et factuel               |
| **Format**    | Texte optimisé          | Listes, tableaux, FAQ            |

### Checklist SEO pour LLM

- [ ] Contenu structuré avec titres clairs (`<h1>` à `<h6>`)
- [ ] Données structurées Schema.org ajoutées
- [ ] Contenu factuel et vérifiable
- [ ] Listes et tableaux pour informations structurées
- [ ] FAQ avec Schema.org si applicable
- [ ] Meta tags descriptifs (description, Open Graph)
- [ ] Contenu complet et approfondi (pas superficiel)
- [ ] Dates de publication/mise à jour indiquées
- [ ] Définitions claires des termes techniques
- [ ] Liens vers des sources fiables si applicable

### Exemple complet : Article optimisé pour LLM

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>
      Guide complet SEO 2026 - Optimisation pour moteurs de recherche
    </title>
    <meta
      name="description"
      content="Guide complet sur l'optimisation SEO pour les sites web modernes, incluant les techniques classiques et l'optimisation pour les LLM."
    />
    <meta property="og:title" content="Guide complet SEO 2026" />
    <meta property="og:type" content="article" />

    <!-- Données structurées -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Guide complet SEO 2026",
        "author": {
          "@type": "Person",
          "name": "Votre Nom"
        },
        "datePublished": "2026-01-15",
        "description": "Guide complet sur l'optimisation SEO..."
      }
    </script>
  </head>
  <body>
    <article>
      <header>
        <h1>Guide complet SEO 2026</h1>
        <p><time datetime="2026-01-15">Publié le 15 janvier 2026</time></p>
      </header>

      <section>
        <h2>Qu'est-ce que le SEO ?</h2>
        <p>
          Le <dfn>SEO</dfn> (Search Engine Optimization) consiste à optimiser
          votre site web pour qu'il soit bien référencé...
        </p>
      </section>

      <section>
        <h2>Les bases du SEO technique</h2>
        <ol>
          <li>Structure HTML sémantique</li>
          <li>Balise title optimisée</li>
          <li>Meta description attractive</li>
        </ol>
      </section>

      <section itemscope itemtype="https://schema.org/FAQPage">
        <h2>Questions fréquentes</h2>
        <div
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <h3 itemprop="name">Comment améliorer son référencement ?</h3>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
          >
            <p itemprop="text">Pour améliorer votre référencement...</p>
          </div>
        </div>
      </section>
    </article>
  </body>
</html>
```

## Ressources

- [Google Search Central](https://developers.google.com/search)
- [MDN - SEO](https://developer.mozilla.org/fr/docs/Glossary/SEO)
- [Schema.org](https://schema.org/) - Données structurées
- [Open Graph Protocol](https://ogp.me/) - Métadonnées pour réseaux sociaux et LLM
