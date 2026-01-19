import { Phone, MessageCircle } from 'lucide-react'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 md:hidden">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917505927268?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:7505927268"
        className="bg-savariya-yellow hover:bg-yellow-400 text-savariya-black p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center font-bold"
        aria-label="Call"
      >
        <Phone size={24} />
      </a>
    </div>
  )
}

export default FloatingButtons
