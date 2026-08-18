import PulsRegionuMockup from './PulsRegionu';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ContestPage from './pages/ContestPage';
import ArchivePage from './pages/ArchivePage';
import { useState, useCallback } from 'react';

const TICKER = [
  { title: "Puls Regionu 153", date: "Luty 2026", url: "http://www.warmiamazury.tv/wp-content/uploads/2026/02/Puls-153TV.pdf" },
  { title: "Puls Regionu 152", date: "Grudzień 2024", url: "http://www.warmiamazury.tv/wp-content/uploads/2024/12/Puls-Regionu152_TV.pdf" },
  { title: "Puls Regionu 151", date: "Grudzień 2023", url: "http://www.warmiamazury.tv/wp-content/uploads/2023/12/Puls-Regionu-151_TV.pdf" },
  { title: "Puls Regionu 149", date: "Styczeń 2023", url: "http://www.warmiamazury.tv/wp-content/uploads/2023/01/Puls-Regionu-149TV.pdf" },
  { title: "Puls Regionu 148", date: "Styczeń 2023", url: "http://www.warmiamazury.tv/wp-content/uploads/2023/01/Puls-Regionu-148TV.pdf" },
  { title: "Puls Regionu 146", date: "Sierpień 2021", url: "http://www.warmiamazury.tv/wp-content/uploads/2021/08/PulsTV146.pdf" },
  { title: "Puls Regionu 145", date: "Grudzień 2020", url: "http://www.warmiamazury.tv/wp-content/uploads/2020/12/Puls-Regionu-145TV.pdf" },
  { title: "Puls Regionu 144", date: "Październik 2020", url: "http://www.warmiamazury.tv/wp-content/uploads/2020/10/Puls-Regionu-144-TV.pdf" },
  { title: "Puls Regionu 143", date: "Grudzień 2019", url: "http://www.warmiamazury.tv/wp-content/uploads/2019/12/Puls-Regionu-143TV.pdf" },
  { title: "Puls Regionu 142", date: "Październik 2019", url: "http://www.warmiamazury.tv/wp-content/uploads/2019/10/Puls-Regionu-142.pdf" },
  { title: "Puls Regionu 141", date: "Lipiec 2019", url: "http://www.warmiamazury.tv/wp-content/uploads/2019/07/Puls-Regionu-141_TV.pdf" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeFilarId, setActiveFilarId] = useState('eko');
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  
  // Stan dla panelu dostępności
  const [panelOpen, setPanelOpen] = useState(true);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscaleMode, setGrayscaleMode] = useState(false);

  const navigateTo = useCallback((page) => {
    setSelectedArticleId(null);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const openArticle = useCallback((filarId, articleId) => {
    setActiveFilarId(filarId);
    setSelectedArticleId(articleId);
    setCurrentPage('home');
  }, []);

  const layoutProps = {
    onNavigate: navigateTo,
    activePage: currentPage,
    activeFilarId,
    setActiveFilarId,
    selectedArticleId,
    setSelectedArticleId,
    onOpenArticle: openArticle,
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
