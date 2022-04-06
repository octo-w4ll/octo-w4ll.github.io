# Quelques infos sur la contribution

### Le format du template d'article - le cartouche
Il est important de laisser les noms des attributs sur chaque ligne. 
On ne modifie que ce qui vient après.

```md
---
title: Lorem Ipsum 
description: Un article a propos de Lorem ipsum
tags: ['recipe']
date: 2021-06-19
layout: layouts/cookbook.njk
---
```

| Attribut      | Description |
| ----------- | ----------- |
| title      | Titre de la recette       |
| description   | Description succincte qui sera utilisée dans la liste des recettes        |
| tags   | Laisser celui du template (`tags: ['recipe']`) dans un premier temps        |
| date   | La date de création de l'article doit être au format `AAAA-MM-JJ`        |
| layout   | Laisser celui du template (`layouts/cookbook.njk`) dans un premier temps        |

## Le format du template d'article - le contenu

Le contenu doit respecter la syntaxe markdown

> Note: Le HTML est interprété, vous pouvez donc (avec parcimonie) ajouter des balises dans vos articles.

### Quelques exemples de syntaxe markdown : 
---

```md
# Titre
## Titre 2
### Titre 3
#### Titre 4

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

    ```html
        <p>
        exemple de code HTML 
        </p>
    ```

> citation

[Lien](url du lien)
````

### Cas particulier des images
---

Les images sont stockées dans le dossier `assets/illustrations`.

Pour y accéder après le build il faut placer l'image dans une balise ayant comme classe CSS `"illustration--centered"` et indiquer dans l'URL `/assets/illustrations` comme dans l'exemple ci-dessous:

```html
<p class="illustration--centered">
  <img width="300px" src="/assets/illustrations/sticky-footer.png" alt="Ma description" >
</p>
```
