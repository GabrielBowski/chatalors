# 🧩 Composants HTML réutilisables

## Concept : Les composants HTML, comme dans Figma

### Parallèle avec Figma

Dans **Figma**, vous créez des **composants** (comme un bouton, une carte, un header) que vous pouvez :

- Réutiliser dans plusieurs frames
- Dupliquer avec du contenu différent
- Modifier une fois pour mettre à jour toutes les instances

En HTML/CSS, c'est **exactement pareil** !

### Comment ça fonctionne ?

Le dossier `components/` contient des **fichiers HTML** pour chaque composant. Vous pouvez :

1. **Copier** le contenu d'un composant
2. **Coller** dans votre page HTML (`index.html`, `pages/...`)
3. **Adapter** le contenu selon vos besoins
4. **Dupliquer** pour créer plusieurs instances

## Structure des composants

```
components/
├── header.html      ← Composant header (en-tête)
├── footer.html      ← Composant footer (pied de page)
├── hero.html        ← Composant hero (section d'accroche)
├── card.html        ← Composant card (carte)
└── button.html      ← Composant button (bouton)
```

## Comment utiliser un composant

### Étape 1 : Ouvrir le fichier du composant

Par exemple, ouvrir `components/header.html`

### Étape 2 : Copier le contenu HTML

Copier tout le HTML (sauf les commentaires d'explication en haut)

### Étape 3 : Coller dans votre page

Coller dans votre `index.html` ou `pages/...` à l'endroit approprié

### Étape 4 : Adapter le contenu

Modifier les textes, liens, images selon votre maquette Figma

## Exemple concret

### Dans `components/card.html` :

```html
<article class="card">
  <img src="assets/images/example.jpg" alt="Description" class="card__image" />
  <h3 class="card__title">Titre carte</h3>
  <p class="card__text">Texte de la carte.</p>
  <a href="#" class="card__link">En savoir plus</a>
</article>
```

### Dans `index.html` :

```html
<section class="cards-section">
  <div class="container">
    <h2 class="section-title">Nos services</h2>
    <div class="cards-list">
      <!-- Première carte (copiée depuis components/card.html) -->
      <article class="card">
        <img
          src="assets/images/service1.jpg"
          alt="Service 1"
          class="card__image"
        />
        <h3 class="card__title">Design UI</h3>
        <p class="card__text">Création d'interfaces utilisateur modernes.</p>
        <a href="/services/design.html" class="card__link">Découvrir</a>
      </article>

      <!-- Deuxième carte (dupliquée et adaptée) -->
      <article class="card">
        <img
          src="assets/images/service2.jpg"
          alt="Service 2"
          class="card__image"
        />
        <h3 class="card__title">Développement Front</h3>
        <p class="card__text">Intégration HTML/CSS responsive.</p>
        <a href="/services/dev.html" class="card__link">Découvrir</a>
      </article>
    </div>
  </div>
</section>
```

## Avantages

### ✅ Réutilisabilité

Un même composant peut être utilisé plusieurs fois avec du contenu différent.

### ✅ Organisation

Chaque composant a son propre fichier, c'est plus clair.

### ✅ Collaboration

Chacun peut travailler sur ses propres composants sans conflit.

### ✅ Maintenance

Si vous modifiez la structure d'un composant, vous savez où chercher.

## Bonnes pratiques

### 1. Ne pas modifier les classes CSS

Les classes BEM (`card`, `card__title`, etc.) sont définies dans `styles/components/`. Ne les changez pas dans le HTML.

### 2. Adapter le contenu, pas la structure

- ✅ **BON** : Changer le texte, l'image, le lien
- ❌ **MAUVAIS** : Supprimer des éléments ou changer les classes

### 3. Créer de nouveaux composants si besoin

Si votre maquette Figma contient un composant qui n'existe pas encore :

1. Créer un nouveau fichier dans `components/`
2. Nommer le fichier selon le composant (ex: `testimonial.html`)
3. Créer le HTML avec les classes BEM appropriées
4. Créer le CSS correspondant dans `styles/components/_testimonial.css`

### 4. Commenter vos composants

Dans chaque fichier `components/*.html`, ajoutez un commentaire en haut expliquant :

- À quoi sert le composant
- Comment l'utiliser
- Les classes BEM utilisées

## Workflow recommandé

1. **Analyser la maquette Figma** : Identifier tous les composants
2. **Créer les composants HTML** : Un fichier par composant dans `components/`
3. **Créer les styles CSS** : Un fichier par composant dans `styles/components/`
4. **Assembler dans les pages** : Copier-coller les composants dans `index.html` et `pages/...`
5. **Adapter le contenu** : Remplacer les textes, images, liens par ceux de la maquette

## Exemple : Créer un nouveau composant

### 1. Analyser dans Figma

Vous voyez un composant "Testimonial" (témoignage) avec :

- Une photo
- Un nom
- Un texte de témoignage
- Une étoile de notation

### 2. Créer `components/testimonial.html`

```html
<!--
  COMPOSANT TESTIMONIAL
  ======================
  
  Composant de témoignage client
  
  BEM :
  - Block : testimonial
  - Elements : testimonial__image, testimonial__name, testimonial__text, testimonial__rating
-->

<article class="testimonial">
  <img
    src="assets/images/client.jpg"
    alt="Photo de [Nom]"
    class="testimonial__image"
  />
  <h3 class="testimonial__name">Nom du client</h3>
  <p class="testimonial__text">Texte du témoignage...</p>
  <div class="testimonial__rating">★★★★★</div>
</article>
```

### 3. Créer `styles/components/_testimonial.css`

```css
.testimonial {
  /* Styles du composant */
}
```

### 4. Importer dans `styles/main.css`

```css
@import url("./components/_testimonial.css");
```

### 5. Utiliser dans `index.html`

Copier-coller le contenu de `components/testimonial.html` dans votre page.

## Checklist

- [ ] J'ai identifié tous les composants dans la maquette Figma
- [ ] J'ai créé un fichier HTML pour chaque composant dans `components/`
- [ ] J'ai créé le CSS correspondant dans `styles/components/`
- [ ] J'ai importé le CSS dans `styles/main.css`
- [ ] J'ai copié-collé les composants dans mes pages HTML
- [ ] J'ai adapté le contenu (textes, images, liens) selon la maquette

---

💡 **Astuce** : Commencez par créer les composants les plus simples (bouton, card) puis les plus complexes (header, footer).
