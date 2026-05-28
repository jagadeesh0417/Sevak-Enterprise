import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaHeart, FaShoppingBag, FaTrash } from 'react-icons/fa'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

export default function WishlistDrawer({ open, onClose }) {
  const { items, toggleItem } = useWishlist()
  const { addItem } = useCart()
  const { addToast } = useToast()

  const handleAddToCart = (product) => {
    if (product.variants) {
      addItem(product, product.variants[0].name)
    } else {
      addItem(product)
    }
    addToast('Added to Cart', 'cart')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-black/90 backdrop-blur-xl shadow-2xl border-l border-gold/20"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gold/10">
                <div className="flex items-center gap-3">
                  <FaHeart className="text-red-400 text-lg" />
                  <h2 className="text-cream font-serif text-xl font-bold">
                    Wishlist ({items.length})
                  </h2>
                </div>
                <button onClick={onClose} className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-cream hover:bg-gold/40 transition-colors">
                  <FaTimes />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <FaHeart className="text-5xl text-gold/20 mb-4" />
                    <p className="text-cream/50 text-lg">Your wishlist is empty</p>
                    <p className="text-cream/30 text-sm mt-1">Save items you love!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-4 p-4 rounded-2xl bg-cream/5 border border-gold/10"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-2xl flex-shrink-0 border border-gold/10">
                          {product.icon || '❤️'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-cream font-medium text-sm truncate">{product.name}</h4>
                          {product.variants ? (
                            <p className="text-gold text-xs mt-0.5">
                              {product.variants.map((v) => `₹${v.price}`).join(' / ')}
                            </p>
                          ) : (
                            <p className="text-gold font-semibold text-sm mt-0.5">₹{product.price}</p>
                          )}
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gold text-dark-brown text-xs font-medium rounded-xl hover:bg-light-gold transition-all duration-300"
                            >
                              <FaShoppingBag /> Add to Cart
                            </button>
                            <button
                              onClick={() => {
                                toggleItem(product)
                                addToast('Removed from Wishlist', 'wishlist')
                              }}
                              className="px-3 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-300"
                            >
                              <FaTrash className="text-xs" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
