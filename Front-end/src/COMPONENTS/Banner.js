import banner from '../IMAGES/banniere.webp';
import perso from '../IMAGES/thibaut.webp';
import '../CSS/Banner.css';

export default function Banner (){

    return(
        <div className="banner"> 
            <img src={banner} alt="banner_developpement_web" className="banner_img_dev"></img>
            <img src={perso} alt="image_du_developpeur" className="banner_img_perso"></img>
        </div>
    )
};