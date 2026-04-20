import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const TEAM = [
  {
    id: 1,
    name: 'Lewis Ward',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Karim Hassan',
    role: 'Lead Strategist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Noah Bennett',
    role: 'Head of Development',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
  },
];

export const TeamSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Meet the team</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Meet the experts who bring strategy, creativity, and execution together.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 text-left"
        >
          {TEAM.map((member) => (
            <motion.div key={member.id} variants={fadeUp} className="group">
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
