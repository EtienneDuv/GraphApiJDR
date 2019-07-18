const { gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { GraphQLJSON } = require('graphql-type-json')

const typeDefs = gql`

scalar JSON

    type Joueur {
        id: Int!
        nom: String!
        prenom: String!
        mail: String!
    }

    type Jeu {
        id: Int!
        nom: String!
        infoPersonnage: JSON
    }

    type Query {
        allJoueurs: [Joueur]
        allJeux: [Jeu]
        joueur(id: Int!): Joueur
    }

`

const resolveFunctions = {
    JSON: GraphQLJSON
};

const jsSchema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolveFunctions });

module.exports = typeDefs
