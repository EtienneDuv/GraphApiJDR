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


module.exports.db = db