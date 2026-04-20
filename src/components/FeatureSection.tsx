import { motion } from 'framer-motion';
import { slideLeft, slideRight } from '../utils/animations';

export const FeatureSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
              alt="Photographer checking camera"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="flex flex-col items-start"
          >
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Approach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">How we work</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our process is designed to deliver high-quality work efficiently. We focus on clear communication and set expectations early on. From our initial meeting to the final hand-off, we ensure that every step is clear and transparent so you feel comfortable with your project's progress.
            </p>
            <button className="px-8 py-4 text-base font-medium text-primary bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
              Read more <span className="text-xl leading-none">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
