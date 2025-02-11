import avatar from "@/assets/images/avatar.jpg";
import { Button } from "@/components/ui/button";
export default function FAQs() {
  return (
    <section className="py-32">
      <div className="space-y-16 px-6 md:px-20 lg:px-40">
        <div className="relative z-10 mx-auto  space-y-6 md:space-y-8">
          <h2 className="text-title text-4xl font-medium lg:text-5xl">
            Build by makers, loved by thousand developers
          </h2>
          <p className="text-body ">
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <div className="card variant-mixed grid gap-5 [grid-template-rows:auto_1fr] sm:col-span-2 lg:row-span-2 lg:p-12 border border-gray-200 bg-white shadow-md shadow-gray-200/50 p-5 rounded-xl">
            <img
              className="h-6 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/nike.svg"
              alt="Nike Logo"
              height="24"
              width="auto"
            />

            <blockquote className="grid gap-6 [grid-template-rows:1fr_auto]">
              <p className="text-title ">
                "Tailus has transformed the way I develop web applications.
                Their extensive collection of UI components, blocks, and
                templates has significantly accelerated my workflow. The
                flexibility to customize every aspect allows me to create unique
                user experiences. Tailus is a game-changer for modern web
                development"
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
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
                    Elvin Code
                  </cite>
                  <span className="text-caption block text-sm">
                    Software Ingineer
                  </span>
                </div>
              </div>
            </blockquote>
          </div>

          <div className="card variant-mixed border border-gray-200 bg-white shadow-md shadow-gray-200/50 p-5 rounded-xl">
            <blockquote className="space-y-6">
              <p>
                "Great work on tailfolio template. This is one of the best
                personal website that I have seen so far :)"
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
                    Yucel Faruksahan
                  </cite>
                  <span className="text-caption block text-sm">
                    Creator, Tailkits
                  </span>
                </div>
              </div>
            </blockquote>
          </div>
          <div className="card variant-mixed border border-gray-200 bg-white shadow-md shadow-gray-200/50 p-5 rounded-xl">
            <blockquote className="space-y-6">
              <p>
                "Great work on tailfolio template. This is one of the best
                personal website that I have seen so far :)"
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
                    Rodrigo Aguilar
                  </p>
                  <span className="text-caption block text-sm">
                    Creator, TailwindAwesome
                  </span>
                </div>
              </div>
            </blockquote>
          </div>
          <div className="card variant-mixed sm:col-span-2 lg:p-12 flex justify-center flex-col items-center">
            <h1 className="text-5xl">Something</h1>
            <div className="mt-5">
              <Button className="bg-black rounded-full text-white cursor-pointer">
                Contactez-nous maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
