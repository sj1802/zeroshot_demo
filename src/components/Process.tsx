"use client";

import { motion } from "framer-motion";
import { Upload, Shuffle, CheckCircle } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Upload",
        desc: "Send us your raw footage. Any format, any resolution.",
        icon: Upload,
    },
    {
        id: 2,
        title: "Direction",
        desc: "We apply the ZeroShot formula—color, pacing, and sound design.",
        icon: Shuffle,
    },
    {
        id: 3,
        title: "Delivery",
        desc: "Receive production-ready assets in 48 hours.",
        icon: CheckCircle,
    },
];

export default function Process() {
    return (
        <section className="min-h-screen bg-neutral-950 text-white flex items-center justify-center py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-7xl font-bold text-center mb-24"
                >
                    The Process
                </motion.h2>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-neutral-800 -translate-x-1/2 hidden md:block" />

                    <div className="flex flex-col gap-12 md:gap-24 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ margin: "-100px" }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-neutral-400 max-w-sm mx-auto md:mx-0">{step.desc}</p>
                                </div>

                                {/* Icon Node */}
                                <div className="relative z-10 w-14 h-14 rounded-full bg-neutral-900 border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] mx-12">
                                    <step.icon size={24} className="text-indigo-400" />
                                </div>

                                {/* Empty Side for layout balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
