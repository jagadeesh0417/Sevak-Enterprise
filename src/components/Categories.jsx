import { motion } from 'framer-motion'
import { GiIncense, GiCandleLight, GiLotus} from 'react-icons/gi'
import { MdSpa, MdEco } from 'react-icons/md'
import { FaLeaf, FaOm } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Sambhrani', icon: GiIncense, border: 'border-amber-600/50', iconColor: 'text-amber-400' },
  { name: 'Incense Sticks', icon: MdSpa, border: 'border-rose-600/50', iconColor: 'text-rose-400' },
  { name: 'Diyas', icon: GiCandleLight, border: 'border-orange-600/50', iconColor: 'text-orange-400' },
  { name: 'Japamala', icon: FaOm, border: 'border-purple-600/50', iconColor: 'text-purple-400' },
  { name: 'Decorative', icon: GiLotus, border: 'border-teal-600/50', iconColor: 'text-teal-400' },
  { name: 'Eco-Friendly', icon: MdEco, border: 'border-green-600/50', iconColor: 'text-green-400' },
]

export default function Categories() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/10 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">Categories</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">
            Explore Our Collection
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-light-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to="/shop"
                  className={`group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl bg-dark-brown border ${category.border} shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gold/20`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-dark-brown/80 flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                    <Icon className={`text-2xl sm:text-3xl ${category.iconColor} group-hover:text-gold transition-colors duration-500`} />
                  </div>
                  <span className="text-sm font-medium text-cream text-center group-hover:text-gold transition-colors duration-500">{category.name}</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
