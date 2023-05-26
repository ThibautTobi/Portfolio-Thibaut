import { Link } from 'react-router-dom';
//import logo from "../IMG/LOGO.svg"
import "./CSS/Header.css";

// menu hamburger responsive

function Header (){

    return (
            <header>
                {/* <img src={logo} className='logo-maison' alt='logo-maison'></img> */}
                <nav className="banner_nav">
                  <Link to="/présentation" className={({ isActive }) => isActive ? "active" : undefined }>présentation</Link>
                  <Link to="/Formation" className={({ isActive }) => isActive ? "active" : undefined } >Formation</Link>
                  <Link to="/Compétences" className={({ isActive }) => isActive ? "active" : undefined } >Compétences</Link>
                  <Link to="/Projets" className={({ isActive }) => isActive ? "active" : undefined } >Projets</Link>
                  <Link to="/Contacts" className={({ isActive }) => isActive ? "active" : undefined } >Contacts</Link>
                  {/* icone mode jour et nuit a inséré  */}
                </nav>    
            </header>
            )
};
export default Header;