"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Manifesto() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        // Calculate percentage based on mouse position
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;

        setSliderPosition(percentage);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;

        setSliderPosition(percentage);
    };

    return (
        <section className="relative min-h-screen bg-neutral-950 text-white overflow-hidden py-24">
            <div className="container mx-auto px-6 mb-12 text-center hidden">
                {/* Content moved to HeroVideo */}
            </div>

            <div
                ref={containerRef}
                className="relative w-full max-w-[1600px] h-[60vh] md:h-[80vh] mx-auto overflow-hidden cursor-ew-resize group"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {/* Right Side - ZeroShot Way (Vibrant/Video) */}
                <div className="absolute inset-0 bg-indigo-900/20">
                    {/* Fallback gradient/image since we don't have the video yet */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center">
                        <h3 className="text-9xl font-bold text-white/10 select-none">FUTURE</h3>
                    </div>
                    {/* Label */}
                    <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right pointer-events-none z-10">
                        <span className="block text-sm tracking-widest text-indigo-400 font-bold mb-2">ZEROSHOT WAY</span>
                        <h3 className="text-4xl md:text-6xl font-bold">Limitless<br />Creation</h3>
                    </div>
                </div>

                {/* Left Side - Old Way (Grayscale/Static) - Clip Path controlled by slider */}
                <div
                    className="absolute inset-0 bg-neutral-900"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    {/* Fallback grayscale look */}
                    <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center grayscale">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop')] bg-center bg-cover opacity-20"></div>
                        <h3 className="text-9xl font-bold text-white/5 select-none">PAST</h3>
                    </div>
                    {/* Label */}
                    <div className="absolute top-1/2 left-12 -translate-y-1/2 text-left pointer-events-none z-10">
                        <span className="block text-sm tracking-widest text-neutral-500 font-bold mb-2">THE OLD WAY</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-neutral-400">Physical<br />Constraints</h3>
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                        <div className="flex gap-1">
                            <ChevronLeft size={16} />
                            <ChevronRight size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
