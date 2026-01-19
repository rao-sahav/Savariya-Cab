import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Shield, Clock, Star, Users, Car } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Local Taxi',
      description: 'Reliable local taxi service in Mathura for all your city travel needs.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Outstation',
      description: 'Comfortable outstation cab service to Delhi, Agra, and beyond.',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Airport Service',
      description: 'Punctual airport pickup and drop service available 24/7.',
    },
  ]

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe & Secure',
      description: 'Professional drivers with verified credentials and safe driving records.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Available',
      description: 'Round-the-clock service for your convenience, anytime, anywhere.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Best Rates',
      description: 'Competitive pricing with transparent fare structure, no hidden charges.',
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Well Maintained',
      description: 'Clean, comfortable, and well-maintained vehicles for your journey.',
    },
  ]

  const fleetPreview = [
    { name: 'Swift Dzire', capacity: '4 Seater', image: '🚗' },
    { name: 'Ertiga', capacity: '7 Seater', image: '🚙' },
    { name: 'Innova Crysta', capacity: '7 Seater', image: '🚐' },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mathura',
      text: 'Excellent service! Very punctual and professional driver. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      text: 'Used their service for Mathura to Delhi trip. Comfortable ride and reasonable price.',
      rating: 5,
    },
    {
      name: 'Amit Singh',
      location: 'Mathura',
      text: 'Best taxi service in Mathura. Always on time and vehicles are well maintained.',
      rating: 5,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-savariya-black to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Reliable Taxi Service in Mathura
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Local, Outstation & Airport Taxi – 24/7 Available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7505927268"
                className="bg-savariya-yellow text-savariya-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone size={24} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917505927268?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={24} />
                <span>WhatsApp Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-savariya-yellow mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-block bg-savariya-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-savariya-yellow"
              >
                <div className="text-savariya-yellow mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetPreview.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-6xl mb-4">{vehicle.image}</div>
                <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.capacity}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/fleet"
              className="inline-block bg-savariya-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Full Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-savariya-yellow text-savariya-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-savariya-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-savariya-black">
            Ready to Book Your Ride?
          </h2>
          <p className="text-lg mb-8 text-savariya-black">
            Contact us now for the best taxi service in Mathura
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7505927268"
              className="bg-savariya-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone size={24} />
              <span>Call: 7505927268</span>
            </a>
            <a
              href="https://wa.me/917505927268?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={24} />
              <span>WhatsApp: 7505927268</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
