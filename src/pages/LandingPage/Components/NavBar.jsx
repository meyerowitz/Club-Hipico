import React, { useState } from 'react';
import Logo from "@/assets/Logo.png";
import { Search, Menu, X } from 'lucide-react';
import AgendarClase from '../Modals/AgendarClases';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <nav className="relative bg-white">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        
        <a href="/" className="relative group flex items-center space-x-4 p-2 transition-all duration-300 z-50">
          <img 
            src={Logo} 
            className="h-12 lg:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-105" 
            alt="Logo Club Hípico" 
          />
          <div className="flex flex-col">
            <span className="text-purple-950 font-black leading-tight tracking-tight text-sm lg:text-base transition-colors duration-300 group-hover:text-purple-700">
              Centro <br /> 
              <span className="text-amber-600 group-hover:text-amber-500 transition-colors">Ecuestre de Gala</span>
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center space-x-8 text-sm font-bold text-purple-900">
          <li className="group relative p-1 px-2 cursor-pointer transition-all duration-300">
            <a href="#instalaciones" className="relative z-10 transition-all duration-300 group-hover:text-purple-600 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Instalaciones</a>
            <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-500 group-hover:h-[2px] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </li>
          <li className="group relative p-1 px-2 cursor-pointer transition-all duration-300">
            <a href="#clases" className="relative z-10 transition-all duration-300 group-hover:text-purple-600 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Clases</a>
            <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-500 group-hover:h-[2px] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </li>
          <li className="group relative p-1 px-2 cursor-pointer transition-all duration-300">
            <a href="#eventos" className="relative z-10 transition-all duration-300 group-hover:text-purple-600 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Eventos</a>
            <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-500 group-hover:h-[2px] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </li>
          <li className="group relative p-1 px-2 cursor-pointer transition-all duration-300">
            <a href="#Nosotros" className="relative z-10 transition-all duration-300 group-hover:text-purple-600 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Nosotros</a>
            <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-500 group-hover:h-[2px] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </li>
          <li className="group relative p-1 px-2 cursor-pointer transition-all duration-300">
            <a href="#otros" className="relative z-10 transition-all duration-300 group-hover:text-purple-600 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Otros</a>
            <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-500 group-hover:h-[2px] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="relative group hidden md:block">
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="pl-10 pr-4 py-2 bg-slate-100 border-2 border-[#2c0244]/30 text-sm text-[#2c0244] w-40 rounded-full transition-all duration-300 outline-none
                hover:w-60 hover:border-[#2c0244] hover:bg-slate-50 hover:shadow-[0_0_15px_rgba(44,2,68,0.2)] 
                 focus:w-60 focus:bg-white focus:border-amber-400 focus:shadow-[0_0_20px_rgba(44,2,68,0.3)]"
            />
            <Search className="absolute left-3 top-2.5 text-purple-900 group-focus-within:text-purple-600 transition-all" size={18} strokeWidth={2.5} />
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="hidden sm:block bg-purple-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            Agendar Clase
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden p-2 text-purple-950 hover:bg-slate-100 rounded-lg transition-colors z-50"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      <div className={`
        lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out z-40
        ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}
      `}>
        <ul className="flex flex-col p-6 space-y-4">
          {['Instalaciones', 'Clases', 'Eventos', 'Nosotros', 'Otros'].map((item) => (
            <li key={item} className="border-b border-slate-50 pb-2">
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer click
                className="text-lg font-bold text-purple-950 hover:text-amber-600 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          {/* Botón agendar dentro del menú móvil para pantallas muy pequeñas */}
          <li className="pt-4 sm:hidden">
            <button 
              onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              className="w-full bg-purple-900 text-white py-3 rounded-full font-bold shadow-md"
            >
              Agendar Clase
            </button>
          </li>
        </ul>
      </div>

      <AgendarClase 
        isOpen={isModalOpen} 
        setIsOpen={setIsModalOpen} 
      />
    </nav>
  );
};

export default Navbar;