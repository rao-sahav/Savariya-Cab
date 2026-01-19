import { Users, Car, Fuel, Wifi } from 'lucide-react'

const Fleet = () => {
  const vehicles = [
    {
      name: 'Swift Dzire',
      image: '🚗',
      capacity: '4 Seater',
      features: ['AC', 'Comfortable Seats', 'Music System', 'GPS Navigation'],
      description:
        'Perfect for small families and couples. Economical and comfortable for city rides and short trips.',
      idealFor: 'Local trips, Airport transfers, Small families',
    },
    {
      name: 'Ertiga',
      image: '🚙',
      capacity: '7 Seater',
      features: ['AC', 'Spacious Interior', 'Third Row Seating', 'Ample Luggage Space'],
      description:
        'Ideal for larger groups. Spacious and comfortable with excellent fuel efficiency for outstation trips.',
      idealFor: 'Family trips, Outstation journeys, Group travel',
    },
    {
      name: 'Innova Crysta',
      image: '🚐',
      capacity: '7 Seater',
      features: ['Premium AC', 'Luxury Interior', 'Comfortable Seating', 'Premium Experience'],
      description:
        'Premium vehicle for those who want extra comfort and luxury. Perfect for long journeys and special occasions.',
      idealFor: 'Long journeys, Business travel, Premium experience',
    },
    {
      name: 'Tempo Traveller',
      image: '🚌',
      capacity: '12-15 Seater',
      features: ['Large Capacity', 'AC', 'Comfortable Seats', 'Ideal for Groups'],
      description:
        'Perfect for large groups, corporate outings, and family gatherings. Spacious and comfortable for group travel.',
      idealFor: 'Large groups, Corporate trips, Family gatherings',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-savariya-black to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Fleet</h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Well-maintained vehicles for every need and budget
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Vehicle Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 text-center">
                  <div className="text-8xl mb-4">{vehicle.image}</div>
                  <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Vehicle Image</span>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="p-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-savariya-black">
                    {vehicle.name}
                  </h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="w-5 h-5 mr-2 text-savariya-yellow" />
                    <span className="font-semibold">{vehicle.capacity}</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{vehicle.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-savariya-black">Features:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-savariya-yellow mr-1">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold mb-2 text-savariya-black">Ideal For:</h3>
                    <p className="text-sm text-gray-600">{vehicle.idealFor}</p>
                  </div>

                  {/* Book Button */}
                  <a
                    href="https://wa.me/917505927268?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-savariya-yellow hover:bg-yellow-400 text-savariya-black text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Book This Vehicle
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-savariya-black">
              Why Our Fleet Stands Out
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Car className="w-8 h-8 text-savariya-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Regular Maintenance</h3>
                  <p className="text-gray-600">
                    All vehicles undergo regular servicing and maintenance to ensure safety and reliability.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Fuel className="w-8 h-8 text-savariya-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fuel Efficient</h3>
                  <p className="text-gray-600">
                    Our vehicles are fuel-efficient, helping you save on travel costs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Wifi className="w-8 h-8 text-savariya-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Modern Amenities</h3>
                  <p className="text-gray-600">
                    Equipped with modern features like AC, music system, and GPS navigation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-8 h-8 text-savariya-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comfortable Seating</h3>
                  <p className="text-gray-600">
                    Spacious and comfortable interiors for a pleasant journey experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-savariya-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Preferred Vehicle</h2>
          <p className="text-lg mb-8 text-gray-300">
            Contact us to check availability and book your ride
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917505927268?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>WhatsApp: 7505927268</span>
            </a>
            <a
              href="tel:7505927268"
              className="bg-savariya-yellow text-savariya-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Call: 7505927268
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Fleet
