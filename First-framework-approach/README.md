# Projet d'intégration maquette Figma (HTML / CSS)

## 🎯 Objectif

Intégrer la maquette Figma en respectant :

- une **structure de fichiers claire**
- des **conventions CSS BEM**
- le principe **DRY** (réutilisation des composants, variables, classes utilitaires)
- les **bonnes pratiques** d'accessibilité et de sémantique HTML

---

## 📚 Documentation

Toute la documentation est organisée par thématique dans le dossier [`docs/`](docs/). Consultez les guides suivants selon vos besoins :

### 🚀 Démarrage

- **[Installation des outils](docs/installation-outils.md)** - Extensions VS Code à installer
- **[Premiers pas avec Figma](docs/figma-premiers-pas.md)** - Comment analyser et utiliser la maquette Figma
- **[Collaboration avec Live Share](docs/collaboration-liveshare.md)** - Travailler en équipe sans Git

### 💻 Techniques de développement

- **[Composants HTML réutilisables](docs/composants-html.md)** - Organiser le HTML en composants (comme dans Figma)
- **[Variables CSS et unités `rem`](docs/variables-css-rem.md)** - Pourquoi et comment utiliser `rem`
- **[Conventions BEM](docs/bem-conventions.md)** - Méthode de nommage des classes CSS

### 🎨 Ressources et médias

- **[Optimisation des images](docs/optimisation-images.md)** - Formats, compression, bonnes pratiques
- **[Utilisation et modification des SVG](docs/svg.md)** - Travailler avec les icônes vectorielles
- **[Utilisation des polices](docs/polices.md)** - Google Fonts, polices personnalisées, bonnes pratiques

### ♿ Qualité et accessibilité

- **[Sémantique HTML](docs/semantique-html.md)** - Utiliser les bonnes balises pour donner du sens
- **[Accessibilité (a11y)](docs/accessibilite.md)** - Rendre votre site accessible à tous
- **[SEO](docs/seo.md)** - Optimisation pour les moteurs de recherche

---

## 📁 Structure du projet

```
ui-projet/
├── README.md                    ← Vous êtes ici
├── index.html                   ← Page principale
├── pages/                       ← Pages secondaires
├── components/                  ← Composants HTML réutilisables (comme dans Figma)
│   ├── header.html
│   ├── footer.html
│   ├── hero.html
│   ├── card.html
│   └── button.html
├── styles/
│   ├── main.css                 ← Point d'entrée CSS (importe tous les autres)
│   ├── base/                    ← Styles de base (reset, typographie)
│   ├── utils/                   ← Variables CSS et helpers
│   ├── layout/                  ← Structure de la page (grid, layout)
│   └── components/              ← Styles CSS des composants (boutons, cartes, etc.)
├── scripts/
│   └── main.js                  ← JavaScript (optionnel)
├── assets/
│   ├── images/                  ← Images optimisées
│   ├── icons/                   ← SVG et icônes
│   └── fonts/                   ← Polices personnalisées
└── docs/                        ← Documentation complète
```

---

## 📝 Étapes de travail (ordre recommandé)

1. ✅ **[Installer les extensions](docs/installation-outils.md)** (Live Share, Figma, Live Server)
2. ✅ **[Analyser la maquette Figma](docs/figma-premiers-pas.md)** (identifier composants, couleurs, espacements, typos)
3. ✅ **[Exporter toutes les images](docs/figma-premiers-pas.md#étape-5--exporter-toutes-les-images-de-la-maquette)** depuis Figma et les organiser dans `assets/images/`
4. ✅ **[Remplir les variables CSS](docs/variables-css-rem.md)** ensemble (c'est la base de tout)
5. ✅ **[Répartir les fichiers](docs/collaboration-liveshare.md)** entre les membres du groupe
6. ✅ **[Optimiser les images exportées](docs/optimisation-images.md)** avec TinyPNG ou Squoosh
7. ✅ **Créer les composants HTML** dans `components/` (voir [Composants HTML](docs/composants-html.md))
8. ✅ **Créer la structure HTML** dans `index.html` en copiant-collant les composants (voir [sémantique HTML](docs/semantique-html.md))
9. ✅ **Créer les styles de base** (`_reset.css`, `_typography.css`)
10. ✅ **Créer les styles des composants** dans `styles/components/` (voir [BEM](docs/bem-conventions.md))
11. ✅ [Utiliser les SVG](docs/svg.md) pour les icônes et logos
12. ✅ **Tester régulièrement** dans le navigateur (Live Server)
13. ✅ **[Vérifier l'accessibilité](docs/accessibilite.md)** et ajuster si nécessaire
14. ✅ **[Optimiser le SEO](docs/seo.md)** (meta tags, structure, etc.)
15. ✅ **Ajuster et peaufiner** jusqu'à correspondre à la maquette

---

## 🎓 Ressources rapides

- **Structure HTML** : voir `index.html`
- **Variables CSS** : voir `styles/utils/_variables.css`
- **Conventions BEM** : voir [`docs/bem-conventions.md`](docs/bem-conventions.md)

---

## 💡 Astuce

**Commencez par lire** :

1. [Installation des outils](docs/installation-outils.md)
2. [Premiers pas avec Figma](docs/figma-premiers-pas.md)
3. [Collaboration avec Live Share](docs/collaboration-liveshare.md)

Puis consultez les autres guides au fur et à mesure de vos besoins !
