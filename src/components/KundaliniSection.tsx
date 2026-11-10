import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Eye, X, Play } from 'lucide-react';
import { KUNDALINI_FORMATION, getWhatsAppLink } from '../data/content';

export const KundaliniSection: React.FC = () => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="kundalini" className="relative py-16 sm:py-24 lg:py-32 bg-[#0c140f] overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute -top-40 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#C9A882]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#25382a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Asymmetrical editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (5 cols): Visual composition with Poli, graduate, brand image & Video trigger */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative space-y-6">
              
              {/* Card principal con foto de Poli y egresada */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2c3d30] shadow-2xl bg-[#141e17] group">
                <img
                  src={KUNDALINI_FORMATION.graduatesImage}
                  alt="Entrega de certificado Formación Kundalini Yoga"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-[center_20%] filter brightness-95 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c140f] via-transparent to-black/20" />

                {/* Overlaid highlight box with certificate preview button */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a100c]/90 backdrop-blur-md border border-[#2b3a2f]/80">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[#D5B08A]">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold">{KUNDALINI_FORMATION.yearsExperience}</span>
                    </div>
                    <button
                      onClick={() => setShowCertificateModal(true)}
                      className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-[#DFC8A7] hover:text-[#FAF8F5] underline underline-offset-4 cursor-pointer"
                    >
                      <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Ver certificado oficial</span>
                    </button>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-[#FAF8F5] mb-1">
                    Escuela Yoga Pausa · Poli Heredia
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#A9B3AA] leading-relaxed">
                    Certificación avalada como Profesora Amritananda. Manual propio de kriyas, pranayamas, mantras y pedagogía sagrada.
                  </p>
                </div>
              </div>

              {/* Botón / Card destacada para ver el video oficial de la formación */}
              <div 
                onClick={() => setShowVideoModal(true)}
                className="group cursor-pointer rounded-2xl bg-gradient-to-r from-[#162319] to-[#1d2f22] border border-[#2d4233] p-4 flex items-center justify-between gap-4 shadow-xl hover:border-[#C9A882]/70 transition-all duration-300 active:scale-98"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#D5B08A] text-[#121914] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D5B08A] font-semibold block">
                      Video Exclusivo
                    </span>
                    <h5 className="font-serif text-sm sm:text-base text-[#FAF8F5] font-medium leading-tight">
                      {KUNDALINI_FORMATION.videoTitle}
                    </h5>
                  </div>
                </div>

                <div className="hidden sm:flex items-center text-xs text-[#DFC8A7] font-medium">
                  <span>Ver video</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>

              {/* Float Badge superior */}
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-6 bg-[#D5B08A] text-[#121914] px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 font-semibold text-[11px] sm:text-xs tracking-wider">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                <span>{KUNDALINI_FORMATION.dates.duration}</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): In-depth narrative & curriculum & exact pricing */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#D5B08A]">
                FORMACIÓN EXCLUSIVA DE INSTRUCTORAS
              </span>
              <div className="h-[1px] w-8 sm:w-12 bg-[#C9A882]/50" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#FAF8F5] leading-tight mb-2">
              Formación de <br />
              <span className="italic text-[#DFC8A7]">Kundalini Yoga Online</span>
            </h2>

            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#C9A882] font-medium mb-4">
              {KUNDALINI_FORMATION.subtitle}
            </p>

            {/* Fechas clave */}
            <div className="p-3.5 rounded-xl bg-[#141e17] border border-[#233527] mb-6 flex flex-wrap items-center gap-4 text-xs text-[#C8D1CA]">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D5B08A]" />
                <span><strong>Inicio:</strong> {KUNDALINI_FORMATION.dates.startDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span><strong>Cierre:</strong> {KUNDALINI_FORMATION.dates.endDate}</span>
              </div>
              <div className="text-[11px] text-[#DFC8A7] bg-[#1f2d22] px-2.5 py-0.5 rounded-full">
                {KUNDALINI_FORMATION.dates.duration}
              </div>
            </div>

            {/* Descripción oficial de Poli */}
            <div className="space-y-3 mb-6">
              <p className="text-sm sm:text-base text-[#FAF8F5] font-light leading-relaxed">
                {KUNDALINI_FORMATION.description}
              </p>
            </div>

            {/* 5 Características detalladas del programa */}
            <div className="space-y-3 mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DFC8A7] block">
                Lo que vivirás a lo largo de los 7 módulos y 7 Chakras:
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                {KUNDALINI_FORMATION.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#131d16]/80 border border-[#202e23] flex items-start gap-3">
                    <span className="text-base flex-shrink-0 mt-0.5">🪷</span>
                    <div>
                      <h6 className="text-xs font-semibold text-[#FAF8F5] mb-0.5">{feat.title}</h6>
                      <p className="text-xs text-[#A9B3AA] leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuadro de Valores Oficiales */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#142017] border border-[#2f4334] mb-6">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D5B08A] block mb-2">
                Valores de la Formación 2027:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#0d1610] border border-[#243729]">
                  <span className="text-[11px] text-[#A9B3AA] block">Inscripción y reserva del material:</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-xl text-[#DFC8A7] font-semibold">{KUNDALINI_FORMATION.pricing.inscription.ars}</span>
                    <span className="text-xs text-[#8F9E92]">({KUNDALINI_FORMATION.pricing.inscription.usd})</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0d1610] border border-[#243729]">
                  <span className="text-[11px] text-[#A9B3AA] block">Valor mensual de la Formación:</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-xl text-[#FAF8F5] font-semibold">{KUNDALINI_FORMATION.pricing.monthly.ars}</span>
                    <span className="text-xs text-[#8F9E92]">({KUNDALINI_FORMATION.pricing.monthly.usd})</span>
                  </div>
                  <span className="text-[10px] text-[#7A887E] block mt-1">* Se actualizarán cada 2 meses según IPC</span>
                </div>
              </div>
            </div>

            {/* Certification statement */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#16221a]/60 border border-[#2b3c2f] flex items-center gap-3 sm:gap-3.5 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#D5B08A] flex-shrink-0" />
              <p className="text-xs text-[#B6C2B8] leading-relaxed">
                <span className="text-[#FAF8F5] font-medium">Certificación final:</span> {KUNDALINI_FORMATION.certificationOutcome}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={getWhatsAppLink(KUNDALINI_FORMATION.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#D5B08A] hover:bg-[#E5C39F] text-[#121914] px-6 sm:px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-lg active:scale-95 text-center"
              >
                <span>Inscribirme a la Formación (Abril 2027)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-[11px] sm:text-xs text-[#8F9E92] italic text-center sm:text-left">
                * Cupos reducidos para seguimiento personalizado
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Modal Video Player */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-[#101812] border border-[#2c3d30] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#A9B3AA] hover:text-[#FAF8F5] p-2 rounded-full bg-black/50 z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-3">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D5B08A] font-semibold">Video de la Formación</span>
              <h3 className="font-serif text-lg sm:text-xl text-[#FAF8F5]">{KUNDALINI_FORMATION.videoTitle}</h3>
            </div>
            <div className="rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center">
              <video
                src={KUNDALINI_FORMATION.videoPath}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Tu navegador no soporta el formato de video.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Modal Lightbox for Certificate View */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-[#121c15] border border-[#2c3d30] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6">
            <button
              onClick={() => setShowCertificateModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#A9B3AA] hover:text-[#FAF8F5] p-2 rounded-full bg-black/40 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-3 sm:mb-4">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D5B08A] font-semibold">Documento Oficial</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5]">Certificado Escuela Yoga Pausa</h3>
              <p className="text-xs text-[#A9B3AA]">Emitido y firmado por Poli Heredia (Prof. Amritananda)</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#243528]">
              <img
                src={KUNDALINI_FORMATION.certificateImage}
                alt="Certificado Escuela Yoga Pausa - Kundalini Yoga"
                className="w-full h-auto object-contain max-h-[65vh] sm:max-h-[70vh] mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
