import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css'

function NavBar (){
    
    const [showLinks ,setShowLinks] = useState(false);

    function handleShow (){
        setShowLinks(!showLinks)
    };

    return(
        <nav className={`navbar ${ showLinks ? 'show_nav' : 'hide_nav'}`}>
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
                    <Link to='#contact' reloadDocument className="navbar_link">Contacts</Link>
                </li>
            </ul>
            <button className="navbar_burger" aria-label="menu" onClick={handleShow}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}
export default NavBar;