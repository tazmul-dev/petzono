"use client";

import { motion } from "framer-motion";
import { BsQuote } from "react-icons/bs";
import { SiTarget, SiTarom } from "react-icons/si";


const stories = [
  {
    id: 1,
    name: "Sarah & Max",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
    story:
      "Adopting Max completely changed our lives. He brought happiness, energy, and unconditional love into our home.",
  },
  {
    id: 2,
    name: "Rahim & Bella",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
    story:
      "Bella was rescued from a shelter and now she’s the heart of our family. Adoption was the best decision we made.",
  },
  {
    id: 3,
    name: "Emily & Charlie",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    story:
      "Charlie helped us through difficult times with his companionship and loyalty. Every adopted pet deserves a loving home.",
  },
];


const SuccessStories = () => {
    return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-500">
            Happy Adoption Stories
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Success Stories
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Real stories from families who found their perfect furry companions
            through adoption.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/90 p-3 shadow-md">
                  <BsQuote className="h-6 w-6 text-orange-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Stars */}
                <div className="mb-4 flex items-center gap-1 text-orange-400">
                  <SiTarom className="h-5 w-5 fill-orange-400" />
                  <SiTarom className="h-5 w-5 fill-orange-400" />
                  <SiTarom className="h-5 w-5 fill-orange-400" />
                  <SiTarom className="h-5 w-5 fill-orange-400" />
                  <SiTarom className="h-5 w-5 fill-orange-400" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {story.name}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {story.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;