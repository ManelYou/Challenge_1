import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar01 from "./navBar/NavBar01";
import About from "./About/About"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"

function App() {
  return (
  <>
  <header><NavBar01/></header>

  <body>
    <About/>
    <Projects/>
    <Contact/>
  </body>
  
  <footer> 
    <Footer/>
  </footer>

  </>
  );
}

export default App;
