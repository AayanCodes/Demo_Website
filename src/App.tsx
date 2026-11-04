import React, { useState, useEffect } from 'react';
import { FacilityItem, Language, PageView } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { AcademicsPage } from './components/pages/AcademicsPage';
import { CampusLifePage } from './components/pages/CampusLifePage';
import { AdmissionsPage } from './components/pages/AdmissionsPage';
import { ContactPage } from './components/pages/ContactPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { BookVisitModal } from './components/common/BookVisitModal';
import { LightboxModal } from './components/common/LightboxModal';
import { ACADEMY_INFO } from './data/content';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('noor_preferred_lang');
      return saved === 'ar' ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  });

  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      const validPages: PageView[] = ['home', 'about', 'academics', 'campus-life', 'admissions', 'contact'];
      if (rawHash === '') {
        setCurrentPage('home');
      } else if (validPages.includes(rawHash as PageView)) {
        setCurrentPage(rawHash as PageView);
      } else {
        setCurrentPage('not-found');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync HTML attributes for RTL/LTR & fonts
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    if (language === 'ar') {
      document.title = 'أكاديمية نور الإسلامية الدولية | الشارقة، الإمارات العربية المتحدة';
    } else {
      document.title = 'Noor Academy | Islamic International Academy — Sharjah, UAE';
    }

    try {
      localStorage.setItem('noor_preferred_lang', language);
    } catch {
      // Ignore local storage error
    }
  }, [language]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            language={language}
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onSelectFacility={(fac) => setSelectedFacility(fac)}
          />
        );
      case 'about':
        return (
          <AboutPage
            language={language}
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );
      case 'academics':
        return (
          <AcademicsPage
            language={language}
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );
      case 'campus-life':
        return (
          <CampusLifePage
            language={language}
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onSelectFacility={(fac) => setSelectedFacility(fac)}
          />
        );
      case 'admissions':
        return (
          <AdmissionsPage
            language={language}
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );
      case 'contact':
        return <ContactPage language={language} />;
      case 'not-found':
      default:
        return <NotFoundPage language={language} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#F8F7F2] text-[#242824] antialiased ${
        language === 'ar' ? 'font-arabic-sans' : 'font-sans'
      }`}
    >
      {/* Primary Sticky Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1 w-full bg-islamic-pattern">
        {renderCurrentPage()}
      </main>

      {/* Institutional Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
      />

      {/* Book Campus Tour Modal */}
      <BookVisitModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        language={language}
      />

      {/* Facility Visual Lightbox */}
      <LightboxModal
        item={selectedFacility}
        onClose={() => setSelectedFacility(null)}
        language={language}
      />
    </div>
  );
}
