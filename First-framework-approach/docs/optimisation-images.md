# 🖼️ Optimisation des images

## Pourquoi optimiser les images ?

Les images non optimisées peuvent :

- Ralentir considérablement le chargement de votre site
- Consommer beaucoup de données (problématique sur mobile)
- Dégrader l'expérience utilisateur

## Formats d'images

### JPEG

- **Utilisation** : Photos, images avec beaucoup de couleurs
- **Avantages** : Bonne compression, petit poids
- **Inconvénients** : Perte de qualité, pas de transparence

### PNG

- **Utilisation** : Logos, icônes, images avec transparence
- **Avantages** : Qualité parfaite, supporte la transparence
- **Inconvénients** : Fichiers plus lourds que JPEG

### WebP (moderne)

- **Utilisation** : Alternative moderne à JPEG et PNG
- **Avantages** : Meilleure compression, bonne qualité
- **Inconvénients** : Support navigateur plus récent (mais bien supporté maintenant)

### SVG

- **Utilisation** : Logos, icônes, illustrations simples
- **Avantages** : Vectoriel (s'adapte à toutes les tailles), petit poids
- **Voir** : [Documentation SVG](svg.md)

## Outils d'optimisation

### En ligne (gratuits)

1. **TinyPNG** (https://tinypng.com/)

   - Compression JPEG et PNG
   - Réduction de poids jusqu'à 70%

2. **Squoosh** (https://squoosh.app/)

   - Outil Google, très complet
   - Permet de comparer avant/après
   - Support WebP

3. **ImageOptim** (Mac) / **FileOptimizer** (Windows)
   - Applications desktop
   - Compression par lot

## Bonnes pratiques

### 1. Taille appropriée

- Ne pas utiliser une image de 2000px de large si elle s'affiche en 400px
- Redimensionner l'image à la taille d'affichage réelle

### 2. Attribut `alt` obligatoire

```html
<!-- ✅ BON -->
<img
  src="assets/images/hero.jpg"
  alt="Photo d'une personne travaillant sur ordinateur"
/>

<!-- ❌ MAUVAIS -->
<img src="assets/images/hero.jpg" />
```

L'attribut `alt` est essentiel pour :

- L'accessibilité (lecteurs d'écran)
- Le SEO
- L'affichage si l'image ne charge pas

### 3. Attribut `loading="lazy"`

Pour les images en bas de page, utilisez le lazy loading :

```html
<img src="assets/images/card.jpg" alt="Description" loading="lazy" />
```

Cela charge l'image uniquement quand l'utilisateur arrive à sa hauteur.

### 4. Responsive avec `srcset`

Pour différentes tailles d'écran :

```html
<img
  src="assets/images/hero-small.jpg"
  srcset="
    assets/images/hero-small.jpg   400w,
    assets/images/hero-medium.jpg  800w,
    assets/images/hero-large.jpg  1200w
  "
  sizes="(max-width: 600px) 400px,
         (max-width: 1200px) 800px,
         1200px"
  alt="Description de l'image"
/>
```

## Workflow recommandé

1. **Exporter depuis Figma** : Télécharger l'image à la bonne taille
   - Voir : [Guide d'export depuis Figma](figma-premiers-pas.md#étape-5--exporter-toutes-les-images-de-la-maquette)
2. **Optimiser** : Passer par TinyPNG ou Squoosh
3. **Nommer correctement** : `hero-image.jpg` plutôt que `image123.jpg`
4. **Placer dans `assets/images/`**
5. **Ajouter l'attribut `alt`** descriptif

### Détails sur l'export depuis Figma

Pour savoir comment exporter toutes les images de votre maquette, consultez la section dédiée dans le guide [Premiers pas avec Figma](figma-premiers-pas.md#étape-5--exporter-toutes-les-images-de-la-maquette).

## Tailles recommandées

- **Hero / Bannière** : 1200-1920px de large (optimisée)
- **Cartes** : 400-600px de large
- **Avatars** : 100-200px
- **Icônes** : Utiliser SVG plutôt que PNG/JPEG
