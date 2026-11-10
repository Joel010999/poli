import React from 'react';
import { MessageCircle, Check, Tag } from 'lucide-react';
import { PRODUCTS, getWhatsAppLink } from '../data/content';

export const StoreSection: React.FC = () => {
  return (
    <section id="tienda" className="relative py-16 sm:py-24 lg:py-32 bg-[#090e0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
            <div className="h-[1px] w-6 sm:w-8 bg-[#C9A882]/50" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#D5B08A]">
              PRODUCTOS CON IDENTIDAD
            </span>
            <div className="h-[1px] w-6 sm:w-8 bg-[#C9A882]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#FAF8F5] mb-3 sm:mb-4">
            Objetos y Prácticas para la <span className="italic text-[#DFC8A7]">pausa</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#A9B3AA] font-light leading-relaxed">
            Herramientas y rituales tangibles creados para acompañar tus prácticas diarias de presencia, introspección y encuentro con vos misma.
          </p>
        </div>

        {/* 3 Products Grid with REAL photos (Pack 4 Clases Kundalini, Oráculo, Mates de Pausa) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group rounded-2xl sm:rounded-3xl bg-[#121b14] border border-[#233326] hover:border-[#C9A882]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-xl"
            >
              {/* Product Visual Presentation with REAL photos from Poli */}
              <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-[#0a110c]">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className={`w-full h-full object-cover ${prod.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121b14] via-transparent to-black/20" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="bg-[#0b100d]/85 backdrop-blur-md text-[#DFC8A7] border border-[#DFC8A7]/30 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                    {prod.badge}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 sm:p-7 flex flex-col flex-1">
                
                {/* Price if available */}
                {prod.price && (
                  <div className="mb-3 p-2.5 rounded-xl bg-[#090e0b]/90 border border-[#233426] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#A9B3AA] block">Valor del pack:</span>
                      <span className="font-serif text-xl text-[#DFC8A7] font-semibold">
                        {prod.price}
                      </span>
                    </div>
                    <Tag className="w-4 h-4 text-[#C9A882] flex-shrink-0" />
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-serif text-[#FAF8F5] mb-1">
                  {prod.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#D5B08A] font-medium mb-3">
                  {prod.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#C8D1CA] font-light leading-relaxed mb-4">
                  {prod.description}
                </p>

                {/* Features list */}
                <ul className="space-y-1.5 sm:space-y-2 mb-6 mt-auto">
                  {prod.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#A9B3AA]">
                      <Check className="w-3.5 h-3.5 text-[#C9A882] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp action */}
                <div className="pt-4 border-t border-[#1f2d22] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <span className="text-[11px] text-[#8F9E92]">
                    * Consulta y reservas directas
                  </span>

                  <a
                    href={getWhatsAppLink(prod.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D5B08A] hover:bg-[#E5C39F] text-[#121914] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{prod.buttonText}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on checkout */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs text-[#7F8D82] max-w-lg mx-auto">
            Por el momento gestionamos las reservas y pedidos de forma directa y personalizada por WhatsApp para coordinar medios de pago y envíos según tu localidad.
          </p>
        </div>

      </div>
    </section>
  );
};
