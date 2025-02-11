import type { Route } from "./+types/home";
import { motion } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import ValuesSection from "@/components/Home/ValueSection";
import FAQSection from "@/components/Home/FAQ";
import Testimonial from "@/components/Home/Testimonial";
import About from "@/components/Home/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
        <ValuesSection />
        <Testimonial />
        <FAQSection />
      </main>
    </motion.div>
  );
};

export default Home;
