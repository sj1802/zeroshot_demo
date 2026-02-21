"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
    {
        name: "DROP-IN",
        price: "$150",
        period: "/ sku",
        desc: "Perfect for single product launches or campaigns.",
        features: [
            "4K 60fps Video Assets",
            "3D Product Modeling",
            "Basic Sound Design",
            "48-hour Turnaround",
        ],
        highlight: false,
        icon: Zap,
        accent: "#8b5cf6",
        gradientFrom: "#8b5cf6",
        gradientTo: "#6366f1",
    },
    {
        name: "STUDIO",
        price: "$2,000",
        period: "/ 20 skus",
        desc: "Ideal for brands scaling their visual content library.",
        features: [
            "Everything in Drop-In",
            "20 SKU Package",
            "Priority Rendering Queue",
            "Dedicated Art Director",
            "Source Files Included",
        ],
        highlight: true,
        icon: Sparkles,
        accent: "#06b6d4",
        gradientFrom: "#6366f1",
        gradientTo: "#06b6d4",
    },
    {
        name: "AGENCY",
        price: "Custom",
        period: "",
        desc: "Enterprise-grade production for agencies and large brands.",
        features: [
            "High Volume Requests",
            "Priority Rendering Queue",
            "Dedicated Art Director",
            "Source Files Included",
            "Custom Shader Development",
        ],
        highlight: false,
        icon: Crown,
        accent: "#8b5cf6",
        gradientFrom: "#8b5cf6",
        gradientTo: "#06b6d4",
    },
];

export default function Pricing() {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                backgroundColor: "#0a0a0a",
                color: "white",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "96px 24px",
            }}
        >
            {/* Ambient glow */}
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    right: "10%",
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "5%",
                    width: "500px",
                    height: "500px",
                    background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1100px", width: "100%", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "64px" }}
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
                        Pricing
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            margin: "0 0 16px 0",
                        }}
                    >
                        Transparent{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Pricing
                        </span>
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.125rem", margin: 0 }}>
                        No hidden fees. No contracts. Just results.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", alignItems: "stretch" }}>
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ margin: "-50px" }}
                                className="pricing-card"
                                style={{
                                    position: "relative",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                {/* Glass background */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: plan.highlight
                                            ? "linear-gradient(180deg, rgba(99,102,241,0.08) 0%, rgba(6,182,212,0.04) 100%)"
                                            : "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                                        backdropFilter: "blur(20px)",
                                        border: plan.highlight
                                            ? "1px solid rgba(99,102,241,0.3)"
                                            : "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "24px",
                                    }}
                                />

                                {/* Gradient accent bar at top */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: plan.highlight ? "3px" : "2px",
                                        background: `linear-gradient(90deg, ${plan.gradientFrom}, ${plan.gradientTo})`,
                                    }}
                                />

                                {/* Hover glow */}
                                <div
                                    className="pricing-card-glow"
                                    style={{
                                        position: "absolute",
                                        top: "-50%",
                                        left: "-50%",
                                        width: "200%",
                                        height: "200%",
                                        background: `radial-gradient(circle at center, ${plan.accent}22 0%, transparent 60%)`,
                                        opacity: 0,
                                        transition: "opacity 0.5s ease",
                                        pointerEvents: "none",
                                    }}
                                />

                                {/* Popular badge */}
                                {plan.highlight && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "24px",
                                            right: "24px",
                                            background: `linear-gradient(135deg, ${plan.gradientFrom}, ${plan.gradientTo})`,
                                            color: "white",
                                            padding: "6px 16px",
                                            borderRadius: "999px",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.15em",
                                            zIndex: 2,
                                            boxShadow: `0 4px 20px ${plan.accent}44`,
                                        }}
                                    >
                                        MOST POPULAR
                                    </div>
                                )}

                                {/* Card content */}
                                <div
                                    style={{
                                        position: "relative",
                                        zIndex: 1,
                                        padding: "48px 40px",
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                    }}
                                >
                                    {/* Icon + Plan name */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                                        <div
                                            style={{
                                                width: "44px",
                                                height: "44px",
                                                borderRadius: "12px",
                                                background: `linear-gradient(135deg, ${plan.accent}33, ${plan.accent}11)`,
                                                border: `1px solid ${plan.accent}44`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Icon size={20} style={{ color: plan.accent }} />
                                        </div>
                                        <span
                                            style={{
                                                fontSize: "0.875rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.15em",
                                                color: "rgba(255,255,255,0.4)",
                                            }}
                                        >
                                            {plan.name}
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
                                        <span
                                            style={{
                                                fontSize: "3.5rem",
                                                fontWeight: 800,
                                                letterSpacing: "-0.03em",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {plan.price}
                                        </span>
                                        <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.35)" }}>
                                            {plan.period}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p
                                        style={{
                                            color: "rgba(255,255,255,0.4)",
                                            fontSize: "0.95rem",
                                            lineHeight: 1.6,
                                            marginBottom: "32px",
                                            paddingBottom: "32px",
                                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                                        }}
                                    >
                                        {plan.desc}
                                    </p>

                                    {/* Features */}
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, marginBottom: "32px" }}>
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "14px",
                                                    marginBottom: "16px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "22px",
                                                        height: "22px",
                                                        borderRadius: "50%",
                                                        background: `${plan.accent}1A`,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <Check size={12} style={{ color: plan.accent }} />
                                                </div>
                                                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button
                                        className="pricing-btn"
                                        style={{
                                            width: "100%",
                                            padding: "16px 0",
                                            borderRadius: "14px",
                                            border: "none",
                                            fontWeight: 700,
                                            fontSize: "0.95rem",
                                            letterSpacing: "0.02em",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            ...(plan.highlight
                                                ? {
                                                    background: `linear-gradient(135deg, ${plan.gradientFrom}, ${plan.gradientTo})`,
                                                    color: "white",
                                                    boxShadow: `0 4px 24px ${plan.accent}33`,
                                                }
                                                : {
                                                    background: "rgba(255,255,255,0.06)",
                                                    color: "rgba(255,255,255,0.8)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                }),
                                        }}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Hover and responsive styles */}
            <style>{`
                .pricing-card:hover .pricing-card-glow {
                    opacity: 1 !important;
                }
                .pricing-card:hover {
                    transform: translateY(-6px);
                }
                .pricing-btn:hover {
                    filter: brightness(1.15);
                    transform: translateY(-1px);
                }
                @media (max-width: 768px) {
                    .pricing-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
