import { MessageCircle, Car, MapPin, Plane, Route } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Local Taxi in Mathura',
      description:
        'Explore Mathura with our reliable local taxi service. Perfect for city tours, temple visits, shopping, and daily commutes. Our experienced drivers know the city inside out, ensuring you reach your destination quickly and safely.',
      features: [
        'City-wide coverage',
        'Hourly and per-trip rates',
        'Professional local drivers',
        'Available 24/7',
      ],
    },
    {
      icon: <Route className="w-12 h-12" />,
      title: 'Mathura to Delhi Taxi',
      description:
        'Comfortable and safe journey from Mathura to Delhi. Our well-maintained vehicles ensure a smooth ride on this popular route. Perfect for business trips, family visits, or tourism.',
      features: [
        'Direct route service',
        'Multiple vehicle options',
        'Fixed and competitive rates',
        'Door-to-door service',
      ],
    },
    {
      icon: <Route className="w-12 h-12" />,
      title: 'Mathura to Agra Taxi',
      description:
        'Visit the iconic Taj Mahal and other attractions in Agra with our reliable taxi service. Enjoy a comfortable journey with our professional drivers who ensure timely arrival.',
      features: [
        'Same-day return available',
        'Tourist-friendly drivers',
        'Flexible timing',
        'Affordable pricing',
      ],
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: 'Airport Pickup & Drop',
      description:
        'Punctual airport transfer service for all major airports including Delhi Airport (IGI), Agra Airport, and others. We track your flight to ensure timely pickup, even for delayed flights.',
      features: [
        'Flight tracking',
        'Meet & greet service',
        'Luggage assistance',
        '24/7 availability',
      ],
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: 'Outstation Cab Service',
      description:
        'Plan your outstation trips with our reliable cab service. Whether it\'s a weekend getaway, family trip, or business travel, we provide comfortable vehicles for all your long-distance travel needs.',
      features: [
        'Multi-city trips',
        'Driver accommodation',
        'Flexible packages',
        'Round trip options',
      ],
    },
  ]

  const handleWhatsAppBooking = (serviceName) => {
    const message = `Hello, I would like to book ${serviceName} service.`
    const whatsappUrl = `https://wa.me/917505927268?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-savariya-black to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Comprehensive taxi solutions for all your travel needs in Mathura and beyond
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/4 bg-savariya-yellow p-8 flex items-center justify-center">
                    <div className="text-savariya-black">{service.icon}</div>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-savariya-black">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="text-savariya-yellow mr-2 font-bold">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => handleWhatsAppBooking(service.title)}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Book on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-savariya-black">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-savariya-yellow mr-3 font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">No hidden charges, clear and upfront pricing for all services.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-savariya-yellow mr-3 font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experienced Drivers</h3>
                  <p className="text-gray-600">Professional drivers with years of experience and local knowledge.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-savariya-yellow mr-3 font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Well-Maintained Fleet</h3>
                  <p className="text-gray-600">Regularly serviced and clean vehicles for your comfort.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-savariya-yellow mr-3 font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-600">Round-the-clock availability for bookings and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-savariya-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-savariya-black">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg mb-8 text-savariya-black">
            Contact us now via WhatsApp or call us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917505927268?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={24} />
              <span>WhatsApp: 7505927268</span>
            </a>
            <a
              href="tel:7505927268"
              className="bg-savariya-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Call: 7505927268
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
