const mongoose = require('mongoose');

const projetShema = mongoose.Schema(
{
title           :   {type:String , required:true},
imageUrl        :   {type:String , required:true},
lien            :   {type:String , required:true},
langages         :   
    [{
        langage  : {type:String , required:true}
    }],
description   : {type:String , required:true},
});

module.exports = mongoose.model('projets', projetShema);