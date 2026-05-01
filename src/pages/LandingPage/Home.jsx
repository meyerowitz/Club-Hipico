import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Carrusel from './Components/Carrusel';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';


import Logo from "@/assets/Logo.png"

export default function Home(){
  // Aquí puedes pasar el listado de imágenes que desees
  const headerImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header/>
      <Carrusel/>
      <Nosotros />
      <Contacto/>
      <Footer/>
    </div>
  );
};
