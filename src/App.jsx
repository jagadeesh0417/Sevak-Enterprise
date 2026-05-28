import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CartDrawer from './components/CartDrawer'
import WishlistDrawer from './components/WishlistDrawer'
import { ToastProvider } from './context/ToastContext'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import AboutPage from './pages/AboutPage'

function App() {
  const location = useLocation()
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)

  return (
    <ToastProvider>
      <div className="min-h-screen bg-off-white">
        <Navbar
          onCartOpen={() => setCartOpen(true)}
          onWishlistOpen={() => setWishlistOpen(true)}
        />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        <WishlistDrawer open={wishlistOpen} onClose={() => setWishlistOpen(false)} />
        <Footer />
        <WhatsAppButton />
      </div>
    </ToastProvider>
  )
}

export default App
