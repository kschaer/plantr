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
    const vegetable1 = Vegetable.create({
      name: 'Bob',
      color: 'Orange',
      planted_on: new Date(Date.now())
    });
    return vegetable1;
  })
  .then((vegetable1) => {
    const newPlot = Plot.create({
      size: 10,
      shaded: true
    });
    //in this scope there are two promises
    return Promise.all([vegetable1, newPlot]);
  })
  .then(([vegetable1, newPlot]) => {
    return vegetable1.setPlots([newPlot]);
  })
  .then(() => {
    db.close();
  })
  .catch(err => {
    db.close();
    console.log(err);
  });
