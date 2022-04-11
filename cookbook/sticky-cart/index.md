---
title: Un panier sticky
description: Panier sticky restant fixé en haut de la page au défilement d'une liste de produits
tags: ['recipe']
date: 2021-04-01
layout: layouts/cookbook.njk
---

## Cas d'usage étudié
Le panier répond aux critères suivants : 
Placé dans un conteneur avec un conteneur adjacent (ex: liste des éléments à ajouter au panier). Le panier n'est pas impacté par son voisin et reste positionné fixement. S'il atteind la taille max de son parent, sa taille devient fixe et la barre de défilement apparait.

<p class="illustration--centered">
  <img width="300px" src="/sticky-cart.png" alt="" >
</p>

## Solution proposée

La solution proposée peut être testée sur un codepen (bac à sable) : [lien vers le codepen.](https://codepen.io/floragc-octo/pen/WNZqPKo)

En quelque mots, ce qu'il faut retenir de cette implémentation

**position: sticky** 

Cette propriété CSS va permettre de positionner l'élément auquel elle s'applique de manière... collante. Dans notre exemple, on va s'en servir afin de répondre à l'exigence suivante :
> Le panier restera en position fixe en haut du conteneur et ne sera pas impacté par le scroll du conteneur adjacent

**overflow: scroll** 

lorsque le panier atteint la taille de son conteneur parent, nous souhaitons qu'apparaisse une barre de défilement (ou `scroll`). La propriété `overflow` permet de spécifier le comportement en cas de dépassement du contenu dans son conteneur. La valeur `scroll` indique ici qu'une barre de défilement apparaîtra.

### code HTML

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Exemple de panier fixe</title>
  </head>
  <body>
    <main>
        <article> <!-- Conteneur adjacent -->
            <p>...</p>
        </article>
        <aside> <!-- Panier -->
            <h1>Panier</h1>
            <article>
              <p>...</p>
            </article>
        </aside>
    </main>
  </body>
</html>
```

### code CSS : 

```css
:root {
    --space: 1rem;
}

* {
    margin: 0;
}

main {
    display: flex;
    gap: 10px;
  
    padding: var(--space);
}

main > article {
    border: 3px solid black;
    padding: 10px 20px;
  
    flex-grow: 999;
    flex-basis: 0;
    min-width: 40%;
}

aside { /* notre panier */
    box-sizing: border-box;
    border: 3px solid black;
    padding: 10px 20px;
  
    flex-grow: 1;
    flex-basis: 400px;
    align-self: start;
  
    position: sticky;
  
    top: var(--space);
    bottom: var(--space);
    max-height: calc(100vh - 2 * var(--space));
    
    overflow: scroll;
}
```

## Autres informations sur le code

### Les customs properties
Dans le code vous pouvez voir la notation `--space` ainsi que `var(--space)`.

Il s'agit de custom properties CSS, pouvant s'apparenter à des variables.

La propriété se défini avec `--ma-propriété` et s'utilise avec la notation `var(--ma-propriété)`.

### Box-sizing
La propriété CSS box-sizing indique comment seront calculées la hauteur et la largeur d'un élément en prenant en compte tous les éléments qui peuvent l'être: padding, margin, border-size.

`box-sizing: border-box`, dans notre exemple, indique qu'il faut prendre en compte la bordure et le remplissage dans la valeur définie pour la largeur et la hauteur.

Pourquoi cela est nécessaire: nous calculons la max-height, le top et le bottom en pixels afin de positionner le panier en haut du contenu parent et provoquer le scroll lorsque le panier atteint la taille de son parent. Si nous ne spécifions pas ce box-sizing, il nous faudra ajouter la largeur des border ainsi que les paddings haut et bas du panier dans tous ces calculs.


### Flex properties
Dans le code nous utilisons le layout `flexbox` pour positionner la liste des produits et le panier verticalement.

Nous souhaitons que le panier fasse 400px de large et que le contenu adjacent prenne le reste de la place allouée par la taille du parent.

Voici le détails de propriétés utilisées : 

`flex-basis`
Cette propriété indique la taille initiale d'un contenu avant qu'il ne soit re-distribué via les autres propriétés flex (notamment le flex-grow, ci-dessous). Nous souhaitons que notre panier fasse 400px de large, pour cela elle est fixée à 400px. Nous attribuons ensuite une valeur à 0 pour la liste des produits pour indiquer que nous ne souhaitons pas définir de taille initiale.

`flex-grow`
Cette propriété indique le facteur d'expansion d'un élément, sous la forme d'une proportion comparative aux autres enfants de son parent. Si tous les enfants du parent ont une proportion de 1, ils prendront tous une portion égale du parent (100%/nb d'enfant). Si un de ces enfant a un facteur plus élevé il prendra une place plus importante.

Dans notre exemple, nous avons fixé une taille fixe de 400px au panier, et nous souhaitons que les autres enfants prennent la place restant quel que soit leur contenu. Pour cela, nous avons fixé le facteur d'expansion à 1 pour le panier et à 999 (valeur volontairement elevée) pour la liste des produits.
