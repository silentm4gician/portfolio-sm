import { motion } from "framer-motion";
import gitHub from "../images/github.png";
import linkedin from "../images/linkedin.png";
import ig from "../images/instagram.png";
import gmail from "../images/gmail.png";

const socialLinks = [
  {
    name: "GitHub",
    icon: gitHub,
    url: "https://github.com/silentm4gician",
  },
  {
    name: "Instagram",
    icon: ig,
    url: "https://www.instagram.com/leandro_gm5/",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/leandro-gonz%C3%A1lez-matkovich-857742233/",
  },
  {
    name: "Gmail",
    icon: gmail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=leandroGonzalezMat@gmail.com",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-full py-6 px-4"
    >
      <div className="w-full max-w-4xl">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-white text-center mb-6 tracking-wide uppercase"
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-5 place-items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            borderColor: "rgba(14, 165, 233, 0.5)",
            boxShadow: "0 0 15px rgba(14, 165, 233, 0.3)",
          }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.1,
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  width={40}
                  height={40}
                  className=""
                />
                <span className="text-sm text-white">{link.name}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
