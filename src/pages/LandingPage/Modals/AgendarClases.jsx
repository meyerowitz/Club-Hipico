import React, { useState } from 'react';

const AgendarClase = ({isOpen, setIsOpen}) => {


  return (
    <>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Fondo oscurecido con cierre al hacer clic fuera */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={()=>{setIsOpen(false)}}
          ></div>

          <div className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-[#2c0244] via-[#1a0129] to-[#000000] p-1 shadow-2xl rounded-sm animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={()=>{setIsOpen(false)}}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl z-20"
            >
              &times;
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-white text-3xl md:text-4xl font-serif mb-2">
                  Reserva tu cupo
                </h2>
                <p className="text-white/80 text-sm italic">
                  Completa los datos para coordinar tu próxima sesión.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-sm shadow-inner max-h-[70vh] overflow-y-auto">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Nombre Completo</label>
                    <input type="text" className="w-full border border-gray-200 focus:border-[#2c0244] p-3 outline-none" />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Email</label>
                    <input type="email" className="w-full border border-gray-200 focus:border-[#2c0244] p-3 outline-none" />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Teléfono</label>
                    <input type="tel" className="w-full border border-gray-200 focus:border-[#2c0244] p-3 outline-none" />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Tipo de Clase</label>
                    <select className="w-full border border-gray-200 focus:border-[#2c0244] p-3 outline-none bg-white">
                      <option>Principiante</option>
                      <option>Intermedio</option>
                      <option>Salto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Fecha</label>
                    <input type="date" className="w-full border border-gray-200 focus:border-[#2c0244] p-3 outline-none" />
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-[#2c0244] hover:bg-[#3d045e] text-white font-serif py-4 transition-all uppercase tracking-widest text-sm shadow-lg"
                    >
                      Confirmar Reserva
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgendarClase;