import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            That's it<span className="text-gradient">.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            You've reached the bottom. There's no contact form because this isn't
            a real portfolio. It's a tech demo with delusions of grandeur.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built with React • Framer Motion • Tailwind CSS • An inflated sense of accomplishment
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
