"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Who() {
  return (
    <section className="bg-secondary grid h-screen grid-cols-2">
      <div className="flex flex-col justify-center space-y-32 pl-32">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold"
          >
            {"Hi, I’m Maya."}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium"
          >
            {
              "I'm a licensed clinical psychologist in Santa Monica specializing in anxiety, trauma, and burnout. I work with adults who appear successful on the outside but feel overwhelmed, exhausted, or stuck on the inside. My approach is warm, collaborative, and grounded in evidence-based methods like CBT, EMDR, and mindfulness practices. Together, we'll work to understand what's driving your distress and build practical tools for lasting change so you can feel more like yourself again."
            }
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hover:bg-foreground hover:text-background mx-auto flex w-fit items-center gap-2 border px-4 py-2 transition-colors duration-1000 ease-in-out"
        >
          {"let's chat"}
          <MoveRight className="size-4" />
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center"
      >
        <Image
          src="/img/Dr. Maya Reynolds.png"
          width={500}
          height={500}
          alt="Hero image"
          className="h-fit w-2/4 rounded-t-full"
        />
        <Image
          src="/img/hand.jpg"
          width={500}
          height={500}
          alt="Hero image"
          className="absolute aspect-square w-72 translate-x-44 translate-y-54 rounded-full object-cover"
        />
      </motion.div>
    </section>
  );
}
