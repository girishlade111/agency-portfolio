import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const POSTS = [
  {
    id: 1,
    title: 'Why Consistent Branding Builds Stronger Trust',
    date: 'Apr 2, 2026',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Paid Ads vs Organic Growth: What Works Best in 2026?',
    date: 'Mar 18, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'How Creative Agencies Help You Outshine The Rest',
    date: 'Jan 5, 2026',
    image: 'https://images.unsplash.com/photo-1542744094-24638ea0b5b3?auto=format&fit=crop&w=600&q=80',
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Blog</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Check out our blog posts</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Stay ahead with the latest in business, marketing, and creative strategies.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 text-left"
        >
          {POSTS.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">{post.date}</span>
                  <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    ↗
                  </span>
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
          <button className="px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-all shadow-md mx-auto">
            View all
          </button>
        </motion.div>
      </div>
    </section>
  );
};
