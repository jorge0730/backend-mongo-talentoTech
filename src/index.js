
const express = require('express');
const cors = require('cors');
const app = express();



// enlazar servidor con bd
const conexionBd = require('../config/db')
conexionBd();
app.use(cors());

// conexión con las rutas 
app.use(express.json());
app.use('/api', require('../routes/routes'));

// configurar servidor, process.env.PORT sirve para tomar el puerto que asignen ya en producción
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor conectado por el puerto ${port}`);
});

//ruta para validar conexión del servidor desde postman
app.get('/info', (req,res) => {
    res.send('Si existe conexión con el servidor');
});
