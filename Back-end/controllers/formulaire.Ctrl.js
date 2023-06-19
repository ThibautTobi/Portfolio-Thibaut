const validator = require('validator');
const nodemailer = require('nodemailer');
// Charge les variables d'environnement
require('dotenv').config();

exports.addFormulaire = (req, res) => {
  // Vérification de l'e-mail
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({ error: 'Adresse e-mail invalide' });
  }
  
  // Validation de la longueur maximale du champ nom et faire pour les autres
    // if (!validator.isLength(req.body.name, { max: 50 })) {
    //     return res.status(400).json({ error: 'Le champ nom dépasse la longueur maximale autorisée' });
    //   }

  // Configuration du transporter Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: `${process.env.email}`,
      pass: `${process.env.pass}`
    }
  });

  // Options de l'e-mail
  const mailOptions = {
    from: `${req.body.email}`,
    to: `${process.env.email}`, // Adresse e-mail de destination
    subject: `${req.body.sujet}`,
    text: `Nom: ${req.body.name}\nPrénom: ${req.body.prenom}\nMessage: ${req.body.message}`
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de l\'envoi du formulaire par e-mail' });
    } else {
      console.log('Formulaire envoyé par e-mail:', info.response);
      res.status(201).json({ message: 'Formulaire créé avec succès et envoyé par e-mail' });
    }
  });
};


/************* avec sauvegarde base de donnés  **************/
/*
const formulaireSchema = require('../models/formulaire.model');
const validator = require('validator');
const nodemailer = require('nodemailer');

exports.addFormulaire = (req, res) => {
  // Vérification de l'e-mail
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({ error: 'Adresse e-mail invalide' });
  }

  // Création d'un nouvel objet formulaire en utilisant le modèle formulaireSchema
  const nouveauFormulaire = new formulaireSchema({
    name: req.body.name,
    prenom: req.body.prenom,
    email: req.body.email,
    message: req.body.message
  });

  // Sauvegarde du formulaire dans la base de données
  nouveauFormulaire.save()
    .then(() => {
      // Envoi du formulaire par e-mail
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'votre_adresse_email@gmail.com',
          pass: 'votre_mot_de_passe'
        }
      });

      const mailOptions = {
        from: 'votre_adresse_email@gmail.com',
        to: 'thibaut.developpement.pro@gmail.com', // Adresse e-mail de destination
        subject: 'Nouveau formulaire de contact',
        text: `Nom: ${req.body.name}\nPrénom: ${req.body.prenom}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: 'Erreur lors de l\'envoi du formulaire par e-mail' });
        } else {
          console.log('Formulaire envoyé par e-mail:', info.response);
          res.status(201).json({ message: 'Formulaire créé avec succès et envoyé par e-mail' });
        }
      });
    })
    .catch((error) => {
      // Gestion des erreurs
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la création du formulaire' });
    });
};

*/