# Quelques infos sur la contribution

## Le format du template d'article

### La cartouche
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
| date   | On ne gère pas encore l'insertion automatique de la date, inscrit la date de la création de l'article au format `AAAA-MM-JJ`        |
| layout   | Laisser celui du template (`layouts/cookbook.njk`) dans un premier temps        |

### Le contenu

N'importe quoi dans que cela respecte la structure du markdown.
Quelques exemples :

---

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