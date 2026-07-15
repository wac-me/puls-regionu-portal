import { useState, useCallback } from 'react';
import PulsRegionu from './PulsRegionu';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ContestPage from './pages/ContestPage';
import ArchivePage from './pages/ArchivePage';

export default function App() {
  console.log('App renderuje się...');
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on navigation
  }, []);

  switch (currentPage) {
    case 'o-nas': return <AboutPage onNavigate={navigateTo} />;
    case 'kontakt': return <ContactPage onNavigate={navigateTo} />;
    case 'konkurs': return <ContestPage onNavigate={navigateTo} />;
    case 'archiwum': return <ArchivePage onNavigate={navigateTo} />;
    case 'home':
    default:
      return <PulsRegionu onNavigate={navigateTo} />;
  }
}
