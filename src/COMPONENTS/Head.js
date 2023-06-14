// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import sun from "../IMAGES/icone_light.svg";
// import night from "../IMAGES/icone_nightlight.svg";
import "../CSS/Header.css";
// import useThemeClass from '../COMPONENTS/Theme';
// import MobileMenu from '../COMPONENTS/Nav';
//import Nav from '../COMPONENTS/Nav';

import NavBar from '../COMPONENTS/NavBar';

function Header (){
  // const { theme, toggleTheme } = useThemeClass();
  // const [isMenuOpen, setMenuOpen] = useState(false);


  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  // const closeMenu = () => {
  //   setMenuOpen(false);
  // };

  return (
    <header>
      <NavBar />
      {/* <Nav/> */}
      {/* <nav className={`banner_nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to='#present' reloadDocument>Présentation</Link>
        <Link to='#formation' reloadDocument>Formation</Link>
        <Link to='#competence' reloadDocument>Compétences</Link>
        <Link to='#projet' reloadDocument>Projets</Link>
        <Link to='#experience' reloadDocument>Expérience</Link>
        <Link to='#contact' reloadDocument>Contacts</Link>
        <button className='mode_button' onClick={toggleTheme}>
          <img className='mode_button_img' src={theme === 'light-theme' ? night : sun } alt='mode_theme'></img>
        </button>
        <div className="mobile_menu_button" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </nav>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} /> */}
    </header>
  );
}

export default Header;
