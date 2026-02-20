"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

export default function Showcase() {
    return (
        <section
            style={{
                position: "relative",
                backgroundColor: "#050505",
                color: "white",
                overflow: "hidden",
                padding: "120px 24px",
            }}
        >
            {/* Ambient glows */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "20%",
                    width: "500px",
                    height: "500px",
                    background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "10%",
                    right: "15%",
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "24px" }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            color: "#818cf8",
                            marginBottom: "16px",
                            textTransform: "uppercase",
                        }}
                    >
                        What We Deliver
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            margin: "0 0 20px 0",
                        }}
                    >
                        From a Single Photo to{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Cinematic Motion
                        </span>
                    </h2>
                    <p
                        style={{
                            color: "rgba(255,255,255,0.4)",
                            fontSize: "1.125rem",
                            lineHeight: 1.7,
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}
                    >
                        Give us a product photo. We turn it into a broadcast-ready video
                        with motion, lighting, and atmosphere — no reshoots needed.
                    </p>
                </motion.div>

                {/* Feature pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginBottom: "56px",
                    }}
                >
                    {["AI-Powered", "4K Output", "48hr Delivery", "Zero Reshoots"].map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: "8px 20px",
                                borderRadius: "999px",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                color: "rgba(255,255,255,0.5)",
                                letterSpacing: "0.03em",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        position: "relative",
                        borderRadius: "24px",
                        overflow: "hidden",
                        maxWidth: "800px",
                        margin: "0 auto",
                    }}
                >
                    {/* Glass border frame */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "24px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            zIndex: 2,
                            pointerEvents: "none",
                        }}
                    />

                    {/* Gradient accent at top */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "2px",
                            background: "linear-gradient(90deg, #8b5cf6, #6366f1, #06b6d4)",
                            zIndex: 3,
                        }}
                    />

                    {/* Corner glow */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-100px",
                            left: "-100px",
                            width: "300px",
                            height: "300px",
                            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
                            pointerEvents: "none",
                            zIndex: 1,
                        }}
                    />

                    {/* Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: "100%",
                            display: "block",
                            borderRadius: "24px",
                        }}
                    >
                        <source src="/assets/Asset 3_1_1080p.mp4" type="video/mp4" />
                    </video>

                    {/* Play indicator overlay */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "24px",
                            left: "24px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 20px",
                            borderRadius: "999px",
                            background: "rgba(0,0,0,0.6)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            zIndex: 4,
                        }}
                    >
                        <Sparkles size={14} style={{ color: "#818cf8" }} />
                        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>
                            Generated from a single product photo
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
