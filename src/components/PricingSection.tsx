import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';
import { CheckCircle2 } from 'lucide-react';

const PRICING = [
  {
    id: 1,
    name: 'Starter',
    price: '$349',
    description: 'Perfect for small businesses needing a solid online presence.',
    features: [
      '1 custom website (5 pages max)',
      'Basic SEO setup',
      'Contact form integration',
      'Delivered in 2 weeks',
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Growth',
    price: '$1,749',
    description: 'Ideal for growing brands ready to scale their traffic and conversions.',
    features: [
      'Up to 15 pages included',
      'Priority support call',
      '3 rounds of revisions',
      'Ongoing support for 30 days',
    ],
    highlighted: true,
    badge: 'Popular',
  },
  {
    id: 3,
    name: 'Premium',
    price: '$3,199',
    description: 'For brands that want full-service scale and speed.',
    features: [
      'Full custom brand identity',
      'Creative content strategy',
      'Dedicated Slack channel',
      'Ongoing support for 90 days',
    ],
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Pricing that works</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Choose the plan that fits your goals and budget—no hidden fees, ever.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center"
        >
          {PRICING.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className={`relative p-10 rounded-[2rem] flex flex-col text-left border shadow-sm ${
                plan.highlighted 
                  ? 'bg-primary text-white border-primary shadow-xl md:-translate-y-4' 
                  : 'bg-white border-gray-100 text-slate-900'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-6 right-6 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.highlighted ? 'text-blue-200' : 'text-slate-500'}`}>/mo</span>
              </div>
              <p className={`text-sm mb-8 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>{plan.description}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-blue-300' : 'text-primary'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-full font-medium transition-colors ${
                plan.highlighted
                  ? 'bg-white text-primary hover:bg-gray-50'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`}>
                Choose package
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
