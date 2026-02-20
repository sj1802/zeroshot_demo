"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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
                className="relative w-full max-w-[1600px] mx-auto overflow-hidden cursor-ew-resize group"
                style={{ minHeight: '600px', height: '70vh' }}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {/* Right Side - ZeroShot Way (Vibrant/Video) */}
                <div className="absolute inset-0 bg-indigo-900/20 overflow-hidden z-0">
                    <img
                        src="/assets/After_optimized.webp"
                        alt="The ZeroShot Way"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] saturate-150"
                    />
                    <div className="absolute inset-0 bg-indigo-900/30 mix-blend-overlay z-10"></div>
                    {/* Label */}
                    <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right pointer-events-none z-20">
                        <span className="block text-sm tracking-widest text-indigo-400 font-bold mb-2 drop-shadow-md">ZEROSHOT WAY</span>
                        <h3 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Limitless<br />Creation</h3>
                    </div>
                </div>

                {/* Left Side - Old Way (Grayscale/Static) - Clip Path controlled by slider */}
                <div
                    className="absolute inset-0 bg-neutral-900 overflow-hidden z-10"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img
                        src="/assets/Before_optimized.webp"
                        alt="The Old Way"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-center grayscale brightness-75 scale-[1.02]"
                    />
                    {/* Label */}
                    <div className="absolute top-1/2 left-12 -translate-y-1/2 text-left pointer-events-none z-20">
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
