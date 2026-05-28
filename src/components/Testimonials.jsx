import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'The sambhrani cups are absolutely divine! The fragrance fills my entire home with positive energy. Truly authentic and eco-friendly.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    text: 'Excellent quality products! The japamala beads are beautifully crafted. Will definitely order again. Highly recommended for spiritual seekers.',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    text: 'Love the eco-friendly diyas! Perfect for festivals. The packaging was beautiful and everything arrived safely. SEVAK is my go-to now.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.05)_0%,_transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mt-3 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-dark-brown to-deep-green border border-gold/10 premium-shadow-lg hover:border-gold/30 transition-all duration-500"
            >
              <FaQuoteLeft className="text-3xl text-gold/20 mb-4" />
              <p className="text-cream/80 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gold text-sm" />
                ))}
              </div>
              <p className="text-cream font-serif font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
