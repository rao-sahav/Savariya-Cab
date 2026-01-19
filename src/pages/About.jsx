import { Shield, Users, Award, Clock } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Safety First',
      description: 'Your safety is our top priority. All our drivers are verified and vehicles are regularly maintained.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Customer Focus',
      description: 'We believe in building long-term relationships with our customers through exceptional service.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Quality Service',
      description: 'We maintain high standards in everything we do, from vehicle cleanliness to driver professionalism.',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Punctuality',
      description: 'We understand the value of your time and ensure timely pickups and drop-offs.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-savariya-black to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Savariya Cab</h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Your trusted taxi service partner in Mathura
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-savariya-black">Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Savariya Cab is a leading taxi service provider in Mathura, Uttar Pradesh, dedicated to
                offering safe, affordable, and reliable transportation solutions. With years of experience
                in the industry, we have built a reputation for excellence and customer satisfaction.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We understand that every journey matters, whether it's a short local trip, an outstation
                journey to Delhi or Agra, or an airport transfer. That's why we ensure that every ride
                with us is comfortable, safe, and on time.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our fleet consists of well-maintained vehicles, and our professional drivers are trained
                to provide you with the best possible experience. We are available 24/7 to serve you,
                making us your reliable travel partner in Mathura.
              </p>
            </div>

            <div className="bg-savariya-yellow rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-savariya-black">Our Mission</h2>
              <p className="text-savariya-black text-lg leading-relaxed">
                To provide safe, affordable, and reliable taxi services to our customers while maintaining
                the highest standards of professionalism and customer service. We aim to make every journey
                comfortable and memorable, ensuring that our customers choose us again and again.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-savariya-black">Why Choose Savariya Cab</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-savariya-yellow mr-3 font-bold">✓</span>
                  <span>
                    <strong>Professional Drivers:</strong> All our drivers are experienced, verified, and
                    trained to provide excellent service.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-savariya-yellow mr-3 font-bold">✓</span>
                  <span>
                    <strong>Clean Vehicles:</strong> Our fleet is regularly maintained and cleaned to ensure
                    a comfortable ride.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-savariya-yellow mr-3 font-bold">✓</span>
                  <span>
                    <strong>24/7 Availability:</strong> We are available round the clock for your
                    convenience.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-savariya-yellow mr-3 font-bold">✓</span>
                  <span>
                    <strong>Competitive Pricing:</strong> We offer transparent pricing with no hidden
                    charges.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-savariya-yellow mr-3 font-bold">✓</span>
                  <span>
                    <strong>Wide Coverage:</strong> We serve local, outstation, and airport transfer needs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-savariya-yellow mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-savariya-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 text-gray-300">
            Have questions? We'd love to hear from you. Contact us today!
          </p>
          <a
            href="/contact"
            className="inline-block bg-savariya-yellow text-savariya-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
