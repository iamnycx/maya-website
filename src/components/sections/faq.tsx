"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "insurance",
    question: "Do you accept insurance?",
    answer:
      "I'm an out-of-network provider and don't bill insurance directly. However, I can provide a superbill that you can submit to your insurance company for potential reimbursement based on your out-of-network benefits.",
  },
  {
    id: "rates",
    question: "What are your session rates?",
    answer:
      "Individual therapy sessions are $200 per 50-minute session. I offer a brief initial consultation at no charge. Payment is due at the time of service via credit card, HSA/FSA card, or electronic transfer.",
  },
  {
    id: "openings",
    question: "Are you open for new clients?",
    answer:
      "I typically have limited availability and maintain a waitlist when full. I encourage you to reach out to schedule a consultation, and we can discuss timing and whether we're a good fit.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<string>("insurance");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? "" : id);
  };

  return (
    <section className="grid h-screen grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <Image
          src="/img/faq.jpg"
          alt="FAQ"
          width={500}
          height={500}
          className="rounded-t-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center"
      >
        <h1 className="text-5xl font-bold">FAQs</h1>
        <div className="max-w-3xl space-y-0 pt-16">
          {faqItems.map((faq, index) => (
            <div
              key={faq.id}
              className={`border-foreground ${
                index === 0 ? "border-t border-b" : "border-b"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex w-full items-start gap-6 py-8 text-left"
              >
                <motion.div
                  animate={{ rotate: openFaq === faq.id ? 0 : 90 }}
                  className="text-foreground border-foreground mt-1 shrink-0 text-3xl font-light"
                >
                  {openFaq === faq.id ? "—" : "+"}
                </motion.div>
                <h2 className="text-foreground border-foreground text-3xl font-semibold md:text-5xl">
                  {faq.question}
                </h2>
              </button>

              <AnimatePresence initial={false}>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8">
                      <p className="text-foreground border-foreground pr-8 text-xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
