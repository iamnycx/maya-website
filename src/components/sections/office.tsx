"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Office() {
  return (
    <section className="bg-accent py-20">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-bold"
      >
        A Calm Space for Healing
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-4 max-w-6xl text-center text-xl font-medium"
      >
        My Santa Monica office is a calm, private space designed to help you
        feel at ease. Natural light, warm wood floors, and a comfortable
        atmosphere support the therapeutic work we do together.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[92vw] justify-evenly gap-16 py-16"
      >
        <div className="w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/img/office1.jpeg"
              alt="Office Image"
              width={400}
              height={300}
              className="w-full"
            />
          </motion.div>
        </div>
        <div className="w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/img/office2.jpeg"
              alt="Office Image"
              width={400}
              height={300}
              className="w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
