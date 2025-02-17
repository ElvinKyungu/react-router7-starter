import type { Route } from "./+types/services";
import { motion } from "framer-motion";
import logo from "@/assets/images/logo.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services d'Expertise Immobilière | Évaluation & Conseil Professionnel" },
    { 
      name: "description", 
      content: "Découvrez nos services d'expertise immobilière : rapports détaillés, certificats, contrôles de cohérence. Cabinet spécialisé dans l'évaluation professionnelle de biens immobiliers avec une méthodologie rigoureuse."
    },
    {
      name: "keywords",
      content: "expertise immobilière, rapport expertise, certificat expertise, évaluation immobilière, contrôle cohérence immobilier"
    },
    {
      property: "og:title",
      content: "Services d'Expertise Immobilière | Évaluation & Conseil Professionnel"
    },
    {
      property: "og:description",
      content: "Services complets d'expertise immobilière : rapports détaillés, certificats, évaluations professionnelles. Cabinet spécialisé dans l'estimation immobilière."
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: logo },
    { property: "og:url", content: "https://3ie-site-dev.tech-magister.com/services" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Services d'Expertise Immobilière" },
    {
      name: "twitter:description",
      content: "Services professionnels d'expertise et d'évaluation immobilière. Rapports détaillés et certifications."
    },
    { name: "twitter:image", content: logo },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Cabinet d'Expertise Immobilière" },
    { name: "language", content: "French" },
    { name: "geo.region", content: "FR" },
    { name: "geo.placename", content: "France" }
  ];
}

const valueTypes = [
  {
    title: "Rapport d'expertise détaillé",
    description: "Une analyse approfondie et documentée de votre bien immobilier, incluant une évaluation précise basée sur des critères objectifs et les conditions du marché actuel.",
    price: "1500€"
  },
  {
    title: "Rapport d'expertise synthétique", 
    description: "Un document concis présentant les points clés de l'évaluation de votre bien, idéal pour une vision rapide et claire de sa valeur sur le marché.",
    price: "800€"
  },
  {
    title: "Certificat d'expertise",
    description: "Document officiel attestant de la valeur de votre bien, reconnu par les institutions financières et les autorités compétentes.",
    price: "500€"
  },
  {
    title: "Contrôle de cohérence",
    description: "Vérification approfondie de la cohérence des prix et des évaluations immobilières par rapport aux tendances du marché local.",
    price: "500€"
  },
  {
    title: "Contre-expertise",
    description: "Service complet incluant le contrôle de cohérence et une analyse approfondie pour confirmer ou infirmer une évaluation existante.",
    price: "1500€"
  }
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto px-6 md:px-20 lg:px-40"
    >
      <section className="py-10 sm:py-16">
        <div className="mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="title text-left"
            >
              Nos services et tarifs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg sm:text-xl text-gray-600 text-left"
            >
              Une expertise professionnelle pour tous vos besoins d'évaluation immobilière
            </motion.p>
          </motion.div>

          <div className="w-full">
            <div className="hidden sm:flex w-full bg-gray-50 p-6 mb-4 rounded-t-lg">
              <div className="w-[30%]">
                <h3 className="text-lg font-medium text-gray-900">Service</h3>
              </div>
              <div className="w-[40%]">
                <h3 className="text-lg font-medium text-gray-900">Description</h3>
              </div>
              <div className="w-[30%] text-right">
                <h3 className="text-lg font-medium text-gray-900">Tarif</h3>
              </div>
            </div>
            
            {valueTypes.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row w-full bg-white rounded-lg p-4 sm:p-6 mb-4"
              >
                <div className="w-full sm:w-[30%] mb-2 sm:mb-0">
                  <h3 className="text-lg font-medium text-gray-900">{value.title}</h3>
                </div>
                <div className="w-full sm:w-[40%] mb-2 sm:mb-0">
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
                <div className="w-full sm:w-[30%] text-left sm:text-right mt-2 sm:mt-0">
                  <p className="text-lg font-semibold text-gray-900">{value.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
