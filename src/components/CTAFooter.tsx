"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTAFooter() {
    return (
        <footer className="relative bg-neutral-950 text-white pt-24 pb-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-[80vw] h-[80vw] bg-indigo-900/30 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-9xl font-bold tracking-tighter mb-8">
                        READY TO SHOOT?
                    </h2>
                    <button className="group relative px-8 py-4 md:px-12 md:py-6 bg-white text-black rounded-full font-bold text-xl md:text-2xl overflow-hidden transition-transform hover:scale-105">
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Pilot
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-0" />
                    </button>
                </motion.div>

                <div className="w-full h-px bg-white/10 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center w-full text-neutral-500 text-sm">
                    <p>&copy; 2026 ZeroShot. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
