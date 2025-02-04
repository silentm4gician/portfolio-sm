import Cards from "../components/Cards"
import { proyects } from "../proyects"
import { motion } from "framer-motion"

const Proyects = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center w-full py-2 px-4"
        >
            <div className="w-full max-w-7xl">
                <motion.h2 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-bold text-white text-center mb-6 tracking-wide uppercase"
                >
                    My Projects
                </motion.h2>
                
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {proyects.map((p, index) => (
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.6 + index * 0.2 
                            }}
                        >
                            <Cards proyect={p} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Proyects