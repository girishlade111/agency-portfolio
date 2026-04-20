import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';
import { CheckCircle2 } from 'lucide-react';

const POINTS = [
  'Clear communication',
  'Consistent quality of work',
  'Meeting all goals',
  'Missed deadlines',
  'Outsourced talent',
];

const SAPPHIRE_POINTS = [
  'Clear, fast communication',
  'Highest quality work',
  'Clear, fixed pricing',
  'Experts with multiple years of experience',
  'Ongoing support after delivery',
  'No outsourcing. Everything done in-house.',
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Comparison</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Why choose sapphire?</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">See how we compare to the average agency and why we are the right choice for you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm flex flex-col text-left"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Other agencies</h3>
            <ul className="space-y-4 flex-1">
              {POINTS.map((point, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-center gap-3 text-slate-500">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
                  </div>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="p-10 rounded-[2rem] bg-primary text-white shadow-xl flex flex-col text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-8xl font-serif">S</span>
            </div>
            <h3 className="text-2xl font-semibold mb-8 text-center flex justify-center items-center gap-2">
              <span className="text-blue-300">✨</span> sapphire
            </h3>
            <ul className="space-y-4 flex-1 relative z-10">
              {SAPPHIRE_POINTS.map((point, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" />
                  <span className="font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
