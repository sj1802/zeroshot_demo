"use client";

import { motion } from "framer-motion";
import { Upload, Wand2, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
    {
        id: 1,
        number: "01",
        title: "Upload",
        desc: "Send us your raw footage. Any format, any resolution. We handle the heavy lifting from day one.",
        icon: Upload,
        gradient: "from-violet-600 to-indigo-600",
        glow: "rgba(139, 92, 246, 0.3)",
        accent: "#8b5cf6",
    },
    {
        id: 2,
        number: "02",
        title: "Direction",
        desc: "We apply the ZeroShot formula — color grading, pacing, sound design, and cinematic polish.",
        icon: Wand2,
        gradient: "from-indigo-600 to-cyan-500",
        glow: "rgba(99, 102, 241, 0.3)",
        accent: "#6366f1",
    },
    {
        id: 3,
        number: "03",
        title: "Delivery",
        desc: "Receive production-ready assets in 48 hours. Broadcast quality. Zero compromises.",
        icon: CheckCircle,
        gradient: "from-cyan-500 to-emerald-500",
        glow: "rgba(6, 182, 212, 0.3)",
        accent: "#06b6d4",
    },
];

export default function Process() {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                backgroundColor: "#0a0a0a",
                color: "white",
                overflow: "hidden",
                paddingTop: "96px",
                paddingBottom: "96px",
            }}
        >
            {/* Ambient background glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "800px",
                    height: "800px",
                    background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "80px" }}
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
                        How It Works
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            margin: 0,
                        }}
                    >
                        Three Steps to{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Cinematic
                        </span>
                    </h2>
                </motion.div>

                {/* Process Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "32px",
                    }}
                    className="process-grid"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ margin: "-50px" }}
                                style={{
                                    position: "relative",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    cursor: "default",
                                }}
                                className="process-card"
                            >
                                {/* Card background with glass effect */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                                        backdropFilter: "blur(20px)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "24px",
                                    }}
                                />

                                {/* Gradient accent line at top */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "3px",
                                        background: `linear-gradient(90deg, ${step.accent}, transparent)`,
                                    }}
                                />

                                {/* Hover glow */}
                                <div
                                    className="process-card-glow"
                                    style={{
                                        position: "absolute",
                                        top: "-50%",
                                        left: "-50%",
                                        width: "200%",
                                        height: "200%",
                                        background: `radial-gradient(circle at center, ${step.glow} 0%, transparent 60%)`,
                                        opacity: 0,
                                        transition: "opacity 0.5s ease",
                                        pointerEvents: "none",
                                    }}
                                />

                                {/* Card content */}
                                <div
                                    style={{
                                        position: "relative",
                                        zIndex: 1,
                                        padding: "48px 40px",
                                        display: "flex",
                                        flexDirection: "column",
                                        minHeight: "400px",
                                    }}
                                >
                                    {/* Step number + Icon row */}
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: "40px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "5rem",
                                                fontWeight: 900,
                                                lineHeight: 1,
                                                background: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)`,
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {step.number}
                                        </span>

                                        <div
                                            style={{
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "16px",
                                                background: `linear-gradient(135deg, ${step.accent}33, ${step.accent}11)`,
                                                border: `1px solid ${step.accent}44`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Icon size={24} style={{ color: step.accent }} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        style={{
                                            fontSize: "1.75rem",
                                            fontWeight: 700,
                                            marginBottom: "16px",
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            lineHeight: 1.7,
                                            color: "rgba(255,255,255,0.5)",
                                            flex: 1,
                                        }}
                                    >
                                        {step.desc}
                                    </p>

                                    {/* Bottom connector arrow (except last) */}
                                    {index < steps.length - 1 && (
                                        <div
                                            className="connector-arrow"
                                            style={{
                                                position: "absolute",
                                                right: "-28px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                zIndex: 10,
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "50%",
                                                background: "#0a0a0a",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <ArrowRight size={20} style={{ color: "rgba(255,255,255,0.4)" }} />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Inline styles for hover effects and responsive grid */}
            <style>{`
                .process-card:hover .process-card-glow {
                    opacity: 1 !important;
                }
                .process-card:hover {
                    transform: translateY(-4px);
                    transition: transform 0.3s ease;
                }
                .process-card {
                    transition: transform 0.3s ease;
                }
                @media (max-width: 768px) {
                    .process-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .connector-arrow {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
}
