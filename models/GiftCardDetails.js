module.exports = (sequelize, DataTypes)=>{
    // Model Giftcards
    const GiftCardDetails = sequelize.define('gift_card_details', {
        id:{
          type:DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement:true,
    
        },
        amount_use:{
            type:DataTypes.DECIMAL,
            allowNull:false
            
        },         
    
        //Timestamps
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE, 
    
    });
        return GiftCardDetails;
     };
     
     function giftCardDetails(){}