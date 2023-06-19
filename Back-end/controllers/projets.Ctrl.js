const projets = require('../models/projet.model');

/*********** renvoie un tableau de tous les projets de la base de donnés *********/
exports.allProjets = (req, res ,next) => {                                
    projets.find()
          .then(projets => res.status(200).json(projets) )
          .catch(error => res.status(404).json({ error }));
};                                                             