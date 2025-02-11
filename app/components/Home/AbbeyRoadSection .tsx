import { Card, CardContent } from "@/components/ui/card";

export default function AbbeyRoadPage() {
  return (
    <div className="flex flex-col items-center px-6 py-12 md:px-24 lg:px-48">
      <h1 className="text-5xl font-medium text-center leading-tight mb-12">
        Abbey Road Conseil l’expertise immobilière pour votre entreprise.
      </h1>

      <div className="grid md:grid-cols-2 gap-12 w-full">
        <Card className="bg-white p-3 md:p-6 border-none ">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">
              L’expertise en immobilier
            </h2>
            <p className="text-gray-700">
              Réalisation d’expertises en immobilier d’entreprise : évaluation
              de valeur vénale, de valeur locative, d’indemnité d’éviction, etc.
              Notre expert agréé réalise ses rapports d’expertise conformément
              aux règles édictées par la « Charte de l’Expertise en Évaluation
              Immobilière » et de la RICS. Notre expérience et notre excellente
              connaissance des marchés immobiliers régionaux nous permettent de
              réaliser des rapports fiables et documentés.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-none p-3 md:p-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">
              Un accompagnement sur mesure
            </h2>
            <p className="text-gray-700">
              L’immobilier est un poste très important qui doit être regardé
              dans le détail afin d’être optimisé. Nous intervenons pour vous
              aider à trouver de nouveaux locaux (rédaction du cahier des
              charges, recherche de site) ou pour travailler à l’amélioration de
              la valeur de votre bien (audit, reconversion, dynamisation de
              commercialisation, etc.).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
