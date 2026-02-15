"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-[92vw] justify-between pt-16 pb-32">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold"
          >
            Dr. Maya Reynolds
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-medium"
          >
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-xl font-medium underline"
          >
            <Link href="mailto:reynoldsmaya@mail.com">
              reynoldsmaya@mail.com
            </Link>
            <Link href="tel:(555) 555-5555">(555) 555-5555</Link>
          </motion.div>
        </div>
        <div className="flex gap-64">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold"
            >
              Hours
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-medium"
            >
              {"Monday – Friday"}
              <br />
              {"10am – 6pm"}
            </motion.p>
          </div>
          <div className="space-y-6 text-right">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold"
            >
              Find
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col text-xl font-medium underline"
            >
              <Link href="/">Home</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Blog</Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-secondary space-y-16 py-16 text-center">
        <div className="flex items-center justify-center gap-4 font-medium underline">
          <Link href="#">Privacy & Cookies Policy</Link>
          <Link href="#">Good Faith Estimate</Link>
          <Link href="#">Website Terms & Conditions</Link>
          <Link href="#">Disclaimer</Link>
        </div>
        <p>
          All Rights Reserved © {new Date().getFullYear()} Maya Reynolds, LLC.
        </p>
      </div>
    </section>
  );
}
