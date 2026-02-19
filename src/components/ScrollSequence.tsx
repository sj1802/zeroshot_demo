"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion, useMotionTemplate } from "framer-motion";
import { usePreloadImages } from "@/hooks/usePreloadImages";

const frameCount = 40;
const getFramePath = (index: number) =>
    `/assets/sequence/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

export default function ScrollSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { images, loading } = usePreloadImages(frameCount, getFramePath);

    // Scroll progress for the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index (0 to 39)
    // We reserve the first 85% of the scroll for the animation playback.
    const currentIndex = useTransform(scrollYProgress, [0, 0.85, 1], [0, frameCount - 1, frameCount - 1]);

    // Slide up (y: -100%) during the last 15% to gracefully exit (simulates un-fixing)
    const y = useTransform(scrollYProgress, [0.85, 1], ["0%", "-100%"]);

    // Text Animations (linked to start of scroll)
    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
    const textY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
    const textBlurVal = useTransform(scrollYProgress, [0, 0.4], [0, 10]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        setCanvasSize();
    };

    // Initial render
    useEffect(() => {
        if (!loading && images.length > 0) {
            renderFrame(0);
        }
    }, [loading, images]);

    // Update on scroll
    useMotionValueEvent(currentIndex, "change", (latest) => {
        const frameIndex = Math.round(latest);
        if (!loading && images.length > 0) {
            renderFrame(frameIndex);
        }
    });

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (!loading && images.length > 0) {
                renderFrame(Math.round(currentIndex.get()));
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [loading, images, currentIndex]);

    return (
        <div ref={containerRef} className="relative w-full bg-neutral-950" style={{ height: "400vh" }}>
            {/* Fixed Container that handles the pinning visual */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen overflow-hidden"
                style={{ y }} // This handles the exit animation
            >
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 z-50">
                        Loading Sequence...
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 block h-full w-full object-cover"
                    style={{ zIndex: 0 }}
                />

                {/* Text Container - Absolute on top of canvas */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-start pointer-events-none z-50 top-0 pt-4 md:pt-8"
                    style={{
                        opacity: textOpacity,
                        scale: textScale,
                        y: textY,
                    }}
                >
                    {/* H1 and P use strict text-center just in case */}
                    <motion.h1
                        className="text-[15vw] md:text-[12vw] leading-none font-bold tracking-tighter text-white drop-shadow-2xl text-center w-full"
                        style={{ filter: useMotionTemplate`blur(${textBlurVal}px)` }}
                    >
                        ZEROSHOT
                    </motion.h1>
                    <p className="text-white text-xs md:text-xl font-light mt-2 uppercase tracking-[0.5em] md:tracking-[1em] drop-shadow-lg text-center w-full">
                        PRODUCTIONS
                    </p>
                </motion.div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
            </motion.div>
        </div>
    );
}
