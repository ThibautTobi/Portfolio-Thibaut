const express = require ('express');
const projetsCtrl = require('./controllers/projets.Ctrl');

const router = express.Router();

router.get('/api/portfolio', projetsCtrl.allProjets);

module.exports = router;