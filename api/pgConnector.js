require('dotenv').config()
const pgPromise = require('pg-promise')

const pgp = pgPromise({})

const config = {
    host: "epickiwi.fr",
    port: "35432",
    database: "postgres",
    user: "postgres",
    password: "eiTh4Tae"
}

const db = pgp(config)

// db.any('select * from joueur', [true])
//     .then(data => {
//         console.log(data)
//         return data
//     })
//     .catch(error => { console.log('ERROR:', error); })

// db.any(`select * from joueur`)
//     .then(data => {
//         console.log('Query sent')
//         console.log(data)
//         return data
//     })
//     .catch(error => { console.log('ERROR:', error); })

// db.any(`SELECT * FROM joueur WHERE ID=1`)
//     .then(test => {
//         console.log(test[0])
//     })



module.exports.db = db