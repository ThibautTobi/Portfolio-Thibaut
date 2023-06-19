const fs = require('fs');

// Obtenez la chaîne base64 de l'image depuis votre base de données ou d'une autre source
const base64Image = "data:image/png;base64,iVBORw0KG..."; // Votre chaîne base64

// Supprimez le préfixe de la chaîne base64 (par exemple, "data:image/png;base64,")
const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');

// Convertissez la chaîne base64 en un buffer binaire
const imageBuffer = Buffer.from(base64Data, 'base64');

// Définissez le chemin et le nom du fichier de sortie
const imagePath = 'chemin/vers/mon/image.png';

// Écrivez le contenu du buffer binaire dans le fichier
fs.writeFileSync(imagePath, imageBuffer);
