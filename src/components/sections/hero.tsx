"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="mx-auto grid h-screen max-w-[92vw] grid-cols-2 items-end">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/img/Dr. Maya Reynolds.png"
          alt="Hero Image"
          width={400}
          height={500}
          className="w-lg rounded-t-full"
        />
      </motion.div>
      <div className="flex h-screen flex-col justify-center space-y-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl leading-20 font-semibold text-balance"
        >
          Reconnect With Yourself Again
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-medium"
        >
          Evidence-based therapy for anxiety and trauma in Santa Monica
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hover:bg-foreground hover:text-background mx-auto flex w-fit items-center gap-2 border px-8 py-4 text-sm font-medium uppercase transition-colors duration-1000 ease-in-out"
        >
          Request a Consultation
          <MoveRight className="size-4" />
        </motion.button>
      </div>
    </section>
  );
}
