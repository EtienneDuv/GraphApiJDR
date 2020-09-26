const { gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { GraphQLJSON } = require('graphql-type-json')

const typeDefs = gql`

scalar JSON

    type Player {
        id: ID!
        surname: String!
        name: String!
        mail: String!
    }
    type Game {
        id: ID!
        surname: String!
        characterData: JSON
    }
    type Campain {
        id: ID!
        surname: String!
        dm1: Player!
        dm2: Player
        dm3: Player
        game: Game!
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
    type Character {
        id: ID!
        surname: String!
        info: JSON
        game: Game!
        player: Player
    }



    type Query {
        players: [Player!]
        games: [Game!]
        campains(id: ID!): [Campain!]
        player(id: ID!): Player
        game(id: ID!): Game
        characterData(id: ID!): Character
    }

`

const resolveFunctions = {
  JSON: GraphQLJSON
};

const jsSchema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolveFunctions });

module.exports = typeDefs
