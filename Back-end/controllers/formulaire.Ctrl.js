const formulaireShema = require('../models/formulaire.model');
const validator = require('validator');


// app.post('/projects', (req, res) => {
//   // Vérification de l'e-mail
//   if (!validator.isEmail(req.body.email)) {
//     return res.status(400).json({ error: 'Adresse e-mail invalide' });
//   }



//   // Réponse réussie
//   return res.status(201).json({ message: 'Formulaire créé avec succès' });
// });

/************* ajout du rating  **************/
// exports.addRatingBook = (req, res ,next) => {

    // const form = req.body;


    // formulaireShema.
    
    // findById(bookId)
    //     .then(book => {
    //     if (!book) {
    //         return res.status(404).json({ message: "Livre non trouvé" });
    //     }

//              book
//                 .save()
//                 .then(() => { res.status(201).json(book) })
//                 .catch(error => res.status(400).json({ error }));
//         })
//         .catch(error => { res.status(500).json({ error }) });
// };