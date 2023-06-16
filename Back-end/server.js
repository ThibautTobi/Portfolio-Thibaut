const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
server.on('error', (error) => {
  console.error(`Une erreur s'est produite lors du démarrage du serveur :`, error);
});
