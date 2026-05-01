import React from 'react';
import Caballo from "@/assets/Caballo_2.png";

const Carrusel = () => {
  const events = [
    { id: 1, title: "Torneo de Salto", date: "15 Mayo", url: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=500" },
    { id: 2, title: "Clínica de Doma", date: "22 Mayo", url: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=500" },
    { id: 'spacer', isSpacer: true }, 
    { id: 3, title: "Salto Ecuestre", date: "28 Mayo", url: "https://images.unsplash.com/photo-1566232392379-afd9298e6a46?q=80&w=500" },
    { id: 4, title: "Feria de Verano", date: "05 Junio", url: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=500" },
    { id: 5, title: "Copa Oro 2026", date: "12 Junio", url: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=500" },
  ];

  const doubleEvents = [...events, ...events];

  return (
    <section className="py-16 bg-slate-50 overflow-hidden mx-[5%]">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl font-bold text-purple-950 border-l-4 border-amber-500 pl-4">
          Próximos Eventos
        </h2>
      </div>

      <div className="relative flex">
        <div className="animate-infinite-scroll flex items-center gap-6 px-6">
          {doubleEvents.map((event, index) => (
            <React.Fragment key={index}>
              {event.isSpacer ? (
                /* IMAGEN .PNG LIMPIA SIN SOMBRAS NI BORDES */
                <div className="w-[300px] h-[250px] flex items-center justify-center">
                   <img 
                    src={Caballo} 
                    className="h-[90%] w-auto object-contain" 
                    alt="Caballo Decorativo" 
                   />
                </div>
              ) : (
                /* CARD DE EVENTO CON IMAGEN */
                <div className="relative w-[280px] h-[250px] rounded-3xl shadow-lg overflow-hidden group cursor-pointer border border-slate-100 flex-shrink-0">
                  <img 
                    src={event.url} 
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                  <div className="relative z-20 h-full p-6 flex flex-col justify-end">
                    <span className="text-amber-400 text-xs font-black uppercase tracking-wider mb-1">
                        {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                      {event.title}
                    </h3>
                    <button className="text-white/80 font-bold text-sm flex items-center gap-2 hover:text-white transition-all">
                      Detalles <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carrusel;