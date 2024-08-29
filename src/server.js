import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Rapunzel",
        genero: "Animação",
        emCartaz: false,
    },
    {
        id: 1002,
        titulo: "É assim que acaba",
        genero: "Romance",
        emCartaz: true,
    },
    {
        id: 1003,
        titulo: "Chuck- O boneco assassino",
        genero: "Terror",
        emCartaz: false,
    }
]

app.get("/", (req,res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

app.get("/filmes", (req,res) => {
    return res.status(200).send(filmesMarcantes)
})

app.listen(port, () =>{
    console.log(`🌷 Server started on http://localhost:${port}`)
})