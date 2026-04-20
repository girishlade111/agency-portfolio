import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const STATS = [
  { id: 1, value: 79, suffix: 'm+', label: 'Revenue generated' },
  { id: 2, value: 34, suffix: 'm+', label: 'Funds raised' },
  { id: 3, value: 13, suffix: '', label: 'Active clients' },
  { id: 4, value: 250, suffix: '+', label: 'Projects completed' },
];

export const StatsSection = () => {
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
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Results</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">What we've achieved<br/>for our clients</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">See how sapphire has helped clients achieve measurable results.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeUp}
              className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm flex flex-col items-center justify-center"
            >
              <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider text-center">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
