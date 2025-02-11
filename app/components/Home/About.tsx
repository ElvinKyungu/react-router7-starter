import { Button } from "@/components/ui/button";
import { Link } from 'react-router';

export default function ContentSection() {
  return (
    <section className="overflow-hidden py-32">
      <div className="space-y-16 px-6 md:px-20 lg:px-40">
        <h2 className="text-title relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl">
          The Gemini ecosystem brings together our models.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="tls-shadow-md rounded-card relative overflow-hidden">
              <img
                className="relative hidden grayscale dark:block h-96 w-full object-cover rounded-xl"
                src="https://oxymor-st.tailus.io/_astro/bars.DEh8rxfi_2hxS64.webp"
                alt=""
              />
            </div>
          </div>
          <div className="relative space-y-4">
            <p className="text-body">
              Gemini is evolving to be more than just the models.{" "}
              <span className="text-title font-medium">
                It supports an entire ecosystem
              </span>{" "}
              — from products innovate.
            </p>
            <p>
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p>

            <div className="pt-6">
              <blockquote className="text-blockquote">
                <cite>
                  Using TailsUI has been like unlocking a secret design
                  superpower. It's the perfect fusion of simplicity and
                  versatility, enabling us to create UIs that are as stunning as
                  they are user-friendly.
                </cite>
                <div className="mt-6 space-y-3">
                  <Button className="mt-5 bg-black text-white hover:bg-black cursor-pointer shadow-none rounded-full">
                    <Link to={"/services"}>Voir nos services</Link>
                  </Button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
