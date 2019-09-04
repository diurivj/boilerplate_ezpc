const mongoose = require('mongoose');
const Campus = require('../models/Campus');

const campuses = [
  {
    name: 'Ironhack Mexico',
    teachers: ['Jossesin', 'Ye']
  },
  {
    name: 'Ironhack Lisbon',
    teachers: ['Maxcence']
  },
  {
    name: 'Ironhack Madrid',
    teachers: ['German', 'Dani Vicario'],
    course: 'WEB'
  }
];

mongoose
  .connect('mongodb://localhost/estanbienpodridos', { useNewUrlParser: true })
  .then(() => {
    Campus.create(campuses)
      .then((docs) => {
        console.log(`${docs.length} campuses created 🤠`);
        mongoose.connection.close();
      })
      .catch((error) => {
        console.log(error);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.log(err);
  });
