import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import home_section from "@/assets/images/home_section.jpg";
const faqs = [
  {
    question: "Taux de capitalisation ou de rendement",
    answer:
      "Abbey Road Conseil est un cabinet spécialisé en expertise immobilière et en accompagnement sur mesure pour les entreprises.",
  },
  {
    question: "Méthode par comparaison",
    answer:
      "Abbey Road Conseil est un cabinet spécialisé en expertise immobilière et en accompagnement sur mesure pour les entreprises.",
  },
  {
    question: "Méthode par le revenu (capitalisation)",
    answer:
      "Nous proposons l’évaluation immobilière, la recherche de site, la dynamisation de commercialisation et d'autres services liés à l'immobilier.",
  },
  {
    question: "Méthode du discounted cash-flow (DCF)",
    answer:
      "Un expert immobilier fournit une évaluation objective et fiable de votre bien, essentielle pour sécuriser vos transactions et décisions stratégiques.",
  },
  {
    question: "Méthode du coût de remplacement",
    answer:
      "Un expert immobilier fournit une évaluation objective et fiable de votre bien, essentielle pour sécuriser vos transactions et décisions stratégiques.",
  },
  {
    question: "Méthode indiciaire",
    answer:
      "Un expert immobilier fournit une évaluation objective et fiable de votre bien, essentielle pour sécuriser vos transactions et décisions stratégiques.",
  },
  {
    question: "Méthode par sol de construction",
    answer:
      "Un expert immobilier fournit une évaluation objective et fiable de votre bien, essentielle pour sécuriser vos transactions et décisions stratégiques.",
  },
  {
    question: "Méthode du bilan promoteur",
    answer:
      "Un expert immobilier fournit une évaluation objective et fiable de votre bien, essentielle pour sécuriser vos transactions et décisions stratégiques.",
  },
  {
    question: "Méthode des ratios professionnels",
    answer:
      "Un expert immobilier fournit une évaluation objective et fiable de votre bien, essentielle pour sécuriser vos transactions et décisions stratégiques.",
  },
];

export default function Methodologies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto px-6 md:px-20 lg:px-40 mb-5 mt-10">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium my-5">Méthodologies</h2>
      </div>
      <div className="grid grid-cols-12 md:gap-20">
        <div className="space-y-4 col-span-12 md:col-span-6 ">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border border-gray-100 shadow-none rounded-none cursor-pointer"
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
            className="h-[42rem] rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

