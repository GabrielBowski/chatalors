# 📐 Premiers pas avec la maquette Figma

## Étape 1 : Accéder à la maquette

1. Ouvrir le lien Figma fourni
2. Vous devez avoir un compte Figma (gratuit) pour accéder à la maquette

## Étape 2 : Activer le Dev Mode (recommandé)

Le **Dev Mode** de Figma vous donne accès à toutes les valeurs CSS directement :

1. Cliquer sur le bouton **"Dev Mode"** en haut à droite de Figma (ou `Shift + D`)
2. Vous verrez apparaître un panneau à droite avec toutes les propriétés CSS
3. En sélectionnant un élément, vous verrez :
   - Les **couleurs** (avec leur code hex, RGB, etc.)
   - Les **espacements** (padding, margin, gap)
   - Les **typos** (font-family, font-size, line-height, font-weight)
   - Les **dimensions** (width, height) ⚠️ **ATTENTION** : Ne pas copier bêtement ! Privilégier les pourcentages pour le responsive !
   - Les **bordures** (border-radius, border-width)
   - Les **ombres** (box-shadow)

💡 **Astuce** : Cliquez sur une valeur dans le panneau Dev Mode pour la copier directement.

## Étape 3 : Sans Dev Mode (méthode alternative)

Si vous n'avez pas accès au Dev Mode, vous pouvez quand même récupérer les valeurs :

1. **Couleurs** : Sélectionner un élément → Panneau de droite → Onglet "Fill" → Cliquer sur la couleur pour voir le code hex
2. **Espacements** : Sélectionner un élément → Panneau de droite → Onglet "Layout" → Voir padding, margin, gap
3. **Typographie** : Sélectionner un texte → Panneau de droite → Onglet "Text" → Voir font, size, weight, line-height
4. **Dimensions** : Sélectionner un élément → Panneau de droite → Voir width et height

## Étape 4 : Analyser la structure de la maquette

Avant de coder, prenez le temps d'analyser :

### 1. Identifier les composants réutilisables

- Boutons (primaire, secondaire, etc.)
- Cartes
- Header / Footer
- Formulaires
- Modales

### 2. Identifier les couleurs principales

- Couleur primaire
- Couleur secondaire
- Couleurs de texte (principal, secondaire)
- Couleurs de fond

### 3. Identifier les espacements

- Y a-t-il un système d'espacement cohérent ? (ex: 8px, 16px, 24px, 32px)
- Notez les valeurs de padding et margin les plus fréquentes

### 4. Identifier les typographies

- Famille(s) de polices utilisée(s)
- Tailles de texte principales (h1, h2, body, etc.)
- Poids de police (regular, medium, bold)

## Étape 5 : Exporter toutes les images de la maquette

Avant de commencer à coder, vous devez **exporter toutes les images** de votre maquette Figma.

### Méthode 1 : Export manuel (image par image)

Pour exporter une image spécifique :

1. **Sélectionner** l'élément contenant l'image dans Figma
2. **Panneau de droite** → Section **"Export"**
3. **Cliquer sur le "+"** pour ajouter un format d'export
4. **Choisir le format** :
   - **PNG** pour les images avec transparence ou les logos
   - **JPG** pour les photos
   - **SVG** pour les icônes et illustrations vectorielles
5. **Choisir la taille** :
   - **1x** pour l'affichage standard
   - **2x** pour les écrans Retina (optionnel, mais recommandé)
6. **Cliquer sur "Export [nom]"** pour télécharger

### Méthode 2 : Export en lot (toutes les images d'un coup)

Pour exporter plusieurs images à la fois :

1. **Sélectionner plusieurs éléments** en maintenant `Shift` ou `Cmd` (Mac) / `Ctrl` (Windows)
2. **Panneau de droite** → Section **"Export"**
3. **Ajouter les formats** pour chaque élément
4. **Cliquer sur "Export"** → Toutes les images seront téléchargées en une fois

### Méthode 3 : Export depuis le Dev Mode (recommandé)

Si vous êtes en **Dev Mode** :

1. **Sélectionner** un élément contenant une image
2. **Panneau Dev Mode** → Section **"Assets"** ou **"Export"**
3. **Cliquer sur l'icône de téléchargement** à côté de l'image
4. L'image sera téléchargée avec les bonnes dimensions

### Organisation des fichiers exportés

Une fois les images exportées, organisez-les dans `assets/images/` :

