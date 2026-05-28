import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-dark-brown border-t border-gold/10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-light-gold flex items-center justify-center">
                <span className="text-dark-brown font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif text-xl font-bold text-cream">SEVAK</span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Premium eco-friendly spiritual products crafted with tradition, purity, and love for nature.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-cream font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream/50 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-cream font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/919908275998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2"
                >
                  <FaWhatsapp className="text-gold" /> +91 9908275998
                </a>
              </li>
              <li>
                <a
                  href="mailto:sevakenterprises@gmail.com"
                  className="text-cream/50 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2"
                >
                  <FaEnvelope className="text-gold" /> sevakenterprises@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sevak_enterprises_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2"
                >
                  <FaInstagram className="text-gold" /> @sevak_enterprises_
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-cream font-serif text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-cream/50 text-sm mb-4">Stay updated with new products and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-cream/10 border border-gold/20 rounded-l-xl text-cream text-sm placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button className="px-4 py-2.5 bg-gold text-dark-brown font-medium rounded-r-xl hover:bg-light-gold transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} SEVAK Enterprises. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-cream/30">
            <FaLeaf className="text-gold/50" />
            <span className="text-xs">Made with love for tradition</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
