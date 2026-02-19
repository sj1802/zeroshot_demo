"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "DROP-IN",
        price: "$150",
        period: "/ sku",
        desc: "Perfect for single product launches or campaigns.",
        features: [
            "4k 60fps Video Assets",
            "3D Product Modeling",
            "Basic Sound Design",
            "48-hour Turnaround",
        ],
        highlight: false,
    },
    {
        name: "AGENCY",
        price: "$1,200",
        period: "/ mo",
        desc: "Dedicated production team for high-volume brands.",
        features: [
            "Unlimited Requests",
            "Priority Rendering Queue",
            "Dedicated Art Director",
            "Source Files Included",
            "Custom Shader Development",
        ],
        highlight: true,
    },
];

export default function Pricing() {
    return (
        <section className="min-h-screen bg-neutral-950 text-white py-24 px-6 flex items-center justify-center">
            <div className="max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Transparent Pricing</h2>
                    <p className="text-neutral-400">No hidden fees. No contracts. Just results.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-3xl border ${plan.highlight
                                    ? "bg-indigo-900/10 border-indigo-500/50"
                                    : "bg-neutral-900/50 border-neutral-800"
                                } backdrop-blur-sm flex flex-col`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-neutral-400 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                                <span className="text-neutral-500">{plan.period}</span>
                            </div>
                            <p className="text-neutral-400 mb-8 pb-8 border-b border-white/10">{plan.desc}</p>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-neutral-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.highlight
                                    ? "bg-white text-black hover:bg-neutral-200"
                                    : "bg-white/10 hover:bg-white/20"
                                }`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
