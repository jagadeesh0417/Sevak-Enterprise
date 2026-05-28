import { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaHeart } from 'react-icons/fa'

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'cart') => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 2500)
  }, [])

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-24 right-6 z-[80] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-dark-brown/95 backdrop-blur-xl border border-gold/20 shadow-2xl pointer-events-auto"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                toast.type === 'wishlist' ? 'bg-red-500/20' : 'bg-gold/20'
              }`}>
                {toast.type === 'wishlist' ? (
                  <FaHeart className="text-red-400 text-sm" />
                ) : (
                  <FaCheck className="text-gold text-sm" />
                )}
              </div>
              <span className="text-cream text-sm font-medium">{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