```
assets/
  └── images/
      ├── hero.jpg              ← Image hero principale
      ├── hero-2x.jpg          ← Version Retina (optionnel)
      ├── card-service-1.jpg    ← Image de la première carte
      ├── card-service-2.jpg    ← Image de la deuxième carte
      ├── logo.png              ← Logo du site
      └── avatar-user.jpg       ← Avatar utilisateur
```

**Bonnes pratiques de nommage** :

- ✅ **BON** : `hero-image.jpg`, `card-service-1.jpg`, `logo-site.png`
- ❌ **MAUVAIS** : `image123.jpg`, `export-1.png`, `untitled.jpg`

### Tailles d'export recommandées

Selon l'usage de l'image dans votre maquette :

| Usage               | Taille recommandée     | Format                       |
| ------------------- | ---------------------- | ---------------------------- |
| **Hero / Bannière** | 1200-1920px de large   | JPG ou PNG                   |
| **Cartes**          | 400-600px de large     | JPG ou PNG                   |
| **Avatars**         | 100-200px              | PNG (si transparence) ou JPG |
| **Logos**           | Taille originale ou 2x | PNG ou SVG                   |
| **Icônes**          | Taille originale       | SVG (préféré) ou PNG         |

### ⚠️ Points importants

1. **Ne pas exporter tout en 2x par défaut**

   - Les images 2x sont 4x plus lourdes
   - Utilisez 2x uniquement pour les images critiques (hero, logo)

2. **Vérifier les dimensions dans Figma**

   - Regardez la taille réelle de l'image dans la maquette
   - Exportez à la taille d'affichage réelle (pas plus grand)

3. **Optimiser après export**

   - Les images exportées depuis Figma peuvent être lourdes
   - Passez-les par [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/) pour les compresser
   - Voir : [Documentation optimisation images](optimisation-images.md)

4. **SVG pour les icônes**
   - Privilégiez SVG pour les icônes et logos
   - Plus léger et s'adapte à toutes les tailles
   - Voir : [Documentation SVG](svg.md)

### Checklist export images

- [ ] J'ai identifié toutes les images dans la maquette
- [ ] J'ai exporté chaque image au bon format (PNG/JPG/SVG)
- [ ] J'ai nommé les fichiers de manière claire et descriptive
- [ ] J'ai organisé les images dans `assets/images/`
- [ ] J'ai optimisé les images avec TinyPNG ou Squoosh
- [ ] J'ai vérifié que les tailles correspondent à l'affichage dans la maquette

---

## Étape 6 : Remplir les variables CSS

Une fois que vous avez identifié les valeurs principales, remplissez `styles/utils/_variables.css` :

```css
:root {
  /* Couleurs principales (copiées depuis Figma) */
  --color-primary: #2f80ed; /* ← Remplacer par la couleur de votre maquette */
  --color-secondary: #f2994a; /* ← Si présente dans la maquette */

  /* Couleurs de texte */
  --color-text: #222222; /* ← Couleur de texte principale */
  --color-text-muted: #777777; /* ← Couleur de texte secondaire */

  /* Espacements (convertir les px de Figma en rem) */
  --space-md: 1rem; /* 16px → 1rem */
  --space-lg: 1.5rem; /* 24px → 1.5rem */
  --space-xl: 2rem; /* 32px → 2rem */

  /* Typographie */
  --font-family-base: "Inter", ...; /* ← Remplacer par la police de votre maquette */
  --font-size-base: 1rem; /* 16px → 1rem (s'adapte aux préférences utilisateur) */
}
```

> ⚠️ **Important** : Faites cette étape **ensemble** en binôme/trinôme pour vous mettre d'accord sur les valeurs !

---

## Résumé du workflow complet

1. ✅ **Accéder à la maquette** Figma
2. ✅ **Activer le Dev Mode** (ou utiliser la méthode alternative)
3. ✅ **Analyser la structure** (composants, couleurs, espacements, typos)
4. ✅ **Exporter toutes les images** et les organiser dans `assets/images/`
5. ✅ **Remplir les variables CSS** ensemble
6. ✅ **Commencer à coder** !

## ⚠️ Attention aux dimensions

**Ne copiez pas bêtement les dimensions de Figma !**

- Utilisez des **pourcentages** ou **unités relatives** (`%`, `rem`, `em`, `vw`, `vh`) pour le responsive
- Les valeurs fixes en `px` ne s'adaptent pas aux différentes tailles d'écran
- Privilégiez `max-width`, `min-width`, `width: 100%` plutôt que des valeurs fixes
