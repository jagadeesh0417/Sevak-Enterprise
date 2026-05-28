import { motion } from 'framer-motion'
import { FaLeaf, FaRecycle, FaHandHoldingHeart, FaShippingFast, FaOm, FaSpa } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const values = [
  { icon: FaHandHoldingHeart, title: 'Handmade with Love', desc: 'Every product is carefully crafted by skilled hands using age-old techniques passed down through generations.' },
  { icon: FaLeaf, title: '100% Eco-Friendly', desc: 'We use only natural, biodegradable materials that nurture the environment and reduce carbon footprint.' },
  { icon: FaRecycle, title: 'Sustainable Practices', desc: 'Our products are mostly recyclable and made from renewable resources supporting a circular economy.' },
  { icon: FaOm, title: 'Spiritual Authenticity', desc: 'Each item is created with traditional rituals in mind, preserving the spiritual essence and purity.' },
  { icon: FaSpa, title: 'Natural Wellness', desc: 'From Ayurvedic products to aromatic incense, we promote holistic well-being through nature.' },
  { icon: FaShippingFast, title: 'Global Delivery', desc: 'We ship across India, USA, and UK with care, ensuring your products reach you safely.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">About Us</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">
            Our Story
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-xl" />
              <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-dark-brown to-deep-green border border-gold/10 premium-shadow-lg">
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-cream/80 leading-relaxed text-base sm:text-lg mb-6">
                  SEVAK Enterprises brings you a wide range of organic, eco-friendly, and handmade spiritual products crafted with care and tradition. From essential Gomeyam ghoop sticks and incense sticks to organic diyas, handmade home décor, god idols, statues, Ayurvedic products, and more — every product is designed to bring positivity, purity, and the soothing essence of nature into your home.
                </p>
                <p className="text-cream/80 leading-relaxed text-base sm:text-lg mb-6">
                  Our products are mostly recyclable, sustainable, and completely handcrafted using natural materials. We believe in preserving tradition while promoting an eco-conscious lifestyle.
                </p>
                <p className="text-cream text-base sm:text-lg font-serif italic leading-relaxed">
                  "Experience the divine aroma, natural energy, and authentic craftsmanship through every SEVAK product."
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-dark-brown to-deep-green premium-shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <FaOm className="text-8xl text-gold/20 mx-auto mb-6" />
                  <p className="text-cream/40 font-serif text-lg">Tradition meets purity</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mt-3 mb-4">
            Our Values
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 rounded-2xl bg-dark-brown border border-gold/20 hover:border-gold/40 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-500">
                  <Icon className="text-2xl text-gold" />
                </div>
                <h3 className="text-cream font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/shop" className="btn-primary">
            Explore Our Products
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
