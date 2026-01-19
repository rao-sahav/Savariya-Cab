import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `*Taxi Booking Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Pickup Location:* ${formData.pickup}
*Drop Location:* ${formData.drop}
*Date:* ${formData.date}
*Message:* ${formData.message || 'N/A'}

Please confirm my booking.`

    const whatsappUrl = `https://wa.me/917505927268?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      pickup: '',
      drop: '',
      date: '',
      message: '',
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-savariya-black to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact & Booking</h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Get in touch with us or book your ride directly
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-savariya-black">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-savariya-yellow p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-savariya-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:7505927268"
                      className="text-gray-700 hover:text-savariya-yellow transition-colors"
                    >
                      7505927268
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-savariya-yellow p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-savariya-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/917505927268"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-savariya-yellow transition-colors"
                    >
                      7505927268
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-savariya-yellow p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-savariya-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:sahavrao091@gmail.com"
                      className="text-gray-700 hover:text-savariya-yellow transition-colors"
                    >
                      sahavrao091@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-savariya-yellow p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-savariya-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-700">
                      Sanidham Mandir near Shiva Dhaba,<br />
                      Mama Yadav, Mathura, UP
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <a
                  href="tel:7505927268"
                  className="block w-full bg-savariya-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/917505927268?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-savariya-black">Book Your Ride</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-savariya-yellow focus:border-transparent outline-none"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-savariya-yellow focus:border-transparent outline-none"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="pickup" className="block text-sm font-semibold mb-2 text-gray-700">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="pickup"
                    name="pickup"
                    required
                    value={formData.pickup}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-savariya-yellow focus:border-transparent outline-none"
                    placeholder="Pickup Address"
                  />
                </div>

                <div>
                  <label htmlFor="drop" className="block text-sm font-semibold mb-2 text-gray-700">
                    Drop Location *
                  </label>
                  <input
                    type="text"
                    id="drop"
                    name="drop"
                    required
                    value={formData.drop}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-savariya-yellow focus:border-transparent outline-none"
                    placeholder="Drop Address"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-semibold mb-2 text-gray-700">
                    Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-savariya-yellow focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-savariya-yellow focus:border-transparent outline-none"
                    placeholder="Any special requirements or notes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-savariya-yellow hover:bg-yellow-400 text-savariya-black px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-savariya-black">Find Us</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.1234567890123!2d77.6739!3d27.4924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973718c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSanidham%20Mandir%2C%20Mama%20Yadav%2C%20Mathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Savariya Cab Location - Sanidham Mandir near Shiva Dhaba, Mama Yadav, Mathura"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Sanidham Mandir near Shiva Dhaba, Mama Yadav, Mathura, UP
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
