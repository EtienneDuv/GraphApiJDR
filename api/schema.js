const { gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { GraphQLJSON } = require('graphql-type-json')

const typeDefs = gql`

scalar JSON

    type Joueur {
        id: ID!
        nom: String!
        prenom: String!
        mail: String!
    }
    type Jeu {
        id: ID!
        nom: String!
        infoPersonnage: JSON
    }
    type Campagne {
        id: ID!
        nom: String!
        mj1: Joueur!
        mj2: Joueur
        mj3: Joueur
        jeu: Jeu!
        scenario: Scenario!
        log: Log!
        note: Note!
    }
    type Scenario {
        id: ID!
        content: String
    }
    type Log {
        id: ID!
        content: JSON
    }
    type Note {
        id: ID!
        content: String
    }
    type Personnage {
        id: ID!
        nom: String!
        info: JSON
        jeu: Jeu!
        joueur: Joueur
    }



    type Query {
        allJoueurs: [Joueur!]
        allJeux: [Jeu!]
        allCampagnes(id: ID!): [Campagne!]
        joueur(id: ID!): Joueur
        jeu(id: ID!): Jeu
        personnageData(id: ID!): Personnage
    }

`

const resolveFunctions = {
    JSON: GraphQLJSON
};

const jsSchema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolveFunctions });

module.exports = typeDefs
