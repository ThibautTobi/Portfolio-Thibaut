import '../CSS/Erreur.css';
import { Link } from 'react-router-dom';

function Error(){
    return(
        <div className='erreur'>
            {/* <img /> */}
            <h2 className='erreur_h2'>404</h2>
            <p className='erreur_p'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to=".." relative='path' className='erreur_link'>Retourner sur la page d’accueil</Link>
        </div>
    )
};
export default Error;