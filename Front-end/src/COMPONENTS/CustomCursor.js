import React, { useState, useEffect } from 'react';
import '../CSS/customCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Fonction de mise à jour de la position du curseur en fonction des mouvements de la souris
    const updatePosition = (e) => {
      setPosition({ x: e.clientX-19, y: e.clientY-19 });
    };

    // Ajout de l'écouteur d'événement 'mousemove' lors du montage du composant
    window.addEventListener('mousemove', updatePosition);

    // Suppression de l'écouteur d'événement 'mousemove' lors du démontage du composant
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        {/* -20px ou 30 px pour center le pointer  */}
      <div className="cursor-inner"></div>
    </div>
  );
};

export default CustomCursor;

// import React, { useState, useEffect } from 'react';
// import '../CSS/customCursor.css';

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);

//   useEffect(() => {
//     const updatePosition = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => {
//       setClicked(true);
//     };

//     const handleMouseUp = () => {
//       setClicked(false);
//     };

//     window.addEventListener('mousemove', updatePosition);
//     window.addEventListener('mousedown', handleMouseDown);
//     window.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, []);

//   return (
//     <div className={`custom-cursor ${clicked ? 'clicked' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
//       <div className="cursor-inner"></div>
//     </div>
//   );
// };

// export default CustomCursor;
