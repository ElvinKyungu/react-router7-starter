import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import home_section from "@/assets/images/home_section.jpg";

const faqs = [
  {
    question: "Quels types d'évaluations immobilières proposez-vous ?",
    answer: "Nous proposons différents types d'évaluations immobilières : évaluation pour vente/achat, expertise judiciaire, évaluation pour succession/donation, évaluation locative, et expertise pour les professionnels de l'immobilier.",
  },
  {
    question: "Quelle est votre méthodologie d'évaluation ?",
    answer: "Notre méthodologie repose sur une approche multicritères combinant l'analyse comparative du marché, la méthode par capitalisation des revenus, et la prise en compte des caractéristiques spécifiques du bien. Nous utilisons des outils professionnels et des bases de données actualisées pour garantir une évaluation précise.",
  },
  {
    question: "Quels sont les délais pour obtenir une expertise immobilière ?",
    answer: "Les délais varient selon le type et la complexité de l'évaluation. En général, une expertise standard est réalisée sous 5 à 7 jours ouvrés après la visite du bien. Pour des dossiers plus complexes ou urgents, nous adaptons nos délais à vos besoins.",
  },
  {
    question: "Dans quelles zones géographiques intervenez-vous ?",
    answer: "Nous intervenons principalement dans la région [votre région], avec une expertise particulière du marché local. Nous pouvons également intervenir sur l'ensemble du territoire national pour des missions spécifiques.",
  },
  {
    question: "Quels documents sont nécessaires pour une évaluation ?",
    answer: "Les principaux documents requis sont : le titre de propriété, les plans du bien, les diagnostics techniques, le relevé de charges pour les copropriétés, et tout document pertinent concernant des travaux ou modifications. La liste complète vous sera fournie lors de notre premier contact.",
  },
  {
    question: "Vos rapports d'expertise sont-ils reconnus officiellement ?",
    answer: "Oui, nos rapports d'expertise sont reconnus par les institutions bancaires, les tribunaux et les administrations. Nous sommes des experts certifiés et nos évaluations respectent les normes professionnelles en vigueur.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="mx-auto px-6 md:px-20 lg:px-40 mb-5 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Questions fréquentes</h2>
      </motion.div>
      <div className="grid grid-cols-12 md:gap-20">
        <div className="space-y-4 col-span-12 md:col-span-6">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
            >
              <Card className="border border-gray-100 bg-white/40 shadow-none rounded-md cursor-pointer">
                <button
                  className="w-full flex justify-between items-center cursor-pointer p-4 text-left text-base md:text-lg font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  layout
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <CardContent className="p-4 text-gray-700 text-sm">
                    {faq.answer}
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block md:col-span-6"
        >
          <img
            src={home_section}
            alt="Expert en évaluation immobilière"
            className="h-96 rounded-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
