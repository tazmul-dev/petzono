"use client";

import { motion } from "framer-motion";
import { BsActivity, BsHeartPulse, BsShieldCheck } from "react-icons/bs";
import { FaUtensilSpoon } from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Regular Health Checkups",
    description:
      "Take your pets to the veterinarian regularly to ensure they stay healthy and vaccinated.",
    icon: BsHeartPulse,
  },
  {
    id: 2,
    title: "Healthy Nutrition",
    description:
      "Provide balanced meals and clean water daily to keep your pets active and energetic.",
    icon: FaUtensilSpoon,
  },
  {
    id: 3,
    title: "Daily Exercise & Play",
    description:
      "Pets need physical activities and playtime to stay mentally and physically fit.",
    icon: BsActivity,
  },
  {
    id: 4,
    title: "Safe & Loving Environment",
    description:
      "Create a safe, comfortable, and loving home where your pets can feel secure and happy.",
    icon: BsShieldCheck,
  },
];

export default function PetCareTips() {
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
            Pet Wellness Guide
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Pet Care Tips
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Caring for a pet means giving them love, attention, and proper care
            every day. Here are some essential tips for keeping your furry
            friends healthy and happy.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[2rem] border border-orange-100 bg-orange-50/40 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-2xl bg-orange-100 p-4 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {tip.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {tip.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}