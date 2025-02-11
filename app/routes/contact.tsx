import type { Route } from "./+types/contact";
import { motion } from "framer-motion";
import { Mail, Phone, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "~/hooks/use-toast";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto space-y-16 px-6 md:px-20 lg:px-40 mt-20"
    >
      <h2 className="mb-4 text-4xl md:text-5xl font-medium text-gray-900">
        Restons en contact
      </h2>
      <p className="mb-8 text-gray-700 sm:text-lg">
        Une question, un problème technique ou simplement envie d’échanger avec nous ? Notre équipe est là pour vous aider. N’hésitez pas à nous contacter pour toute demande d’information, de collaboration ou de support.
      </p>
      {/* Contact Info Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
        {[  
          { icon: Mail, title: "Email us", description: "Email us for general queries, including marketing and partnership opportunities.", contact: "hello@example.com" },
          { icon: Phone, title: "Call us", description: "Call us to speak to a member of our team. We are always happy to help.", contact: "+1 (646) 786-5060" },
          { icon: LifeBuoy, title: "Support", description: "Email us for support and assistance.", contact: "support@example.com" }
        ].map(({ icon: Icon, title, description, contact }, index) => (
          <Card key={index} className="border border-gray-100 shadow-sm">
            <CardHeader className="flex items-center justify-center ">
              <div className="bg-primary p-3 rounded-xl">
                <Icon className="w-10 h-10 text-primary-500 " />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>{title}</CardTitle>
              <p className="text-sm text-gray-700 mt-5">{description}</p>
              <p className="mt-2 font-medium text-gray-900">{contact}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <section className="p-6 rounded-lg shadow-none grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 bg-white mt-20 mb-5">
        <div>
          <h2 className="mb-4 text-4xl md:text-5xl font-medium text-gray-900">Écrivez-nous un message</h2>
          <p className="mb-8 text-gray-700 sm:text-lg">
            Nous serions ravis d’avoir de vos nouvelles ! Remplissez le formulaire ci-dessous, et nous reviendrons vers vous dans les plus brefs délais..
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-5 w-full">
            <div className="w-full">
              <Label htmlFor="email">Your email</Label>
              <Input type="email" id="email" className="border border-gray-200 shadow-none" placeholder="name@example.com" required />
            </div>
            <div className="w-full">
              <Label htmlFor="email">Your name</Label>
              <Input type="email" id="email" className="border border-gray-200 shadow-none" placeholder="John doe" required />
            </div>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" className="border border-gray-200 shadow-none" placeholder="Let us know how we can help you" required />
          </div>
          <div>
            <Label htmlFor="message">Your message</Label>
            <Textarea id="message" rows={6} className="border border-gray-200 shadow-none outline-none focus:border-none" placeholder="Leave a comment..." required />
          </div>
          <div className="flex  justify-center">
            <Button type="submit" className="bg-black rounded-full text-white">Send message</Button>
          </div>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;