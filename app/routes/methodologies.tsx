import type { Route } from "./+types/methodologies";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import methodologie from "@/assets/images/about.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Méthodologies d'Évaluation Immobilière | Expert en Estimation de Biens" },
    { 
      name: "description", 
      content: "Découvrez nos méthodologies d'expertise immobilière : capitalisation, comparaison, DCF, coût de remplacement. Une approche professionnelle et rigoureuse pour l'évaluation de vos biens immobiliers."
    },
    {
      name: "keywords",
      content: "méthodologie évaluation immobilière, expertise immobilière, méthode par comparaison, taux de capitalisation immobilier, DCF immobilier, estimation bien immobilier"
    },
    {
      property: "og:title",
      content: "Méthodologies d'Évaluation Immobilière | Expert en Estimation de Biens"
    },
    {
      property: "og:description",
      content: "Expertise immobilière professionnelle utilisant des méthodologies éprouvées : capitalisation, comparaison, DCF, coût de remplacement. Évaluation précise et fiable de vos biens."
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: logo },
    { property: "og:url", content: "https://3ie-site-dev.tech-magister.com/methodologies" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Méthodologies d'Expertise Immobilière" },
    {
      name: "twitter:description",
      content: "Découvrez nos méthodologies professionnelles d'évaluation immobilière pour une estimation précise de votre bien."
    },
    { name: "twitter:image", content: logo },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Cabinet d'Expertise Immobilière" },
    { name: "language", content: "French" },
    { name: "geo.region", content: "FR" },
    { name: "geo.placename", content: "France" }
  ];
}

const faqs = [
  {
    question: "Taux de capitalisation ou de rendement",
    answer: "Cette méthode évalue la valeur d'un bien immobilier en fonction des revenus qu'il génère. Le taux de capitalisation, qui varie selon le type de bien et sa localisation, permet de déterminer la valeur vénale à partir des revenus locatifs nets. Cette approche est particulièrement adaptée pour les immeubles de rapport et les biens d'investissement.",
  },
  {
    question: "Méthode par comparaison",
    answer: "Cette approche fondamentale consiste à évaluer un bien en le comparant à des transactions récentes de biens similaires dans le même secteur. Nous analysons les caractéristiques spécifiques (surface, état, localisation, prestations) pour établir une valeur de marché pertinente, en tenant compte des ajustements nécessaires pour refléter les différences entre les biens.",
  },
  {
    question: "Méthode par le revenu (capitalisation)",
    answer: "Cette méthode s'appuie sur la capacité d'un bien à générer des revenus. Elle prend en compte les loyers perçus, les charges, la vacance locative et les travaux prévisionnels pour déterminer un revenu net. Ce revenu est ensuite capitalisé à un taux reflétant le risque et le potentiel du bien.",
  },
  {
    question: "Méthode du discounted cash-flow (DCF)",
    answer: "Le DCF est une méthode sophistiquée qui projette les flux de trésorerie futurs générés par le bien sur une période donnée (généralement 10 ans). Ces flux sont actualisés pour obtenir leur valeur présente, en tenant compte de l'inflation, des risques et des évolutions du marché. Cette méthode est particulièrement pertinente pour les actifs immobiliers complexes.",
  },
  {
    question: "Méthode du coût de remplacement",
    answer: "Cette approche évalue le coût nécessaire pour reconstruire à neuf le bien, en tenant compte de la dépréciation liée à l'âge et à l'obsolescence. Elle inclut le coût du terrain, de la construction et des aménagements, moins les différentes formes de dépréciation. Cette méthode est particulièrement utile pour les biens spécialisés ou atypiques.",
  },
  {
    question: "Méthode indiciaire",
    answer: "Cette méthode utilise des indices de référence du marché immobilier pour actualiser la valeur d'un bien à partir d'une valeur historique connue. Elle prend en compte l'évolution des prix du marché local et les tendances sectorielles pour établir une estimation actualisée.",
  },
  {
    question: "Méthode par sol et construction",
    answer: "Cette approche décompose la valeur du bien entre la valeur du terrain et celle des constructions. Elle est particulièrement adaptée pour les maisons individuelles et les terrains à bâtir, permettant d'évaluer séparément la valeur du foncier et des améliorations apportées.",
  },
  {
    question: "Méthode du bilan promoteur",
    answer: "Utilisée pour évaluer des terrains à bâtir ou des immeubles à restructurer, cette méthode calcule la valeur maximale qu'un promoteur pourrait payer en fonction du projet réalisable, des coûts de construction, des frais annexes et de la marge attendue.",
  },
  {
    question: "Méthode des ratios professionnels",
    answer: "Spécifique aux locaux commerciaux et professionnels, cette méthode utilise des ratios sectoriels (CA/m², EBITDA, etc.) pour déterminer la valeur locative ou vénale d'un bien. Elle prend en compte les spécificités du secteur d'activité et les performances économiques du site.",
  },
];

export default function Methodologies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto px-6 md:px-20 lg:px-40 mb-5 mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-10">Nos Méthodologies d'Évaluation</h2>
        <p className="text-gray-700 mb-10">
          Nous utilisons des méthodologies rigoureuses et éprouvées pour garantir une évaluation précise et fiable de votre bien immobilier. Chaque approche est choisie en fonction des spécificités de votre bien et de vos objectifs.
        </p>
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
              <Card className="border border-gray-100 shadow-none rounded-none cursor-pointer">
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
          transition={{ duration: 0.5 }}
          className="hidden md:block md:col-span-6"
        >
          <img
            src={methodologie}
            alt="Illustration des méthodologies d'évaluation immobilière"
            className="h-[42rem] rounded-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
