# 🎨 Utilisation et modification des SVG

## Qu'est-ce qu'un SVG ?

**SVG** (Scalable Vector Graphics) est un format d'image vectoriel :

- S'adapte à toutes les tailles sans perte de qualité
- Généralement plus léger que PNG/JPEG pour les logos et icônes
- Modifiable directement dans le code

## Récupérer un SVG depuis Figma

### Méthode 1 : Export direct

1. Sélectionner l'élément dans Figma
2. Clic droit → **"Copy as SVG"**
3. Coller dans un fichier `.svg` dans `assets/icons/`

### Méthode 2 : Export fichier

1. Sélectionner l'élément
2. Panneau de droite → **"Export"**
3. Choisir **"SVG"**
4. Télécharger et placer dans `assets/icons/`

## Utiliser un SVG dans le HTML

### Méthode 1 : Balise `<img>` (simple)

```html
<img src="assets/icons/logo.svg" alt="Logo du site" />
```

**Avantages** : Simple, cache du navigateur
**Inconvénients** : Ne peut pas être stylisé avec CSS

### Méthode 2 : Inline SVG (recommandé pour les icônes)

Coller directement le code SVG dans le HTML :

```html
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
</svg>
```

**Avantages** : Peut être stylisé avec CSS, pas de requête HTTP supplémentaire
**Inconvénients** : Code plus verbeux

### Méthode 3 : SVG comme background-image

```css
.icon {
  background-image: url("assets/icons/icon.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
```

## Modifier un SVG

### Changer la couleur

Si le SVG utilise `fill="currentColor"`, il héritera de la couleur du texte :

```html
<span class="icon" style="color: var(--color-primary);">
  <svg>...</svg>
</span>
```

Ou directement dans le SVG :

```html
<svg>
  <path fill="#2f80ed" d="..." />
</svg>
```

### Changer la taille

```html
<!-- Avec width et height -->
<svg width="32" height="32" viewBox="0 0 24 24">...</svg>
```

Ou avec CSS :

```css
.icon svg {
  width: 2rem;
  height: 2rem;
}
```

### Supprimer les attributs inutiles

Après export depuis Figma, nettoyez le SVG :

```html
<!-- Avant (Figma ajoute souvent des attributs inutiles) -->
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="2" y="2" width="20" height="20" fill="#000000" />
</svg>

<!-- Après nettoyage -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
  <rect x="2" y="2" width="20" height="20" />
</svg>
```

## Bonnes pratiques

### 1. Utiliser `currentColor` pour la couleur

```html
<svg fill="currentColor">
  <!-- Le SVG prendra la couleur du texte parent -->
</svg>
```

### 2. Toujours définir `viewBox`

Le `viewBox` permet au SVG de s'adapter :

```html
<svg viewBox="0 0 24 24">
  <!-- Le contenu s'adaptera à la taille du conteneur -->
</svg>
```

### 3. Accessibilité

Pour les SVG décoratifs :

```html
<svg aria-hidden="true">
  <!-- Contenu décoratif -->
</svg>
```

Pour les SVG informatifs :

```html
<svg aria-label="Icône de recherche">
  <!-- Contenu -->
</svg>
```

## Exemple : Icône réutilisable

Créez un composant CSS pour vos icônes :

```css
.icon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-text);
}

.icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
```

```html
<span class="icon">
  <svg viewBox="0 0 24 24">
    <path d="..." />
  </svg>
</span>
```
