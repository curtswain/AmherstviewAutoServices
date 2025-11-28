import { MapPin, Phone, Clock } from 'lucide-react';

type Page = 'home' | 'services' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#333] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Amherstview</span>
              <span className="text-[#DC143C]"> Auto</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Full-service auto repair facility serving Bath, Amherstview, Kingston and surrounding areas since 1983.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => handleNavigate('home')}
                className="block text-gray-300 hover:text-[#DC143C] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('services')}
                className="block text-gray-300 hover:text-[#DC143C] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className="block text-gray-300 hover:text-[#DC143C] transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className="block text-gray-300 hover:text-[#DC143C] transition-colors"
              >
                Contact Us
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-[#DC143C]" />
                <span>304 County Rd 6<br />Bath, ON K0H 1G0</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="flex-shrink-0 text-[#DC143C]" />
                <a href="tel:613-386-7371" className="hover:text-[#DC143C] transition-colors">
                  613-386-7371
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={20} className="mt-1 flex-shrink-0 text-[#DC143C]" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat-Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Amherstview Auto. All rights reserved. Website Design by <span className="font-bold">MDC Digital Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}
