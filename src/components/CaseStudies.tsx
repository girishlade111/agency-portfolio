import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const CASES = [
  {
    id: 1,
    title: 'Distant Bloom',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Silk Cosmetics',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Retro Frequency',
    category: 'Marketing Campaign',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
  },
];

export const CaseStudies = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our success stories</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Projects that highlight our process, creativity, and lasting impact.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 text-left"
        >
          {CASES.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 200, damping: 15 } }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex justify-between items-center text-white/80 text-sm font-medium">
                  <span>{item.category}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12"
        >
          <button className="px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-all shadow-md flex items-center gap-2 mx-auto">
            View all <span className="text-xl leading-none">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
