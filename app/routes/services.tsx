import type { Route } from "./+types/services";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
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
    description: "Une analyse approfondie et documentée de votre bien immobilier, incluant une évaluation précise basée sur des critères objectifs et les conditions du marché actuel."
  },
  {
    title: "Rapport d'expertise synthétique",
    description: "Un document concis présentant les points clés de l'évaluation de votre bien, idéal pour une vision rapide et claire de sa valeur sur le marché."
  },
  {
    title: "Certificat d'expertise",
    description: "Document officiel attestant de la valeur de votre bien, reconnu par les institutions financières et les autorités compétentes."
  },
  {
    title: "Contrôle de cohérence",
    description: "Vérification approfondie de la cohérence des prix et des évaluations immobilières par rapport aux tendances du marché local."
  },
  {
    title: "Évaluation digitale",
    description: "Utilisation des dernières technologies et outils numériques pour une estimation précise et rapide de votre bien immobilier."
  },
  {
    title: "Conseil personnalisé",
    description: "Accompagnement sur-mesure pour comprendre la valeur de votre bien et les opportunités du marché immobilier actuel."
  }
];

interface ValueCardProps {
  title: string;
  description: string;
  className?: string;
}

const ValueCard = ({ title, description, className = "" }: ValueCardProps) => (
  <div className={`w-full p-8 h-full flex flex-col ${className}`}>
    <div className="flex items-center mb-6">
      <CheckCircle className="text-green-600 w-6 h-6" />
      <h2 className="ml-4 text-xl font-medium text-gray-900">{title}</h2>
    </div>
    <p className="leading-loose text-gray-600 flex-grow">
      {description}
    </p>
  </div>
);

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto"
    >
      <section className="pb-6 my-10">
        <div className="mx-auto p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto px-6 p-6 bg-white">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 space-y-4"
            >
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-5xl lg:text-5xl font-medium tracking-tight text-gray-900"
              >
                Découvrez nos services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-600"
              >
                Une expertise professionnelle pour tous vos besoins d'évaluation immobilière
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {valueTypes.map((value, index) => {
                const isLastRow = index >= valueTypes.length - 3;
                const isLastColumn = index % 3 === 2;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <ValueCard
                      title={value.title}
                      description={value.description}
                      className={`
                        ${!isLastRow ? 'border-b border-gray-200' : ''}
                        ${!isLastColumn ? 'border-r border-gray-200' : ''}
                      `}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
