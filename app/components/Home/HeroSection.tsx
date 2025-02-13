import { Button } from "@/components/ui/button";
import hero_section from "@/assets/images/home_section.jpg";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-between h-[100vh] bg-cover bg-center px-6 md:px-20 lg:px-40"
      style={{ backgroundImage: `url(${hero_section})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent w-full"></div>
      <div className="relative z-10 text-white md:text-left mt-10 md:mt-36">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/60 px-4 py-1 rounded-full flex items-center gap-2 w-max"
        >
          <Star className="w-5 h-5 text-yellow-500"/>
          <span className="text-sm">
            Lorem ipsum dolor sit amet
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-title relative z-10 max-w-4xl text-4xl font-medium lg:text-5xl mt-5 md:mt-10"
        >
          Investissez Malin, Réussissez en Immobilier
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm md:text-lg text-title relative z-10 max-w-2xl mt-5 md:mt-10"
        >
          Expertise, rentabilité et accompagnement sur mesure : nous
          transformons vos ambitions immobilières en succès.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row gap-4 items-start justify-start md:items-start"
        >
          <Button
            variant="outline"
            className="border-primary cursor-pointer rounded-full bg-primary text-black text-sm border-none bg-white md:text-base"
          >
            <Link to={"/contact"}>Contactez nos experts</Link>
          </Button>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-10"
      >
        <div className="flex gap-3 items-center">
          <div className="flex -space-x-4">
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" className="border-2 rounded-full border-white" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" className="border-2 rounded-full border-white" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" className="border-2 rounded-full border-white" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" className="border-2 rounded-full border-white" />
            </Avatar>
          </div>
          <div className="relative">
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-5 h-5"/>
              <Star className="w-5 h-5"/>
              <Star className="w-5 h-5"/>
              <Star className="w-5 h-5"/>
            </div>
            <div className="text-sm text-white z-50">
              <p>56 Happy customers</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
