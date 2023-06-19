import React, { useState,useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Modal, Backdrop, Fade } from '@mui/material';
//import data from '../DATA/Data';
import '../CSS/Carrousel.css';
import { getProjects } from '../connection/Api';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Carousel() {
  const [projects, setProjects] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };
  
    fetchProjects();
  }, []);
  
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
        {projects.map((item) => ( /* a remplacer data par projects pour recevoir du back end */
          <SwiperSlide key={item.id}>
            <div className="carousel_item" onClick={() => handleOpenModal(item)}>
              <div className="carousel_item_overlay" />
              <img src={item.logo} alt={item.name} className="carousel_item_img" /> 
              {/* src={`data:image/jpeg;base64,${image.toString('base64')}`} */}
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
            <h2>{selectedItem?.name}</h2>
            <img src={selectedItem?.logo} alt={selectedItem?.name}/>
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
    </div>
  );
}

export default Carousel;