"use client";

import { useState, useEffect } from "react";

export default function HeroVideo() {
    const [text, setText] = useState("");
    const fullText = "REALITY IS OVERRATED.\nWe broke the lens to build something better.\nSee the difference between the old way and the ZeroShot way.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 50); // Typing speed
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black font-mono">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-50 z-0"
            >
                <source src="/assets/Slow_motion_video_1080p_202602171925.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* CRT Scanline Overlay */}
            <div
                className="absolute inset-0 z-20 pointer-events-none opacity-20"
                style={{
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        #000 2px,
                        #000 4px
                    )`
                }}
            />

            {/* Content Container - Centered and strictly on top */}
            <div className="absolute inset-0 h-full w-full flex items-center justify-center p-8 z-30 pointer-events-none">
                <div className="max-w-[80%] mx-auto text-center">
                    <p
                        className="text-4xl md:text-6xl text-[#F5F5F5] leading-tight tracking-tight whitespace-pre-wrap inline"
                        style={{
                            fontFamily: "var(--font-space-mono)",
                            textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.4)"
                        }}
                    >
                        {text}
                    </p>
                    <span
                        className="text-4xl md:text-6xl text-[#F5F5F5] inline-block ml-1 animate-pulse"
                        style={{
                            fontFamily: "var(--font-space-mono)",
                            textShadow: "0 0 10px rgba(255, 255, 255, 0.7)"
                        }}
                    >
                        _
                    </span>
                </div>
            </div>
        </section>
    );
}
