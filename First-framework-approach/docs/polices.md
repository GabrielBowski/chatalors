# 🔤 Utilisation des polices

## Récupérer les polices depuis Figma

### Méthode 1 : Google Fonts (recommandé)

Si la police est disponible sur Google Fonts :

1. Aller sur [Google Fonts](https://fonts.google.com/)
2. Rechercher la police utilisée dans la maquette
3. Sélectionner les styles nécessaires (regular, medium, bold, etc.)
4. Copier le code `<link>` fourni
5. L'ajouter dans le `<head>` de votre `index.html`

```html
<head>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</head>
```

### Méthode 2 : Télécharger depuis Figma

1. Sélectionner un texte dans Figma
2. Panneau de droite → Onglet "Text"
3. Cliquer sur le nom de la police
4. Si disponible, cliquer sur **"Get font"** ou **"Download"**
5. Télécharger les fichiers `.woff2` ou `.woff`

## Structure des fichiers de polices

Placez les fichiers de polices dans `assets/fonts/` :

```
assets/
  └── fonts/
      ├── inter-regular.woff2
      ├── inter-medium.woff2
      ├── inter-bold.woff2
      └── inter-italic.woff2
```

## Déclarer une police personnalisée

Dans `styles/base/_typography.css` ou créer `styles/base/_fonts.css` :

```css
@font-face {
  font-family: "Inter";
  src: url("../assets/fonts/inter-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Améliore les performances */
}

@font-face {
  font-family: "Inter";
  src: url("../assets/fonts/inter-medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("../assets/fonts/inter-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Utiliser la police dans les variables

Dans `styles/utils/_variables.css` :

```css
:root {
  --font-family-base: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.5;
}
```

## Formats de polices

### WOFF2 (recommandé)

- Format moderne, meilleure compression
- Supporté par tous les navigateurs modernes

### WOFF

- Bonne compression
- Support large

### TTF / OTF

- Formats originaux
- Plus lourds, utiliser en fallback uniquement

## Bonnes pratiques

### 1. `font-display: swap`

Toujours utiliser `font-display: swap` pour améliorer les performances :

```css
@font-face {
  font-display: swap; /* Affiche le texte immédiatement avec une police de secours */
}
```

### 2. Polices de secours (fallback)

Toujours inclure des polices de secours :

```css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

Si "Inter" ne charge pas, le navigateur utilisera une police système.

### 3. Limiter le nombre de polices

- Utiliser **1 à 2 polices maximum** par projet
- Trop de polices ralentit le chargement

### 4. Précharger les polices critiques

Pour les polices importantes, ajoutez dans le `<head>` :

```html
<link
  rel="preload"
  href="assets/fonts/inter-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

## Poids de police (font-weight)

| Nom       | Valeur | Usage             |
| --------- | ------ | ----------------- |
| Regular   | 400    | Texte courant     |
| Medium    | 500    | Emphase légère    |
| Semi-bold | 600    | Titres, emphase   |
| Bold      | 700    | Titres principaux |

Dans vos variables CSS :

```css
:root {
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

## Exemple complet

```css
/* Déclaration des polices */
@font-face {
  font-family: "Inter";
  src: url("../assets/fonts/inter-regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

/* Utilisation */
body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
}

h1,
h2,
h3 {
  font-weight: var(--font-weight-bold);
}
```
