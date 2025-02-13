import avatar from "@/assets/images/avatar.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FAQs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32">
      <div className="space-y-16 px-6 md:px-20 lg:px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto space-y-6 md:space-y-8"
        >
          <h2 className="text-title text-4xl font-medium lg:text-5xl">
            La confiance de nos clients témoigne de notre expertise
          </h2>
          <p className="text-body">
            Découvrez les retours d'expérience de nos clients qui nous ont fait confiance pour leurs projets d'investissement immobilier.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card variant-mixed grid gap-5  sm:col-span-2 lg:row-span-2 lg:p-12 border border-gray-200 bg-white shadow-md shadow-gray-200/50 p-5 rounded-xl"
          >
            <blockquote className="grid gap-6 [grid-template-rows:1fr_auto]">
              <p className="text-title">
                "L'expertise approfondie et le professionnalisme de l'équipe ont été déterminants dans notre projet d'investissement. Leur analyse détaillée du marché et leurs conseils personnalisés nous ont permis de faire un choix éclairé. La précision de leur évaluation immobilière nous a donné une confiance totale dans notre décision d'achat."
              </p>

              <div className="grid items-center gap-3 ">
                <div className="avatar sz-md">
                  <img
                    src={avatar}
                    alt=""
                    className="rounded-full w-16 h-16 object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <cite className="text-title text-sm font-medium">
                    Pierre Durand
                  </cite>
                  <span className="text-caption block text-sm">
                    Investisseur Immobilier
                  </span>
                </div>
              </div>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card variant-mixed border border-gray-200 bg-white shadow-md shadow-gray-200/50 p-5 rounded-xl"
          >
            <blockquote className="space-y-6">
              <p>
                "Un accompagnement remarquable tout au long de notre projet d'expertise. La méthodologie utilisée est rigoureuse et transparente."
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <div className="avatar sz-md">
                  <img
                    src={avatar}
                    alt=""
                    className="rounded-full w-10 h-10 object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <cite className="text-title text-sm font-medium">
                    Marie Lambert
                  </cite>
                  <span className="text-caption block text-sm">
                    Propriétaire
                  </span>
                </div>
              </div>
            </blockquote>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="card variant-mixed border border-gray-200 bg-white shadow-md shadow-gray-200/50 p-5 rounded-xl"
          >
            <blockquote className="space-y-6">
              <p>
                "Une expertise immobilière de qualité qui nous a permis de valoriser notre bien à sa juste valeur. Je recommande vivement leurs services."
              </p>

              <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                <div className="avatar sz-md">
                  <img
                    src={avatar}
                    alt=""
                    className="rounded-full w-10 h-10 object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-title text-sm font-medium">
                    François Martin
                  </p>
                  <span className="text-caption block text-sm">
                    Gérant de SCI
                  </span>
                </div>
              </div>
            </blockquote>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
