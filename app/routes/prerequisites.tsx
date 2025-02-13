import type { Route } from "./+types/prerequisites";
import {UserCheck, Clock, TrendingUp, Home, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Banner from "~/components/Home/Banner";
import logo from "@/assets/images/logo.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prérequis pour l'Évaluation Immobilière | Expert en Estimation" },
    { 
      name: "description", 
      content: "Découvrez les prérequis essentiels pour une évaluation immobilière réussie : consentement mutuel, délai optimal, stabilité des prix. Notre expertise professionnelle garantit une estimation objective et fiable de votre bien."
    },
    {
      name: "keywords",
      content: "prérequis évaluation immobilière, estimation immobilière conditions, expertise immobilière critères, évaluation bien immobilier"
    },
    {
      property: "og:title",
      content: "Prérequis pour l'Évaluation Immobilière | Expert en Estimation"
    },
    {
      property: "og:description",
      content: "Les conditions essentielles pour une évaluation immobilière professionnelle. Notre expertise garantit une estimation précise et objective de votre bien immobilier."
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: logo },
    { property: "og:url", content: "https://3ie-site-dev.tech-magister.com/prerequisites" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Prérequis pour l'Évaluation Immobilière" },
    {
      name: "twitter:description",
      content: "Découvrez les conditions nécessaires pour une évaluation immobilière professionnelle et objective."
    },
    { name: "twitter:image", content: logo },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Cabinet d'Expertise Immobilière" },
    { name: "language", content: "French" },
    { name: "geo.region", content: "FR" },
    { name: "geo.placename", content: "France" }
  ];
}

export default function Prerequisites() {
  return (
    <section className="bg-cover bg-center px-6 md:px-20 lg:px-40 my-5 mt-20">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-5xl font-medium mb-10"
      >
        Les prérequis
      </motion.h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {[
          {
            icon: <UserCheck className="text-3xl text-blue-600 mb-2" />,
            title: "Consentement mutuel",
            description: "Accord libre et éclairé entre vendeur et acheteur.",
          },
          {
            icon: <Clock className="text-3xl text-orange-600 mb-2" />,
            title: "Délai optimal", 
            description: "Période adéquate pour une négociation sereine.",
          },
          {
            icon: <TrendingUp className="text-3xl text-green-600 mb-2" />,
            title: "Stabilité du prix",
            description: "Maintien de la valeur pendant les négociations.",
          },
          {
            icon: <Home className="text-3xl text-purple-600 mb-2" />,
            title: "Prix du marché",
            description: "Bien immobilier aligné sur les prix du secteur.",
          },
          {
            icon: <Shield className="text-3xl text-red-600 mb-2" />,
            title: "Objectivité",
            description: "Évaluation basée sur des critères professionnels.",
          },
        ].map(({ icon, title, description }, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            key={index}
            className="group bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center p-6 text-center transition-all duration-300 relative overflow-hidden"
          >
            <motion.div 
              className="relative z-10 bg-white rounded-xl p-6 w-full h-full flex flex-col items-center"
            >
              {icon}
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm mt-3 text-gray-600">{description}</p>
            </motion.div>
          </motion.div>
        ))}
      </section>
      <Banner/>
    </section>
  );
}
