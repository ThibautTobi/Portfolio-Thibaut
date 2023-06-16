const express = require ('express');
const formulaireCtrl = require('../controllers/formulaire.Ctrl');

const router = express.Router();

router.post('/api/portfolio', formulaireCtrl.addFormulaire);

module.exports = router;