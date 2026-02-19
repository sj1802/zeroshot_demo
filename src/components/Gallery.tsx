"use client";

import { motion } from "framer-motion";

const projectItems = [
    { id: 1, title: "Cyber Punk", category: "Commercial", color: "bg-red-500" },
    { id: 2, title: "Neon Nights", category: "Music Video", color: "bg-blue-500" },
    { id: 3, title: "Desert Storm", category: "Documentary", color: "bg-yellow-500" },
    { id: 4, title: "Urban Jungle", category: "Fashion", color: "bg-green-500" },
    { id: 5, title: "Deep Space", category: "CGI", color: "bg-purple-500" },
];

export default function Gallery() {
    return (
        <section className="min-h-screen bg-neutral-950 text-white py-24 px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-16">
                    <span className="text-indigo-500 font-bold tracking-widest text-sm block mb-4">OUR WORK</span>
                    <h2 className="text-4xl md:text-7xl font-bold">Production Studio</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                    {projectItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
                                }`}
                        >
                            {/* Fallback Background Color */}
                            <div className={`absolute inset-0 ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-neutral-900 -z-10" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-all duration-300">
                                <span className="text-sm text-neutral-400 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Hover Focus Effect: Sibling desaturation handled by CSS group-hover in parent if possible,
                but for simplicity we'll keep it focused on the item itself for now 
                or use a parent state which is heavier. Keeping it simple first. */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-300 rounded-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
