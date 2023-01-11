---
title: Quelle unité pour quelle utilité
description: Choisir la bonne unité selon les cas
tags: ['recipe']
date: 2023-01-05
layout: layouts/cookbook.njk
---

## Cas d'usage étudié
Plusieurs propriétés CSS comme `font-size`, `width`, `padding`, etc…, ont besoin d’une taille spécifique. Cette taille peut être exprimée de différentes manières.Il est donc important de choisir l'unité la plus appropriée selon les besoins.

Il existe deux types d'unités de longueur en CSS : les unités absolues et les unités relatives.

## Unités de longueur absolues

Les unités de longueur absolues ont généralement la même taille sur tous les appareils, cependant elles s'adaptent moins bien en cas de redimensionnement ou de zoom. Il est généralement déconseillé d'utiliser ces unités sauf pour garantir une taille fixe pour certaines choses comme les icônes ou les pages à imprimer.

- `px` : unité en pixels.
- `cm` : unité en centimètres (1cm = 37.8px).
- `mm` : unité en millimètres (1mm = 3.78px, soit 1/10 de 1cm).
- `in` : unité en pouces (1in = 96px).
- `pt` : unité en points (1pt = 1.333px).
- `pc` : unité en pica (1pc = 16px).

## Unités de longueur relatives

Les unités de longueur relatives en CSS dépendent de facteurs tels que la taille de la police de l'élément parent ou la taille de la fenêtre du navigateur. C’est en général ce que l’on utilisera le plus pour créer des applications flexibles qui peuvent s'adapter à différentes situations, comme le zoom, le redimensionnement, etc…

- `%` : unité en pourcentage relative à la taille de l'élément parent. On l'utilise essentiellement pour définir la largeur des éléments et permettre un redimensionnement facile.
- `rem` : unité basée sur la taille de la police de l'élément racine (c'est-à-dire l'élément `html`), de sorte que si vous changez la taille de la police de base de votre site, tous les éléments utilisant des rem seront automatiquement redimensionnés en conséquence.
- `em` : idem que pour les `rem` mais basé sur la taille de police de l'élément parent. Il est en général plus simple d'utiliser des `rem` pour justement ne pas avoir en prendre en compte l'élément parent mais seulement l’élément `html`
- `vh` : (viewport height) unité proportionnelle à la hauteur de la fenêtre du navigateur. Cela signifie qu’un élément avec une hauteur de `100vh` fera exactement  la hauteur de la fenêtre de votre navigateur.
- `vw` : (viewport width) idem que pour `vh` mais par rapport à la largeur de la fenêtre du navigateur.

*Il est important de noter que les valeurs de `vw` et `vh` sont relatives à la taille de la fenêtre du navigateur, et non à la taille de l'écran de l'utilisateur. Cela signifie qu'elles peuvent varier sur des navigateurs ou des appareils différents*

- `vmin` : est égal à la valeur la plus petite entre `1vw` et `1vh`. Cela signifie qu'il prendra la valeur la plus petite entre 1% de la largeur de la fenêtre de navigation et 1% de la hauteur de la fenêtre de navigation. Il est utilisé pour définir des tailles qui restent proportionnelles à l'écran, mais qui s'adaptent automatiquement à différentes orientations d'écran (paysage ou portrait) et différentes résolutions d'écran.
- `vmax` : idem que pour `vmin` mais en sélectionnant la plus grande valeur entre `1vw` et `1vh`
- `ch` : unité proportionnelle à la largeur de la chaîne “0” de la police courante utilisée. (par exemple si vous définissez la taille d’un élément à `4ch` il fera 4 fois la largeur de la chaîne “0”.
- `ex` : unité proportionnelle à la hauteur de la minuscule "x" de la police courante utilisée.