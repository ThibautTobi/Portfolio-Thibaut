import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import '../CSS/Collapse.css';

function MultipleCollapses() {
  const [collapseData, setCollapseData] = useState([
    { id: 1,
      title: 'Mes Compétences en Front-End',
      content:[
        '- intégration web avec html et css.',
        '- intégration web avec Sass.',
        '- intégrer du contenu conformément à une maquette.',
        '- implémenter une interface responsive.',
        '- utilisation de Fontawesome.',
        '- utilisation de Materiel UI.',
        '- suivre le déroulement du projet grâce à un outil de gestion de projet (trello).',
        '- rédiger les spécifications techniques d\'un projet web à partir des besoins fonctionnels.',
        '- découper une fonctionnalité en tâches pour préparer le développement.',
        '- présenter la solution technique.',
        '- mettre en place une méthode de veille technologique.',
        '- versionner son projet avec git et github.',
        '- installer un environnement de développement front-end.',
        '- optimiser les performances d\'un site web.',
        '- débugger un site web grâce aux chrome devtools.',
        '- optimiser l\'accessibilité avec wave evaluation tool.',
        '- rédiger un cahier de recette pour tester un site.',
        '- développement web avec JavaScript:',
        '- récupérer les données utilisateurs dans le JavaScript via des formulaires.',
        '- manipuler les éléments du DOM avec JavaScript.',
        '- gérer les événements utilisateurs avec JavaScript.',
        '- configurer la navigation entre les pages de l\'application avec react router.',
        '- initialiser une application avec create react app.',
        '- développer des éléments de l\'interface d\'un site web grâce à des composants react.',
      ],
      isOpen: false },
    { id: 2,
      title: 'Mes Compétences en Back-End',
      content:[
        '- installer un environnement de développement back-end.', 
        '- implémenter un modèle logique de données conformément à la réglementation.',
        '- mettre en oeuvre des opérations CRUD de manière sécurisée.',
        '- stocker des données de manière sécurisée.',
        '- utilisation d\'une base de donnée.', 
    ],
      isOpen: false }
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
          <button className='button_color' onClick={() => handleToggleCollapse(item.id)}>
            {item.title}
          </button>
          <Collapse in={item.isOpen}>
            <ul className='display_li'>
                {item.content.map((el) => (
                  <li key={el}>{el}</li>
                ))}
            </ul>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
export default MultipleCollapses;