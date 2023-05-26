/** style display masonry projets **/
//import Masonry from 'react-masonry-css'

/** style effets de défillement parallax **/
//import parallax from 'react-scroll-parallax'

import './CSS/Home.css';

function Home (){

 function Presentation (){


    return (
        <section className="present">
            <article className="present_article">
                <h1 className="present_h1">Denis Thibaut</h1>
                <h2 className="present_h2">Développeur Web Full Stack</h2> 
                <p className="present_p">

                </p>
            </article>
        </section>
    )
 }

 function Formation (){

    return(
        <section className="formation">
            <article className="formation_article">
                <h2 className="formation_h2">Développeur Web Full Stack</h2> 
                <p className="formation_p">
                    
                </p>
            </article>
        </section>
    )
}

 function Compétences (){

    return(
        <section className="competence">
            <article className="competence_article">
                <h2 className="competence_h2">Développeur Web Full Stack</h2> 
                <p className="competence_p">
                    
                </p>
            </article>
        </section>
    )
}

function Projets (){

    return(
        <section className="competence">
            <article className="competence_article">
                <h2 className="competence_h2">Développeur Web Full Stack</h2> 
                <p className="competence_p">
                    
                </p>
            </article>
        </section>
    )
}

function Contacts (){

    return(
        <section className="competence">
            <article className="competence_article">
                <h2 className="competence_h2">Développeur Web Full Stack</h2> 
                <p className="competence_p">
                    
                </p>
                {/* <form></form>npm install react-scroll-parallax */}
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
    <Contacts />
</div>
)
};

export default Home ;

/*
présentation :


formation :
Développeur Web avec openclassroom 2023

mes compétences de developpeur web :

front end

HTML - CSS : 

intégration web avec html et css ,
intégrer du contenu conformément à une maquette,
implémenter une interface responsive,
comme sur le projet 2 du cursus

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
projet 5


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

back end
implémenter un modéle logique de données conformément à la réglementation
mettre en oeuvre des opérations CRUD de maniére sécurisée
stocker des données de maniére sécurisée
projet 7

pubication d'un site web
déployer un site statique en ligne
projet 8

framework javascript : node js , express

base de donnés mongo db

full stack 

outils :

figma
postman
trello
git et github

*/