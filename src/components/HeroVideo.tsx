"use client";

import { useState, useEffect, useRef } from "react";

export default function HeroVideo() {
    const [text, setText] = useState("");
    const [typingDone, setTypingDone] = useState(false);
    const [started, setStarted] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const fullText = "ONE PHOTO. ENDLESS POSSIBILITIES.\nWe turn your product shots into cinematic content.\nNo reshoots. No delays. Just results.";

    // Start typing only when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [started]);

    // Typing effect - only runs once started
    useEffect(() => {
        if (!started) return;

        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTypingDone(true);
            }
        }, 70);
        return () => clearInterval(interval);
    }, [started]);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-black"
        >
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

            {/* Scanline Overlay */}
            <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    opacity: 0.08,
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        #000 2px,
                        #000 4px
                    )`,
                }}
            />

            {/* Content */}
            <div className="absolute inset-0 h-full w-full flex items-center justify-center p-8 z-30 pointer-events-none">
                <div style={{ maxWidth: "900px", textAlign: "center" }}>
                    <p
                        style={{
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                            color: "#F5F5F5",
                            lineHeight: 1.3,
                            letterSpacing: "-0.01em",
                            whiteSpace: "pre-wrap",
                            display: "inline",
                            textShadow: "0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.2)",
                        }}
                    >
                        {text}
                    </p>
                    <span
                        style={{
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                            color: "#F5F5F5",
                            display: "inline-block",
                            marginLeft: "4px",
                            textShadow: "0 0 15px rgba(255,255,255,0.5)",
                            animation: "cursorBlink 1s step-end infinite",
                        }}
                    >
                        _
                    </span>
                </div>
            </div>

            {/* Blinking cursor keyframes */}
            <style>{`
                @keyframes cursorBlink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </section>
    );
}
