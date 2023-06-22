import React, { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Modal, Backdrop, Fade,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import data from '../DATA/Data';
import '../CSS/Carrousel.css';
//import { getProjects } from '../connection/Api';
import Booki from '../IMAGES/projet_Booki.webp';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Carousel() {
  //const [projects, setProjects] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);


  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const projectsData = await getProjects();
  //     setProjects(projectsData);
  //   };
  
  //   fetchProjects();
  // }, []);
  
  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

//   const data = [
//     {
//     id : 1,
//     name : 'Booki',
//     image : "http://localhost:3000/static/media/projetBooki.0e8f64079d4f4be9b08a.webp",
//     lien : 'https://github.com/ThibautTobi/Projet_2.git',
//     langage : ['HTML', 'CSS'] ,
//     description : `Projet OpenClassrooms : Créez la page d'accueil d'une agence de voyage Booki avec HTML & CSS,
//     la page est en responsive pour écran d'ordinateur,tablette,mobile.`
//     },
//     {
//     id : 2,
//     name : 'Sophie Bluel',
//     image : '../IMAGES/projet_Sophie_bluel.webp',
//     lien : 'https://github.com/ThibautTobi/Projet_3_Portfolio-architecte-sophie-bluel.git',
//     langage : ['HTML', 'CSS', 'JavaScript'] ,
//     description : `Projet OpenClassrooms : Créez une page web dynamique pour le portfolio de Sophie Bluel avec JavaScript.`,
//     },
//     {
//     id : 3,
//     name : 'Qwenta',
//     image : '../IMAGES/projet_qwenta.webp',
//     lien : 'https://github.com/ThibautTobi?tab=repositories',
//     langage : ['Gestion de Projet'] ,
//     description : `Projet OpenClassrooms : Planifiez le développement du site de votre client Qwenta.`,
//     },
//     {
//     id : 4,
//     name : 'Nina Carducci',
//     image : '../IMAGES/projet_Nina_Carducci.webp',
//     lien : 'https://github.com/ThibautTobi/P5_Nina_Carducci.git',
//     langage : ['HTML', 'CSS' ,'JavaScript'] ,
//     description : `Projet OpenClassrooms : Débuggez et optimisez un site de photographe Nina Carducci.`,
//     },
//     {
//     id : 5,
//     name : 'Kasa',
//     image : '../IMAGES/projet_Kasa.webp',
//     lien : 'https://github.com/ThibautTobi/P6_Site_Kasa_Location_immobiliere.git',
//     langage : ['HTML', 'CSS', 'JavaScript' ,'React'] ,
//     description : `Projet OpenClassrooms : Créez une application web de location immobilière pour le client Kasa avec React.`,
//     },
//     {
//     id : 6,
//     name : 'Mon Vieux Grimoire',
//     image : '../IMAGES/projet_Grimoire.webp',
//     lien : 'https://github.com/ThibautTobi/P7-Back-End-Mon-Vieux-Grimoire.git',
//     langage : ['Node Js', 'Express','mongoose','Mongo DB'] ,
//     description : `Projet OpenClassrooms : Développez le back-end d'un site Mon Vieux Grimoire de notation de livres.`,
//     },
// ];



  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 6000 }}
      >
        {data.map((item) => ( /* a remplacer data par projects pour recevoir du back end */
          <SwiperSlide key={item.id}>
            <div className="carousel_item" onClick={() => handleOpenModal(item)}>
              <div className="carousel_item_overlay" />
              <img src={item.image} alt={item.name} className="carousel_item_img" />
              <h3>{item.name}</h3>
              <a href={item.lien}>Lien vers le projet</a>
              <ul>
                {item.langage.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        open={selectedItem !== null}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={Backdrop}
        slotProps={Backdrop}
      >
        <Fade in={selectedItem !== null}>
          <div className="modal">
            <IconButton
              aria-label="close"
              color="inherit"
              edge="end"
              onClick={handleCloseModal}
              className="closeButton"
            >
              <CloseIcon />
            </IconButton>
            <h2>{selectedItem?.name}</h2>
            <img src={selectedItem?.image} alt={selectedItem?.name}/>
            <a href={selectedItem?.lien}>Lien vers le projet</a>
            <ul>
              {selectedItem?.langage.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
            <p>{selectedItem?.description}</p>
          </div>
        </Fade>
      </Modal>
      <img src={Booki} alt='booki'></img>
    </div>
  );
}

export default Carousel;