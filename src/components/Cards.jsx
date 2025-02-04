import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Cards = ({ proyect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <motion.div 
        className="max-w-sm h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-sky-300/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative h-[250px] overflow-hidden group">
          <a href={proyect.link} target="_blank" rel="noopener noreferrer">
            <motion.img
              src={proyect.img}
              alt={proyect.name}
              className="w-full h-full object-cover transition-transform duration-500"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full">
                View Project
              </span>
            </div>
          </a>
        </div>
        
        <div className="p-6 space-y-4">
          <a href={proyect.link} target="_blank" rel="noopener noreferrer">
            <h5 className="text-2xl font-bold tracking-tight text-white mb-2 hover:text-sky-300 transition-colors">
              {proyect.name}
            </h5>
          </a>
          <p className="text-gray-300 mb-4 line-clamp-3">
            {proyect.desc}
          </p>
          
          {proyect.techs && (
            <div className="flex flex-wrap gap-2 mb-4">
              {proyect.techs.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex space-x-3">
            <motion.a
              href={proyect.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full flex items-center space-x-2 hover:bg-sky-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Visit Site</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 14 10">
                <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.a>

            {proyect.repo && (
              <motion.a
                href={proyect.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full flex items-center space-x-2 hover:bg-sky-500/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}

            {proyect.screenshots && (
              <motion.button
                onClick={toggleModal}
                className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full flex items-center space-x-2 hover:bg-sky-500/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Screenshots</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 4h-3v-1h3v1zm10.5 6c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zm3.5 2h-7v-1h-1v1h-5v-1h-1v1h-3v9h19v-9zm-2 7h-15v-5h15v5zm-14-4.464l2.599 1.005c.153-.279.43-.541.401-.841v-1.7h-3v1.536zm5-1.536v1.5c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1.5h-2zm4 0v1.5c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1.5h-2zm4 0v1.5c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1.5h-2zm-11 3h15v-1h-15v1z"/>
                </svg>
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
                onClick={toggleModal}
              >
                <svg viewBox="0 0 1024 1024" fill="currentColor" height="30" width="30">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold text-white mb-6">
                Screenshots of {proyect.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {proyect.screenshots?.map((screenshot, index) => (
                  <motion.img
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="rounded-xl border-2 border-white/20 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => openImageModal(screenshot)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors"
                onClick={closeImageModal}
              >
                <svg viewBox="0 0 1024 1024" fill="currentColor" height="30" width="30">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
                </svg>
              </button>
              <motion.img
                src={selectedImage}
                alt="Full-size screenshot"
                className="max-w-[90vw] max-h-[90vh] rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cards;
