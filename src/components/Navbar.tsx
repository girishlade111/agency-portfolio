import { motion } from 'framer-motion';
import { fadeDown } from '../utils/animations';

export const Navbar = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeDown}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 border-b border-gray-100/50"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold tracking-tight text-primary">Sapphire</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#work" className="hover:text-primary transition-colors">Work</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
      </div>

      <button className="px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors shadow-sm">
        Contact
      </button>
    </motion.nav>
  );
};
