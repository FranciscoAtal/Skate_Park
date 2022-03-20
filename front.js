const { Router } = require("express")
const db = require("./db.js")
const jwt = require("jsonwebtoken")
const expressFileUpload = require('express-fileupload');

const secretKey = process.env["JWT_SECRET"]

const router = Router()

router.use(expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit: "El peso del archivo que intentas subir supera el limite permitido",
})
);

router.use((req, res, next) => {
    try {
        const { token } = req.cookies
        const data = jwt.verify(token, secretKey)
        req.user = data.user
    } catch (error) {
        req.user = undefined
    }

    next()
})

router.get('/', async (req, res) => {
    const arr = await db.listar();
    res.render('home', { skaters: arr })
})

router.get("/iniciar-sesion", (req, res) => {
    res.render("login", req);
})

router.get('/registrarme', (req, res) => {
    res.render("registro", req);
})

const proteger = (req, res, next) => {
    req.user ? next() : res.send("<h1>No tienes permiso de estar aqui</h1>")
}

router.get('/datosParticipante', proteger, async (req, res) => {
    const eliminar = req.query.eliminar
    if (eliminar) {
        console.log("Eliminar");
        await db.eliminar(req.user.id)
        res.redirect("/logout")
    } else {
        res.render("datos", req.user);

    }
})

router.get('/crearParticipante', async (req, res) => {
    await db.ingresar(req.body)
    res.redirect('/')
})

router.post('/iniciar-sesion', async (req, res) => {
    const { email, password } = req.body;
    const user = await db.buscar(email, password);

    if (user) {
        const token = jwt.sign({ user }, secretKey, { expiresIn: '30m' });

        res.cookie("token", token).redirect("/datosParticipante")
    } else {
        res.send("Usuario o contraseña incorrecta");
    }
});

router.post('/crearParticipante', async (req, res) => {
    console.log(req.body)
    const { foto } = req.body;

    foto.mv(`/img/${foto}.jpg`, (err) => {
        res.redirect('/logout');
    });
    await db.ingresar(req.body)
    res.redirect('/')
})

router.post('/datosParticipante', proteger, async (req, res) => {
    const form = req.body
    console.log(form);
    await db.modifica(req.user.id, form)
    res.redirect('/logout')
})


// Post /Registrarme
router.post('/registrarme', async (req, res) => {
    await db.ingresar(req.body);
    res.redirect('/')
})

router.get('/logout', async (req, res) => {
    res.clearCookie("token").redirect("/")
})

module.exports = router
