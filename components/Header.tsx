'use client'
import { motion } from 'framer-motion'
import data from '@/content/site.json'

// SVG иконка для поиска
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export function Header() {
  const { header } = data

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[90px] px-6 md:px-10 text-rr-white"
    >
      <div className="flex items-center gap-4 text-xs font-bold tracking-widest">
        <div className="flex flex-col gap-1">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
        <span>{header.menuText}</span>
      </div>

      <a href="#" aria-label="Home">
        <img src={header.logoUrl} alt="Rolls-Royce Logo" className="h-10 w-auto absolute left-1/2 -translate-x-1/2" />
      </a>

      <div className="hidden md:flex items-center gap-3 text-xs font-bold tracking-widest">
        <SearchIcon />
        <span>{header.findDealerText}</span>
      </div>
    </motion.header>
  )
}
