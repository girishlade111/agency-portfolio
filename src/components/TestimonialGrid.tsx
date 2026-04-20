import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'David Brooks',
    role: 'CEO of Capsule',
    content: 'Sapphire stands out because they listen and understand. It feels less like an agency and more like a partner.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Victoria Lin',
    role: 'Marketing Director',
    content: 'The scale we reached just 3 months after onboarding from the team at sapphire is amazing. Best choice we\'ve made.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Ethan Marcos',
    role: 'Founder, Design Studio',
    content: 'I worked with other agencies before but Sapphire has truly outdone them all. Professional and completely transparent.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 4,
    name: 'Sarah Jin',
    role: 'Operations Manager',
    content: 'The team knows exactly what they are doing. The value is insane, and the turnaround time is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 5,
    name: 'James Taylor',
    role: 'Director, Acme',
    content: 'Sapphire made a complex process incredibly simple. We are definitely sticking around for the long run.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 6,
    name: 'Olivia Mark',
    role: 'Head of Product',
    content: 'What I appreciate the most was how clear their process is. Just an absolute pleasure to work with.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
];

export const TestimonialGrid = () => {
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
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Don't just take it from us</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We've transformed how dozens of companies scale.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 200, damping: 15 } }}
              className="p-8 rounded-[2rem] bg-background border border-gray-100 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 flex-1 font-medium">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
