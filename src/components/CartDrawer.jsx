import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaTrash, FaPlus, FaMinus, FaWhatsapp, FaShoppingBag, FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaRegCreditCard } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'
import { useCart } from '../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQty, clearCart, total, count } = useCart()
  const [checkout, setCheckout] = useState(false)
  const [payment, setPayment] = useState('COD')
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', pincode: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    const itemList = items
      .map((i) => `• ${i.name}${i.variant ? ` (${i.variant})` : ''} x${i.qty} = ₹${i.price * i.qty}`)
      .join('\n')
    const message = encodeURIComponent(
      `🛒 *New Order - SEVAK Enterprises*\n\n` +
      `*Items:*\n${itemList}\n\n` +
      `*Total:* ₹${total}\n` +
      `*Payment:* ${payment === 'UPI' ? 'UPI Transfer' : 'Cash on Delivery'}\n\n` +
      `*Delivery Details:*\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Address:* ${form.address}\n` +
      `*City:* ${form.city}\n` +
      `*Pincode:* ${form.pincode}\n\n` +
      `Please confirm the order.`
    )
    window.open(`https://wa.me/918008984983?text=${message}`, '_blank')
    setSubmitted(true)
    clearCart()
    setTimeout(() => {
      setCheckout(false)
      setSubmitted(false)
      onClose()
    }, 2000)
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
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-gradient-to-b from-dark-brown to-deep-green shadow-2xl border-l border-gold/20"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gold/10">
                <div className="flex items-center gap-3">
                  <FaShoppingBag className="text-gold text-lg" />
                  <h2 className="text-cream font-serif text-xl font-bold">
                    {checkout ? 'Checkout' : `Cart (${count})`}
                  </h2>
                </div>
                <button
                  onClick={checkout ? () => setCheckout(false) : onClose}
                  className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-cream hover:bg-gold/40 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {!checkout ? (
                  <>
                    {items.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <FaShoppingBag className="text-5xl text-gold/20 mb-4" />
                        <p className="text-cream/50 text-lg">Your cart is empty</p>
                        <p className="text-cream/30 text-sm mt-1">Add some spiritual essentials!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {items.map((item) => (
                          <motion.div
                            key={item.cartId}
                            layout
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-4 p-4 rounded-xl bg-cream/5 border border-gold/10"
                          >
                            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-2xl flex-shrink-0">
                              {item.icon || '📦'}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-cream font-medium text-sm truncate">{item.name}</h4>
                              {item.variant && (
                                <p className="text-gold/60 text-xs mt-0.5">{item.variant}</p>
                              )}
                              <p className="text-gold font-semibold text-sm mt-1">₹{item.price}</p>
                              <div className="flex items-center gap-3 mt-2">
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => updateQty(item.cartId, item.qty - 1)}
                                    className="w-6 h-6 rounded-full bg-cream/10 flex items-center justify-center text-cream/70 hover:bg-cream/20 transition-colors"
                                  >
                                    <FaMinus className="text-[10px]" />
                                  </button>
                                  <span className="text-cream text-sm w-6 text-center">{item.qty}</span>
                                  <button
                                    onClick={() => updateQty(item.cartId, item.qty + 1)}
                                    className="w-6 h-6 rounded-full bg-cream/10 flex items-center justify-center text-cream/70 hover:bg-cream/20 transition-colors"
                                  >
                                    <FaPlus className="text-[10px]" />
                                  </button>
                                </div>
                                <button
                                  onClick={() => removeItem(item.cartId)}
                                  className="ml-auto text-red-400/60 hover:text-red-400 transition-colors"
                                >
                                  <FaTrash className="text-xs" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <form onSubmit={handlePlaceOrder} className="space-y-4">
                    <div>
                      <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">
                        <FaUser className="inline mr-1" /> Full Name
                      </label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">
                        <FaPhone className="inline mr-1" /> Phone Number
                      </label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">
                        <FaMapMarkerAlt className="inline mr-1" /> Delivery Address
                      </label>
                      <textarea name="address" value={form.address} onChange={handleChange} required rows={3} placeholder="House / Flat / Street / Landmark"
                        className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm resize-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">City</label>
                        <input name="city" value={form.city} onChange={handleChange} required placeholder="City"
                          className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm" />
                      </div>
                      <div>
                        <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">Pincode</label>
                        <input name="pincode" value={form.pincode} onChange={handleChange} required placeholder="6-digit"
                          className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="text-cream/60 text-xs uppercase tracking-wider block mb-3">Payment Mode</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button type="button" onClick={() => setPayment('COD')}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                            payment === 'COD' ? 'bg-gold text-dark-brown border-gold' : 'bg-cream/10 text-cream/70 border-gold/20 hover:bg-cream/20'
                          }`}>
                          <MdDeliveryDining className="text-lg" /> Cash on Delivery
                        </button>
                        <button type="button" onClick={() => setPayment('UPI')}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                            payment === 'UPI' ? 'bg-gold text-dark-brown border-gold' : 'bg-cream/10 text-cream/70 border-gold/20 hover:bg-cream/20'
                          }`}>
                          <FaRegCreditCard className="text-lg" /> UPI Transfer
                        </button>
                      </div>
                    </div>
                    {payment === 'UPI' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        className="p-4 rounded-xl bg-gold/10 border border-gold/20 text-center">
                        <p className="text-cream/80 text-sm mb-1">Pay via UPI</p>
                        <p className="text-gold font-mono font-bold text-lg">sevakenterprises@upi</p>
                      </motion.div>
                    )}
                    {submitted && (
                      <p className="text-green-400 text-center text-sm">✓ Order placed! Redirecting to WhatsApp...</p>
                    )}
                  </form>
                )}
              </div>

              {items.length > 0 && !checkout && (
                <div className="p-6 border-t border-gold/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cream/60 text-sm">Total</span>
                    <span className="text-gold font-bold text-xl">₹{total}</span>
                  </div>
                  <button
                    onClick={() => setCheckout(true)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-dark-brown font-semibold rounded-xl hover:bg-light-gold transition-all duration-300"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}

              {checkout && (
                <div className="p-6 border-t border-gold/10">
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 text-sm"
                  >
                    <FaWhatsapp className="text-lg" />
                    Place Order via WhatsApp
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
