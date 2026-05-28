import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(201,169,110,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">Get in Touch</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mt-3 mb-4">
            Contact Us
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-dark-brown to-deep-green border border-gold/10 premium-shadow-lg">
              <h3 className="font-serif text-2xl text-cream font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-3.5 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-3.5 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-5 py-3.5 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-sm py-3.5"
                  onClick={(e) => e.preventDefault()}
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-brown border border-gold/20 hover:border-gold/40 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-xl text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-serif font-semibold text-lg mb-1">WhatsApp</h4>
                  <a href="https://wa.me/918008984983" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-light-gold transition-colors">
                    +91 8008984983
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-dark-brown border border-gold/20 hover:border-gold/40 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-xl text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-serif font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:sevakenterprises@gmail.com" className="text-gold hover:text-light-gold transition-colors break-all">
                    sevakenterprises@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-dark-brown border border-gold/20 hover:border-gold/40 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <FaInstagram className="text-xl text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-serif font-semibold text-lg mb-1">Instagram</h4>
                  <a href="https://instagram.com/sevak_enterprises_" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-light-gold transition-colors">
                    @sevak_enterprises_
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-dark-brown to-deep-green border border-gold/10">
              <h4 className="text-cream font-serif text-lg font-semibold mb-3">Quick Response</h4>
              <p className="text-cream/60 text-sm leading-relaxed">
                We typically respond within 24 hours. For urgent inquiries, please reach out via WhatsApp for the fastest response.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
