import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

type Page = 'home' | 'services' | 'about' | 'contact' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
switch (currentPage) {
  case 'home':
    return <HomePage onNavigate={setCurrentPage} />;

  case 'services':
    return <ServicesPage />;

  case 'about':
    return <AboutPage />;

  case 'contact':
    return <ContactPage />;

  case 'privacy':
    return <PrivacyPolicyPage />;

  default:
    return <HomePage onNavigate={setCurrentPage} />;
}
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
