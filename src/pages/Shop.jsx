import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaLeaf } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const categories = ['All', ...new Set(products.map((p) => p.category))]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">Our Collection</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mt-3 mb-4">
            Shop Spiritual Essentials
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gold text-sm" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-dark-brown/5 border border-gold/20 text-dark-brown placeholder-dark-brown/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-dark-brown text-cream shadow-lg'
                  : 'bg-dark-brown/5 text-dark-brown/60 hover:bg-dark-brown/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <FaLeaf className="text-6xl text-gold/30 mx-auto mb-4" />
            <p className="text-dark-brown/50 text-lg">No products found</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            >
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}
