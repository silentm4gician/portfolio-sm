import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillCard = ({ico}) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    return (
        <div 
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
        >
            <motion.div 
                className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center p-2 shadow-md"
                whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: '0 0 15px rgba(14, 165, 233, 0.3)'
                }}
                transition={{ duration: 0.3 }}
            >
                <img 
                    className="w-full h-full object-contain" 
                    src={ico.img} 
                    alt={ico.name} 
                />
            </motion.div>

            <AnimatePresence>
                {isTooltipVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 bottom-full mb-2 bg-white/20 backdrop-blur-lg text-white text-xs px-3 py-1 rounded-md shadow-lg"
                    >
                        {ico.name}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SkillCard