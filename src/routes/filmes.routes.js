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

app.get("/filmes", (req,res) => {
    return res.status(200).send(filmesMarcantes)
})