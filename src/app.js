const express = require('express')
const routes = require('./routes')
const db = require('./database')

const app = express()
db.hasConection()
const port = 3000

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
