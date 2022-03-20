require('dotenv').config()
const fs = require('fs')

const { Client } = require('pg')

const migrate = async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
    await client.connect()

    const sql = fs.readFileSync('data.sql').toString();

    const res = await client.query(sql)
    await client.end()
    return res.rows
}

migrate().then(console.log)