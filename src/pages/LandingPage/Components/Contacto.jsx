import React from 'react';

const Contacto = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center bg-gray-100 py-20 px-6">
      {/* Fondo con imagen */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80')" }}
      ></div>

      {/* Contenedor con DEGRADADO PÚRPURA PROFUNDO */}
      <div className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-[#2c0244] via-[#1a0129] to-[#000000] p-8 md:p-16 shadow-2xl rounded-sm">
        
        <div className="text-center mb-10">
          <h2 className="text-white text-4xl md:text-5xl font-serif mb-4 drop-shadow-md">
            ¿Quieres Asociarte?
          </h2>
          <p className="text-white text-lg opacity-90">
            Déjanos tus datos y te contactaremos a la brevedad posible.
          </p>
        </div>

        {/* Formulario con INTERIOR BLANCO */}
        <div className="bg-white p-6 md:p-10 rounded-sm shadow-inner">
          <form className="space-y-4">
            
            {/* Campo: Nombre y Apellido */}
            <div>
              <input 
                type="text" 
                placeholder="Nombre y Apellido"
                className="w-full bg-white border border-gray-200 focus:border-[#2c0244] text-gray-800 p-4 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Campo: Email */}
            <div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full bg-white border border-gray-200 focus:border-[#2c0244] text-gray-800 p-4 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Campo: Celular */}
            <div>
              <input 
                type="tel" 
                placeholder="Celular"
                className="w-full bg-white border border-gray-200 focus:border-[#2c0244] text-gray-800 p-4 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Campo: Comentario */}
            <div className="relative">
              <textarea 
                placeholder="Comentario"
                rows="4"
                className="w-full bg-white border border-gray-200 focus:border-[#2c0244] text-gray-800 p-4 outline-none transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
              <span className="absolute bottom-2 right-4 text-[10px] text-gray-400 uppercase">
                0 of 350
              </span>
            </div>

            {/* Botón de Envío con tu color exacto */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-[#2c0244] hover:bg-[#3d045e] text-white font-serif py-4 transition-all duration-300 uppercase tracking-widest text-sm shadow-lg active:scale-[0.98]"
              >
                Enviar Mensaje
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;