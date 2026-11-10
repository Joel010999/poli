import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Poli por WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide text-zinc-950 font-sans">
          ¿Hablamos?
        </span>
      </a>
    </aside>
  );
};
