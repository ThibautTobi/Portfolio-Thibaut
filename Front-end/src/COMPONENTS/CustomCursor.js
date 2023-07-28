// import React, { useState, useEffect } from 'react';
// import '../CSS/customCursor.css';

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [showCursor, setShowCursor] = useState(true);

//   useEffect(() => {
//     // Fonction de mise à jour de la position du curseur en fonction des mouvements de la souris
//     const updatePosition = (e) => {
//       setPosition({ x: e.clientX - 19, y: e.clientY - 19 });
//     };

//     // Ajout de l'écouteur d'événement 'mousemove' lors du montage du composant
//     window.addEventListener('mousemove', updatePosition);

//     // Écoute l'événement 'mousedown' sur la barre de défilement
//     const handleScrollbarClick = () => {
//       setShowCursor(false); // Masque le curseur lorsque l'utilisateur clique sur la barre de défilement
//     };

//     // Écoute l'événement 'mouseup' pour détecter lorsque l'utilisateur arrête d'utiliser la barre de défilement
//     const handleScrollbarRelease = () => {
//       setShowCursor(true); // Réaffiche le curseur lorsque l'utilisateur arrête d'utiliser la barre de défilement
//     };

//     // Ajout des écouteurs d'événements
//     document.documentElement.addEventListener('mousedown', handleScrollbarClick);
//     document.documentElement.addEventListener('mouseup', handleScrollbarRelease);

//     // Suppression des écouteurs d'événements lors du démontage du composant
//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       document.documentElement.removeEventListener('mousedown', handleScrollbarClick);
//       document.documentElement.removeEventListener('mouseup', handleScrollbarRelease);
//     };
//   }, []);

//   const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

//   if (isTouchDevice || !showCursor) {
//     // Si l'appareil prend en charge les interactions tactiles ou que le curseur est masqué, ne pas afficher le curseur personnalisé
//     return null;
//   }

//   return (
//     <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
//       <div className="cursor-inner"></div>
//     </div>
//   );
// };

// export default CustomCursor;

import React, { useState, useEffect } from 'react';
import '../CSS/customCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);
  const [scrollbarClicked, setScrollbarClicked] = useState(false);

  useEffect(() => {
    // Fonction de mise à jour de la position du curseur en fonction des mouvements de la souris
    const updatePosition = (e) => {
      setPosition({ x: e.clientX - 19, y: e.clientY - 19 });
    };

    // Ajout de l'écouteur d'événement 'mousemove' lors du montage du composant
    window.addEventListener('mousemove', updatePosition);

    // Écoute l'événement 'mousedown' sur la barre de défilement
    const handleScrollbarClick = () => {
      setScrollbarClicked(true);
      setShowCursor(false); // Masque le curseur lorsque l'utilisateur clique sur la barre de défilement
    };

    // Écoute l'événement 'mouseup' pour détecter lorsque l'utilisateur arrête d'utiliser la barre de défilement
    const handleScrollbarRelease = () => {
      setScrollbarClicked(false);
      setShowCursor(true); // Réaffiche le curseur lorsque l'utilisateur arrête d'utiliser la barre de défilement
    };

    // Ajout des écouteurs d'événements
    document.documentElement.addEventListener('mousedown', handleScrollbarClick);
    document.documentElement.addEventListener('mouseup', handleScrollbarRelease);

    // Suppression des écouteurs d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.documentElement.removeEventListener('mousedown', handleScrollbarClick);
      document.documentElement.removeEventListener('mouseup', handleScrollbarRelease);
    };
  }, []);

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  if (isTouchDevice || !showCursor || scrollbarClicked) {
    // Si l'appareil prend en charge les interactions tactiles, que le curseur est masqué ou que la barre de défilement est utilisée, ne pas afficher le curseur personnalisé
    return null;
  }

  return (
    <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <div className="cursor-inner"></div>
    </div>
  );
};

export default CustomCursor;
