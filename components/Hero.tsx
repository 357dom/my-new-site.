'use client'
import { motion } from 'framer-motion'
import data from '@/content/site.json'

export function Hero() {
  const { hero } = data

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <picture>
        <source media="(min-width: 1024px)" srcSet={hero.background.desktop} />
        <source media="(min-width: 768px)" srcSet={hero.background.tablet} />
        <img src={hero.background.mobile} alt={hero.title} className="absolute inset-0 w-full h-full object-cover" />
      </picture>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 section-content p-6"
      >
        <p className="text-xs tracking-widest font-semibold">{hero.supertitle}</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light my-4 tracking-wider">{hero.title}</h1>
        <a href={hero.cta.href} className="mt-4 px-10 py-3 bg-white text-rr-black text-xs font-bold tracking-widest">
          {hero.cta.text}
        </a>
      </motion.div>
    </section>
  )
}
