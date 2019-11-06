### ALLJOUEURS
```graphql
query {
  allJoueurs {
    id
    nom
    prenom
    mail
  }
}
```

### ALLJEUX 
```graphql
query {
    {
        id
        nom
        infoPersonnage
    }
}
```

### JOUEUR
```graphql
query {
  joueur(id: 1) {
    id
    nom
    prenom
    mail
  }
}
```

### JEU
```graphql
query {
  jeu(id: 1) {
    id
    nom
    infoPersonnage
  }
}
```

### ALLCAMPAGNES
```graphql
query {
  allCampagnes(id: 2) {
    nom
    mj1 {
      prenom
      nom
    }
    mj2 {
      prenom
      nom
    }
    mj3 {
      prenom
      nom
    }
    jeu {
      nom
    }
    scenario {
      content
    }
    log {
      content
    }
    note {
      content
    }
  }
}
```

### PERSONNAGEDATA
```graphql
query {
  personnageData(id: 3) {
    id
    nom
    info
    jeu {
      nom
    }
    joueur {
      prenom
      nom
    }
  }
}
```

### JOUEURDATA
```graphql
query {
  joueur(id: 2) {
    prenom
    nom
  }
  allCampagnes(id: 2) {
    nom
    mj2 {
      prenom
      nom
    }
    mj3 {
      prenom
      nom
    }
    jeu {
      nom
    }
    scenario {
      content
    }
    log {
      content
    }
    note {
      content
    }
  }
}
```
