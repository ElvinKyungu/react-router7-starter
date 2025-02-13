import type { Route } from "./+types/objectives";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import logo from "@/assets/images/logo.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Objectifs & Types d'Évaluation | Expert en Estimation Immobilière" },
    { 
      name: "description", 
      content: "Découvrez nos différents types d'évaluation immobilière : valeur vénale, IFRS 13, coût de remplacement, valeur d'apport. Cabinet d'expertise spécialisé dans l'estimation professionnelle de biens immobiliers."
    },
    {
      name: "keywords",
      content: "évaluation immobilière, valeur vénale, IFRS 13, expertise immobilière, estimation immobilière, coût de remplacement, valeur d'apport"
    },
    {
      property: "og:title",
      content: "Objectifs & Types d'Évaluation | Expert en Estimation Immobilière"
    },
    {
      property: "og:description", 
      content: "Découvrez nos différents types d'évaluation immobilière proposés par notre cabinet d'expertise. De la valeur vénale aux normes IFRS 13, nous vous accompagnons dans tous vos projets d'estimation."
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: logo },
    { property: "og:url", content: "https://3ie-site-dev.tech-magister.com/objectives" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Types d'Évaluation Immobilière | Cabinet d'Expertise" },
    {
      name: "twitter:description",
      content: "Découvrez nos différents types d'évaluation immobilière. Cabinet d'expertise spécialisé dans l'estimation professionnelle de biens."
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
    title: "Valeur vénale",
    description: "Estimation de la valeur marchande réelle d'un bien immobilier basée sur les conditions actuelles du marché et les caractéristiques spécifiques du bien."
  },
  {
    title: "Juste valeur (norme IFRS 13)", 
    description: "Évaluation conforme aux normes internationales IFRS 13, permettant une estimation standardisée et reconnue pour les rapports financiers."
  },
  {
    title: "Coût de remplacement brut",
    description: "Calcul du coût total nécessaire pour reconstruire à neuf un bien immobilier identique, incluant tous les matériaux et la main d'œuvre."
  },
  {
    title: "Coût de remplacement net",
    description: "Estimation du coût de reconstruction diminué de la dépréciation liée à l'âge, l'usure et l'obsolescence du bien."
  },
  {
    title: "Valeur d'apport",
    description: "Évaluation spécifique pour les opérations d'apport en société, tenant compte des aspects juridiques et fiscaux particuliers."
  },
  {
    title: "Prix de convenance ou d'opportunité",
    description: "Estimation tenant compte des conditions particulières de vente et des opportunités spécifiques pour l'acheteur ou le vendeur."
  },
  {
    title: "Prix de vente forcée",
    description: "Évaluation dans le cadre d'une vente rapide ou contrainte, prenant en compte les conditions particulières de la transaction."
  },
  {
    title: "Valeur à neuf ou coût de reconstruction",
    description: "Estimation du coût total de reconstruction d'un bien immobilier à l'identique avec des matériaux neufs."
  },
  {
    title: "Valeur d'assurance",
    description: "Évaluation spécifique pour les besoins d'assurance, incluant tous les éléments à couvrir en cas de sinistre."
  },
  {
    title: "Valeur hypothécaire",
    description: "Estimation pour les besoins de garantie bancaire, tenant compte des critères spécifiques des établissements financiers."
  },
  {
    title: "Droit au bail",
    description: "Évaluation de la valeur du droit au bail commercial, incluant l'analyse du marché locatif et des conditions du bail."
  },
  {
    title: "Valeur locative",
    description: "Estimation du loyer de marché d'un bien immobilier basée sur les conditions locatives actuelles du secteur."
  },
  {
    title: "Indemnité d'éviction",
    description: "Calcul des indemnités dues au locataire en cas de non-renouvellement du bail commercial par le propriétaire."
  },
  {
    title: "Indemnité d'expropriation",
    description: "Évaluation des indemnités dues dans le cadre d'une procédure d'expropriation pour cause d'utilité publique."
  },
  {
    title: "Valeur en matière forestière",
    description: "Expertise spécialisée pour l'évaluation des terrains forestiers, tenant compte du potentiel d'exploitation."
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

const Objectives = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto"
    >
      <section className="pb-6 my-10">
        <div className="mx-auto p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto px-6 p-6 bg-white rounded-xl shadow-sm">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 space-y-4"
            >
              <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-gray-900">
                Découvrez nos objectifs
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Notre expertise couvre une large gamme d'évaluations immobilières pour répondre à vos besoins spécifiques.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {valueTypes.map((value, index) => {
                const isLastRow = index >= valueTypes.length - (valueTypes.length % 3 || 3);
                const isLastColumn = (index + 1) % 3 === 0;

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
                        hover:bg-gray-50 transition-colors duration-300
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

export default Objectives;
