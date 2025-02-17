import { Link } from 'react-router';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import about from '@/assets/images/about.jpg'

export default function ContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="overflow-hidden py-5 md:py-10 lg:py-32 mt-10">
      <div className="space-y-1 lg:space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="title"
        >
          Une expertise immobilière professionnelle à votre service
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-6 sm:mb-0"
          >
            <div className="tls-shadow-md rounded-card relative overflow-hidden">
              <img
                className="relative hidden grayscale md:block h-96 w-full object-cover rounded-xl"
                src={about}
                alt="Cabinet d'expertise immobilière"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative space-y-2"
          >
            <p className="text-body">
              Notre cabinet d'expertise immobilière s'appuie sur{" "}
              <span className="text-title font-medium">
                des méthodologies éprouvées
              </span>{" "}
              pour vous offrir une évaluation précise et fiable de vos biens.
            </p>
            <p>
              Nous combinons expertise technique, connaissance approfondie du marché et outils professionnels pour répondre à vos besoins en matière d'évaluation immobilière, que ce soit pour une transaction, une expertise judiciaire ou une estimation patrimoniale.
            </p>

            <div className="pt-2">
              <blockquote className="text-blockquote">
                <cite>
                  Notre engagement : vous apporter des solutions d'expertise immobilière sur mesure, avec une approche rigoureuse et professionnelle pour chaque mission qui nous est confiée.
                </cite>
                <div className="mt-6 space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <button className="button">
                      <Link to={"/services"}>Voir nos services</Link>
                    </button>
                  </motion.div>
                </div>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
