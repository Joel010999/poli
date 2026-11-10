import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, ChevronDown, ChevronUp, Clock, Sparkles, Tag } from 'lucide-react';
import { PROGRAMS, TALLER_SOMOS_ENERGIA, TALLER_PRESENCIAL_GESTION, getWhatsAppLink, WHATSAPP_MESSAGES } from '../data/content';

export const ProgramsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="programas" className="relative py-16 sm:py-24 lg:py-32 bg-[#090e0b] overflow-hidden">
      {/* Background mood atmosphere with real elements photo from Poli */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[320px] sm:h-[450px] overflow-hidden opacity-25 pointer-events-none">
        <img
          src="/material/mat_06.jpg"
          alt="Atmósfera de práctica"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#090e0b] via-[#090e0b]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090e0b]/30 via-transparent to-[#090e0b]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Texto oficial de Poli sin la palabra 'social' */}
        <div className="max-w-3xl mb-10 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#D5B08A]">
              TALLERES Y ENCUENTROS
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#C9A882]/50" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] leading-tight mb-3 sm:mb-5">
            Experiencias para <br />
            <span className="italic text-[#DFC8A7]">volver al equilibrio</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#C8D0C9] font-light leading-relaxed max-w-2xl mb-6 sm:mb-8">
            Propuestas profundas que integran yoga, meditación, respiración y herramientas de psicología. Diseñadas para pausar con sentido y sostener una transformación real.
          </p>

          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#D5B08A] hover:bg-[#E5C39F] text-[#121914] px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md active:scale-95"
          >
            <span>Ver próximas fechas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TALLER DESTACADO ESPECIAL: «SomOs ENERGiA» (Presencial y Online)   */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-12 sm:mb-18 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#152319] via-[#0f1912] to-[#090f0b] border border-[#2e4233] p-5 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A882]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            
            {/* Foto real del taller: Los 7 chakras y vela al atardecer */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#2b3d2f] shadow-xl">
                <img
                  src={TALLER_SOMOS_ENERGIA.image}
                  alt="Taller SomOs ENERGiA - Los 7 Chakras y vela al atardecer"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1611]/85 via-transparent to-transparent" />
                
                <div className="absolute top-3.5 left-3.5">
                  <span className="bg-[#0b120d]/90 backdrop-blur-md text-[#DFC8A7] border border-[#DFC8A7]/30 text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                    {TALLER_SOMOS_ENERGIA.badge}
                  </span>
                </div>
              </div>

              {/* Valores escritos limpios debajo de la foto */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#0d1610] border border-[#243528]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[#A9B3AA]">Encuentro Presencial:</span>
                  <span className="font-serif text-lg text-[#DFC8A7] font-semibold">{TALLER_SOMOS_ENERGIA.pricing.presencial}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A9B3AA]">Modalidad Online:</span>
                  <span className="font-serif text-lg text-[#FAF8F5] font-semibold">{TALLER_SOMOS_ENERGIA.pricing.online}</span>
                </div>
              </div>
            </div>

            {/* Contenido e información del taller */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D5B08A]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D5B08A] font-semibold">
                  TALLER GUIADO & VIVENCIAL
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F5] leading-tight">
                Taller <span className="italic text-[#DFC8A7]">"SomOs ENERGiA"</span>
              </h3>

              <p className="font-serif italic text-sm sm:text-base lg:text-lg text-[#DFC8A7]">
                {TALLER_SOMOS_ENERGIA.invitation}
              </p>

              <p className="text-xs sm:text-sm text-[#C8D1CA] font-light leading-relaxed">
                {TALLER_SOMOS_ENERGIA.description}
              </p>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#131f16]/90 border border-[#243729]">
                <p className="text-xs text-[#E1E7E2] leading-relaxed">
                  <span className="text-[#DFC8A7] font-semibold">Objetivo del encuentro:</span> {TALLER_SOMOS_ENERGIA.objective}
                </p>
              </div>

              {/* Lo que te espera */}
              <div className="space-y-2 pt-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#DFC8A7] block">
                  Lo que te espera en el taller:
                </span>
                <ul className="space-y-1.5 sm:space-y-2">
                  {TALLER_SOMOS_ENERGIA.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#B9C4BA]">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A882] flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sugerencias para el día del taller */}
              <div className="pt-2 border-t border-[#233527]">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F9E92] block mb-1.5">
                  Sugerencias para el día del encuentro:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#A9B3AA]">
                  {TALLER_SOMOS_ENERGIA.preparationTips.map((tip, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A882]" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA WhatsApp directo */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={getWhatsAppLink(TALLER_SOMOS_ENERGIA.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#D5B08A] hover:bg-[#E5C39F] text-[#121914] px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-xl active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{TALLER_SOMOS_ENERGIA.ctaText}</span>
                </a>

                <div className="text-xs text-[#A9B3AA] text-center sm:text-left">
                  <span>Presencial: <strong className="text-[#DFC8A7]">{TALLER_SOMOS_ENERGIA.pricing.presencial}</strong> · Online: <strong className="text-[#FAF8F5]">{TALLER_SOMOS_ENERGIA.pricing.online}</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TALLER PRESENCIAL GESTIÓN DE EMOCIÓN                               */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-14 sm:mb-20 rounded-2xl sm:rounded-3xl bg-[#111c14] border border-[#233426] p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 w-full md:w-auto">
            {/* Foto real del encuentro de mujeres en la playa */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 border border-[#2d3e30] shadow-md">
              <img
                src={TALLER_PRESENCIAL_GESTION.image}
                alt="Encuentro presencial de meditación"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#DFC8A7] font-semibold block mb-1">
                {TALLER_PRESENCIAL_GESTION.badge}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#FAF8F5]">
                {TALLER_PRESENCIAL_GESTION.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#A9B3AA] font-light max-w-lg mt-1 leading-relaxed">
                {TALLER_PRESENCIAL_GESTION.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full md:w-auto pt-2 sm:pt-0">
            <div className="text-center sm:text-right">
              <span className="font-serif text-2xl sm:text-3xl text-[#DFC8A7] font-medium block">
                {TALLER_PRESENCIAL_GESTION.price}
              </span>
              <span className="text-[11px] text-[#8F9E92]">{TALLER_PRESENCIAL_GESTION.priceOnlineNote}</span>
            </div>

            <a
              href={getWhatsAppLink(TALLER_PRESENCIAL_GESTION.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reservar lugar</span>
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 3 PROGRAMAS ONLINE PERMANENTES (Con precios y facilidades en 2 cuotas) */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-6">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D5B08A] block mb-2">
            ACOMPAÑAMIENTOS ONLINE · 2 MESES
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif text-[#FAF8F5] mb-2">
            Programas de profundización
          </h3>
          <p className="text-xs sm:text-sm text-[#A9B3AA] max-w-xl">
            Procesos guiados y personalizados para desarrollar tu propia práctica de presencia y regular tu bienestar. Podés abonar en 2 cuotas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {PROGRAMS.map((prog, idx) => {
            const isExpanded = expandedId === prog.id;

            return (
              <div
                key={prog.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#141d16] to-[#0d140f] border border-[#26372a]/70 hover:border-[#C9A882]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-xl"
              >
                {/* Visual Image Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0a110c]">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className={`w-full h-full object-cover ${prog.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141d16] via-[#141d16]/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-[#0b120d]/85 backdrop-blur-md text-[#DFC8A7] border border-[#DFC8A7]/30 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                      {prog.badge}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5">
                    <span className="text-xs text-[#FAF8F5]/80 font-mono font-medium bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-7 flex flex-col flex-1">
                  
                  {/* Pricing written directly in card */}
                  <div className="mb-3 p-3 rounded-xl bg-[#090e0b]/90 border border-[#233426] flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-2xl text-[#DFC8A7] font-semibold">
                          {prog.price}
                        </span>
                        {prog.originalPrice && (
                          <span className="text-xs text-[#7A887D] line-through">
                            {prog.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#A9B3AA] block mt-0.5">
                        {prog.priceNote}
                      </span>
                    </div>
                    <Tag className="w-4 h-4 text-[#C9A882] flex-shrink-0" />
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#FAF8F5] mb-1 group-hover:text-[#DFC8A7] transition-colors">
                    {prog.name}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#C9A882] font-medium tracking-wide mb-3">
                    {prog.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#C4CCC5] font-light leading-relaxed mb-4">
                    {prog.description}
                  </p>

                  {/* Payment option pill */}
                  <div className="mb-3 inline-flex items-center gap-1.5 text-[11px] text-[#DFC8A7] bg-[#1a291e] px-2.5 py-1 rounded-full border border-[#2b3e2f]">
                    <span>💳 {prog.paymentOption}</span>
                  </div>

                  {/* Highlight Quote */}
                  <blockquote className="border-l-2 border-[#C9A882]/60 pl-3 py-1 my-2 text-xs italic text-[#D8D2C6]/90 font-serif">
                    "{prog.highlightQuote}"
                  </blockquote>

                  {/* Toggle details accordion */}
                  <div className="mt-3 pt-3 border-t border-[#233126]">
                    <button
                      onClick={() => toggleExpand(prog.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold tracking-wider text-[#D5B08A] hover:text-[#FAF8F5] transition-colors py-2 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Ocultar detalles' : 'Ver qué incluye y para quién es'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-3 text-xs animate-fadeIn">
                        <div>
                          <span className="font-semibold text-[#FAF8F5] block mb-1">Para quién está pensado:</span>
                          <p className="text-[#A9B3AA] leading-relaxed">{prog.forWhom}</p>
                        </div>

                        {prog.guides && (
                          <div>
                            <span className="font-semibold text-[#FAF8F5] block mb-1">Las 8 Guías que resuenan con Vos:</span>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-[#C9A882]">
                              {prog.guides.map((g, i) => (
                                <span key={i}>• {g}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <span className="font-semibold text-[#FAF8F5] block mb-2">Qué incluye el recorrido:</span>
                          <ul className="space-y-1.5">
                            {prog.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-[#C4CCC5]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A882] flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-[#0b100d] p-2.5 rounded-xl border border-[#1f2b21] flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#C9A882] flex-shrink-0" />
                          <span className="text-[#A9B3AA] text-[11px] sm:text-xs">{prog.format}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-5 pt-4 border-t border-[#233126] flex items-center justify-between gap-3">
                    <span className="text-[10px] sm:text-[11px] font-medium text-[#8F9E92] bg-[#111913] px-2.5 py-1 rounded-full border border-[#1d2920]">
                      {prog.status}
                    </span>

                    <a
                      href={getWhatsAppLink(prog.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inscribirme</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Payment Facilities */}
        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl bg-[#111913]/60 border border-[#202d23]">
          <p className="text-xs sm:text-sm text-[#A9B3AA] leading-relaxed">
            <span className="text-[#DFC8A7] font-semibold">Facilidades de pago:</span> Todos los talleres online de 2 meses tienen la opción de abonarse en <span className="text-[#FAF8F5] font-medium">2 cuotas / partes</span> para acompañar tu proceso con comodidad y sin presiones.
          </p>
        </div>
      </div>
    </section>
  );
};
