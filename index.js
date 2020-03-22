const expresso = require('express')
const aplicacion = expresso()
const puerto = 7778

aplicacion.get('/', (req, res) => res.send('Frase de prueba batch 3'))

aplicacion.listen(puerto, () => console.log(`Estamos empezando a escucharte querido, o sea habla my friend ${puerto}!`))

