import { motion } from "framer-motion";

const bentoItems = [
  {
    title: "Bento Grid",
    description: "Named after a Japanese lunch box, because apparently web developers were hungry when they invented this layout pattern.",
    className: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    title: "useScroll()",
    description: "A hook that watches you scroll. Creepy? A little.",
    className: "md:col-span-1",
  },
  {
    title: "Variants",
    description: "Predefined animation states. Like mood rings, but for divs.",
    className: "md:col-span-1",
  },
  {
    title: "AnimatePresence",
    description: "Makes components say goodbye gracefully instead of just vanishing.",
    className: "md:col-span-1",
  },
  {
    title: "Layout Animations",
    description: "Elements smoothly transition between layouts. The CSS `transition` property is sobbing quietly in the corner.",
    className: "md:col-span-2",
  },
  {
    title: "Gesture Handling",
    description: "Tap, drag, hover — everything is an event and every event is an opportunity for unnecessary animation.",
    className: "md:col-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const BentoGrid = () => {
  return (
    <section id="bento" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          The obligatory bento grid<span className="text-gradient">.</span>
        </h2>
        <p className="text-muted-foreground font-mono text-sm max-w-lg">
          // Every modern portfolio needs one. It's the law. I don't make the rules.
          Actually, Apple kind of made the rules.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]"
      >
        {bentoItems.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className={`bento-card flex flex-col justify-end ${item.className} ${
              item.accent ? "bg-primary/5 border-primary/20" : ""
            }`}
          >
            <h3 className={`text-lg md:text-xl font-bold mb-2 ${item.accent ? "text-gradient" : ""}`}>
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BentoGrid;
