---
title: Intégrer un lien d'évitement
description: Lien d'évitement 
tags: ['recipe']
date: 2022-09-01
layout: layouts/cookbook.njk
---

## Cas étudié
Dans certaines situations, l'utilisateur doit défiler ou passer par de nombreuses tabulations afin d'accéder au contenu souhaité au sein d'une page.

## Solution proposée
Il est recommandé de mettre en place des liens d'évitement (ou également appelés liens d'accès rapide) qui permettent de faciliter la navigation en fournissant des raccourcis à l'intérieur d'une page. L'idée étant de permettre à l'utilisateur d'accéder au contenu souhaité sans qu'il ne doive parcourir toute la page. Les liens se placent en haut de page. Ils peuvent être visibles ou non, auquel cas, ils devront apparaître lors de la navigation au clavier, au premier appui de la touche tabulation. Cette solution est notamment très utilisée sur les sites d'e-commerces et/ou au contenu dense.

### A noter
* Les liens d'évitement doivent se **trouver au début du code HTML**, du moins avant tout autre lien dans la page afin de pouvoir paraître dès la première tabulation dans celle-ci.
* Les liens doivent être **ordonnés dans le même ordre que le contenu du site** auquel ils font références.

### Un exemple d'intégration d'un lien d'évitement visible au focus avec React
```js
/*App.tsx*/
<a className="lien-d-evitement" href="#contenu-principal">
    Aller au contenu principal
</a>

<main id="contenu-principal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis erat tristique rutrum tincidunt. 
</main>
```

```css
/* LienDevitement.css */
.lien-d-evitement {
    position: absolute;
    transform: translateY(-100%);
    left: -100vw;
}

.lien-d-evitement:focus-visible {
    position: relative;
    transform: translateY(0%);
    left: 0;
}
```

Exemple de code : [Intégration d'un lien d'évitement avec React](https://codesandbox.io/s/lien-d-evitement-2t7y0k).