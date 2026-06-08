"use client";

import { motion } from "framer-motion";
import { BiHome, BiSearch } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";


const steps = [
  {
    id: 1,
    title: "Browse Pets",
    description:
      "Explore available pets and find the perfect companion for your family.",
    icon: BiSearch,
  },
  {
    id: 2,
    title: "Submit Request",
    description:
      "Send an adoption request with your preferred pickup date and message.",
    icon: FiFileText,
  },
  
  {
    id: 4,
    title: "Take Home",
    description:
      "Complete the adoption process and welcome your new friend home.",
    icon: BiHome,
  },
];

export default function AdoptionProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-500">
            Easy & Transparent
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Simple Adoption Process
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Adopting a pet is simple. Follow these four easy steps to find and
            bring home your new furry companion.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] border border-orange-100 bg-orange-50/40 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex rounded-2xl bg-orange-100 p-4 text-orange-500">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}