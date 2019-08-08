'use strict'
var db = require('../models');
var giftCards = require('../models/GiftCard');
var giftCardDetails = require('../models/GiftCardDetails');


var controller = {
    home:function(req, res){

        return res.status(200).send({
            message:'WELCOME TO HOME',
        })
    },

    test:function(req, res){
        return res.status(200).send({
            message:'WELCOME TO HOME DEL TEST',
        })
    },

    store:function(req, res){
       
        var edad = ageCalculator(req.body.birth_day);
        var numberCard = Math.floor((Math.random() * 10000) + 1);
        var amount = (req.body.amount == null)?1500:req.body.amount;
        var myBono = 0;
        var profession ='';

        if(edad > 64){
            profession = 'anciano';
            myBono = 15;
        }else if(edad > 7 && edad < 18){
            profession = 'estudiante'
            myBono = 15;
        }else{
            profession = 'persona';
            myBono=0;
        }

  

         db.GiftCard.create(
                {
                    name: req.body.name,
                    number:numberCard,
                    age: edad,
                    birth_day:req.body.birth_day,
                    profession: profession,
                    valid_to: req.body.valid_to,
                    amount: amount,
                    bonus:myBono,
                    change_amount: 0,
                    change_bonus:0,
                    createdAt: req.body.createdAt,
                    updatedAt: req.body.updatedAt


                }
            ).then(function(){
             return res.status(200).send({
                message:'Saved data'
             });    
         });

       
        
    },

    getGiftCardEdit:function(req, res){
        var id = req.params.id;        
        if(id == null) return res.status(400).send({message:'La tarjeta no existe'})

        db.GiftCard.findAll({
            where:{
                id:id
            }
        }).then((giftCards)=>{
            
            if(!giftCards) return res.status(400).send({message:'La tarjeta no existe'});
            return  res.status(200).send(giftCards);
        });
    },

    CardList:function(req, res){
        db.GiftCard.findAll().then((cards)=>{
            res.send(cards);
        });         
    },

    

};



function ageCalculator(fullDate){
     
       var hoy=new Date() 
        var array_fecha = fullDate.split("-") 
        if (array_fecha.length!=3) 
        return false 
        var ano 
        ano = parseInt(array_fecha[0]); 
        if (isNaN(ano)) 
        return false 
        var mes 
        mes = parseInt(array_fecha[1]); 
        if (isNaN(mes)) 
        return false 
        var dia 
        dia = parseInt(array_fecha[2]);	
        if (isNaN(dia)) 
        return false 
        if (ano<=99) 
        ano +=1900 
        var edad=hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año 

        //si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido 
        if (hoy.getMonth() + 1 - mes < 0) //+ 1 porque los meses empiezan en 0 
        return edad 
        if (hoy.getMonth() + 1 - mes > 0) 
        return edad+1 
        //entonces es que eran iguales. miro los dias 
        //si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido 
        if (hoy.getUTCDate() - dia >= 0) 
       return edad + 1 
      
       return edad 


}

module.exports = controller;