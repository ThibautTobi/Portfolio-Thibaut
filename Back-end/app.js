const express = require('express');
const mongoose = require('mongoose');

/*** utilisation.env cache donné sensible */
require('dotenv').config();

/**** import de mes différentes routes ****/
const projets_Routes = require('./routes/projets.Routes');
const formulaires_Routes = require('./routes/formulaires.Routes');

/** Création de l'application Express **/
const app = express();

/*********** connection mongo db ***********/
mongoose.connect(process.env.DB_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Middleware pour le parsing du corps des requêtes en JSON
app.use(express.json());

/******* ajout dans le header ******/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/**** dispatch routage *****/
app.use(projets_Routes);
app.use(formulaires_Routes);

module.exports = app;