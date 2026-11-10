import React from 'react';

export const Logo: React.FC<{ className?: string; inverted?: boolean; showText?: boolean }> = ({
  className = "h-11",
  inverted = false,
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original Dandelion Brand Mark */}
      <div className="relative w-9 h-11 flex-shrink-0 flex items-center justify-center">
        <img
          src={inverted ? "/material/logo_transparent.png" : "/material/logo_inverted_white.png"}
          alt="Yoga Pausa - Diente de león"
          className="w-full h-full object-contain filter drop-shadow-sm"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-serif text-xl tracking-wide font-normal ${
              inverted ? "text-[#121914]" : "text-[#FAF8F5]"
            }`}
          >
            Yoga Pausa
          </span>
          <span
            className={`text-[9px] tracking-[0.28em] uppercase font-sans font-medium ${
              inverted ? "text-[#47574a]" : "text-[#D5B08A]"
            }`}
          >
            POLI HEREDIA
          </span>
        </div>
      )}
    </div>
  );
};
