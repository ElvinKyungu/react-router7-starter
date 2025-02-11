import React from "react";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import logo from "@/assets/images/logo.jpg";
import { Link } from "react-router";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/methodologies", label: "Méthodologies" },
  { to: "/objectives", label: "Objectifs" },
  { to: "/prerequisites", label: "Prérequis" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="mx-auto px-6 md:px-20 lg:px-40 p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between space-x-10">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="h-10 me-3 rounded-full"
                alt="Expertise Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700">
                Geoffrey Duhayon
              </span>
            </Link>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-700 space-x-6">
            {links.map((link) => (
              <li key={link.to} className="">
                <Link to={link.to} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Footer Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-700">
            © {currentYear}{" "}
            <Link to="/" className="hover:underline">
              Geoffrey Duhayon
            </Link>
            . Tous droits réservés
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/"
              className="text-gray-700 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn page</span>
            </a>
            <a
              href="https://x.com/"
              className="text-gray-700 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">X (Twitter) page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
