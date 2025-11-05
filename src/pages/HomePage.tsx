import { Wrench, Shield, Clock, ThumbsUp, ArrowRight } from 'lucide-react';

type Page = 'home' | 'services' | 'about' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Full-Service Auto Repair<br />
            <span className="text-[#DC143C]">All Makes & Models</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200">
            Trusted Automotive Service In Amherstview, & Surrounding Areas Since 1983
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#DC143C] hover:bg-[#B01030] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>Book Appointment</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DC143C] rounded-full mb-4">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DC143C] rounded-full mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Parts and labor guaranteed with confidence</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DC143C] rounded-full mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Service</h3>
              <p className="text-gray-600">Efficient repairs to get you back on the road</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DC143C] rounded-full mb-4">
                <ThumbsUp className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">All Makes & Models</h3>
              <p className="text-gray-600">Servicing every vehicle brand and type</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Amherstview Auto?</h2>
            <p className="text-lg text-gray-700">
              With over 40 years of experience serving the local community, Amherstview Auto Service built it's reputation on honest service, expert repairs, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-[#DC143C]">Experienced Team</h3>
              <p className="text-gray-700">
                At Amherstview Auto Service, our team has decades of experience and genuine passion for cars. From modern cars to classic rides, the team knows what it takes to keep your car on the road.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-[#DC143C]">Honest Pricing</h3>
              <p className="text-gray-700">
                Great service starts with honesty. Every service comes with a clear parts and labor price breakdown, so you know exactly what you're paying for.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-[#DC143C]">Local & Trusted</h3>
              <p className="text-gray-700">
                Amherstview Auto Service is Proud to be the automotive repair facility our community can count on for dependable repairs, friendly service, and fair treatment every time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-[#DC143C]">Complete Service</h3>
              <p className="text-gray-700">
                Whether you need a simple oil change or a full engine repair, Amherstview Auto Service has you covered, offering complete care for your vehicle. Done right the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#DC143C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Call us today or book your appointment online</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:613-386-7371"
              className="bg-white text-[#DC143C] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 613-386-7371
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="bg-[#333] hover:bg-[#222] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
