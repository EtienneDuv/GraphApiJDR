const connector = require("./pgConnector")
const db = connector.db

const queries = {
    getJoueurs: () => {
        return new Promise(reponse => {
            db.any(`SELECT * FROM joueur`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
    getJoueur: (idJoueur) => {
        return new Promise(reponse => {
            db.one(`SELECT * FROM joueur WHERE id=${idJoueur}`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
    getJeux: () => {
        return new Promise(reponse => {
            db.any(`SELECT * FROM jeu`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
    getJeu: (idJeu) => {
        return new Promise(reponse => {
            db.one(`SELECT * FROM jeu WHERE id=${idJeu}`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
    getCampagnes: (idMj) => {
        return new Promise(reponse => {
            db.any(`SELECT * FROM campagne WHERE idMj1=${idMj} OR idMj2=${idMj} OR idMj3=${idMj}`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
    getCampagneScenario: (idCampagne) => {
        return new Promise(reponse => {
            db.one(`SELECT * FROM scenario WHERE idCampagne=${idCampagne}`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
    getCampagneLog: (idCampagne) => {
        return new Promise(reponse => {
            db.one(`SELECT * FROM log WHERE idCampagne=${idCampagne}`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
    getCampagneNote: (idCampagne) => {
        return new Promise(reponse => {
            db.one(`SELECT * FROM note WHERE idCampagne=${idCampagne}`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
    getPersonnage: (idPersonnage) => {
        return new Promise(reponse => {
            db.one(`SELECT * FROM personnage WHERE id=${idPersonnage}`)
                .then(data => { reponse(data) })
                .catch(error => { console.log(error) })
        })
    },
}

const resolvers = {
    Query: {
        allJoueurs: async () => {
            const data = await queries.getJoueurs()
            return data
        },
        allJeux: async () => {
            const data = await queries.getJeux()
            return data
        },
        joueur: async (root, { id }) => {
            const data = await queries.getJoueur(id)
            return data
        },
        jeu: async (root, { id }) => {
            const data = await queries.getJeu(id)
            return data
        },
        allCampagnes: async (root, { id }) => {
            const data = await queries.getCampagnes(id)
            return data
        },
        personnageData: async (root, { id }) => {
            const data = await queries.getPersonnage(id)
            return data
        },
    },
    Campagne: {
        mj1: async (parent, args, context, info) => {
            const data = await queries.getJoueur(parent.idmj1)
            return data
        },
        mj2: async (parent, args, context, info) => {
            if (parent.idmj2) {
                const data = await queries.getJoueur(parent.idmj2)
                return data
            }
        },
        mj3: async (parent, args, context, info) => {
            if (parent.idmj3) {
                const data = await queries.getJoueur(parent.idmj3)
                return data
            }
        },
        jeu: async (parent, args, context, info) => {
            const data = await queries.getJeu(parent.idjeu)
            return data
        },
        scenario: async (parent, args, context, info) => {
            const data = await queries.getCampagneScenario(parent.id)
            return data
        },
        log: async (parent, args, context, info) => {
            const data = await queries.getCampagneLog(parent.id)
            return data
        },
        note: async (parent, args, context, info) => {
            const data = await queries.getCampagneNote(parent.id)
            return data
        }
    },
    Personnage: {
        jeu: async (parent, args, context, info) => {
            const data = await queries.getJeu(parent.idjeu)
            return data
        },
        joueur: async (parent, args, context, info) => {
            const data = await queries.getJoueur(parent.idjoueur)
            return data
        },
    },
}



module.exports = resolvers
