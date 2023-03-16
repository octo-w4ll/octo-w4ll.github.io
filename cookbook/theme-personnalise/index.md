---
title: Dark mode
description: Détecter le thème utilisé par l'utilisateur afin de lui afficher comme thème par défaut
tags: ['recipe']
date: 2021-06-17
layout: layouts/cookbook.njk
---

## Cas d'usage étudié
Le thème doit par défaut être celui utilisé par l'utlisateur et peut être modifié simplement.

## Solution proposée
Lister les différentes couleurs utilisées sur le site et les mettre dans des variables CSS (custom properties).

```css
:root {
    --white: #f3f3f3;
    --black: #3d3d3d;
    ...
}
```

**prefers-color-scheme**

Cette propriété CSS permet de détecter les préférences exprimées par l'utilisateur quant au thème à utiliser (dark ou light seulement).

Utiliser prefers-color-scheme pour de nouveau déclarer des variables CSS en utilisant les variables définies plus tôt.

```css
@media (prefers-color-scheme: light) {
    :root {
        --on-background: var(--black);
        --background: var(--white);
    }
}

@media (prefers-color-scheme: dark) {
    :root {
        --on-background: var(--white);
        --background: var(--black);
    }
}
```

Utilisez maintenant ces nouvelles variables directement dans votre CSS et le thème choisi par l'utilisateur sera appliqué.

*A noter que sans action de l'utilisateur le thème light sera appliqué par défaut*

```css
body {
    background-color: var(--background);
    color: var(--on-background);
}
```

Afin de laisser la possibilité à l'utilisateur de changer son thème on peut facilement mettre un bouton en place et appliquer un nouveau thème en ajoutant ou retirant une class au body.

```js
const updateTheme = () => {
  const body = document.body;

  if(body.classList.contains('dark-theme')) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
};
```
Puis on overwrite nos variables en CSS.
```css
.dark-theme {
    --on-background: var(--white);
    --background: var(--black);
}

.light-theme {
    --on-background: var(--black);
    --background: var(--white);
}

body {
    background-color: var(--background);
    color: var(--on-background);
}

button {
    color: var(--background);
    background-color: var(--on-background);
}
```

>[Essayez-le en action sur Codesandbox](https://codesandbox.io/s/new-hill-ndfj61?file=/index.html)