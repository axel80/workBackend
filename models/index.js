var Sequelize = require('sequelize');
var sequelize = new Sequelize('gift_card_db', 'admin', 'admin', {
    host: 'localhost',
    dialect:  'postgres'
  });


const db = {
  GiftCard: sequelize.import('./GiftCard'),
  GiftCardDetails: sequelize.import('./GiftCardDetails')
}

Object.keys(db).forEach((modelName) =>{
  if('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

  

  db.sequelize = sequelize;
  module.exports = db;