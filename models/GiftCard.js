module.exports = (sequelize, DataTypes)=>{
// Model Giftcards
const GiftCards = sequelize.define('gift_cards', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,

    },
    name:{
        type:DataTypes.STRING(200),
        allowNull:false
        
    },
    number:{
        type:DataTypes.STRING(10),
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    birth_day:{
      type:DataTypes.DATE,
      allowNull:false
    },
    profession:{
    type:DataTypes.STRING(150),
      allowNull:false
    },
    valid_to:{
      type:DataTypes.DATE,
      allowNull:false
    },
    amount:{
      type:DataTypes.DECIMAL,
      allowNull:false
    },
    bonus:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    change_amount:{
      type:DataTypes.DECIMAL,
      allowNull:false
    },
    change_bonus:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },


    //Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE, 

   

});
  GiftCards.associate = (models) =>{
    // 1 a muchos con gift_card_details
    GiftCards.hasMany(models.GiftCardDetails,{
      foreignKey: 'gift_card_id'
    })
  };
    return GiftCards;
 };

 function giftCards(){}
 