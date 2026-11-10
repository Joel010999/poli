import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { KundaliniSection } from './components/KundaliniSection';
import { AboutSection } from './components/AboutSection';
import { StoreSection } from './components/StoreSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');

  const handleNavigate = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080d0a] text-[#EDE8DF] selection:bg-[#c99f78] selection:text-[#111612]">
      {/* Global Navigation */}
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero / Reference 1 */}
        <Hero
          onExplorePrograms={() => handleNavigate('programas')}
          onAboutMe={() => handleNavigate('sobre-mi')}
        />

        {/* 2. Sobre mí / Reference 3 */}
        <AboutSection />

        {/* 3. Programas y Talleres / Reference 2 */}
        <ProgramsSection />

        {/* 4. Formación Transformación Kundalini 2027 */}
        <KundaliniSection />

        {/* 5. Tienda / Productos (Oráculo + Mates) */}
        <StoreSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
