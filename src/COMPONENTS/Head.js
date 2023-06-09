import { Link } from 'react-router-dom';
import sun from "../IMAGES/icone_light.svg";
import night from "../IMAGES/icone_nightlight.svg";
import "../CSS/Header.css";
import useTheme from './Theme';
// menu hamburger responsive

function Header (){

  function ModeButton (){

    const { toggleTheme, isTheme } = useTheme();

    return (
      <button className='mode_button' onClick={toggleTheme}>
        <img className='mode_button_img' src={isTheme === sun ? night : sun } alt='mode_theme'></img>
      </button>
    )
  };

    return (
            <header>
                {/* <img src={logo} className='logo-maison' alt='logo-maison'></img> */}
                <nav className="banner_nav">
                  <Link to='#present' reloadDocument>Présentation</Link>
                  <Link to='#formation' reloadDocument>Formation</Link>
                  <Link to='#competence' reloadDocument>Compétences</Link>
                  <Link to='#projet' reloadDocument>Projets</Link>
                  <Link to='#experience' reloadDocument>Expérience</Link>
                  <Link to='#contact' reloadDocument>Contacts</Link>
                  <ModeButton />
                </nav>
                <div className='header_style'></div>    
            </header>
            )
};
export default Header;