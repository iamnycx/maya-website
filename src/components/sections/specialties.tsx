"use client";

import Image from "next/image";
import { motion } from "motion/react";

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Therapy for chronic worry, racing thoughts, panic attacks, and physical tension. We'll work together to understand what's driving your anxiety and develop practical tools to help you feel calmer, safer, and more present in your daily life.",
    image: "/img/panic.jpg",
  },
  {
    title: "Trauma & EMDR",
    description:
      "Compassionate, evidence-based treatment for both recent traumatic events and long-standing patterns rooted in earlier experiences. Using EMDR and body-centered approaches, we'll work at a pace that prioritizes your safety and helps you feel more regulated and grounded.",
    image: "/img/trauma.jpg",
  },
  {
    title: "Burnout & Stress",
    description:
      "Support for professionals, entrepreneurs, and creatives who feel depleted after years of high output. Therapy focused on reconnecting with yourself, understanding what's sustainable, and building rhythms that support rather than drain you.",
    image: "/img/burnout.jpg",
  },
];

export default function Specialties() {
  return (
    <section className="mx-auto max-w-[92vw] space-y-16 py-20">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-semibold"
      >
        My Specialties
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 gap-5"
      >
        {specialties.map((specialty) => (
          <SpecialtyCard
            key={specialty.title}
            title={specialty.title}
            description={specialty.description}
            image={specialty.image}
          />
        ))}
      </motion.div>
    </section>
  );
}

function SpecialtyCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-secondary flex flex-col gap-6 border p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground text-md">{description}</p>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="aspect-square w-full rounded-full object-cover object-center"
        />
      </motion.div>
    </div>
  );
}
