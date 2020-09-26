const connector = require("./pgConnector")
const db = connector.db

const queries = {
  players: () => {
    return new Promise(reponse => {
      db.any(`SELECT * FROM player`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  player: (idPlayer) => {
    return new Promise(reponse => {
      db.one(`SELECT * FROM player WHERE id=${idPlayer}`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  games: () => {
    return new Promise(reponse => {
      db.any(`SELECT * FROM game`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  game: (idGame) => {
    return new Promise(reponse => {
      db.one(`SELECT * FROM game WHERE id=${idGame}`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  campains: (idMj) => {
    return new Promise(reponse => {
      db.any(`SELECT * FROM campagne WHERE idMj1=${idMj} OR idMj2=${idMj} OR idMj3=${idMj}`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  campainScenario: (idCampagne) => {
    return new Promise(reponse => {
      db.one(`SELECT * FROM scenario WHERE idCampagne=${idCampagne}`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  campainLogs: (idCampagne) => {
    return new Promise(reponse => {
      db.one(`SELECT * FROM log WHERE idCampagne=${idCampagne}`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  campainNotes: (idCampagne) => {
    return new Promise(reponse => {
      db.one(`SELECT * FROM note WHERE idCampagne=${idCampagne}`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  characters: () => {
    return new Promise(reponse => {
      db.one(`SELECT * FROM personnage`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
  character: (idCharacter) => {
    return new Promise(reponse => {
      db.one(`SELECT * FROM personnage WHERE id=${idCharacter}`)
        .then(data => { reponse(data) })
        .catch(error => { console.log(error) })
    })
  },
}

const resolvers = {
  Query: {
    players: async () => {
      const data = await queries.players()
      return data
    },
    games: async () => {
      const data = await queries.games()
      return data
    },
    player: async (root, { id }) => {
      const data = await queries.player(id)
      return data
    },
    game: async (root, { id }) => {
      const data = await queries.game(id)
      return data
    },
    campains: async (root, { id }) => {
      const data = await queries.campains(id)
      return data
    },
    characterData: async (root, { id }) => {
      const data = await queries.character(id)
      return data
    },
  },
  Campagne: {
    dm1: async (parent, args, context, info) => {
      const data = await queries.player(parent.iddm1)
      return data
    },
    dm2: async (parent, args, context, info) => {
      if (parent.iddm2) {
        const data = await queries.player(parent.iddm2)
        return data
      }
    },
    dm3: async (parent, args, context, info) => {
      if (parent.iddm3) {
        const data = await queries.player(parent.iddm3)
        return data
      }
    },
    game: async (parent, args, context, info) => {
      const data = await queries.game(parent.idgame)
      return data
    },
    scenario: async (parent, args, context, info) => {
      const data = await queries.campainScenario(parent.id)
      return data
    },
    log: async (parent, args, context, info) => {
      const data = await queries.campainLogs(parent.id)
      return data
    },
    note: async (parent, args, context, info) => {
      const data = await queries.campainNotes(parent.id)
      return data
    }
  },
  Character: {
    game: async (parent, args, context, info) => {
      const data = await queries.game(parent.idgame)
      return data
    },
    player: async (parent, args, context, info) => {
      const data = await queries.player(parent.idplayer)
      return data
    },
  },
}



module.exports = resolvers
