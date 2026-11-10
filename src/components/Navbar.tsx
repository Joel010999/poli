import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Calendar, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../data/content';

interface NavbarProps {
  activeTab?: string;
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab = 'inicio', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre mí', id: 'sobre-mi' },
    { label: 'Programas', id: 'programas' },
    { label: 'Kundalini 2027', id: 'kundalini' },
    { label: 'Tienda', id: 'tienda' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090e0b]/95 backdrop-blur-md border-b border-[#223126]/70 py-2.5 sm:py-3 shadow-lg'
            : 'bg-gradient-to-b from-[#080d0a]/90 via-[#080d0a]/50 to-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with original dandelion */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('inicio');
              }}
              className="cursor-pointer group transition-transform duration-200 active:scale-95"
            >
              <Logo className="h-10 sm:h-11" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-sm tracking-wide transition-colors relative py-1 font-medium cursor-pointer ${
                      isActive
                        ? 'text-[#FAF8F5]'
                        : 'text-[#B8C0B9] hover:text-[#DFC8A7]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A882] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D5B08A] hover:bg-[#E5C39F] text-[#121914] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 stroke-[2.2]" />
                <span>Reservá tu lugar</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2 text-[#D5B08A] bg-[#142017] border border-[#2b3d2f] rounded-full"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#E8E6E1] hover:text-[#DFC8A7] focus:outline-none cursor-pointer rounded-lg bg-[#142017]/80 border border-[#2b3d2f]"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu - Premium Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070c09]/98 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 lg:hidden animate-fadeIn overflow-y-auto">
          <div className="flex flex-col gap-1 text-lg font-serif divide-y divide-[#18261c]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-2xl text-[#E8E6E1] active:text-[#C9A882] py-4 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#8C988F]" />
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 flex flex-col gap-4">
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#D5B08A] text-[#121914] py-4 rounded-full font-semibold text-sm tracking-wide text-center shadow-xl active:scale-98"
            >
              <Calendar className="w-4 h-4 stroke-[2.2]" />
              <span>Reservá tu lugar</span>
            </a>
            
            <div className="text-center space-y-1">
              <p className="text-xs text-[#DFC8A7] font-serif italic">
                "Guío, acompaño y sostengo."
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#69786c] font-sans">
                Yoga Pausa · Poli Heredia
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
