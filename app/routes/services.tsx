import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


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
   <h1>Hello</h1>
  );
};

export default Objectives;