const express = require('express')
const typeDefs = require('./schema')
const resolvers = require('./resolver')
const {ApolloServer} = require('apollo-server-express')

const app = express()

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    playground: {
        settings: {
            "editor.theme": "dark"
        }
    }
})

server.applyMiddleware({ app })

app.listen({ port:4000 }, () => {
    console.log(`Server listening at http://localhost:4000${server.graphqlPath}`)
})
