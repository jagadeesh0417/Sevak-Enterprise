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

export default function Navbar({ onCartOpen }) {
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
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-light-gold flex items-center justify-center">
              <span className="text-dark-brown font-serif font-bold text-lg">S</span>
            </div>
            <span className={`font-serif text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-dark-brown' : 'text-cream'
            }`}>
              SEVAK
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wider transition-all duration-300 group ${
                  scrolled ? 'text-dark-brown' : 'text-cream'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              to="/wishlist"
              className={`relative p-2 rounded-full transition-all duration-300 hover:bg-gold/20 ${
                scrolled ? 'text-dark-brown' : 'text-cream'
              }`}
            >
              <FaHeart className="text-lg" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={onCartOpen}
              className={`relative p-2 rounded-full transition-all duration-300 hover:bg-gold/20 ${
                scrolled ? 'text-dark-brown' : 'text-cream'
              }`}
            >
              <FaShoppingBag className="text-lg" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold text-dark-brown text-[10px] flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
            <a
              href="https://wa.me/918008984983"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 hover:bg-gold/20 ${
                scrolled ? 'text-dark-brown' : 'text-cream'
              }`}
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/wishlist"
              className={`relative p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'text-dark-brown' : 'text-cream'
              }`}
            >
              <FaHeart className="text-lg" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={onCartOpen}
              className={`relative p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'text-dark-brown' : 'text-cream'
              }`}
            >
              <FaShoppingBag className="text-lg" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold text-dark-brown text-[10px] flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled ? 'text-dark-brown' : 'text-cream'
              }`}
            >
              {mobileOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
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
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-gold/20 text-gold'
                      : 'text-dark-brown hover:bg-gold/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/wishlist"
                className={`block px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  location.pathname === '/wishlist'
                    ? 'bg-gold/20 text-gold'
                    : 'text-dark-brown hover:bg-gold/10'
                }`}
              >
                Wishlist ({wishlistItems.length})
              </Link>
              <button
                onClick={() => { onCartOpen(); setMobileOpen(false) }}
                className="w-full text-left block px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider text-dark-brown hover:bg-gold/10 transition-all duration-300"
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
