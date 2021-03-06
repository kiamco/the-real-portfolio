import React from 'react';
import './App.css';
import './styles/index.scss'
import Nav from './components/nav.js'
import Header from './components/header.js'
import Products from './components/products'
import { product,projects } from './data/homeContent';
import Rocket from './img/startup.png'
import Brain from './img/brain.png'
import Skills from './components/skills';
import Footer from './components/footer.js'
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';


function App() {
  function initializeReactGA() {
    ReactGA.initialize('UA-154692929-1');
    ReactGA.pageview('/');
  }

  initializeReactGA();
  return (
    <>
      <Helmet>
        <title>Kim Kiamco's portfolio</title>
        <meta name="description" content="A compilation of Kim Kiamco's work as a developer" />
        <meta name="keywords" content="kiamco,Questr,hangman,full-stack,developer,Products,projects,kim" />
      </Helmet>
    <div className="App">
      <Nav />
     <Header />
     <Products header="Products" logo={Rocket} content={product}/>
     <Products header="Side Projects" logo={Brain} content={projects} />
     <Skills header="Skills" logo={Brain}/>
    </div>
      <Footer />

    </>
  );
}

export default App;
