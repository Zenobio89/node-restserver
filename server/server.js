require('./config/config')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// Habilitamos bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => res.json('get Usuario'))
app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({ ok: false, mensaje: 'El nombre es necesario' })
    } else {
        res.json({ persona: body })
    }
})
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id
    res.json({
        id
    })
})
app.delete('/usuario', (req, res) => res.json('delete Usuario'))
app.listen(port, () => console.log(`Servidor ejecuntadose en el puerto ${port}!`))