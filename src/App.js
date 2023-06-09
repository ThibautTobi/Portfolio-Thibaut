import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Header from './COMPONENTS/Head';
import Footer from './COMPONENTS/Foot';
import Home from './PAGES/Main';
import Erreur from './PAGES/Erreur';
import './CSS/App.css';
import { ThemeProvider } from 'styled-components';
import useTheme from './COMPONENTS/Theme';


function App() {

 const { theme } = useTheme();
//className={ isTheme === '.light-theme' ? '.dark-theme' : '.light-theme'}
  return (
    <div >
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="*" element={<Erreur />}/>
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
