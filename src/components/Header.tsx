import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'services' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-[#333] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <img
              src="/amherstview_logo_fixed.png"
              alt="Amherstview Auto Service"
              className="h-16 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`font-medium transition-colors hover:text-[#DC143C] ${
                  currentPage === item.page ? 'text-[#DC143C]' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:613-386-7371"
              className="flex items-center space-x-2 bg-[#DC143C] hover:bg-[#B01030] px-4 py-2 rounded transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">613-386-7371</span>
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#DC143C] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-4 py-3 rounded transition-colors ${
                  currentPage === item.page
                    ? 'bg-[#DC143C] text-white'
                    : 'text-white hover:bg-[#444]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:613-386-7371"
              className="flex items-center space-x-2 px-4 py-3 bg-[#DC143C] hover:bg-[#B01030] rounded transition-colors text-white"
            >
              <Phone size={18} />
              <span className="font-medium">613-386-7371</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
