import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';
import { Briefcase, BarChart, PenTool, Layout, Monitor, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Financial Planning',
    description: 'We help you manage costs, track budgets, and ensure your finances are sound.',
    icon: <BarChart className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: 'Marketing Strategy',
    description: 'Create a strategy that brings customers, retains them, and converts leads to sales.',
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: 'Social Media',
    description: 'Grow your presence with authentic social media content and brand engagement.',
    icon: <Monitor className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    title: 'Email Marketing',
    description: 'Design and build email campaigns that are reliable, consistent, and look beautiful.',
    icon: <PenTool className="w-6 h-6 text-primary" />,
  },
  {
    id: 5,
    title: 'Content Strategy',
    description: 'Provide relevant, engaging content to help build a brand presence.',
    icon: <Layout className="w-6 h-6 text-primary" />,
  },
  {
    id: 6,
    title: 'Analytics & Tracking',
    description: 'Track performance and use data to continually optimize and improve.',
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
];

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Leave the work to us</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Explore the range of services we offer to help your business grow.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 200, damping: 15 } }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
