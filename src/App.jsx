import PulsRegionuMockup from './PulsRegionu';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ContestPage from './pages/ContestPage';
import ArchivePage from './pages/ArchivePage';
import { useState, useCallback } from 'react';

const TICKER = [
  { gmina: "Sołectwo Bartoszyce", stat: "8,4 t elektroodpadów", trend: "+12%" },
  { gmina: "Sołectwo Mrągowo", stat: "156 nowych nasadzeń", trend: "+34%" },
  { gmina: "Sołectwo Giżycko", stat: "sprzęt OSP za 12 400 zł", trend: "nowość" },
  { gmina: "Sołectwo Ostróda", stat: "3 ogrody społeczne", trend: "+2" },
  { gmina: "Sołectwo Kętrzyn", stat: "22,1 t elektroodpadów", trend: "+8%" },
  { gmina: "Sołectwo Pisz", stat: "czyste jezioro Roś — akcja 140 os.", trend: "rekord" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeFilarId, setActiveFilarId] = useState('eko');
  
  // Stan dla panelu dostępności
  const [panelOpen, setPanelOpen] = useState(true);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscaleMode, setGrayscaleMode] = useState(false);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const layoutProps = {
    onNavigate: navigateTo,
    activePage: currentPage,
    activeFilarId,
    setActiveFilarId,
    TICKER,
    panelOpen, setPanelOpen,
    largeText, setLargeText,
    highContrast, setHighContrast,
    grayscaleMode, setGrayscaleMode
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'o-nas': return <AboutPage {...layoutProps} />;
      case 'kontakt': return <ContactPage {...layoutProps} />;
      case 'konkurs': return <ContestPage {...layoutProps} />;
      case 'archiwum': return <ArchivePage {...layoutProps} />;
      case 'home':
      default:
        return <PulsRegionuMockup {...layoutProps} />;
    }
  };

  return renderContent();
}
