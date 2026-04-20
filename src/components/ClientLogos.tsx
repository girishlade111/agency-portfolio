import { motion } from 'framer-motion';

const LOGOS = [
  { name: 'Sellen', id: 1 },
  { name: 'Capsule', id: 2 },
  { name: 'Loom', id: 3 },
  { name: 'Acme Corp', id: 4 },
  { name: 'Spline', id: 5 },
];

export const ClientLogos = () => {
  return (
    <section className="py-12 border-y border-gray-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by innovative teams</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-xl md:text-2xl font-bold font-serif text-slate-800"
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
