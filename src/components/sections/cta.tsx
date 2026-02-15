"use client";

import { MoveRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="bg-muted text-background flex flex-col items-center justify-center gap-8 py-32 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-semibold"
      >
        Get started today
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl space-y-4 max-w-4xl"
      >
        <p>
          {
            "If you're ready to move beyond just managing and toward actually healing, I'm here to help."
          }
        </p>
        <p>
          {
            "Whether you're dealing with anxiety, trauma, or burnout, therapy can offer you a space to slow down, reconnect, and create meaningful change."
          }
        </p>
        <p>
          {
            "Contact me to schedule a brief consultation and take the first step."
          }
        </p>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hover:bg-background hover:text-muted mx-auto mt-24 flex items-center gap-2 border px-6 py-3 text-sm font-medium uppercase transition-colors duration-1000 ease-in-out"
      >
        Get in touch <MoveRight className="size-4" />
      </motion.button>
    </section>
  );
}
