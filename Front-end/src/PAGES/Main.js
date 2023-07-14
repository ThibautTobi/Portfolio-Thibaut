import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/Main.css';
import mongo from '../IMAGES/icone_mongodb.svg';
import ContactForm from '../COMPONENTS/ContactForm';
import Banner from '../COMPONENTS/Banner';
import Collapses from '../COMPONENTS/Collapse';
import Carousel from '../COMPONENTS/Carrousel';
import { SlideLeft } from "../COMPONENTS/Effets";
import enveloppe from "../IMAGES/icone_envelope.svg";
import matUI from '../IMAGES/icone_material_ui.svg';

function Home (){

    useEffect(()=>{
        SlideLeft("#formation");
    },[])
    useEffect(()=>{
        SlideLeft("#competence");
    },[])
    useEffect(()=>{
        SlideLeft("#projet");
    },[])
    useEffect(()=>{
        SlideLeft("#contact");
    },[])

 function Presentation (){

    const presentData = 
                    `Je suis Denis Thibaut, un développeur web junior enthousiaste.
                    J'aime les challenges et je suis passionné par la création de solutions numériques.
                    Je suis compétent en HTML, CSS, JavaScript,
                    React et Node.js, et j'ai une expérience pratique avec MongoDB.
                    Je suis constamment à la recherche de nouvelles opportunités d'apprentissage et j'adore travailler en équipe.
                    Je suis prêt à relever des défis et à repousser les limites pour créer des interfaces intuitives et esthétiques.
                    Si vous recherchez un développeur web motivé, je serais ravi de contribuer à votre projet et de créer des produits numériques exceptionnels.
                    Contactez-moi pour en discuter davantage.`
    
    return (
        <section id='present'>
            <article className="present_article">
            <h1>Denis Thibaut</h1>
                <div className='display_present'>
                    <div className="wrapper">
                        <svg>
                            <text x="50%" y="50%" dy=".35em">
                            Développeur Web
                            </text>
                        </svg>
                        <svg>
                        <text x="50%" y="50%" dy=".35em">
                             Full Stack
                            </text>
                        </svg>
                    </div>
                </div>
                <Banner/>
                <p className="present_p">
                    {presentData}
                </p>
            </article>
        </section>
    )
 }

 function Formation (){

    return(
        <section id='formation'>
            <article className="formation_article">
                <h2 className="formation_h2">Formation</h2> 
                <p className="formation_p">
                    Développeur Web Chez Openclassrooms , Session 2022-2023.
                </p>
            </article>
        </section>
    )
}

 function Compétences (){

    return(
        <section id='competence'>
            <article>
                <h2 className="competence_h2">Compétences</h2>
                <div className="competence_display">
                    <div className='competence_front'>
                        <h3>Font-End</h3> 
                        <ul className="competence_li_front">
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-html5" style={{color: "#fcfcfc",}} className="icone"/>
                                <p>HTML</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-css3-alt" style={{color: "#ffffff",}} className="icone"/>
                                <p>CSS</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-sass" style={{color: "#ffffff",}} className="icone"/>
                                <p>Sass</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-square-js" style={{color: "#ffffff",}} className="icone"/>
                                <p>JavaScript</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-react" style={{color: "#ffffff",}} className="icone"/>
                                <p>React</p>
                            </li>
                        </ul>
                    </div>
                    <div className='competence_back'>
                        <h3>Back-End</h3>
                        <ul className="competence_p_back">
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-node-js" style={{color: "#ffffff",}} className="icone"/>
                                <p>Node js</p>
                            </li>
                        </ul>
                    </div>
                    <div className='competence_base'>
                        <h3>Base de donnés</h3>
                        <ul>
                            <li>
                                <img src={mongo} alt='MongoDb' className='icone'></img>
                                <p>MongoDb</p>
                            </li>
                        </ul>
                    </div>

                    <div className='competence_outils'>
                        <h3>Outils</h3>
                        <ul className="competence_li_outils">
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-figma" style={{color: "#ffffff",}} className="icone"/>
                                <p>Figma</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-trello" style={{color: "#fcfcfc",}} className="icone" />
                                <p>Trello</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-square-font-awesome-stroke" style={{color: "#fcfcfc",}} className="icone" />
                                <p>fontawesome</p>
                            </li>
                            <li>
                                <img src={matUI} alt="materiel ui" style={{color: "#fcfcfc",}} className="icone" ></img>
                                <p>Materiel UI</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='collapse_display'>
                    <ul>
                        <li>
                            <Collapses />
                        </li>
                    </ul>
                </div> 
            </article>
        </section>
    )
}

function Projets (){

    return(
        <section id='projet'>
            <article className="competence_article">
            <h2 className="projet_h2">Projets</h2>
            <Carousel/>
            </article>
        </section>
    )
}

function Contacts (){

    return(
        <section id='contact'>
            <article className="competence_article">
            <h2 className="contacts_h2">Contacts</h2>
                <div className='enveloppe'>
                    <img src={enveloppe} alt="enveloppe" className="icone"></img>
                </div>
                <ContactForm/>
            </article>
        </section>
    )
}

return  (
<div className="containeur">
    <Presentation />
    <Formation />
    <Compétences />
    <Projets />
    <Contacts />
</div>
)
};

export default Home ;