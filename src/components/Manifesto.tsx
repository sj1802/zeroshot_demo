"use client";

import { useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const clipRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef(50);

    // Direct DOM update — bypasses React render cycle entirely
    const updateSlider = useCallback((percentage: number) => {
        positionRef.current = percentage;
        if (clipRef.current) {
            clipRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        }
        if (handleRef.current) {
            handleRef.current.style.left = `${percentage}%`;
        }
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const getPercentage = (clientX: number) => {
            const rect = container.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            return (x / rect.width) * 100;
        };

        const onMouseMove = (e: MouseEvent) => {
            updateSlider(getPercentage(e.clientX));
        };

        const onTouchMove = (e: TouchEvent) => {
            e.preventDefault(); // Prevent scroll while sliding
            updateSlider(getPercentage(e.touches[0].clientX));
        };

        container.addEventListener("mousemove", onMouseMove, { passive: true });
        container.addEventListener("touchmove", onTouchMove, { passive: false });

        return () => {
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("touchmove", onTouchMove);
        };
    }, [updateSlider]);

    return (
        <section className="relative bg-neutral-950 text-white overflow-hidden py-24">
            {/* Comparison Slider */}
            <div
                ref={containerRef}
                className="relative w-full mx-auto overflow-hidden cursor-ew-resize group"
                style={{ height: "85vh", minHeight: "600px", maxWidth: "1600px", touchAction: "none" }}
            >
                {/* Background layer: ZeroShot Way (right/vibrant) - always visible behind */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/assets/After_optimized.webp"
                    alt="The ZeroShot Way"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                    }}
                />

                {/* ZeroShot Label */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "48px",
                        transform: "translateY(-50%)",
                        textAlign: "right",
                        pointerEvents: "none",
                        zIndex: 2,
                    }}
                >
                    <span style={{ display: "block", fontSize: "0.875rem", letterSpacing: "0.1em", color: "#818cf8", fontWeight: 700, marginBottom: "8px" }}>
                        ZEROSHOT WAY
                    </span>
                    <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.1 }}>
                        Limitless<br />Creation
                    </h3>
                </div>

                {/* Foreground layer: Old Way (left/grayscale) - clipped by slider */}
                <div
                    ref={clipRef}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#171717",
                        overflow: "hidden",
                        zIndex: 5,
                        clipPath: "inset(0 50% 0 0)",
                        willChange: "clip-path",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/Before_optimized.webp"
                        alt="The Old Way"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                    />
                    {/* Old Way Label */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "48px",
                            transform: "translateY(-50%)",
                            textAlign: "left",
                            pointerEvents: "none",
                            zIndex: 2,
                        }}
                    >
                        <span style={{ display: "block", fontSize: "0.875rem", letterSpacing: "0.1em", color: "#737373", fontWeight: 700, marginBottom: "8px" }}>
                            THE OLD WAY
                        </span>
                        <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 700, color: "#a3a3a3", lineHeight: 1.1 }}>
                            Physical<br />Constraints
                        </h3>
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    ref={handleRef}
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: "50%",
                        width: "4px",
                        backgroundColor: "white",
                        cursor: "ew-resize",
                        zIndex: 10,
                        boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                        willChange: "left",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "48px",
                            height: "48px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "black",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div style={{ display: "flex", gap: "4px" }}>
                            <ChevronLeft size={16} />
                            <ChevronRight size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
