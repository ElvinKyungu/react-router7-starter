import {UserCheck, Clock, TrendingUp, Home, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import img_tool from "@/assets/images/tool.png";
import { motion } from "framer-motion";

export default function Prerequisites() {
  return (
    <section className="bg-cover bg-center px-6 md:px-20 lg:px-40 my-5 mt-20">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl font-medium mb-10"
      >
        Les prérequis
      </motion.h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {[
          {
            icon: <UserCheck className="text-3xl text-blue-600 mb-2" />,
            title: "Consentement mutuel",
            description: "Accord libre et éclairé entre vendeur et acheteur.",
          },
          {
            icon: <Clock className="text-3xl text-orange-600 mb-2" />,
            title: "Délai optimal", 
            description: "Période adéquate pour une négociation sereine.",
          },
          {
            icon: <TrendingUp className="text-3xl text-green-600 mb-2" />,
            title: "Stabilité du prix",
            description: "Maintien de la valeur pendant les négociations.",
          },
          {
            icon: <Home className="text-3xl text-purple-600 mb-2" />,
            title: "Prix du marché",
            description: "Bien immobilier aligné sur les prix du secteur.",
          },
          {
            icon: <Shield className="text-3xl text-red-600 mb-2" />,
            title: "Objectivité",
            description: "Évaluation basée sur des critères professionnels.",
          },
        ].map(({ icon, title, description }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="group bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center p-6 text-center transition-all duration-300 relative overflow-hidden hover:shadow-xl"
          >
            <motion.div 
              className="relative z-10 bg-white rounded-xl p-6 w-full h-full flex flex-col items-center"
            >
              {icon}
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm mt-3 text-gray-600">{description}</p>
            </motion.div>
          </motion.div>
        ))}
      </section>
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
