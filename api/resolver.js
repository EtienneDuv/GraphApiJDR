const connector = require("./pgConnector")
const db = connector.db

const queries = {
    getJoueurs: () => {
        return new Promise(reponse => {
            db.any(`SELECT * FROM joueur`)
                .then(data => {
                    reponse(data)
                })
        })
    },
    getJoueur: idJoueur => {
        return new Promise(response => {
            db.any(`SELECT * FROM joueur WHERE ID=${idJoueur}`)
                .then(data => {
                    response(data)
                })
        })
    },
}

const resolvers = {
    Query: {
        allJoueurs: async () => {
            const data = await queries.getJoueurs()
            return data
        },
        joueur: async (root, { id }) => {
            const data = await queries.getJoueur(id)
            console.log(data)
            return data[0]
        },
    }
}



module.exports = resolvers
