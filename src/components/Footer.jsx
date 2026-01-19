import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-savariya-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-savariya-yellow text-savariya-black px-3 py-1 rounded inline-block">
              Savariya Cab
            </h3>
            <p className="text-gray-300 mb-4">
              Reliable taxi service in Mathura. Local, outstation & airport taxi – 24/7 available.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-savariya-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-savariya-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-savariya-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-300 hover:text-savariya-yellow transition-colors">
                  Fleet
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-savariya-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Local Taxi in Mathura</li>
              <li>Mathura to Delhi</li>
              <li>Mathura to Agra</li>
              <li>Airport Pickup & Drop</li>
              <li>Outstation Cab Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={20} className="mt-1 text-savariya-yellow" />
                <a href="tel:7505927268" className="text-gray-300 hover:text-savariya-yellow transition-colors">
                  7505927268
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle size={20} className="mt-1 text-savariya-yellow" />
                <a
                  href="https://wa.me/917505927268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-savariya-yellow transition-colors"
                >
                  WhatsApp: 7505927268
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={20} className="mt-1 text-savariya-yellow" />
                <a
                  href="mailto:sahavrao091@gmail.com"
                  className="text-gray-300 hover:text-savariya-yellow transition-colors"
                >
                  sahavrao091@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 text-savariya-yellow" />
                <span className="text-gray-300">
                  Sanidham Mandir near Shiva Dhaba,<br />
                  Mama Yadav, Mathura, UP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Savariya Cab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
