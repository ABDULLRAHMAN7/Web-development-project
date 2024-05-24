const db = require('../config/database')
const Recipe = require('../models/Recipe')

let newRecipe = [

    new Recipe({
        image: 'kabsa',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'Dammam',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Recipe({
        image: 'kabsa2',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'Jeddah',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Recipe({
        image: 'kabsa3',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'Riyadh',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Recipe({
        image: 'kabsa4',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'aflaj',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Recipe({
        image: 'kabsa5',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'qasim',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Recipe({
        image: 'kabsa6',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'hariq',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Recipe({
        image: 'kabsa7',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'mufaijer',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Recipe({
        image: 'kabsa8',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'baha',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Recipe({
        image: 'kabsa9',
        description:'kabsa laoo ;eopwk lsaij loajs ,edk ,dksn',
        location: 'magmaah',
        date: Date.now(),
        created_at: Date.now()
    }),
]

newRecipe.forEach((recipe) => {
    recipe.save()
      .then(() => {
        console.log('Record was added successfully');
      })
      .catch((err) => {
        console.error('Error saving record:', err);
      });
  });

//let newRecipe = new Recipe({
//    image: 'this is image1',
//    description: 'this is kabsa recipe',
//    location:'Saudi arabia',
//    date: new Date(),
//});

//newRecipe.save()
//.then(() => {
//    console.log('Record was added successfully');
//})
//.catch((err) => {
//    console.error('Error saving record:', err);
//});