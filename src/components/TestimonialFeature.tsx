import { motion } from 'framer-motion';
import { slideLeft, slideRight } from '../utils/animations';

export const TestimonialFeature = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="flex flex-col items-start"
          >
            <p className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">Quote</p>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-8">
              "If you're on the fence — just go for it."
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              "We connected with sapphire somewhat recently, and the value we receive from it compared to other solutions in the industry... the ROI is completely amazing. Highly recommend to anyone looking to grow their brand."
            </p>
            <p className="text-sm font-semibold text-slate-900">— Alex Johnson</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-xl bg-slate-900"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
            />
            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider transform -rotate-12">
              Featured
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
