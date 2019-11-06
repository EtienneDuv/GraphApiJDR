# allJeux

# ALLJOUEURS
query {
  allJoueurs {
    id
    nom
    prenom
    mail
  }
}

# ALLJEUX 
query {
    {
        id
        nom
        infoPersonnage
    }
}

# JOUEUR
query {
  joueur(id: 1) {
    id
    nom
    prenom
    mail
  }
}

# JEU
query {
  jeu(id: 1) {
    id
    nom
    infoPersonnage
  }
}

# ALLCAMPAGNES
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

# PERSONNAGEDATA
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

# JOUEURDATA
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
