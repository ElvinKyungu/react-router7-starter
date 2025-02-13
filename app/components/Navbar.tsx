import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setVisible(!isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/services", label: "Services" },
    { to: "/methodologies", label: "Méthodologies" },
    { to: "/objectifs", label: "Objectifs" },
    { to: "/prerequis", label: "Prérequis" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-300 bg-white ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="bg-primary relative px-6 md:px-20 lg:px-40">
      <div className="">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold flex items-center gap-3 text-gray-700"
          >
            <img src={logo} alt="Logo" className="h-10 rounded-full" />
            <span>Geoffrey Duhayon</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm transition-colors text-gray-700 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              size="icon"
              className="ml-2 text-black shadow-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 cursor-pointer" />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer " />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay & Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed top-0 right-0 w-72 h-screen bg-white shadow-lg z-50 p-5"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-700">
                  Menu
                </span>
                <Button
                  size="icon"
                  className="text-black shadow-none"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6 shadow-none" />
                </Button>
              </div>

              <div className="space-y-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={link.to}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-base font-medium ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent hover:text-accent-foreground"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
    </header>
  );
};

export default Navbar;
