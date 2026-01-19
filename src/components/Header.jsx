import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/fleet', label: 'Fleet' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-savariya-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-savariya-yellow text-savariya-black px-4 py-2 rounded-lg font-bold text-xl">
              Savariya Cab
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'bg-savariya-yellow text-savariya-black font-semibold'
                    : 'hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:7505927268"
              className="bg-savariya-yellow text-savariya-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-md ${
                    isActive(link.path)
                      ? 'bg-savariya-yellow text-savariya-black font-semibold'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:7505927268"
                className="bg-savariya-yellow text-savariya-black px-4 py-2 rounded-md font-semibold text-center flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
