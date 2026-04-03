import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
            [ a website that exists ]
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8"
        >
          I learned
          <br />
          <span className="text-gradient">Framer Motion</span>
          <br />
          and this is my proof
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Welcome to the portfolio piece that screams "I watched a YouTube tutorial
          and now I'm dangerous." Scroll down for unnecessary parallax.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-4 justify-center"
        >
          <a href="#parallax" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-200">
            See the parallax →
          </a>
          <a href="#bento" className="border border-border px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:border-primary/50 transition-colors duration-200">
            Bento grid ↓
          </a>
        </motion.div>
      </div>

      {/* Floating accent shape */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 md:right-20 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-32 left-10 md:left-20 w-14 h-14 rounded-xl bg-primary/5 border border-primary/10"
      />
    </section>
  );
};

export default Hero;
