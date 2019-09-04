// requerir express
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// conexion a la base de datos
mongoose
  .connect('mongodb://localhost/estanbienpodridos', { useNewUrlParser: true })
  .then(() => console.log('Connected to the DB'))
  .catch((err) => console.log(err));

// crear servidor
const app = express();

// configuramos los archivos estaticos
app.use(express.static('public'));

// configuramos el view engine y los views
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use('/', require('./routes/index.js'));

// levantamos el servidor
app.listen(process.env.PORT, () => {
  console.log(`Running on http://localhost:${process.env.PORT}`);
});
