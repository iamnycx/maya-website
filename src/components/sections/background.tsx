"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface BackgroundItem {
  id: string;
  title: string;
  content: string;
}

const backgroundItems: BackgroundItem[] = [
  {
    id: "education",
    title: "Education",
    content:
      "I earned my Doctor of Psychology (PsyD) in Clinical Psychology from Pepperdine University, with focused training in trauma-informed care and evidence-based interventions. I completed my Bachelor of Arts in Psychology at UCLA, where I built a strong foundation in clinical theory and research.",
  },
  {
    id: "licensure",
    title: "Licensure",
    content:
      "I am a Licensed Clinical Psychologist in California (License #PSY12345), actively licensed and in good standing since 2015. I maintain ongoing continuing education in trauma treatment, anxiety disorders, and evidence-based therapeutic approaches.",
  },
  {
    id: "certifications",
    title: "Certifications",
    content:
      "I hold specialized certifications in EMDR through the EMDR International Association, Cognitive Behavioral Therapy through the Beck Institute, and Mindfulness-Based Stress Reduction (MBSR) through the University of Massachusetts Medical School. These reflect my commitment to integrating multiple evidence-based approaches tailored to each client's needs.",
  },
];

export default function Background() {
  const [openSection, setOpenSection] = useState<string>("education");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? "" : id);
  };

  return (
    <section className="bg-secondary w-full py-32">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-semibold"
      >
        My Professional Background
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl space-y-0 pt-16"
      >
        {backgroundItems.map((section) => (
          <div key={section.id} className="border-foreground border-t">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <h2 className="text-foreground text-3xl font-medium">
                {section.title}
              </h2>
              <motion.div
                animate={{ rotate: openSection === section.id ? 0 : 90 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-foreground text-3xl"
              >
                {openSection === section.id ? "−" : "+"}
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pr-12 pb-6">
                    <p className="text-foreground mx-auto max-w-xl text-xl leading-relaxed font-medium">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
