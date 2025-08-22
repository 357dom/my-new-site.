'use client'
import { motion } from 'framer-motion'

// Варианты анимации для Framer Motion
const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export function ContentBlock({ blockData }) {
  // Если это блок "Explore Further", используем другую разметку
  if (blockData.id === 'explore-further') {
    return (
      <motion.section {...sectionAnimation} className="py-20 md:py-32 bg-rr-dark-gray">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <p className="text-xs tracking-widest font-semibold">{blockData.supertitle}</p>
          <h2 className="text-4xl md:text-5xl font-light my-4">{blockData.title}</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {blockData.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img src={card.imageUrl} alt={card.title} className="w-full object-cover" />
                <h3 className="text-xl font-light mt-6 mb-3">{card.title}</h3>
                <p className="text-sm text-rr-gray">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }

  // Стандартный блок
  return (
    <motion.section {...sectionAnimation} className="relative h-screen w-full">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <picture>
        <source media="(min-width: 1024px)" srcSet={blockData.background.desktop} />
        <source media="(min-width: 768px)" srcSet={blockData.background.tablet} />
        <img src={blockData.background.mobile} alt={blockData.title} className="absolute inset-0 w-full h-full object-cover" />
      </picture>

      <div className="relative z-20 section-content p-6">
        <p className="text-xs tracking-widest font-semibold">{blockData.supertitle}</p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light my-2 tracking-wider">{blockData.title}</h2>
        <p className="text-2xl md:text-3xl font-light">{blockData.subtitle}</p>
        <a href={blockData.cta.href} className="mt-6 px-10 py-3 bg-white text-rr-black text-xs font-bold tracking-widest">
          {blockData.cta.text}
        </a>
      </div>
    </motion.section>
  )
}
