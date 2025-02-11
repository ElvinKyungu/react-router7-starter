import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import home_section from "@/assets/images/home_section.jpg";
const faqs = [
  {
    question: "Qu'est-ce qu'Abbey Road Conseil ?",
    answer:
      "Abbey Road Conseil est un cabinet spécialisé en expertise immobilière et en accompagnement sur mesure pour les entreprises.",
  },
  {
    question: "Qu'est-ce qu'Abbey Road Conseil ?",
    answer:
      "Abbey Road Conseil est un cabinet spécialisé en expertise immobilière et en accompagnement sur mesure pour les entreprises.",
  },
  {
    question: "Quels services proposez-vous ?",
    answer:
      "Nous proposons l’évaluation immobilière, la recherche de site, la dynamisation de commercialisation et d'autres services liés à l'immobilier.",
  },
  {
    question: "Pourquoi faire appel à un expert en immobilier ?",
    answer:
      "Un expert immobilier fournit une évaluation objective et fiable de votre bien, essentielle pour sécuriser vos transactions et décisions stratégiques.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto px-6 md:px-20 lg:px-40 mb-5 pb-10">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
      </div>
      <div className="grid grid-cols-12 md:gap-20">
        <div className="space-y-4 col-span-12 md:col-span-6 ">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border border-gray-100 bg-white/40 shadow-none rounded-md cursor-pointer"
            >
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
          ))}
        </div>
        <div className="hidden md:block md:col-span-6">
          <img
            src={home_section}
            alt=""
            className="h-96 rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
