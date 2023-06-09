/** style effets de défillement parallax **/
//import parallax from 'react-scroll-parallax'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/Main.css';
import mongo from '../IMAGES/icone_mongodb.svg';
//import Projet from '../COMPONENTS/ProjetsMasonry';
// import code from '../IMAGES/icone_code.svg';
// import nocode from '../IMAGES/icone_code_off.svg';
import ContactForm from '../COMPONENTS/ContactForm';
import Banner from '../COMPONENTS/Banner';
// import presentation from '../IMAGES/icone_iframe.svg';
// import code from '../IMAGES/icone_code_blocks.svg';
import Collapses from '../COMPONENTS/Collapse';
import Carousel from '../COMPONENTS/Carrousel';

function Home (){

 function Presentation (){

    return (
        <section id='present'>
            <article className="present_article">
                <div className='display_h1'>
                    {/* <img src={code} alt='code' className='present_icone'/> */}
                    <h1 className="present_h1">Denis Thibaut Développeur Web Full Stack</h1>
                    {/* <img src={nocode} alt='nocode' className='present_icone'/> */}
                </div>
                <Banner/>
                {/* <h2 className="present_h2">Présentation</h2>  */}
                <p className="present_p">
                    Je me Présente je suis Thibaut Développeur Full stack JavaScript, A FINIR
                </p>
            </article>
        </section>
    )
 }

 function Formation (){

    return(
        <section id='formation'>
            <article className="formation_article">
                <h2 className="formation_h2">Formation</h2> 
                <p className="formation_p">
                    Développeur Web Chez Openclassrooms , Session 2022-2023.
                </p>
            </article>
        </section>
    )
}

 function Compétences (){

    return(
        <section id='competence'>
            <article>
                {/* <img src={code} alt='logo_langage_programmation' className='icone'></img> */}
                <h2 className="competence_h2">Compétences</h2>
                <div className="competence_display">
                    <div className='competence_front'>
                        <h3>Font-End</h3> 
                        <ul className="competence_li_front">
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-html5" className='icone'/>
                                <p>HTML</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-css3-alt" className='icone'/>
                                <p>CSS</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-js" className='icone'/>
                                <p>JavaScript</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-react" className='icone'/>
                                <p>React</p>
                            </li>
                            {/* <li>
                                <FontAwesomeIcon icon="fa-brands fa-sass" className='icone'/>
                                <p>Sass</p>
                            </li> */}
                            {/* <li>
                                <FontAwesomeIcon icon="fa-brands fa-bootstrap" className='icone'/>
                                <p>BootStrap</p>
                            </li> */}
                        </ul>
                    </div>
                    <div className='competence_back'>
                        <h3>Back-End</h3>
                        <ul className="competence_p_back">
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-node-js" className='icone'/>
                                <p>Node js</p>
                            </li>
                            {/* <li>
                                <FontAwesomeIcon icon="fa-brands fa-js" className='icone'/>
                                <p>JavaScript</p>
                            </li> */}
                        </ul>
                    </div>
                    <div className='competence_base'>
                        <h3>Base de donnés</h3>
                        <ul>
                            <li>
                                {/* <img width="48" height="48" className='competence_icone + white'src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo"/>    */}
                                <img src={mongo} alt='MongoDb' className='icone'></img>
                                {/* <FontAwesomeIcon icon="fa-brands fa-mdb" className='icone'/> */}
                                <p>MongoDb</p>
                            </li>
                        </ul>
                    </div>

                    <div className='competence_outils'>
                        <h3>Outils</h3>
                        <ul className="competence_p_outils">
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-figma" className='icone'/>
                                <p>Figma</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-trello" className='icone'/>
                                <p>Trello</p>
                            </li>
                            {/* <li> en cours
                                <FontAwesomeIcon icon="fa-brands fa-sass" className='icone'/>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className='collapse_display'>
                    <h3>Savoir Faire</h3>
                    <ul>
                        <li>
                            <Collapses />
                        </li>
                    </ul>
                </div> 
            </article>
        </section>
    )
}

function Projets (){

    return(
        <section id='projet'>
            <article className="competence_article">
            <h2 className="projet_h2">Projets</h2>
            {/* <Projet/> */}
            <Carousel/>
            </article>
        </section>
    )
}

// function Experience (){

//     return(
//         <section id='experience'>
//             <article className="competence_article">
//                 <h2 className="experience_h2">Expériences</h2> 
//                 <p className="competence_p">
                    
//                 </p>
//             </article>
//         </section>
//     )
// }

function Contacts (){

    return(
        <section id='contact'>
            <article className="competence_article">
                <div className='enveloppe'>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className='icone'/>
                </div>
                <h2 className="contacts_h2">Contacts</h2> 
                <ContactForm/>
            </article>
        </section>
    )
}

return  (
<div className="containeur">
    <Presentation />
    <Formation />
    <Compétences />
    <Projets />
    {/* <Experience /> */}
    <Contacts />
</div>
)
};

export default Home ;

/*
Mes Compétences en Front-End

HTML - CSS : 

intégration web avec html et css ,
intégrer du contenu conformément à une maquette,
implémenter une interface responsive,
Voir sur le projet 2 du cursus

gestion de projet et outils developpeurs :
suivre le déroulement du projet grâce à un outil de gestion de projet (trello),
rédiger les spécifications techniques d'un projet web à partir des besoins fonctionnels,
découper une fonctionnalités en tâches pour préparer le développement,
présenter la solution technique,
mettre en place une méthode de veille technologique,
versionner son projet avec git et github,
installer un environnement de développement front-end

optimisation et bug: 
optimiser les performances d'un site web,
débugger un site web grâce aux chrome devtools
rédiger un cahier de recette pour tester un site
Voir Projet 5


JavaScript
developpement web avec javascript :
récupérer les donnés utilisateurs dans le javascript via des formulaires,
manipuler les éléments du DOM avec JavScript
gérer les événements utilisateurs avec JavaScript


framework javascript : react

configurer la navigation entre les pages de l'application avec react router,
initialiser une application avec create react app,
developper des éléments de l'interface d'un site web grâce à des composants react
projet 6



Mes Compétences en Back-End

implémenter un modéle logique de données conformément à la réglementation
mettre en oeuvre des opérations CRUD de maniére sécurisée
stocker des données de maniére sécurisée
projet 7

pubication d'un site web
déployer un site statique en ligne
projet 8

*/