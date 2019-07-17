const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Joueur {
        id: Int
        nom: String
        prenom: String
        mail: String
    }

    type jeu {
        id: Int
        nom: String
        infoPersonnage: String
    }

    type Query {
        allJoueurs: [Joueur]
        joueur(id: Int!): Joueur
    }
`

module.exports = typeDefs
