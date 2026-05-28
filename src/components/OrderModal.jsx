import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes, FaRupeeSign, FaMapMarkerAlt, FaUser, FaPhone, FaCity, FaRegCreditCard } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'

export default function OrderModal({ product, onClose }) {
  const [variant, setVariant] = useState(product.variants ? product.variants[0].name : null)
  const [payment, setPayment] = useState('COD')
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', pincode: '' })
  const [submitted, setSubmitted] = useState(false)

  const getPrice = () => {
    if (product.variants) {
      const v = product.variants.find((v) => v.name === variant)
      return v ? v.price : product.variants[0].price
    }
    return product.price
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const price = getPrice()
    const variantText = variant ? ` (${variant})` : ''
    const message = encodeURIComponent(
      `🛒 *New Order - SEVAK Enterprises*\n\n` +
      `*Product:* ${product.name}${variantText}\n` +
      `*Price:* ₹${price}\n` +
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
    setTimeout(() => onClose(), 1500)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-dark-brown to-deep-green border border-gold/20 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-cream hover:bg-gold/40 transition-colors"
          >
            <FaTimes />
          </button>

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gold/10">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center text-3xl flex-shrink-0">
                {product.icon || '📦'}
              </div>
              <div>
                <h3 className="text-cream font-serif text-lg font-bold">{product.name}</h3>
                <p className="text-gold text-sm font-semibold mt-1">
                  ₹{getPrice()}
                  {product.variants && variant && ` (${variant})`}
                </p>
              </div>
            </div>

            {product.variants && (
              <div className="mb-6">
                <label className="text-cream/60 text-xs uppercase tracking-wider block mb-2">Select Variant</label>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.name}
                      onClick={() => setVariant(v.name)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        variant === v.name
                          ? 'bg-gold text-dark-brown'
                          : 'bg-cream/10 text-cream/70 hover:bg-cream/20'
                      }`}
                    >
                      {v.name} - ₹{v.price}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">
                  <FaUser className="inline mr-1" /> Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">
                  <FaPhone className="inline mr-1" /> Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">
                  <FaMapMarkerAlt className="inline mr-1" /> Delivery Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="House / Flat / Street / Landmark"
                  className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">
                    <FaCity className="inline mr-1" /> City
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="City"
                    className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-cream/60 text-xs uppercase tracking-wider block mb-1.5">
                    <FaRegCreditCard className="inline mr-1" /> Pincode
                  </label>
                  <input
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    required
                    placeholder="6-digit pincode"
                    className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="pt-4">
                <label className="text-cream/60 text-xs uppercase tracking-wider block mb-3">Payment Mode</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPayment('COD')}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                      payment === 'COD'
                        ? 'bg-gold text-dark-brown border-gold'
                        : 'bg-cream/10 text-cream/70 border-gold/20 hover:bg-cream/20'
                    }`}
                  >
                    <MdDeliveryDining className="text-lg" />
                    <span>Cash on Delivery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayment('UPI')}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                      payment === 'UPI'
                        ? 'bg-gold text-dark-brown border-gold'
                        : 'bg-cream/10 text-cream/70 border-gold/20 hover:bg-cream/20'
                    }`}
                  >
                    <FaRegCreditCard className="text-lg" />
                    <span>UPI Transfer</span>
                  </button>
                </div>
              </div>

              {payment === 'UPI' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 rounded-xl bg-gold/10 border border-gold/20 text-center"
                >
                  <p className="text-cream/80 text-sm mb-1">Pay via UPI</p>
                  <p className="text-gold font-mono font-bold text-lg">sevakenterprises@upi</p>
                  <p className="text-cream/50 text-xs mt-1">Or pay on the WhatsApp order confirmation</p>
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 text-sm mt-2"
              >
                <FaWhatsapp className="text-lg" />
                <span>Place Order via WhatsApp</span>
              </button>

              {submitted && (
                <p className="text-green-400 text-center text-sm">✓ Redirecting to WhatsApp...</p>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
