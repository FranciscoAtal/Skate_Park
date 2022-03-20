require('dotenv').config()
const { Client, Pool } = require('pg')

const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
})

const listar = async () => {
    const res = await pool.query('SELECT * from skaters')
    return res.rows
}

const buscar = async (email, password) => {
    const res = await pool.query('SELECT * from skaters WHERE email = $1 AND password = $2', [email, password])
    return res.rows[0]
}

const cambioEstado = (id, estado) => {
    return pool.query('UPDATE skaters set estado = $2 WHERE id = $1', [id, estado])
}

const modifica = (id, { nombre, password, anos_experiencia, especialidad }) => {
    return pool.query('UPDATE skaters set nombre=$2, password=$3, anos_experiencia=$4, especialidad=$5 WHERE id = $1', [id, nombre, password, anos_experiencia, especialidad])
}

const ingresar = async (obj) => {
    obj.estado = false;
    const consulta = 'INSERT INTO skaters(email, nombre, password, anos_experiencia, especialidad, foto, estado) values($1, $2, $3, $4, $5, $6, $7)'
    const res = await pool.query(consulta, [obj.email, obj.nombre, obj.password, obj.anos_experiencia, obj.especialidad, obj.foto, obj.estado])
}
//const ingresar = async (obj) => {
//    obj.estado = false
//    const cols = "email, nombre, password, anos_experiencia, especialidad, foto, estado"
//    const values = cols.split(',').map(name => obj[name])
//    await pool.query(`INSERT INTO skaters (${cols}) VALUES ($1, $2, $3, $4, $5, $6, $7)`, values)
//}

const eliminar = async (id) => {
    const res = await pool.query('DELETE FROM skaters WHERE id=$1', [id])
}

module.exports = { listar, buscar, cambioEstado, modifica, ingresar, eliminar }
