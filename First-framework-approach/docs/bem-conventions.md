# Conventions de nommage BEM

## Principe

BEM = Block, Element, Modifier

- **Block** : composant autonome (`.card`, `.header`, `.button`)
- **Element** : partie interne d’un block (`.card__image`, `.header__nav`)
- **Modifier** : variation du block ou d’un élément (`.button--primary`, `.header--sticky`)

## Règles

- Les noms sont en **kebab-case** (minuscule avec des tirets) :
  - ✅ `.hero-section`, `.card__title`, `.button--primary`
  - ❌ `.heroSection`, `.cardTitle`, `.primaryButton`
- Un **block** ne dépend pas du contexte dans la page:
  - HTML : `<article class="card">...</article>`
  - CSS : `.card { ... }`
- Un **element** n’existe que dans son block :
  - HTML : `<h3 class="card__title">Titre</h3>`
  - CSS : `.card__title { ... }`
- Un **modifier** exprime un état ou une variation :
  - `.button--primary`, `.button--secondary`
  - `.header--sticky`, `.card--featured`

## Exemples

<button class="button button--primary">CTA</button>

<article class="card card--featured">
  <img class="card__image" />
  <h3 class="card__title">Titre</h3>
  <p class="card__text">Texte…</p>
</article>