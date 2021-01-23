const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(processs.env.MONGODB_URI)



app.get('*',(req, res) => {
    console.log('hola mundo ! mi primera aplicacion serverless')
    res.send({
        mensaje: 'Chanchito Feliz'
    })
})

module.exports = app