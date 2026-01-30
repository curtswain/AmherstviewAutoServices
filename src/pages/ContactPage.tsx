import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          vehicle_make_model: formData.vehicle,
          message: formData.message,
        });

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', vehicle: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div>
      <section className="bg-[#333] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact us today! We're here to help with all your automotive needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent outline-none"
                    placeholder="613-XXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Make & Model
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent outline-none"
                    placeholder="e.g., 2020 Honda Civic"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your vehicle and what service you need..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please call us directly at 613-386-7371.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Us</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#DC143C] rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=304+County+Rd+6,+Bath,+ON+K0H+1G0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC143C] hover:underline"
                    >
                      304 County Rd 6<br />
                      Bath, ON K0H 1G0
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#DC143C] rounded-lg flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:613-386-7371" className="text-[#DC143C] hover:underline text-lg">
                      613-386-7371
                    </a>
                    </div>
</div>
                 <div className="flex items-start space-x-4">
  <div className="flex-shrink-0">
    <div className="w-12 h-12 bg-[#DC143C] rounded-lg flex items-center justify-center">
      <Mail className="text-white" size={24} />
    </div>
  </div>

  <div>
    <h3 className="font-bold text-lg mb-1">Email</h3>
    <a
      href="mailto:contact@amherstviewauto.ca"
      className="text-[#DC143C] hover:underline text-lg"
    >
      contact@amherstviewauto.ca
    </a>
  </div>
</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#DC143C] rounded-lg flex items-center justify-center">
                      <Clock className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="text-[#DC143C] mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Prefer to Call?</h3>
                    <p className="text-gray-700 mb-3">
                      We're always happy to answer questions over the phone or schedule your appointment directly.
                    </p>
                    <a
                      href="tel:613-386-7371"
                      className="inline-block bg-[#DC143C] hover:bg-[#B01030] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Call: 613-386-7371
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="w-full h-[450px] bg-gray-100 flex items-center justify-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=304+County+Rd+6,+Bath,+ON+K0H+1G0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-4 text-center px-4"
          >
            <MapPin className="text-[#DC143C]" size={64} />
            <div>
              <h3 className="text-2xl font-bold mb-2">View on Google Maps</h3>
              <p className="text-gray-700">
                304 County Rd 6<br />
                Bath, ON K0H 1G0
              </p>
              <p className="text-[#DC143C] hover:underline mt-2 font-semibold">
                Click to open in Google Maps
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
