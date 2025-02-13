import { Button } from "@/components/ui/button";
import cta from "@/assets/images/cta.jpg";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="mx-auto px-6 md:px-20 lg:px-40 mb-10 mt-5 md:mt-20">
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="bg-white px-3 sm:px-10 py-5 md:py-14 text-gray-700 rounded-3xl flex flex-col md:flex-row items-center justify-between mt-20"
      >
        <div className="md:text-center text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="title"
          >
            Prêt à concrétiser votre projet immobilier ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-5 text-gray-800"
          >
            Nous mettons notre savoir-faire à votre service pour des solutions innovantes et adaptées.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <button className="button mt-5">
              Nous contacter
            </button>
          </motion.div>
        </div>
        <motion.div 
          className="mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <img src={cta} alt="Outil" className="max-w-full grayscale object-cover h-auto md:w-[30rem] md:h-56" />
        </motion.div>
      </motion.section>
    </section>
  );
}
