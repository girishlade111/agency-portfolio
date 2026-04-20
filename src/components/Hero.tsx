import { motion } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer } from '../utils/animations';

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-slate-600">
            <span>✨ For creative agencies</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Scale your agency with sapphire
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 max-w-md leading-relaxed">
            We help agencies, freelancers, and studios scale their business with a modern, professional SaaS platform.
          </motion.p>
          <motion.div variants={fadeUp}>
            <button className="px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-2 flex items-center gap-2">
              Book a call <span className="text-xl leading-none">→</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative h-[400px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Team working together"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};
