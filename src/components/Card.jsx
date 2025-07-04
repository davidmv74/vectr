import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 transition-all duration-200'
  const hoverClasses = hover ? 'hover:shadow-md hover:scale-[1.02] hover:border-slate-300 dark:hover:border-slate-600' : ''
  const clickableClasses = onClick ? 'cursor-pointer' : ''
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`
  
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : {}}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card