import React from 'react';
import { Logo } from './Logo';
import { Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink, WHATSAPP_MESSAGES } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="relative bg-[#070b09] text-[#E8E6E1] border-t border-[#1c291f] pt-14 sm:pt-20 pb-10 sm:pb-12">
      {/* Pre-footer Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#121c15] to-[#17251c] border border-[#2b3d2f] p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D5B08A] block mb-2">
              EMPEZÁ HOY TU CAMINO
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-[#FAF8F5] mb-2 sm:mb-3">
              ¿Sentís el llamado a frenar y habitar tu pausa?
            </h3>
            <p className="text-xs sm:text-sm text-[#A9B3AA] font-light leading-relaxed">
              Escribime de manera directa. Te oriento personalmente sobre cuál de los programas o talleres resuena mejor con tu momento actual.
            </p>
          </div>

          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2.5 bg-[#D5B08A] hover:bg-[#E5C39F] text-[#121914] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 shadow-xl active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Hablar con Poli por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 border-t border-[#18231a]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 md:col-span-5 space-y-3 sm:space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-[#8F9E92] font-light leading-relaxed max-w-sm">
              Un espacio amoroso y consciente creado por Poli Heredia para acompañar a quienes buscan silenciar la mente, habitar el cuerpo y reconectar con su propósito esencial.
            </p>
            <p className="text-xs italic text-[#DFC8A7] font-serif">
              "Guío, acompaño y sostengo."
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D5B08A]">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs text-[#A9B3AA]">
              <li>
                <a href="#inicio" className="hover:text-[#FAF8F5] transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-[#FAF8F5] transition-colors">Sobre Poli Heredia</a>
              </li>
              <li>
                <a href="#programas" className="hover:text-[#FAF8F5] transition-colors">Programas y Talleres</a>
              </li>
              <li>
                <a href="#kundalini" className="hover:text-[#FAF8F5] transition-colors">Formación Kundalini 2027</a>
              </li>
              <li>
                <a href="#tienda" className="hover:text-[#FAF8F5] transition-colors">Tienda & Objetos</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Social */}
          <div className="md:col-span-4 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D5B08A]">
              Contacto & Redes
            </h4>
            <ul className="space-y-2 text-xs text-[#A9B3AA]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C9A882]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  {CONTACT_INFO.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A882]" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A882]" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>

            <div className="pt-1">
              <span className="inline-block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#647467] bg-[#0d140f] px-3 py-1 rounded-full border border-[#19241b]">
                Poli Heredia · Guío, acompaño y sostengo
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-[#141d16] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#718074]">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Yoga Pausa · Poli Heredia. Todos los derechos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#D5B08A] transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
