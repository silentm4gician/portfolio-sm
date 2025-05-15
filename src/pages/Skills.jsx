import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { icons } from "../icons";

const skillSections = [
  { title: "Frontend", icons: icons[0], columns: 3 },
  { title: "Backend", icons: icons[1], columns: 3 },
  { title: "Frameworks and Libraries", icons: icons[2], columns: 5 },
  { title: "Version Control", icons: icons[3], columns: 3 },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-full py-6 px-4"
    >
      <div className="w-full max-w-6xl">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-white text-center mb-6 tracking-wide uppercase"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + sectionIndex * 0.2,
              }}
            >
              <motion.h3
                className="text-2xl font-semibold text-white text-center mb-3 uppercase tracking-wider"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + sectionIndex * 0.2 }}
              >
                {section.title}
              </motion.h3>

              <motion.div
                className={`grid ${
                  section.columns === 3
                    ? "grid-cols-3"
                    : section.columns === 5
                    ? "grid-cols-5"
                    : "grid-cols-1"
                } gap-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-3 place-items-center`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + sectionIndex * 0.2 }}
                whileHover={{
                  borderColor: "rgba(14, 165, 233, 0.5)",
                  boxShadow: "0 0 15px rgba(14, 165, 233, 0.3)",
                }}
              >
                {section.icons.map((ico, index) => (
                  <motion.div
                    key={ico.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.9 + sectionIndex * 0.2 + index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.1,
                      //   rotate: 360,
                      transition: { duration: 0.8 },
                    }}
                  >
                    <SkillCard ico={ico} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
