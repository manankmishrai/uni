import { motion } from 'framer-motion'

export default function LoadingSpinner({ size = 'md', text = '' }) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className={`${sizes[size]} border-4 border-gray-200 dark:border-gray-700 border-t-gold-500 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
      {text && <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>}
    </div>
  )
}