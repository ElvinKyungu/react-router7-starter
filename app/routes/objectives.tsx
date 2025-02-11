import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Zap, CheckCircle } from "lucide-react";

const valueTypes = [
  {
    title: "Valeur vénale",
    description: "Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit."
  },
  {
    title: "Juste valeur (norme IFRS 13)",
    description: "Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco."
  },
  {
    title: "Coût de remplacement brut",
    description: "Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor."
  },
  {
    title: "Coût de remplacement net",
    description: "Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore."
  },
  {
    title: "Valeur d'apport",
    description: "Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit."
  },
  {
    title: "Prix de convenance ou d'opportunité",
    description: "Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur."
  },
  {
    title: "Prix de vente forcée",
    description: "Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit."
  },
  {
    title: "Valeur à neuf ou coût de reconstruction",
    description: "Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco."
  },
  {
    title: "Valeur d'assurance",
    description: "Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor."
  },
  {
    title: "Valeur hypothécaire",
    description: "Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore."
  },
  {
    title: "Droit au bail",
    description: "Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit."
  },
  {
    title: "Integrations",
    description: "Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur."
  },
  {
    title: "Indemnité d'éviction",
    description: "Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit."
  },
  {
    title: "Indemnité d'exportation",
    description: "Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco."
  },
  {
    title: "Valeur en matière forestière",
    description: "Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor."
  }
];

interface ValueCardProps {
  title: string;
  description: string;
  className?: string;
}

const ValueCard = ({ title, description, className = "" }: ValueCardProps) => (
  <div className={`w-full p-8 ${className}`}>
    <div className="flex items-center mb-6">
      <CheckCircle />
      <div className="ml-4 text-xl">{title}</div>
    </div>
    <p className="leading-loose text-gray-500">
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
          <div className="container mx-auto px-6 p-6 bg-white">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h1 className="mt-2 text-5xl lg:text-5xl tracking-tight text-gray-900">
                Découvrez nos objectifs
              </h1>
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
                  >
                    <ValueCard
                      title={value.title}
                      description={value.description}
                      className={`
                        ${!isLastRow ? 'border-b border-gray-300' : ''}
                        ${!isLastColumn ? 'md:border-r' : ''}
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
