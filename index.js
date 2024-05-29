const express = require('express')
const server = express();
const router = require('./routs/routs.js')
const PORT = 3005

server.use(express.json())

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(router)


server.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`)
})