"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, PawPrint } from "lucide-react";


const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100">
            {/* Background Blur */}
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl"></div>

            <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:px-12">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 shadow-sm">
                        <PawPrint className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium text-gray-700">
                            Find Your Perfect Pet Companion
                        </span>
                    </div>

                    <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                        Give a Pet a <span className="text-orange-500">Forever Home</span>
                    </h1>

                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                        Discover loving pets waiting for adoption. Browse hundreds of dogs,
                        cats, birds, and more to find your new best friend today.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link href="/all-pets">
                            <button className="rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-orange-600">
                                Adopt Now
                            </button>
                        </Link>

                        <Link href="/dashboard/add-pet">
                            <button className="rounded-2xl border border-orange-300 bg-white px-8 py-4 text-lg font-semibold text-orange-500 transition hover:bg-orange-50">
                                Add Pet
                            </button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">500+</h2>
                            <p className="text-gray-600">Pets Adopted</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">120+</h2>
                            <p className="text-gray-600">Happy Families</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">50+</h2>
                            <p className="text-gray-600">Rescue Shelters</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <div className="absolute -top-6 -left-6 hidden rounded-3xl bg-white p-4 shadow-xl md:block">
                        <div className="flex items-center gap-3">
                            <HeartHandshake className="h-10 w-10 text-orange-500" />
                            <div>
                                <h4 className="font-bold text-gray-900">Adopt With Love</h4>
                                <p className="text-sm text-gray-500">
                                    Every pet deserves care
                                </p>
                            </div>
                        </div>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                        alt="Pet Adoption"
                        className="w-full max-w-lg rounded-[2rem] border-8 border-white object-cover shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;