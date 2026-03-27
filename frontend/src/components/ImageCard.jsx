import { motion } from 'framer-motion'

export default function ImageCard({ 
  image, 
  title, 
  subtitle, 
  category,
  onClick,
  className = '',
  size = 'md'
}) {
  const sizes = {
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80',
    xl: 'h-96',
    full: 'h-full'
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${sizes[size]} ${className}`}
    >
      {/* Image */}
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full shadow-lg">
            {category}
          </span>
        </div>
      )}
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
            {title}
          </h3>
          {subtitle && (
            <p className="text-white/80 text-sm md:text-base line-clamp-2">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        {/* Hover Arrow */}
        <motion.div 
          className="absolute bottom-6 right-6 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}