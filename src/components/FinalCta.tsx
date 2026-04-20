import { motion } from 'framer-motion';
import { slideLeft, slideRight } from '../utils/animations';

export const FinalCta = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              className="flex flex-col items-start"
            >
              <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Get Started</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Start your journey with sapphire today.
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md">
                We bring you modern, reliable strategy, design, and results. Let's make an impact.
              </p>
              <button className="px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-all shadow-md flex items-center gap-2">
                Reach out <span className="text-xl leading-none">→</span>
              </button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  alt="Client success"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />
        </div>
      </div>
    </section>
  );
};
