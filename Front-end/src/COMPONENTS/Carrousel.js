import React, { useState,useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Modal, Backdrop, Fade,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import data from '../DATA/Data';
import '../CSS/Carrousel.css';
//import { getProjects } from '../connection/Api';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Carousel() {
  //const [projects, setProjects] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              <h2>{item.name}</h2>
              <h3>{item.projet}</h3>
              <img src={isMobile ? item.imageMobile : item.image} alt={item.name} className="carousel_item_img" />
              <a href={item.lien}>Lien vers le projet</a>
              <h3>langages utilisés</h3>
              <ul>
                {item.langage.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
              <h3>les Problématiques rencontrées</h3>
              <p>{item.problematique}</p>
              <h3>les compétences utilisés</h3>
              <ul>
                {item.competence.map((item,index) => (
                  <li key={index}>{item}</li>
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
            <h3>{selectedItem?.projet}</h3>
            <img src={isMobile ? selectedItem?.imageMobile : selectedItem?.image} alt={selectedItem?.name}/>
            <a href={selectedItem?.lien}>Lien vers le projet</a>
            <h3>langages utilisés</h3>
            <ul>
              {selectedItem?.langage.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
            <h3>Description</h3>
            <p>{selectedItem?.description}</p>
            <h3>les Problématiques rencontrées</h3>
            <p>{selectedItem?.problematique}</p>
            <h3>les compétences utilisés</h3>
            <ul>
                {selectedItem?.competence.map((item,index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Carousel;