import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'Is this a template only for agencies?',
    answer: 'No, while it is designed with agencies in mind, it is highly customizable and can be used for any SaaS, startup, or professional service business.',
  },
  {
    question: 'Can I use custom domains?',
    answer: 'Yes, you can easily connect your own custom domain directly from your dashboard settings.',
  },
  {
    question: 'Will this template be supported on all devices?',
    answer: 'Absolutely. The design is fully responsive and optimized for all screen sizes, from mobile to ultra-wide desktop monitors.',
  },
  {
    question: 'How quickly can I get my website up and running?',
    answer: 'With our streamlined setup process and intuitive tools, you can have your website customized and live within a matter of hours.',
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Got questions?</h2>
          <p className="text-slate-600 mt-4">Everything you need to know, before working with sapphire.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-4"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
