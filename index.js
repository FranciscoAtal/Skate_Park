const express = require("express")
const { engine } = require("express-handlebars")
const bodyParser = require("body-parser")
const api = require("./api.js")
const front = require("./front.js")
const cookieParser = require("cookie-parser")

const port = process.env.PORT || 3000
const app = express()

app.engine('handlebars', engine({
    helpers: {
        sumarUno: (n) => +n + 1
    }
}))

app.set("view engine", "handlebars")
//app.set("views", "./views")

app.use(express.static("assets"));

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use(api)
app.use(front)

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
})