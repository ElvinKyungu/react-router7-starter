import { Scale, Lightbulb, ChartLine, Handshake } from "lucide-react";
import { Button } from "../ui/button";
import img_tool from "@/assets/images/tool.png";
import { motion } from "framer-motion";

export default function ValuesSection() {
  return (
    <section className="bg-cover bg-center px-6 md:px-20 lg:px-40 my-5">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-10">
        Nos valeurs
      </h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {[
          {
            icon: <Scale className="text-3xl text-blue-600 mb-2" />,
            title: "Intégrité",
            description: "Transparence et éthique dans toutes nos transactions.",
          },
          {
            icon: <ChartLine className="text-3xl text-green-600 mb-2" />,
            title: "Expertise",
            description: "Une connaissance approfondie du marché immobilier.",
          },
          {
            icon: <Lightbulb className="text-3xl text-yellow-600 mb-2" />,
            title: "Innovation",
            description: "Des solutions modernes et digitales pour vous servir.",
          },
          {
            icon: <Handshake className="text-3xl text-purple-600 mb-2" />,
            title: "Engagement",
            description: "Un accompagnement personnalisé à chaque étape.",
          },
        ].map(({ icon, title, description }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="group bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center p-6 text-center transition-all duration-300 relative overflow-hidden hover:shadow-xl"
          >
            <div
              key={index}
              className="bg-white rounded-xl flex flex-col items-center justify-center p-6 text-center transition-shadow duration-300"
            >
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm mt-3 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="bg-green-200 px-6 sm:px-10 py-14 text-gray-700 rounded-3xl flex flex-col md:flex-row items-center justify-between mt-20">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">Le choix de l'expertise pour vous</h2>
          <p className="mt-5 text-gray-800">
            Nous mettons notre savoir-faire à votre service pour des solutions innovantes et adaptées.
          </p>
          <Button className="mt-5 bg-black text-white hover:bg-black cursor-pointer shadow-none rounded-full">
            Nous contacter
          </Button>
        </div>
        <div className="mt-10 md:mt-0">
          <img src={img_tool} alt="Outil" className="max-w-full h-auto md:w-[30rem] md:h-56" />
        </div>
      </section>
    </section>
  );
}
