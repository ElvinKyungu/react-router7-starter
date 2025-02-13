import { Link } from "react-router";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-between md:mb-16 bg-cover bg-center px-6 md:px-20 lg:px-40"
    >
      <div className="relative z-10 text-black md:text-left mt-10 md:mt-36">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="title md:text-center mt-5 md:mt-10"
        >
          Geoffrey Duhayan Conseil l'expertise immobilière pour votre entreprise.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm md:text-lg text-title relative z-10 max-w-2xl mx-auto md:text-center mt-5 md:mt-10"
        >
          Expertise, rentabilité et accompagnement sur mesure : nous
          transformons vos ambitions immobilières en succès.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex items-center md:justify-center"
        >
          <button
            className="py-3 px-7 cursor-pointer rounded-full text-white text-sm border-none hover:bg-black bg-black md:text-base"
          >
            <Link to={"/contact"}>Contactez nos experts</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
