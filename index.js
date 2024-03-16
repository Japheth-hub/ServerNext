const express = require('express')
const server = express();
const router = require('./routs/routs.js')
const PORT = 3005

server.use(express.json())

server.use(router)


server.listen(PORT, ()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`)
})