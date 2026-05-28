import { motion } from 'framer-motion'
import { FaLeaf, FaRecycle, FaHandHoldingHeart, FaShippingFast } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: FaHandHoldingHeart,
    title: '100% Handmade',
    description: 'Every product is carefully handcrafted by skilled artisans preserving traditional techniques.',
  },
  {
    icon: FaLeaf,
    title: 'Eco-Friendly',
    description: 'All our products use natural, biodegradable materials that nurture the environment.',
  },
  {
    icon: FaRecycle,
    title: 'Organic Materials',
    description: 'Sourced from organic farms and sustainable suppliers committed to purity.',
  },
  {
    icon: FaShippingFast,
    title: 'Worldwide Shipping',
    description: 'Shipping available across India, USA, and UK with secure packaging.',
  },
]

export default function About() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-brown to-deep-green" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-off-white to-transparent opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">Our Story</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">
            Why SEVAK?
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl" />
              <div className="relative p-8 sm:p-10 rounded-2xl border border-gold/10 glass-card">
                <p className="text-cream/80 leading-relaxed text-base sm:text-lg">
                  SEVAK Enterprises brings you a wide range of organic, eco-friendly, and handmade spiritual products crafted with care and tradition. From essential Gomeyam ghoop sticks and incense sticks to organic diyas, handmade home décor, god idols, statues, Ayurvedic products, and more — every product is designed to bring positivity, purity, and the soothing essence of nature into your home.
                </p>
                <br />
                <p className="text-cream/80 leading-relaxed text-base sm:text-lg">
                  Our products are mostly recyclable, sustainable, and completely handcrafted using natural materials. We believe in preserving tradition while promoting an eco-conscious lifestyle.
                </p>
                <br />
                <p className="text-cream/90 leading-relaxed text-base sm:text-lg font-medium italic">
                  "Experience the divine aroma, natural energy, and authentic craftsmanship through every SEVAK product."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-gold/10 bg-dark-brown/40 hover:bg-dark-brown/60 transition-all duration-500 hover:border-gold/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-500">
                    <Icon className="text-2xl text-gold" />
                  </div>
                  <h3 className="text-cream font-serif text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/about" className="btn-primary inline-flex">
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
