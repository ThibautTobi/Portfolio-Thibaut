import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import '../CSS/Collapse.css';

function MultipleCollapses() {
  const [collapseData, setCollapseData] = useState([
    { id: 1,
      title: 'Mes Compétences en Front-End',
      content: `intégration web avec html et css,\n
      intégrer du contenu conformément à une maquette,\n
      implémenter une interface responsive,\n
      Voir sur le projet 2 du cursus,\n
      gestion de projet et outils developpeurs :\n
      suivre le déroulement du projet grâce à un outil de gestion de projet (trello),\n
      rédiger les spécifications techniques d'un projet web à partir des besoins fonctionnels,\n
      découper une fonctionnalités en tâches pour préparer le développement,\n
      présenter la solution technique,\n
      mettre en place une méthode de veille technologique,\n
      versionner son projet avec git et github,\n
      installer un environnement de développement front-end,\n
      
      optimisation et bug:\n
      optimiser les performances d'un site web,\n
      débugger un site web grâce aux chrome devtools,\n
      rédiger un cahier de recette pour tester un site,\n
      Voir Projet 5,\n
      
      
      JavaScript:\n
      developpement web avec javascript:\n
      récupérer les donnés utilisateurs dans le javascript via des formulaires,\n
      manipuler les éléments du DOM avec JavScript,\n
      gérer les événements utilisateurs avec JavaScript,\n
      
      
      framework javascript : react,\n
      
      configurer la navigation entre les pages de l'application avec react router,\n
      initialiser une application avec create react app,\n
      developper des éléments de l'interface d'un site web grâce à des composants react,\n
      projet 6`,
      isOpen: false },
    { id: 2,
      title: 'Mes Compétences en Back-End',
      content: `implémenter un modéle logique de données conformément à la réglementation,\n
      mettre en oeuvre des opérations CRUD de maniére sécurisée,\n
      stocker des données de maniére sécurisée,\n
      projet 7`,
      isOpen: false },
    { id: 3,
      title: 'Autre',
      content: ``,
      isOpen: false },
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