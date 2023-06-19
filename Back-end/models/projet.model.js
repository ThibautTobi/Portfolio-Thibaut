const mongoose = require('mongoose');

const projetSchema = mongoose.Schema(
{
title           :   {type:String , required:true},
imageUrl        :   {type:String , required:true},
lien            :   {type:String , required:true},
langages         :   
    [{
        langage  : {type:String , required:true}
    }],
description   : {type:String , required:true},
},{ collection: 'projets' });

module.exports = mongoose.model('projets', projetSchema);
/*type:[Buffer] */