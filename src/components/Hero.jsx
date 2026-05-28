import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-brown via-deep-green to-dark-brown opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.15)_0%,_transparent_70%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-green/30 rounded-full blur-3xl" />
      </div>

      <div className="smoke-container">
        <div className="smoke-particle" />
        <div className="smoke-particle" />
        <div className="smoke-particle" />
        <div className="smoke-particle" />
        <div className="smoke-particle" />
        <div className="smoke-particle" />
        <div className="smoke-particle" />
        <div className="smoke-particle" />
        <div className="smoke-particle" />
        <div className="smoke-particle" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block px-6 py-2 rounded-full border border-gold/30 text-gold text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 glass-card"
          >
            Premium Spiritual Essentials
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-tight mb-6"
        >
          Eco-Friendly
          <br />
          <span className="text-gradient">Spiritual Essentials</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Handmade Organic Products Crafted With Tradition & Purity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link to="/shop" className="btn-primary text-sm sm:text-base">
            Shop Now
          </Link>
          <Link to="/shop" className="btn-outline text-sm sm:text-base">
            Explore Collection
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-gold/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
