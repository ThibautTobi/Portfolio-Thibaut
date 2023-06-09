import '../CSS/Footer.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer (){
    return (
            <footer>
                <div className='footer_style'></div>
                <div className='footer_display'>
                    <ul className='footer_icone'>
                        <a href='https://github.com/ThibautTobi?tab=repositories'>
                            <li>                 
                                <FontAwesomeIcon icon="fa-brands fa-github" className='icone'/>
                            </li>
                        </a>
                        <a href='https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2F'>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" className='icone'/>
                            </li>
                        </a>
                    </ul>
                    <p className='footer_p'>© 2023 Denis Thibaut.</p>
                </div>
            </footer>
        )}

export default Footer ;