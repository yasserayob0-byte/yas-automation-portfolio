import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export default function FaqSection() {
  const questions = [...FAQS,
    { question: 'What should I include in my first message?', answer: 'Describe one repetitive workflow, your current tools, the volume of work, and the result you want. Include a timeline and budget range if known. Avoid sending credentials or customer records in the initial email.' },
    { question: 'How are project costs and ongoing support scoped?', answer: 'Build cost depends on integrations, workflow complexity, data quality, and testing needs. Discuss software subscriptions, hosting, maintenance, and support separately so the total cost is clear before committing.' },
    { question: 'What should we agree on before rollout?', answer: 'Confirm access and ownership of accounts, data handling, test cases, human review and fallback steps, documentation, and who responds to failures. Use a measurable baseline to evaluate the result.' }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.55 }} className="section-title text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Frequently Asked Questions.
          </motion.h2>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {questions.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-panel rounded-2xl bg-slate-950/70 border border-slate-800/80 overflow-hidden transition-colors"
              >
                <button
                  id={`faq-question-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div id={`faq-answer-${idx}`} role="region" aria-labelledby={`faq-question-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
