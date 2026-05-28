import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import products from '../data/products'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const featuredProducts = products.slice(0, 4)

export default function Home() {
  return (
    <div>
      <Hero />

      <Categories />

      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.03)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">Shop</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mt-3 mb-4">
              Featured Products
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/shop" className="btn-primary">
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      <About />

      <section className="py-16 sm:py-20 bg-gradient-to-r from-dark-brown via-deep-green to-dark-brown">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl text-cream font-bold mb-4">
              Shipping Available Worldwide
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto mb-4" />
            <p className="text-cream/60 text-base sm:text-lg">
              We deliver across <span className="text-gold font-medium">India</span>,{' '}
              <span className="text-gold font-medium">USA</span>, and{' '}
              <span className="text-gold font-medium">UK</span>
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </div>
  )
}
