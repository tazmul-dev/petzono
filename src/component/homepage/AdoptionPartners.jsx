"use client";

import { motion } from "framer-motion";
import { BsShieldCheck } from "react-icons/bs";
import { GiPawPrint } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";


const partners = [
  {
    id: 1,
    name: "Happy Tails Shelter",
    description:
      "Helping homeless pets find loving families and safe homes since 2018.",
    icon: LuHeartHandshake,
  },
  {
    id: 2,
    name: "Safe Paws Rescue",
    description:
      "Rescuing, rehabilitating, and rehoming abandoned pets with care and compassion.",
    icon: GiPawPrint,
  },
  {
    id: 3,
    name: "Pet Care Foundation",
    description:
      "Providing vaccinations, medical support, and adoption guidance for rescued animals.",
    icon: BsShieldCheck,
  },
];

export default function AdoptionPartners() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-20">
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
            Trusted Organizations
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Meet Our Adoption Partners
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            We collaborate with trusted shelters and rescue organizations to
            ensure every pet receives the love, care, and forever home they
            deserve.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group rounded-[2rem] border border-orange-100 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-2xl bg-orange-100 p-4 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {partner.name}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {partner.description}
                </p>

                {/* Status Badge */}
                <div className="mt-6 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-600">
                  Verified Partner
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}