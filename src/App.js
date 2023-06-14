import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Header from './COMPONENTS/Head';
import Footer from './COMPONENTS/Foot';
import Home from './PAGES/Main';
import Erreur from './PAGES/Erreur';
import './CSS/App.css';

function App() {

  return (
    <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="*" element={<Erreur />}/>
        </Routes>
        <Footer />
    </div>
  );
};

export default App;