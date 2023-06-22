import booki from '../IMAGES/projet_Booki.webp';
import sophie from '../IMAGES/projet_Sophie_Bluel.webp';
import qwenta from '../IMAGES/projet_qwenta.webp';
import nina from '../IMAGES/projet_Nina_Carducci.webp';
import kasa from '../IMAGES/projet_Kasa.webp';
import grimoire from '../IMAGES/projet_Grimoire.webp';

const data = [
    {
    id : 1,
    name : 'Booki',
    image : booki,
    lien : 'https://github.com/ThibautTobi/Projet_2.git',
    langage : ['HTML', 'CSS'] ,
    description : `Projet OpenClassrooms : Créez la page d'accueil d'une agence de voyage Booki avec HTML & CSS,
    la page est en responsive pour écran d'ordinateur,tablette,mobile.`
    },
    {
    id : 2,
    name : 'Sophie Bluel',
    image : sophie,
    lien : 'https://github.com/ThibautTobi/Projet_3_Portfolio-architecte-sophie-bluel.git',
    langage : ['HTML', 'CSS', 'JavaScript'] ,
    description : `Projet OpenClassrooms : Créez une page web dynamique pour le portfolio de Sophie Bluel avec JavaScript.`,
    },
    {
    id : 3,
    name : 'Qwenta',
    image : qwenta,
    lien : 'https://github.com/ThibautTobi?tab=repositories',
    langage : ['Gestion de Projet'] ,
    description : `Projet OpenClassrooms : Planifiez le développement du site de votre client Qwenta.`,
    },
    {
    id : 4,
    name : 'Nina Carducci',
    image : nina,
    lien : 'https://github.com/ThibautTobi/P5_Nina_Carducci.git',
    langage : ['HTML', 'CSS' ,'JavaScript'] ,
    description : `Projet OpenClassrooms : Débuggez et optimisez un site de photographe Nina Carducci.`,
    },
    {
    id : 5,
    name : 'Kasa',
    image : kasa,
    lien : 'https://github.com/ThibautTobi/P6_Site_Kasa_Location_immobiliere.git',
    langage : ['HTML', 'CSS', 'JavaScript' ,'React'] ,
    description : `Projet OpenClassrooms : Créez une application web de location immobilière pour le client Kasa avec React.`,
    },
    {
    id : 6,
    name : 'Mon Vieux Grimoire',
    image : grimoire,
    lien : 'https://github.com/ThibautTobi/P7-Back-End-Mon-Vieux-Grimoire.git',
    langage : ['Node Js', 'Express','mongoose','Mongo DB'] ,
    description : `Projet OpenClassrooms : Développez le back-end d'un site Mon Vieux Grimoire de notation de livres.`,
    },
];

export default data;