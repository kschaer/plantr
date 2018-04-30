//const db = require('./models');
const {db, Gardener, Vegetable, Plot} = require('./models');

// db.sync({ force: true })
//   .then(() => {
//     db.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });



  db.sync({ force: true })
  .then(() => {
    return Vegetable.create({
      name: 'Bob',
      color: 'Orange',
      planted_on: new Date(Date.now())
    });
  })
  .then(() => {
    db.close();
  })
  .catch(err => {
    console.log(err);
  });
