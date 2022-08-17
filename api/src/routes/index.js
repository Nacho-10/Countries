const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/v3/all', (req,res) => {
    res.send('hola nacho') 
});

router.use('/name', (req,res) => {
    res.send('hola name')
});

router.use('/alpha', (req,res) => {
    res.send('hola alpha')
});

router.use('/', (req,res) =>{
    res.send('hola')
});


module.exports = router;
