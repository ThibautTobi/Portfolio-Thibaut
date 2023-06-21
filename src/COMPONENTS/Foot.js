import '../CSS/Footer.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sun from "../IMAGES/icone_light.svg";
import night from "../IMAGES/icone_nightlight.svg";
import useThemeClass from '../COMPONENTS/Theme';

function Footer (){
    const { theme, toggleTheme } = useThemeClass();
    
    return (
            <footer>
                <div className='footer_style'></div>
                <div className='footer_display'>
                    <div className='footer_icone'>
                        <a href='https://github.com/ThibautTobi?tab=repositories' aria-label='Mon github'>
                            <ul>
                                <li>                 
                                    <FontAwesomeIcon icon="fa-brands fa-github" style={{color: "#ffffff",}} className='icone'/>
                                </li>
                            </ul>
                        </a>
                        <a href='https://www.linkedin.com/in/thibaut-denis-2b12b21b1/' aria-label='Mon linkedin'>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#ffffff",}} className='icone'/>
                                </li>
                            </ul>
                        </a>
                    </div>
                    <button className='mode_button' onClick={toggleTheme}>
                        <img className='mode_button_img' src={theme === 'dark-theme' ? sun : night } alt='mode_theme'></img>
                    </button>
                    <p className='footer_p'>© 2023 Denis Thibaut.</p>
                </div>
            </footer>
        )}

export default Footer ;