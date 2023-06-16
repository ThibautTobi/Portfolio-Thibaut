const express = require('express');
const mongoose = require('mongoose');

/** plugin  contre les attaques d'injection de code malveillant dans les requêtes MongoDB **/
// const mongoSanitize = require('mongo-sanitize');

/*** utilisation.env cache donné sensible */
require('dotenv').config();

/**** import de mes différentes routes ****/
const projets_Routes = require('./routes/projets_Routes');
const formulaires_Routes = require('./routes/formulaires_Routes');

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

/** utilisation du plugin mongo sanitize**/
// app.use((req, res, next) => {
//   // Nettoie les valeurs des paramètres de requête
//   req.body = mongoSanitize(req.body);
//   req.query = mongoSanitize(req.query);
//   next();
// });


/**** dispatch routage *****/
app.use(projets_Routes);
app.use(formulaires_Routes);

module.exports = app;


/**
 
// Route pour récupérer tous les projets
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour créer un nouveau projet
app.post('/projects', async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = new Project({ name, description });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
**/