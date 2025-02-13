import type { Route } from "./+types/home";
import { motion } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import FAQSection from "@/components/Home/FAQ";
import About from "@/components/Home/About";
import logo from "@/assets/images/logo.jpg";
import Banner from "~/components/Home/Banner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Expert en Évaluation Immobilière | Cabinet de Conseil Spécialisé" },
    { name: "description", content: "Cabinet d'expertise immobilière proposant des services d'évaluation professionnelle, estimation de biens et conseil en investissement. Méthodologie rigoureuse et accompagnement personnalisé." },
    { name: "keywords", content: "expertise immobilière, évaluation immobilière, estimation bien immobilier, conseil immobilier, expert immobilier" },
    { property: "og:title", content: "Expert en Évaluation Immobilière | Cabinet de Conseil Spécialisé" },
    { property: "og:description", content: "Cabinet d'expertise immobilière proposant des services d'évaluation professionnelle, estimation de biens et conseil en investissement. Méthodologie rigoureuse et accompagnement personnalisé." },
    { property: "og:type", content: "website" },
    { property: "og:image", content: logo },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Expert en Évaluation Immobilière | Cabinet de Conseil Spécialisé" },
    { name: "twitter:description", content: "Cabinet d'expertise immobilière proposant des services d'évaluation professionnelle, estimation de biens et conseil en investissement." },
    { name: "twitter:image", content: logo },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Cabinet d'Expertise Immobilière" },
    { name: "language", content: "French" }
  ];
}

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <HeroSection />
      <main className="bg-gray-50">
        <About />
        <Banner/>
        <FAQSection />
      </main>
    </motion.div>
  );
};

export default Home;
