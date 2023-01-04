---
title: Grille avec grid
description: Concevoir une grille responsive avec CSS grid, sans media queries
tags: ['recipe']
date: 2022-09-30
layout: layouts/cookbook.njk
---

## Cas étudié

Afficher des éléments (comme des cartes) sous forme de colonne de manière responsive.

## Solution proposée

Il n'est pas nécessaire d'avoir recours à de grandes librairies telles que bootstrap pour avoir un système de colonnes,
très verbeuses dans le HTML à grands coups de classes. L'apparition et surtout le support grandissant de CSS grid par
les navigateurs nous permet maintenant de l'utiliser à grande échelle. L'avantage associé est sur la maintenabilité, où
une seule modification dans le CSS suffit à changer le nombre de colonnes, plutôt que plusieurs éléments avec une classe
de type `col-sm-N`.
Les éléments suivants sont à définir :

* `--gap`: espace entre les éléments
* `--max-column-count`: nombre maximum de colonnes
* `--grid-item--min-width`: la largeur minimum des éléments à afficher

```css
.container {
  --gap: 1rem;
  --max-column-count: 4;
  --grid-item--min-width: 300px;

  --max-number-of-gaps-in-row: calc(var(--max-column-count) - 1);
  --total-gap-width: calc(var(--max-number-of-gaps-in-row) * var(--gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--max-column-count));

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));

  gap: var(--gap);
}
```

```html

<div class="container">
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
</div>
```

[Lien vers un codepen et crédits de l'auteur](https://codepen.io/aghiles-dev/pen/RwyLgwq)
