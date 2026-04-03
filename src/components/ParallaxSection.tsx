import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    title: "Parallax",
    description: "Because static content is for people who respect their users' GPUs.",
    emoji: "🌊",
  },
  {
    title: "Smooth Scroll",
    description: "Nothing says 'hire me' like butter-smooth DOM manipulation.",
    emoji: "🧈",
  },
  {
    title: "Spring Physics",
    description: "I don't understand physics, but framer-motion does, and that's enough.",
    emoji: "🧲",
  },
  {
    title: "Viewport Detection",
    description: "Elements that animate on scroll — because they have separation anxiety.",
    emoji: "👁️",
  },
  {
    title: "Stagger Children",
    description: "Each child animates slightly after the last. It's a vibe.",
    emoji: "🎭",
  },
  {
    title: "Drag Gestures",
    description: "Technically I can drag things. I won't, but I could.",
    emoji: "🫳",
  },
];

const ParallaxSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-40%"]);

  return (
    <section id="parallax" ref={containerRef} className="py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          Side-scrolling parallax<span className="text-gradient">.</span>
        </h2>
        <p className="text-muted-foreground font-mono text-sm max-w-lg">
          // Because vertical scrolling is too mainstream. These cards move horizontally
          while you scroll vertically. Revolutionary? No. Fun? Marginally.
        </p>
      </motion.div>

      <motion.div style={{ x }} className="flex gap-6 pl-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bento-card min-w-[300px] md:min-w-[350px] flex-shrink-0 cursor-default"
          >
            <span className="text-4xl mb-4 block">{item.emoji}</span>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
