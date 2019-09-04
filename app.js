// requerir express
require('dotenv').config();
const express = require('express');

// crear servidor
const app = express();

// configuramos los archivos estaticos
app.use(express.static('public'));

// configuramos el view engine y los views
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
  res.render('index');
});

// levantamos el servidor
app.listen(process.env.PORT, () => {
  console.log(`Running on http://localhost:${process.env.PORT}`);
});
