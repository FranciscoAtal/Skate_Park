const {Router} = require("express")
const db = require("./db.js")

const router = Router()

router.get('/administrador', async (req, res) => {
    const arr = await db.listar();
    res.render('admin', { skaters: arr })
})

router.put('/estado/:id/:estado', async (req, res) => {
    const { id, estado } = req.params
    await db.cambioEstado(id, estado)
    res.send("")
})

module.exports = router