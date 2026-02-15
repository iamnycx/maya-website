"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Alone() {
  return (
    <section className="bg-accent grid grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/img/alone.png"
          alt="alone"
          className="w-full"
          width={500}
          height={500}
        />
      </motion.div>
      <div className="flex flex-col justify-between">
        <div className="flex h-full flex-col justify-center gap-8 px-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold"
          >
            {"You don’t have to do this all "}
            <em>alone.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl"
          >
            {"If you are facing any of these, there’s hope:"}
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="list-inside list-disc space-y-2 pl-4"
          >
            <li>{"Constant worry or racing thoughts that won't quiet down"}</li>
            <li>
              {"Physical tension, panic attacks, or always feeling on edge"}
            </li>
            <li>
              {
                "Lingering effects of past experiences that still impact you today"
              }
            </li>
            <li>
              {"Burnout, exhaustion, or feeling disconnected from yourself"}
            </li>
            <li>
              {"Perfectionism and internal pressure that leaves you drained"}
            </li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl"
          >
            {
              "Therapy can help you understand what's driving these patterns and give you tools to feel more grounded, present, and like yourself again."
            }
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hover:bg-foreground hover:text-background flex items-center justify-center gap-2 border py-6 text-sm font-medium uppercase transition-colors duration-1000 ease-in-out"
        >
          Work with me
          <MoveRight className="size-4" />
        </motion.button>
      </div>
    </section>
  );
}
