import { Award, Users, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#333] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Amherstview Auto</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted automotive partner since 1983
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Serving Our Community for Over 40 Years</h2>
              <p className="text-lg text-gray-700 mb-4">
                Since 1983, Amherstview Auto Service has been the go-to automotive repair facility for residents of Amherstview, Bath, Kingston, and surrounding areas. What started as a small local garage has grown into a full-service repair facility, but our commitment to honest service and quality workmanship has never changed.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the decades, Amherstview Auto Service has built lasting relationships with our customers based on trust, transparency, and expertise. Many of our clients have been with us for years, and we've had the privilege of servicing multiple generations of families in our community.
              </p>
              <p className="text-lg text-gray-700">
                Proud to be a locally-owned and operated business, deeply rooted in the community we serve. When you choose Amherstview Auto Service, you're choosing a team that truly cares about keeping you safe on the road.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Screenshot 2025-10-22 153256.png"
                alt="Amherstview Auto repair shop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DC143C] rounded-full mb-4">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-700">
                Striving for excellence in every repair, using quality parts and professional Installation to ensure lasting results.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DC143C] rounded-full mb-4">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-gray-700">
                Our team of certified technicians constantly improve their training and skills to service the latest vehicle technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DC143C] rounded-full mb-4">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-700">
                Honest assessments and transparent pricing. Only recommending repairs your vehicle truly needs.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DC143C] rounded-full mb-4">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-700">
                Your satisfaction is top priority at Amherstview Auto Service, that's why answering questions and addressing your concerns is key.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#DC143C]">Experienced Technicians</h3>
                <p className="text-gray-700">
                  Our team brings decades of combined experience to every repair and service. Staying current with new automotive technology.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#DC143C]">All Makes & Models</h3>
                <p className="text-gray-700">
                  From modern vehicles, classic cars, hybrids, and electric vehicles, we service them all. No matter what you drive, we have the knowledge and tools to keep you driving on the road with confidence.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#DC143C]">Quality Guarantee</h3>
                <p className="text-gray-700">
                  Standing behind our work with confidence. Every repair is performed to the highest standards, using guaranteed quality parts.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#DC143C]">Community Focused</h3>
                <p className="text-gray-700">
                  As a local business invested in our community, treating every customer like family because that's what you mean to Amherstview Auto Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#DC143C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8">Visit us today and see why our customers trust us with their vehicles</p>
          <a
            href="tel:613-386-7371"
            className="inline-block bg-white text-[#DC143C] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Call Us: 613-386-7371
          </a>
        </div>
      </section>
    </div>
  );
}
