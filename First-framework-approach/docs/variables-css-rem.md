# 💡 Variables CSS et unités `rem`

## Pourquoi utiliser `rem` au lieu de `px` ?

### Accessibilité

Les utilisateurs peuvent agrandir la taille de police dans leur navigateur, et votre site s'adaptera automatiquement. Avec `px`, les tailles sont fixes et ne respectent pas les préférences utilisateur.

### Maintenabilité

Si vous changez la taille de base (`font-size` sur `html`), tout s'adapte proportionnellement. C'est beaucoup plus facile à maintenir qu'avec des valeurs fixes en `px`.

### Conversion

`1rem = 16px` (taille de base du navigateur)

| rem     | px   |
| ------- | ---- |
| 0.25rem | 4px  |
| 0.5rem  | 8px  |
| 0.75rem | 12px |
| 1rem    | 16px |
| 1.5rem  | 24px |
| 2rem    | 32px |
| 3rem    | 48px |

## Comment convertir les valeurs de Figma

Quand vous récupérez une valeur en `px` depuis Figma, divisez-la par 16 pour obtenir la valeur en `rem` :

- `16px` → `16 ÷ 16 = 1rem`
- `24px` → `24 ÷ 16 = 1.5rem`
- `32px` → `32 ÷ 16 = 2rem`
- `48px` → `48 ÷ 16 = 3rem`

## Exceptions : quand garder `px`

Pour certaines valeurs très petites et visuelles, vous pouvez garder `px` :

- **Bordures fines** : `border: 1px solid`
- **Ombres subtiles** : certaines ombres très légères peuvent rester en `px`
- **Media queries** : les breakpoints peuvent rester en `px` (pratique courante)

## Structure des variables dans `_variables.css`

```css
:root {
  /* Typographie */
  --font-size-base: 1rem; /* 16px par défaut, mais s'adapte aux préférences utilisateur */

  /* Espaces (système basé sur 0.5rem = 8px) */
  --space-xxs: 0.25rem; /* 4px */
  --space-xs: 0.5rem; /* 8px */
  --space-sm: 0.75rem; /* 12px */
  --space-md: 1rem; /* 16px */
  --space-lg: 1.5rem; /* 24px */
  --space-xl: 2rem; /* 32px */
  --space-xxl: 3rem; /* 48px */

  /* Radius (en rem pour cohérence) */
  --radius-sm: 0.25rem; /* 4px */
  --radius-md: 0.5rem; /* 8px */
  --radius-lg: 1rem; /* 16px */
}
```

## Utilisation dans vos composants

Utilisez toujours les variables plutôt que des valeurs fixes :

```css
/* ✅ BON */
.card {
  padding: var(--space-lg);
  border-radius: var(--radius-md);
}

/* ❌ MAUVAIS */
.card {
  padding: 24px;
  border-radius: 8px;
}
```
