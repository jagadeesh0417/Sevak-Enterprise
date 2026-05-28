import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaShoppingBag, FaHeart, FaRegHeart, FaCheck } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useToast } from '../context/ToastContext'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const { toggleItem, isWishlisted } = useWishlist()
  const { addToast } = useToast()
  const [added, setAdded] = useState(false)

  const wishlisted = isWishlisted(product.id)

  const handleAddToCart = () => {
    if (product.variants) {
      addItem(product, product.variants[0].name)
    } else {
      addItem(product)
    }
    setAdded(true)
    addToast('Added to Cart', 'cart')
    setTimeout(() => setAdded(false), 1500)
  }

  const handleWishlist = () => {
    toggleItem(product)
    addToast(wishlisted ? 'Removed from Wishlist' : 'Added to Wishlist', 'wishlist')
  }

  const renderPrice = () => {
    if (product.variants) {
      return (
        <div className="space-y-0.5">
          {product.variants.map((v, i) => (
            <p key={i} className="text-cream/70 text-xs sm:text-sm">
              {v.name}: <span className="text-gold font-semibold">₹{v.price}</span>
            </p>
          ))}
        </div>
      )
    }
    return <p className="text-xl sm:text-2xl font-bold text-gold">₹{product.price}</p>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group"
    >
      <div
        className="relative rounded-[30px] overflow-hidden transition-all duration-500"
        style={{
          background: 'linear-gradient(145deg, rgba(44,24,16,0.95), rgba(27,67,50,0.9))',
          boxShadow: '0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,169,110,0.1)',
        }}
      >
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-gold/[0.03] via-transparent to-gold/[0.02] pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-7 lg:p-8">
          <div className="flex items-start justify-between mb-4">
            <span className="px-3.5 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] bg-gold/15 text-gold rounded-full border border-gold/20">
              {product.badge}
            </span>
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={handleWishlist}
              className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/5 hover:border-gold/30 transition-all duration-300"
            >
              {wishlisted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <FaHeart className="text-red-400 text-sm" />
                </motion.div>
              ) : (
                <FaRegHeart className="text-cream/50 text-sm hover:text-red-400 transition-colors duration-300" />
              )}
            </motion.button>
          </div>

          <div className="mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-2xl mb-4 border border-gold/10">
              {product.icon || '✨'}
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-cream leading-tight mb-2 group-hover:text-gold transition-colors duration-400">
              {product.name}
            </h3>
            <p className="text-cream/50 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="mb-5">
            {renderPrice()}
          </div>

          <div className="flex gap-2.5">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium rounded-2xl transition-all duration-300 ${
                added
                  ? 'bg-green-600/90 text-white shadow-lg shadow-green-600/20'
                  : 'bg-gold/90 text-dark-brown hover:bg-gold shadow-lg shadow-gold/20 hover:shadow-gold/40'
              }`}
            >
              {added ? (
                <><FaCheck className="text-sm" /><span>Added</span></>
              ) : (
                <><FaShoppingBag className="text-sm" /><span>Add to Cart</span></>
              )}
            </motion.button>
          </div>
        </div>

        <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-gold/[0.06] via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}
