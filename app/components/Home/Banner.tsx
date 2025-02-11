import { Button } from "@/components/ui/button";
import img_tool from "@/assets/images/tool.png";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="bg-cover my-5 mt-20">
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="bg-green-200 px-6 sm:px-10 py-14 text-gray-700 rounded-3xl flex flex-col md:flex-row items-center justify-between mt-20"
      >
        <div className="text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Le choix de l'expertise pour vous
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
            <Button className="mt-5 bg-black text-white hover:bg-black cursor-pointer shadow-none rounded-full">
              Nous contacter
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <img src={img_tool} alt="Outil" className="max-w-full h-auto md:w-[30rem] md:h-56" />
        </motion.div>
      </motion.section>
    </section>
  );
}
