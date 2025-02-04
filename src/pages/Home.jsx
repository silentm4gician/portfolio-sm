import { motion } from 'framer-motion';
import gitHub from '../images/github.png';
import linkedin from '../images/linkedin.png';
import ig from '../images/instagram.png';

const socialLinks = [
    { 
        name: 'GitHub', 
        icon: gitHub, 
        url: 'https://github.com/silentm4gician' 
    },
    { 
        name: 'Instagram', 
        icon: ig, 
        url: 'https://www.instagram.com/leandro_gm5/' 
    },
    { 
        name: 'LinkedIn', 
        icon: linkedin, 
        url: 'https://www.linkedin.com/in/leandro-gonz%C3%A1lez-matkovich-857742233/' 
    }
];

const Home = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center min-h-[70vh] w-full py-2 px-4 relative"
        >
            <div className="absolute left-6 bottom-1/2 transform translate-y-1/2 space-y-6 hidden md:block">
                {socialLinks.map((link, index) => (
                    <motion.a 
                        key={link.name}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + index * 0.2 
                        }}
                        whileHover={{ 
                            scale: 1.2,
                            transition: { duration: 0.3 }
                        }}
                        className="block w-10 mb-4"
                    >
                        <img 
                            src={link.icon} 
                            alt={link.name} 
                            className="w-full h-full object-contain"
                        />
                    </motion.a>
                ))}
            </div>

            <div className="text-center space-y-6">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl lg:text-8xl md:text-6xl font-bold font-mono mb-4 bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent"
                >
                    silentM<span className="text-sky-300">4</span>gician
                </motion.h1>

                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-3xl lg:text-5xl md:text-4xl font-bold mb-4 text-white"
                >
                    Leandro González Matkovich
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-2xl lg:text-3xl md:text-2xl font-bold font-mono text-sky-300"
                >
                    Web Developer
                </motion.p>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex space-x-4 mt-8 md:hidden"
            >
                {socialLinks.map((link) => (
                    <motion.a 
                        key={link.name}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ 
                            scale: 1.2,
                            transition: { duration: 0.3 }
                        }}
                        className="block w-10"
                    >
                        <img 
                            src={link.icon} 
                            alt={link.name} 
                            className="w-full h-full object-contain"
                        />
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Home
