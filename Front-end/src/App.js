import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Header from './COMPONENTS/Head';
import Footer from './COMPONENTS/Foot';
import Home from './PAGES/Main';
import Erreur from './PAGES/Erreur';
import CustomCursor from './COMPONENTS/CustomCursor';
import './CSS/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5,faGithub,faLinkedin,faFigma,faTrello,faNodeJs,faReact,faSquareJs,faCss3Alt,faSass,faSquareFontAwesomeStroke } from '@fortawesome/free-brands-svg-icons';

library.add(faHtml5,faCss3Alt,faSquareJs,faReact,faNodeJs,faFigma,faTrello,faGithub,faLinkedin,faSass,faSquareFontAwesomeStroke )

function App() {

  return (
    <div>
        <Header />
        <Routes>
          <Route exact path="/Portfolio-Thibaut/" element={<Home />}/>
          <Route path="*" element={<Erreur />}/>
        </Routes>
        <Footer />
        <CustomCursor />
    </div>
  );
};

export default App;