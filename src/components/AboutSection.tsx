import React from 'react';
import { ArrowRight, Sparkles, Wind, Heart, Quote, UserCheck } from 'lucide-react';
import { ABOUT_POLI, getWhatsAppLink, WHATSAPP_MESSAGES } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="relative bg-[#090e0b]">
      
      {/* 1. TOP PART: Split Hero with REAL portrait of Poli in prayer/reverence */}
      <div className="bg-[#121b14] border-t border-b border-[#253629]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: Authentic portrait of Poli in prayer with natural sunlight (mat_20.jpg) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2b3a2d] shadow-2xl bg-[#0c140f]">
                <img
                  src="/material/mat_20.jpg"
                  alt="Poli Heredia - Yoga Pausa"
                  className="w-full h-[360px] sm:h-[480px] lg:h-[540px] object-cover object-[center_20%] filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121b14]/80 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Decorative subtle border tag with original dandelion logo */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-4 sm:right-6 bg-[#090e0b]/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#28382c] flex items-center gap-2.5 shadow-xl">
                <img
                  src="/material/logo_inverted_white.png"
                  alt="Diente de león"
                  className="w-3.5 sm:w-4 h-4 sm:h-5 object-contain"
                />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#DFC8A7] font-medium font-sans">
                  Poli Heredia · Guía y Fundadora
                </span>
              </div>
            </div>

            {/* Right: Personal editorial statement */}
            <div className="lg:col-span-6 pt-4 lg:pt-0">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#D5B08A]">
                  SOBRE MÍ
                </span>
                <div className="h-[1px] w-8 sm:w-12 bg-[#C9A882]/50" />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] leading-tight mb-4 sm:mb-6">
                Hola, soy <span className="italic text-[#DFC8A7]">Poli.</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#D0D9D2] font-light leading-relaxed mb-6 sm:mb-8">
                {ABOUT_POLI.bioShort}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#D5B08A] hover:bg-[#E5C39F] text-[#121914] px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-md active:scale-95"
                >
                  <span>Conocé mi recorrido</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                
                <span className="text-xs text-[#95A398] font-sans text-center sm:text-left">
                  Slogan: <span className="italic text-[#FAF8F5]">"Guío, acompaño y sostengo"</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. MIDDLE PART: "Mi camino" + 3 Pillars on Warm Sand Background */}
      <div className="bg-[#FAF8F5] text-[#19241c] py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Title & Authentic Biography of Poli (Student's tribute text) */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#A36B4F]">
                  TRAYECTORIA & PROPÓSITO
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#162118] mb-4 sm:mb-6">
                Mi camino
              </h3>
              <div className="w-12 sm:w-16 h-[2px] bg-[#A36B4F]/40 mb-6 sm:mb-8" />

              <div className="space-y-4 text-xs sm:text-sm lg:text-base text-[#3C4A40] font-light leading-relaxed">
                {ABOUT_POLI.storyParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {/* Nota de la alumna de Poli */}
                <div className="pt-2 flex items-center gap-2 text-xs text-[#8C5D3E] italic">
                  <UserCheck className="w-4 h-4 flex-shrink-0" />
                  <span>{ABOUT_POLI.studentCredit}</span>
                </div>

                {/* Cierre auténtico de la presentación */}
                <div className="pt-4 border-t border-[#DDD6CA]">
                  <p className="font-serif italic text-base sm:text-lg text-[#162118] font-medium">
                    "{ABOUT_POLI.closingMission}"
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Pillars Summary on Cream Background */}
            <div className="lg:col-span-6 lg:border-l lg:border-[#DDD6CA] lg:pl-12 space-y-6 sm:space-y-8 pt-4 lg:pt-0">
              {ABOUT_POLI.pillars.slice(0, 3).map((pil, idx) => (
                <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFE9DF] border border-[#DDD6CA] flex items-center justify-center flex-shrink-0 text-[#8C5D3E]">
                    {idx === 0 && <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {idx === 1 && <Wind className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {idx === 2 && <Heart className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-[#162118] font-medium mb-1">
                      {pil.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5B6B60] leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 3. BOTTOM PART: Panorama Quote Card with real photo of Poli in meditation by the water (mat_18.jpg) */}
      <div className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2b3a2d] shadow-2xl min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] flex items-center bg-[#0d1610]">
          {/* Panoramic photo of Poli at sunset dock */}
          <img
            src="/material/mat_18.jpg"
            alt="Poli en meditación junto al agua al atardecer"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-75 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#070e0a]/95 via-[#09140c]/80 to-transparent" />

          {/* Quote text overlay */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-2xl">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5B08A] mb-3 sm:mb-4 opacity-80" />
            <blockquote className="font-serif text-base sm:text-xl lg:text-2xl text-[#FAF8F5] font-light italic leading-relaxed mb-3 sm:mb-4">
              "{ABOUT_POLI.quote}"
            </blockquote>
            <div className="h-[1.5px] w-14 sm:w-20 bg-[#D5B08A]/70 mb-2 sm:mb-3" />
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#DFC8A7] font-sans">
              Poli Heredia — Yoga Pausa
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
