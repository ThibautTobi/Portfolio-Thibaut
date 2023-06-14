import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css'
import sun from "../IMAGES/icone_light.svg";
import night from "../IMAGES/icone_nightlight.svg";
import useThemeClass from '../COMPONENTS/Theme';

function NavBar (){
    const { theme, toggleTheme } = useThemeClass();
    const [showLinks ,setShowLinks] = useState(false);

    function handleShow (){
        setShowLinks(!showLinks)
    };

    return(

        <nav className={`navbar ${ showLinks ? 'show_nav' : 'hide_nav'}`}>
            <div className="navbar_logo"></div>
            <ul className="navbar_links">
                <li className="navbar_item">
                    <Link to='#present' reloadDocument className="navbar_link">Présentation</Link>
                </li>
                <li className="navbar_item">
                    <Link to='#formation' reloadDocument className="navbar_link">Formation</Link>
                </li>
                <li className="navbar_item">
                    <Link to='#competence' reloadDocument className="navbar_link">Compétences</Link>
                </li>
                <li className="navbar_item">
                    <Link to='#projet' reloadDocument className="navbar_link">Projets</Link>
                </li>
                <li className="navbar_item">
                    <Link to='#experience' reloadDocument className="navbar_link">Expérience</Link>
                </li>
                <li className="navbar_item">
                    <Link to='#contact' reloadDocument className="navbar_link">Contacts</Link>
                </li>
                <button className='mode_button' onClick={toggleTheme}>
                    <img className='mode_button_img' src={theme === 'light-theme' ? night : sun } alt='mode_theme'></img>
                </button>
            </ul>
            <button className="navbar_burger" onClick={handleShow}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}
export default NavBar;