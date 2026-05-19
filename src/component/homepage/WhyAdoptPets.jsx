"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Smile,
  PawPrint,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Save a Life",
    description:
      "Millions of pets wait in shelters for a loving family. Adoption gives them a second chance at happiness.",
    icon: Heart,
  },
  {
    id: 2,
    title: "Healthy & Vaccinated",
    description:
      "Most rescue pets receive proper medical care, vaccinations, and regular health checkups before adoption.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Bring Joy to Your Home",
    description:
      "Pets provide unconditional love, reduce stress, and become loyal companions for your family.",
    icon: Smile,
  },
  {
    id: 4,
    title: "Support Animal Welfare",
    description:
      "By adopting, you help reduce overcrowding in shelters and support responsible pet care.",
    icon: PawPrint,
  },
];

const WhyAdoptPets = () => {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-500">
                        Why Choose Adoption?
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
                        Why Adopt Pets?
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-gray-600">
                        Adopting a pet is more than bringing home an animal — it’s about
                        giving love, care, and a forever family to a life that truly needs
                        it.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <motion.div
                                key={reason.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group rounded-3xl border border-orange-100 bg-orange-50/40 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="mb-6 inline-flex rounded-2xl bg-orange-100 p-4 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                                    <Icon className="h-8 w-8" />
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {reason.title}
                                </h3>

                                <p className="leading-relaxed text-gray-600">
                                    {reason.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyAdoptPets;