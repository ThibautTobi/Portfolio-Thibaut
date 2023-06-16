const projetShema = require('../models/projet.model');

/*********** renvoie un tableau de tous les livres de la base de donnés *********/
exports.allProjets = (req, res ,next) => {                                
    projetShema.find()
      .then(books => res.status(200).json(books) )
      .catch(error => res.status(404).json({ error }));
};                                                             