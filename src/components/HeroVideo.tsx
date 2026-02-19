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
                className="absolute inset-0 h-full w-full object-cover opacity-60 z-0"
            >
                <source src="/assets/Slow_motion_video_1080p_202602171925.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content Container - Centered and strictly on top */}
            <div className="absolute inset-0 h-full w-full flex items-center justify-center p-8 z-30">
                <div className="max-w-5xl w-full text-center">
                    <p className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight tracking-tight whitespace-pre-wrap drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] inline">
                        {text}
                    </p>
                    <span className="w-2 h-8 md:h-12 bg-indigo-500 inline-block ml-2 animate-pulse align-middle shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                </div>
            </div>
        </section>
    );
}
