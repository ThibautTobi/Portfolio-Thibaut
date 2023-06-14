import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import '../CSS/Collapse.css';

function MultipleCollapses() {
  const [collapseData, setCollapseData] = useState([
    { id: 1,
      title: 'Mes Compétences en Front-End',
      content: `intégration web avec html et css,
      intégrer du contenu conformément à une maquette,
      implémenter une interface responsive,
      Voir sur le projet 2 du cursus,
      gestion de projet et outils developpeurs :
      suivre le déroulement du projet grâce à un outil de gestion de projet (trello),
      rédiger les spécifications techniques d'un projet web à partir des besoins fonctionnels,
      découper une fonctionnalités en tâches pour préparer le développement,
      présenter la solution technique,
      mettre en place une méthode de veille technologique,
      versionner son projet avec git et github,
      installer un environnement de développement front-end,
      
      optimisation et bug:
      optimiser les performances d'un site web,
      débugger un site web grâce aux chrome devtools,
      rédiger un cahier de recette pour tester un site,
      Voir Projet 5,
      
      
      JavaScript:
      developpement web avec javascript:
      récupérer les donnés utilisateurs dans le javascript via des formulaires,
      manipuler les éléments du DOM avec JavScript,
      gérer les événements utilisateurs avec JavaScript,
      
      
      framework javascript : react,
      
      configurer la navigation entre les pages de l'application avec react router,
      initialiser une application avec create react app,
      developper des éléments de l'interface d'un site web grâce à des composants react,
      projet 6`,
      isOpen: false },
    { id: 2,
      title: 'Mes Compétences en Back-End',
      content: `implémenter un modéle logique de données conformément à la réglementation,
      mettre en oeuvre des opérations CRUD de maniére sécurisée,
      stocker des données de maniére sécurisée,
      projet 7`,
      isOpen: false },
    // { id: 3,
    //   title: 'Autre',
    //   content: ``,
    //   isOpen: false },
  ]);

  const handleToggleCollapse = (id) => {
    setCollapseData((prevData) =>
      prevData.map((collapse) => {
        if (collapse.id === id) {
          return { ...collapse, isOpen: !collapse.isOpen };
        }
        return collapse;
      })
    );
  };

  return (
    <div className='container'>
      {collapseData.map((item) => (
        <div key={item.id}>
          <Button onClick={() => handleToggleCollapse(item.id)}>
            {item.title}
          </Button>
          <Collapse in={item.isOpen}>
            <div>{item.content}</div>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
export default MultipleCollapses;