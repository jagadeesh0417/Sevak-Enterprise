import { motion } from 'framer-motion'
import { FaHeart, FaShoppingBag, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

export default function Wishlist() {
  const { items, toggleItem } = useWishlist()
  const { addItem } = useCart()

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FaHeart className="text-4xl text-gold/40 mx-auto mb-3" />
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mt-3 mb-4">
            My Wishlist
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <FaHeart className="text-6xl text-gold/20 mx-auto mb-4" />
            <p className="text-dark-brown/50 text-lg mb-2">Your wishlist is empty</p>
            <p className="text-dark-brown/30 text-sm mb-6">Save items you love here!</p>
            <Link to="/shop" className="btn-primary inline-flex">
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-gradient-to-b from-dark-brown to-deep-green border border-gold/10 premium-shadow-lg hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-dark-brown to-deep-green flex items-center justify-center relative">
                  <span className="text-6xl">{product.icon || '📦'}</span>
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium uppercase tracking-wider bg-gold/90 text-dark-brown rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <button
                    onClick={() => toggleItem(product)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-dark-brown/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaHeart className="text-red-400 text-base" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="text-cream font-serif font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-cream/50 text-xs line-clamp-2 mb-3">{product.description}</p>
                  {product.variants ? (
                    <div className="space-y-1 mb-3">
                      {product.variants.map((v, i) => (
                        <p key={i} className="text-cream/70 text-sm">
                          {v.name}: <span className="text-gold font-semibold">₹{v.price}</span>
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-gold mb-3">₹{product.price}</p>
                  )}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (product.variants) {
                          addItem(product, product.variants[0].name)
                        } else {
                          addItem(product)
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gold text-dark-brown text-sm font-medium rounded-xl hover:bg-light-gold transition-all duration-300"
                    >
                      <FaShoppingBag /> Add to Cart
                    </button>
                    <button
                      onClick={() => toggleItem(product)}
                      className="px-3 py-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-300"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
