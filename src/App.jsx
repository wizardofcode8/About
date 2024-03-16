import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import LandingData from './components/LandingData';
import Values from './components/Values';
import Apple from './components/Apple';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Screen from "./components/Screen";
import Cards from './components/Cards';


const App = () => {
  return (
    <div className=''>
     <div className=" container mx-auto bg-[#FFFFFF]">
     <Navbar/>
      <Landingpage/>
      <LandingData/>
      <Values/>
      <Screen/>
      <Cards/>
      <Apple/>
      <FAQ/>
     </div>
      <Footer/>
    </div>
  )
}

export default App
