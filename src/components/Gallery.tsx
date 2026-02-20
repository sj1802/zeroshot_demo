"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projectItems = [
    {
        id: 1,
        title: "Cyber Punk",
        category: "Commercial",
        image: "https://picsum.photos/seed/cyber2077/800/1000",
        accent: "#8b5cf6",
    },
    {
        id: 2,
        title: "Neon Nights",
        category: "Music Video",
        image: "https://picsum.photos/seed/neonlights/800/1000",
        accent: "#6366f1",
    },
    {
        id: 3,
        title: "Desert Storm",
        category: "Documentary",
        image: "https://picsum.photos/seed/sandstorm/800/1000",
        accent: "#06b6d4",
    },
    {
        id: 4,
        title: "Urban Jungle",
        category: "Fashion",
        image: "https://picsum.photos/seed/citylife/800/1000",
        accent: "#8b5cf6",
    },
    {
        id: 5,
        title: "Deep Space",
        category: "CGI",
        image: "https://picsum.photos/seed/galaxy99/800/1000",
        accent: "#06b6d4",
    },
    {
        id: 6,
        title: "Golden Hour",
        category: "Lifestyle",
        image: "https://picsum.photos/seed/goldenhour/800/1000",
        accent: "#6366f1",
    },
];

export default function Gallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section
            style={{
                position: "relative",
                backgroundColor: "#0a0a0a",
                color: "white",
                overflow: "hidden",
                padding: "120px 24px",
            }}
        >
            {/* Ambient glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "800px",
                    height: "800px",
                    background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "64px" }}
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
                        Our Work
                    </span>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
                        <h2
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontWeight: 800,
                                lineHeight: 1.1,
                                margin: 0,
                            }}
                        >
                            Production{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Studio
                            </span>
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "1rem", margin: 0, maxWidth: "350px" }}>
                            A curated selection of our recent cinematic productions.
                        </p>
                    </div>
                </motion.div>

                {/* Masonry-style Grid */}
                <div
                    className="gallery-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                    }}
                >
                    {projectItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ margin: "-50px" }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="gallery-item"
                            style={{
                                position: "relative",
                                borderRadius: "20px",
                                overflow: "hidden",
                                cursor: "pointer",
                                height: index % 3 === 0 ? "480px" : index % 3 === 1 ? "380px" : "430px",
                                transition: "transform 0.4s ease",
                            }}
                        >
                            {/* Image */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    transition: "transform 0.6s ease, filter 0.4s ease",
                                    transform: hoveredId === item.id ? "scale(1.06)" : "scale(1)",
                                    filter: hoveredId !== null && hoveredId !== item.id ? "brightness(0.4)" : "brightness(1)",
                                }}
                            />

                            {/* Gradient overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: hoveredId === item.id
                                        ? "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)"
                                        : "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 50%)",
                                    transition: "background 0.4s ease",
                                }}
                            />

                            {/* Glass border on hover */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "20px",
                                    border: hoveredId === item.id ? `1px solid ${item.accent}55` : "1px solid rgba(255,255,255,0.06)",
                                    transition: "border 0.3s ease",
                                    pointerEvents: "none",
                                    zIndex: 3,
                                }}
                            />

                            {/* Content */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "28px",
                                    zIndex: 2,
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                                    <div>
                                        <span
                                            style={{
                                                display: "block",
                                                fontSize: "0.7rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.15em",
                                                color: item.accent,
                                                marginBottom: "8px",
                                                textTransform: "uppercase",
                                                opacity: hoveredId === item.id ? 1 : 0.7,
                                                transition: "opacity 0.3s ease",
                                            }}
                                        >
                                            {item.category}
                                        </span>
                                        <h3
                                            style={{
                                                fontSize: "1.5rem",
                                                fontWeight: 700,
                                                margin: 0,
                                                transform: hoveredId === item.id ? "translateY(0)" : "translateY(4px)",
                                                transition: "transform 0.3s ease",
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Arrow icon */}
                                    <AnimatePresence>
                                        {hoveredId === item.id && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.5 }}
                                                transition={{ duration: 0.2 }}
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "50%",
                                                    background: `${item.accent}22`,
                                                    border: `1px solid ${item.accent}44`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                <ArrowUpRight size={16} style={{ color: item.accent }} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .gallery-item:hover {
                    transform: translateY(-4px);
                }
                @media (max-width: 768px) {
                    .gallery-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .gallery-item {
                        height: 350px !important;
                    }
                }
            `}</style>
        </section>
    );
}
