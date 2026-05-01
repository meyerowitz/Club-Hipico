import React from 'react';
import Fondo from "../../../assets/fondo2.png";
import Fondo2 from "../../../assets/fondo1.png";
import Degradado from "../../../assets/Degradado.png";
import Jinete1 from "../../../assets/Jineta_1.png";
import Jinete2 from "../../../assets/Jinete_4.png";
import Titulo from "../../../assets/Titulo.png";

const Header = () => {

    
  return (
    <header className="px-4 md:px-8 pb-6 ">
      <div className="relative mt-[2%] h-[450px] md:h-[600px] lg:h-[700px] w-full rounded-[30px] md:rounded-[40px] overflow-hidden bg-gray-400 flex items-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/5 animate-header-drop">
        <img 
          src={Fondo} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          alt="Fondo Base" 
        />
        <img 
          src={Fondo2} 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60" 
          alt="Textura Fondo" 
        />
        <img 
          src={Degradado} 
          className="absolute inset-0 w-full h-full object-cover z-10 mix-blend-overlay opacity-70" 
          alt="Efecto Color" 
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-black/20 to-transparent md:bg-gradient-to-t md:from-black/80 md:via-transparent"></div>
        
        <div className="relative z-40 w-full md:w-[60%] px-8 md:px-12 ml-0 md:ml-[5%] lg:ml-[3%] flex flex-col transition-all duration-500">
            <img 
                src={Titulo} 
                className="w-[95%] sm:w-[80%] md:w-full max-w-2xl h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] mb-4 transform hover:scale-[1.05] transition-transform duration-300 cursor-pointer animate-fade-in" 
                alt="Club Hípico" 
            />
            <div className="max-w-xl space-y-6 ml-12">
                <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1] drop-shadow-[0_4px_4px_rgba(0,0,0,1)] transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                    Donde la pasión por la equitación <br className="hidden md:block" /> 
                    <span className="text-amber-400">y la elegancia</span> se encuentran.
                </p>

                <div className="h-[3px] w-full max-w-[400px] transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)] "></div>

                <div className="flex flex-wrap gap-3 pt-2">
                    {["Escuela", "Eventos", "Entrenamiento"].map((item, index) => (
                    <span 
                        key={index} 
                        className="px-4 py-1.5 bg-fuchsia-950/40 backdrop-blur-md border border-white/10 rounded-full text-white text-xs md:text-sm font-black uppercase tracking-widest shadow-xl transform hover:scale-[1.05] transition-transform duration-300 cursor-pointer"
                    >
                        {item}
                    </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Jinete 2 (Atrás) - Empieza pequeño y crece */}
        <img 
            src={Jinete2} 
            className="absolute right-[-15%] md:right-[-2%] bottom-0 translate-y-[2%] md:translate-y-[10%] h-[65%] md:h-[80%] lg:h-[85%] z-30 object-contain object-bottom animate-grow-back shadow-inner transform hover:scale-[1.05] transition-transform duration-300 cursor-pointer" 
            alt="Jinete 2" 
        />

        <img 
          src={Jinete1} 
          className="absolute right-[-15%] md:right-[-8%] bottom-0 translate-y-[1%] h-[75%] md:h-[90%] lg:h-[95%] z-30 object-contain object-bottom animate-grow-front transform hover:scale-[1.05] transition-transform duration-300 cursor-pointer" 
          alt="Jinete 1" 
        />

      </div>
    </header>
  );
};

export default Header;