const connector = require("./pgConnector")
const db = connector.db

db.any(`SELECT * FROM joueur`)
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log('ERROR:', error);
    })

const queries = {
    getJoueurs: () => {
        return new Promise(reponse => {
            db.any(`SELECT * FROM joueur`)
                .then(data => {
                    console.log(data)
                    reponse(data)
                })
                .catch(error => {
                    console.log('ERROR:', error);
                })
                
        })
    },
    getJeux: () => {
        return new Promise(response => {
            db.any(`SELECT * FROM jeu`)
                .then(data => {
                    response(data)
                })
                .catch(error => {
                    console.log('ERROR:', error);
                })
        })
    },
    getJoueur: (idJoueur) => {
        return new Promise(response => {
            db.one(`SELECT * FROM joueur WHERE ID=${idJoueur}`)
                .then(data => {
                    response(data)
                })
                .catch(error => {
                    console.log('ERROR:', error);
                })
        })
    },
}

const resolvers = {
    Query: {
        allJoueurs: async () => {
            const data = await queries.getJoueurs()
            console.log(data)
            return data
        },
        allJeux: async () => {
            const data = await queries.getJeux()
            console.log(data)
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
