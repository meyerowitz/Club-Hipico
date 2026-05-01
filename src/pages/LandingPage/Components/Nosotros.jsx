import React from 'react';
import Pasion from "@/assets/clasico-polla-de-potrancas.jpg"

const Nosotros = () => {
  return (
    <section id="#Nosotros" className="py-20 bg-white mx-[5%]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={Pasion}
                alt="Nuestro equipo" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500 rounded-3xl -z-0 hidden md:block"></div>
            {/* Badge de experiencia o frase clave */}
            <div className="absolute -top-6 -left-6 bg-purple-900 text-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] transform hover:scale-[1.05] transition-transform duration-300 cursor-pointer ">
              <p className="text-3xl font-bold text-amber-400">100%</p>
              <p className="text-sm font-medium">Pasión por la excelencia ecuestre y la educacion.</p>
            </div>
          </div>

          {/* Columna de Texto */}
          <div>
            <span className="text-amber-600 font-black uppercase tracking-widest text-sm">
              Conoce nuestra esencia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-950 mt-4 mb-6 leading-tight">
              Dedicados al Arte y <br /> 
              <span className="text-amber-500 text-3xl md:text-4xl italic font-serif">la Disciplina del Caballo</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
             Somos un club de equitación. Especializados en la disciplina de Salto y Adiestramiento.  Contamos con una escuelita para niños desde los 2 años  y clases para adultos a todos los niveles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Misión</h4>
                  <p className="text-sm text-slate-500">Promover la cultura ecuestre con integridad y modernismo tecnológico.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 font-bold text-xl">
                  ★
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Visión</h4>
                  <p className="text-sm text-slate-500">Ser el referente principal en gestión de eventos de salto y doma en la región.</p>
                </div>
              </div>
            </div>

            <button className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg active:scale-95">
              Saber más sobre nosotros
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Nosotros;