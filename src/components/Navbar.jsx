import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FaWhatsapp, FaShoppingBag, FaHeart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar({ onCartOpen, onWishlistOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { count } = useCart()
  const { items: wishlistItems } = useWishlist()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-card-light shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gold to-light-gold flex items-center justify-center shadow-lg shadow-gold/20">
              <span className="text-dark-brown font-serif font-bold text-base sm:text-lg">S</span>
            </div>
            <span             className={`font-serif text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-cream' : 'text-cream'
            }`}>
              SEVAK
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-xs font-medium uppercase tracking-[0.12em] transition-all duration-300 group ${
                  scrolled ? 'text-cream/80 hover:text-cream' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}

            <button
              onClick={onWishlistOpen}
              className={`relative p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'text-cream' : 'text-cream'
              }`}
            >
              <FaHeart className="text-base" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center font-bold shadow-lg">
                  {wishlistItems.length}
                </span>
              )}
            </button>

            <button
              onClick={onCartOpen}
              className={`relative p-2 rounded-full transition-all duration-300 hover:bg-gold/15 ${
                scrolled ? 'text-cream' : 'text-cream'
              }`}
            >
              <FaShoppingBag className="text-base" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold text-dark-brown text-[9px] flex items-center justify-center font-bold shadow-lg">
                  {count}
                </span>
              )}
            </button>

            <a
              href="https://wa.me/918008984983"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 hover:bg-gold/15 ${
                scrolled ? 'text-cream' : 'text-cream'
              }`}
            >
              <FaWhatsapp className="text-base" />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onWishlistOpen}
              className={`relative p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'text-cream' : 'text-cream'
              }`}
            >
              <FaHeart className="text-base" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] flex items-center justify-center font-bold">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button
              onClick={onCartOpen}
              className={`relative p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'text-cream' : 'text-cream'
              }`}
            >
              <FaShoppingBag className="text-base" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-gold text-dark-brown text-[8px] flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled ? 'text-cream' : 'text-cream'
              }`}
            >
              {mobileOpen ? <HiOutlineX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card-light border-t border-gold/10"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-gold/20 text-gold'
                      : 'text-cream/70 hover:bg-gold/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => { onWishlistOpen(); setMobileOpen(false) }}
                className="w-full text-left block px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider text-cream/70 hover:bg-gold/10 transition-all duration-300"
              >
                Wishlist ({wishlistItems.length})
              </button>
              <button
                onClick={() => { onCartOpen(); setMobileOpen(false) }}
                className="w-full text-left block px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider text-cream/70 hover:bg-gold/10 transition-all duration-300"
              >
                Cart ({count})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
