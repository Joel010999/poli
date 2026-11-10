import React from 'react';
import { ArrowRight, Play, Sparkles, Wind, Heart, Users } from 'lucide-react';

interface HeroProps {
  onExplorePrograms?: () => void;
  onAboutMe?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onAboutMe }) => {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8 bg-[#0a100c]">
      {/* Background composition with REAL photo of Poli in the tulip field with arms open */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep atmospheric backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#070d09] via-[#09130c]/80 to-[#0b170f]/40" />

        {/* Real photo of Poli in tulip field: Perfectly centered on Poli in mobile and desktop */}
        <div className="absolute top-0 right-0 w-full sm:w-[70%] lg:w-[62%] h-[62%] sm:h-full opacity-60 sm:opacity-80 lg:opacity-95">
          <picture>
            <source media="(max-width: 640px)" srcSet="/material/hero_mobile_centered.jpg" />
            <img
              src="/material/hero_tulipanes.jpg"
              alt="Poli Heredia - Conexión y presencia en Yoga Pausa"
              className="w-full h-full object-cover object-[center_72%] sm:object-[center_65%] filter blur-[2px] sm:blur-[1.5px] scale-105 brightness-[0.92] contrast-[1.08] saturate-[1.1]"
            />
          </picture>
          {/* Subtle gradient fades so text remains crisp and readable on both mobile and desktop */}
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#070d09] via-[#070d09]/75 sm:via-[#070d09]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a100c] via-transparent to-[#070d09]/70" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-12">
        <div className="max-w-2xl">
          {/* Eyebrow badge: YOGA & TERAPIA CON MEDITACIÓN */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D5B08A]">
              YOGA & TERAPIA CON MEDITACIÓN
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#C9A882]/60" />
          </div>

          {/* Editorial Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#FAF8F5] leading-[1.12] sm:leading-[1.08] tracking-tight mb-3.5 sm:mb-6">
            Guío, acompaño <br />
            <span className="italic font-normal text-[#DFC8A7]">y sostengo.</span>
          </h1>

          {/* Subtitle / Emotional copy de Poli */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D8D2C6] font-light leading-relaxed mb-5 sm:mb-8 max-w-xl">
            Un espacio para conectar con vos y transformar tu manera de habitar la vida, gestionando tus emociones a través del Yoga, la Meditación y la respiración, haciendo Pausas conscientes.
          </p>

          {/* Hierarchical CTAs: Full width on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            <button
              onClick={onExplorePrograms || (() => document.getElementById('programas')?.scrollIntoView({ behavior: 'smooth' }))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D5B08A] hover:bg-[#E5C39F] text-[#121914] px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <span>Explorá los programas</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onAboutMe || (() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' }))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/25 hover:border-white/40 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current opacity-80" />
              <span>Conocé mi propuesta</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip: Categorías Destacadas Actualizadas */}
      <div className="relative z-10 w-full border-t border-[#3d4f40]/40 bg-[#090e0b]/90 sm:bg-[#090e0b]/80 backdrop-blur-md mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 divide-y-0 divide-x-0 lg:divide-x lg:divide-[#233126]/60">
            {/* Pillar 1: Kundalini Yoga */}
            <div className="flex flex-col items-start text-left lg:px-4 lg:first:pl-0">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#D5B08A] mb-0.5 sm:mb-1">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8] flex-shrink-0" />
                <span className="font-serif text-sm sm:text-lg text-[#FAF8F5] tracking-wide">Kundalini Yoga</span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#A9B3AA] font-sans">Energía vital y presencia</p>
            </div>

            {/* Pillar 2: Meditación */}
            <div className="flex flex-col items-start text-left lg:px-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#D5B08A] mb-0.5 sm:mb-1">
                <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8] flex-shrink-0" />
                <span className="font-serif text-sm sm:text-lg text-[#FAF8F5] tracking-wide">Meditación</span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#A9B3AA] font-sans">Calma mental y claridad</p>
            </div>

            {/* Pillar 3: Gestión de Emoción */}
            <div className="flex flex-col items-start text-left lg:px-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#D5B08A] mb-0.5 sm:mb-1">
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8] flex-shrink-0" />
                <span className="font-serif text-sm sm:text-lg text-[#FAF8F5] tracking-wide">Gestión de Emoción</span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#A9B3AA] font-sans">Recursos para el bienestar</p>
            </div>

            {/* Pillar 4: Encuentros */}
            <div className="flex flex-col items-start text-left lg:px-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#D5B08A] mb-0.5 sm:mb-1">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8] flex-shrink-0" />
                <span className="font-serif text-sm sm:text-lg text-[#FAF8F5] tracking-wide">Encuentros</span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#A9B3AA] font-sans">Presenciales y online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
