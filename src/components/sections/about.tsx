"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section className="bg-secondary grid grid-cols-2">
      <div className="flex flex-col justify-between">
        <div className="flex h-full flex-col justify-center gap-6 px-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold"
          >
            {"You Don't Have to Keep Pushing Through"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl"
          >
            {
              "Life can be challenging, especially when you're trying to balance your personal and professional life."
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl"
          >
            {
              " It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help."
            }
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hover:bg-foreground hover:text-background flex items-center justify-center gap-2 border py-6 text-sm font-medium uppercase transition-colors duration-1000 ease-in-out"
        >
          Get in touch
          <MoveRight className="size-4" />
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/img/about.png"
          alt="About Image"
          width={500}
          height={500}
          className="w-full"
        />
      </motion.div>
    </section>
  );
}
