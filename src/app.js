const express = require('express')
const routes = require('./routes')
const handleError = require('./middlewares/handleError')
const db = require('./database')

const app = express()
db.hasConection()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(handleError)
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
