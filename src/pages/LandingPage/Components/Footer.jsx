import React from 'react';
import Logo from "@/assets/Logo.png";
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Columna 1: Identidad */}
        <div className="flex flex-col space-y-6">
          <a href="/" className="group flex items-center space-x-3 transition-all duration-300">
            <img 
              src={Logo} 
              className="h-12 w-auto object-contain drop-shadow-[0_0_5px_rgba(147,51,234,0.2)] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" 
              alt="Logo Footer" 
            />
            <span className="text-purple-950 font-black leading-tight text-sm">
              Centro <br /> 
              <span className="text-amber-600">Ecuestre de Gala</span>
            </span>
          </a>
          <p className="text-slate-500 text-sm leading-relaxed">
            Dedicados a la excelencia en la disciplina hípica, fomentando el respeto y la pasión por los caballos en Ciudad Guayana.
          </p>
          <div className="flex space-x-4">
          </div>
        </div>

        {/* Columna 2: Navegación (Con efecto de línea) */}
        <div>
          <h4 className="text-purple-950 font-bold mb-6 uppercase tracking-widest text-xs">Navegación</h4>
          <ul className="flex flex-col space-y-4 text-sm font-bold text-slate-600">
            <li className="group relative w-fit cursor-pointer">
              <a href="#instalaciones" className="group-hover:text-purple-600 transition-colors">Instalaciones</a>
              <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-300 group-hover:h-[2px]"></div>
            </li>
            <li className="group relative w-fit cursor-pointer">
              <a href="#clases" className="group-hover:text-purple-600 transition-colors">Clases</a>
              <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-300 group-hover:h-[2px]"></div>
            </li>
            <li className="group relative w-fit cursor-pointer">
              <a href="#eventos" className="group-hover:text-purple-600 transition-colors">Eventos</a>
              <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-300 group-hover:h-[2px]"></div>
            </li>
            <li className="group relative w-fit cursor-pointer">
              <a href="#nosotros" className="group-hover:text-purple-600 transition-colors">Nosotros</a>
              <div className="absolute bottom-0 left-0 bg-amber-400 h-0 w-full transition-all duration-300 group-hover:h-[2px]"></div>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-purple-950 font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
          <ul className="flex flex-col space-y-4 text-sm text-slate-600">
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-amber-500" />
              <span>Puerto Ordaz, Ciudad Guayana</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-amber-500" />
              <span>+58 412-1234567</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-amber-500" />
              <span>contacto@centroecuestre.com</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Newsletter / Acción */}
        <div>
          <h4 className="text-purple-950 font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-slate-500 text-xs mb-4">Suscríbete para recibir noticias sobre torneos y clínicas.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Tu email..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-4 text-sm focus:outline-none focus:border-purple-400 focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all"
            />
            <button className="absolute right-1 top-1 bg-purple-900 text-white p-2 rounded-full hover:bg-amber-500 transition-colors">
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-xs font-medium">
        <p>© 2026 Centro Ecuestre de Gala. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;