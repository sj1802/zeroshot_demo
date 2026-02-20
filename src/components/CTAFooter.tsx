"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function CTAFooter() {
    return (
        <footer
            style={{
                position: "relative",
                backgroundColor: "#050505",
                color: "white",
                overflow: "hidden",
            }}
        >
            {/* ═══════════ CTA SECTION ═══════════ */}
            <div
                style={{
                    position: "relative",
                    padding: "120px 24px 96px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    minHeight: "60vh",
                }}
            >
                {/* Ambient orbs */}
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "700px",
                        height: "700px",
                        background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 60%)",
                        pointerEvents: "none",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "0",
                        right: "20%",
                        width: "400px",
                        height: "400px",
                        background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        left: "10%",
                        width: "350px",
                        height: "350px",
                        background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}
                >
                    {/* Eyebrow */}
                    <span
                        style={{
                            display: "inline-block",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.25em",
                            color: "#818cf8",
                            marginBottom: "24px",
                            textTransform: "uppercase",
                        }}
                    >
                        Let&apos;s Create Together
                    </span>

                    {/* Headline */}
                    <h2
                        style={{
                            fontSize: "clamp(3rem, 10vw, 7rem)",
                            fontWeight: 900,
                            letterSpacing: "-0.04em",
                            lineHeight: 0.95,
                            marginBottom: "32px",
                        }}
                    >
                        READY TO{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #6366f1, #06b6d4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            SHOOT
                        </span>
                        ?
                    </h2>

                    {/* Subtext */}
                    <p
                        style={{
                            fontSize: "1.125rem",
                            color: "rgba(255,255,255,0.4)",
                            lineHeight: 1.6,
                            marginBottom: "48px",
                            maxWidth: "550px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Transform your brand with cinematic visuals that captivate.
                        Book a free pilot session and see the difference.
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        className="cta-main-btn"
                        style={{
                            position: "relative",
                            padding: "20px 48px",
                            borderRadius: "999px",
                            border: "none",
                            background: "linear-gradient(135deg, #8b5cf6, #6366f1, #06b6d4)",
                            color: "white",
                            fontWeight: 700,
                            fontSize: "1.125rem",
                            letterSpacing: "0.02em",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            boxShadow: "0 8px 32px rgba(99,102,241,0.3), 0 0 64px rgba(99,102,241,0.15)",
                            transition: "box-shadow 0.3s ease",
                            overflow: "hidden",
                        }}
                    >
                        <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "10px" }}>
                            Book a Pilot
                            <ArrowRight size={20} />
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            {/* ═══════════ FOOTER SECTION ═══════════ */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 24px",
                }}
            >
                {/* Divider */}
                <div
                    style={{
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                    }}
                />

                {/* Footer grid */}
                <div
                    className="footer-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr",
                        gap: "48px",
                        padding: "64px 0 48px",
                    }}
                >
                    {/* Brand column */}
                    <div>
                        <h3
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                                marginBottom: "16px",
                            }}
                        >
                            Zero
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Shot
                            </span>
                        </h3>
                        <p
                            style={{
                                color: "rgba(255,255,255,0.35)",
                                fontSize: "0.875rem",
                                lineHeight: 1.7,
                                maxWidth: "300px",
                            }}
                        >
                            Cinematic production studio redefining visual content for modern brands.
                        </p>

                        {/* Social icons */}
                        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                            {[
                                { icon: Instagram, label: "Instagram" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Mail, label: "Email" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    className="social-icon"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(255,255,255,0.4)",
                                        transition: "all 0.3s ease",
                                        textDecoration: "none",
                                    }}
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links columns */}
                    {[
                        {
                            title: "Services",
                            links: ["Video Production", "3D Modeling", "Sound Design", "Color Grading"],
                        },
                        {
                            title: "Company",
                            links: ["About", "Careers", "Blog", "Contact"],
                        },
                        {
                            title: "Legal",
                            links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
                        },
                    ].map((col) => (
                        <div key={col.title}>
                            <h4
                                style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.15em",
                                    color: "rgba(255,255,255,0.5)",
                                    marginBottom: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {col.title}
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {col.links.map((link) => (
                                    <li key={link} style={{ marginBottom: "12px" }}>
                                        <a
                                            href="#"
                                            className="footer-link"
                                            style={{
                                                color: "rgba(255,255,255,0.35)",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                transition: "color 0.2s ease",
                                            }}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                    }}
                />
                <div
                    className="footer-bottom"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "24px 0",
                    }}
                >
                    <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", margin: 0 }}>
                        &copy; 2026 ZeroShot. All rights reserved.
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem", margin: 0 }}>
                        Crafted with precision
                    </p>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .cta-main-btn:hover {
                    box-shadow: 0 8px 48px rgba(99,102,241,0.45), 0 0 80px rgba(99,102,241,0.2) !important;
                }
                .social-icon:hover {
                    background: rgba(99,102,241,0.15) !important;
                    border-color: rgba(99,102,241,0.4) !important;
                    color: #818cf8 !important;
                    transform: translateY(-2px);
                }
                .footer-link:hover {
                    color: rgba(255,255,255,0.8) !important;
                }
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    .footer-bottom {
                        flex-direction: column !important;
                        gap: 8px !important;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
}
