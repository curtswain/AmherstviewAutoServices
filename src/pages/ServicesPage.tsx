import { Droplet, Wrench, ClipboardCheck, Cog, Car, Zap, Wind, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Droplet,
      title: 'Oil Change & Maintenance',
      description: 'Regular oil changes and preventative maintenance to keep your vehicle running smoothly. We use quality oils and filters, check all fluid levels, and perform multi-point inspections.',
      details: [
        'Full synthetic & conventional oil changes',
        'Oil filter replacement',
        'Fluid level checks & top-ups',
        'Multi-point vehicle inspection',
        'Tire pressure check',
      ],
    },
    {
      icon: Wrench,
      title: 'Diagnostics & Repairs',
      description: 'Advanced diagnostic equipment and experienced technicians to identify and repair issues efficiently. From check engine lights to complex electrical issues, we have you covered.',
      details: [
        'Check engine light diagnosis',
        'Electrical system repairs',
        'Computer diagnostics',
        'Brake system repairs',
        'Suspension & steering repairs',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Safety Inspections',
      description: 'Comprehensive safety inspections to ensure your vehicle meets all provincial standards. We inspect all critical safety systems and provide detailed reports.',
      details: [
        'Annual safety inspections',
        'Pre-purchase inspections',
        'Detailed inspection reports',
        'Compliance certification',
        'Safety recommendations',
      ],
    },
    {
      icon: Cog,
      title: 'Transmission & Engine Service',
      description: 'Expert transmission and engine services from routine maintenance to major repairs. We handle manual and automatic transmissions on all makes and models.',
      details: [
        'Transmission fluid service',
        'Engine tune-ups',
        'Timing belt replacement',
        'Clutch repairs & replacement',
        'Engine diagnostics & repairs',
      ],
    },
    {
      icon: Car,
      title: 'Exhaust System',
      description: 'Complete exhaust system inspection, repair, and replacement. From mufflers to catalytic converters, we ensure your exhaust system operates efficiently and quietly.',
      details: [
        'Muffler repair & replacement',
        'Catalytic converter service',
        'Exhaust leak repairs',
        'Custom exhaust solutions',
        'Aftermarket exhaust installations',
      ],
    },
    {
      icon: Zap,
      title: 'Battery & Electrical',
      description: 'Full electrical system services including battery testing, alternator repairs, and starter replacement. We diagnose and repair all electrical issues.',
      details: [
        'Battery testing & replacement',
        'Alternator repairs',
        'Starter motor service',
        'Wiring repairs',
        'Electrical troubleshooting',
      ],
    },
    {
      icon: Wind,
      title: 'Heating & Air Conditioning',
      description: 'Stay comfortable year-round with our HVAC services. We repair and recharge air conditioning systems and repair heating issues for all seasons.',
      details: [
        'A/C recharge & repairs',
        'Heating system repairs',
        'Cabin air filter replacement',
        'Climate control diagnostics',
        'Compressor replacement',
      ],
    },
    {
      icon: CheckCircle,
      title: 'General Repairs',
      description: 'Whatever your vehicle needs, we can help. Our full-service facility handles everything from minor repairs to major overhauls on all makes and models.',
      details: [
        'Coolant system service',
        'Belt & hose replacement',
        'Wheel bearing replacement',
        'Shock & strut replacement',
        'General maintenance',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-[#333] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automotive repair and maintenance services for all makes and models. Quality work you can trust.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#DC143C] rounded-lg flex items-center justify-center">
                        <IconComponent className="text-white" size={28} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-600">
                            <CheckCircle size={18} className="text-[#DC143C] mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners & Affiliates</h2>
          <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto flex-wrap">
            <a
              href="https://www.moogparts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/Screenshot 2025-10-22 160113.png"
                alt="MOOG"
                className="h-16 w-auto object-contain"
                style={{ clipPath: 'inset(0 75% 0 0)' }}
              />
            </a>
            <a
              href="https://www.monroe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/Screenshot 2025-10-22 160113.png"
                alt="Monroe"
                className="h-16 w-auto object-contain"
                style={{ clipPath: 'inset(0 50% 0 25%)' }}
              />
            </a>
            <a
              href="https://www.walkerexhaust.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/Screenshot 2025-10-22 160113.png"
                alt="Walker"
                className="h-16 w-auto object-contain"
                style={{ clipPath: 'inset(0 25% 0 50%)' }}
              />
            </a>
            <a
              href="https://acdelcocanada.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/Screenshot 2025-10-22 160113.png"
                alt="ACDelco"
                className="h-16 w-auto object-contain"
                style={{ clipPath: 'inset(0 0 0 75%)' }}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">We Service All Makes & Models</h2>
            <p className="text-lg text-gray-700 mb-8">
              From domestic to import, classic to modern, our experienced technicians have the expertise and equipment to service any vehicle. Whether you drive a Honda, Ford, Toyota, Chevrolet, or any other brand, we have you covered.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-[#DC143C]">Quality Parts & Service</h3>
              <p className="text-gray-700 mb-4">
                Only servicing with quality parts from trusted suppliers to ensure your repairs last. Every service is backed by our commitment to excellence and customer satisfaction.
              </p>
              <p className="text-gray-700">
                Don't see the service you need listed? Give us a call at{' '}
                <a href="tel:613-386-7371" className="text-[#DC143C] font-semibold hover:underline">
                  613-386-7371
                </a>
                . We handle a wide range of automotive repairs and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
