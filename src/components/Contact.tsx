"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, Copy, CheckCheck } from "lucide-react";

export default function Contact() {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleEmailClick = () => {
        // Copy email to clipboard
        navigator.clipboard.writeText("contact@zeroshot.productions").then(() => {
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000);
        });
        // Open Gmail compose in a new tab
        window.open("https://mail.google.com/mail/?view=cm&to=contact@zeroshot.productions", "_blank");
    };

    return (
        <section
            style={{
                position: "relative",
                backgroundColor: "#0a0a0a",
                color: "white",
                overflow: "hidden",
                padding: "96px 24px",
            }}
        >
            {/* Ambient glow */}
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
                        Get In Touch
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            margin: "0 0 16px 0",
                        }}
                    >
                        Contact{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Us
                        </span>
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.125rem", margin: 0 }}>
                        We&apos;d love to hear from you. Reach out anytime.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                    {/* Address Card */}
                    <motion.a
                        href="https://maps.app.goo.gl/SZgc1aNy5e6QdZ1M9"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="contact-card"
                        style={{
                            position: "relative",
                            borderRadius: "24px",
                            overflow: "hidden",
                            textDecoration: "none",
                            color: "white",
                            transition: "transform 0.3s ease",
                            display: "block",
                        }}
                    >
                        {/* Glass bg */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "24px",
                                pointerEvents: "none",
                            }}
                        />
                        {/* Accent bar */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "2px",
                                background: "linear-gradient(90deg, #8b5cf6, transparent)",
                                pointerEvents: "none",
                            }}
                        />
                        {/* Hover glow */}
                        <div
                            className="contact-card-glow"
                            style={{
                                position: "absolute",
                                top: "-50%",
                                left: "-50%",
                                width: "200%",
                                height: "200%",
                                background: "radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, transparent 60%)",
                                opacity: 0,
                                transition: "opacity 0.5s ease",
                                pointerEvents: "none",
                            }}
                        />
                        <div style={{ position: "relative", zIndex: 1, padding: "40px 32px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "14px",
                                        background: "rgba(139,92,246,0.15)",
                                        border: "1px solid rgba(139,92,246,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <MapPin size={22} style={{ color: "#8b5cf6" }} />
                                </div>
                                <ExternalLink size={16} style={{ color: "rgba(255,255,255,0.2)" }} />
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>
                                Visit Us
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                                Plot 12, 3rd Floor, Rama Park,<br />
                                Kishan Ganj, New Delhi — 110007
                            </p>
                        </div>
                    </motion.a>

                    {/* Phone Card */}
                    <motion.a
                        href="tel:+918810444967"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="contact-card"
                        style={{
                            position: "relative",
                            borderRadius: "24px",
                            overflow: "hidden",
                            textDecoration: "none",
                            color: "white",
                            transition: "transform 0.3s ease",
                            display: "block",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "24px",
                                pointerEvents: "none",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "2px",
                                background: "linear-gradient(90deg, #6366f1, transparent)",
                                pointerEvents: "none",
                            }}
                        />
                        <div
                            className="contact-card-glow"
                            style={{
                                position: "absolute",
                                top: "-50%",
                                left: "-50%",
                                width: "200%",
                                height: "200%",
                                background: "radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 60%)",
                                opacity: 0,
                                transition: "opacity 0.5s ease",
                                pointerEvents: "none",
                            }}
                        />
                        <div style={{ position: "relative", zIndex: 1, padding: "40px 32px" }}>
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "14px",
                                    background: "rgba(99,102,241,0.15)",
                                    border: "1px solid rgba(99,102,241,0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "24px",
                                }}
                            >
                                <Phone size={22} style={{ color: "#6366f1" }} />
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>
                                Call Us
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                                +91-8810444967
                            </p>
                        </div>
                    </motion.a>

                    {/* Email Card */}
                    <motion.div
                        onClick={handleEmailClick}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="contact-card"
                        style={{
                            position: "relative",
                            borderRadius: "24px",
                            overflow: "hidden",
                            textDecoration: "none",
                            color: "white",
                            transition: "transform 0.3s ease",
                            display: "block",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "24px",
                                pointerEvents: "none",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "2px",
                                background: "linear-gradient(90deg, #06b6d4, transparent)",
                                pointerEvents: "none",
                            }}
                        />
                        <div
                            className="contact-card-glow"
                            style={{
                                position: "absolute",
                                top: "-50%",
                                left: "-50%",
                                width: "200%",
                                height: "200%",
                                background: "radial-gradient(circle at center, rgba(6,182,212,0.15) 0%, transparent 60%)",
                                opacity: 0,
                                transition: "opacity 0.5s ease",
                                pointerEvents: "none",
                            }}
                        />
                        <div style={{ position: "relative", zIndex: 1, padding: "40px 32px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "24px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "14px",
                                        background: "rgba(6,182,212,0.15)",
                                        border: "1px solid rgba(6,182,212,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Mail size={22} style={{ color: "#06b6d4" }} />
                                </div>
                                {emailCopied ? (
                                    <CheckCheck size={18} style={{ color: "#06b6d4" }} />
                                ) : (
                                    <Copy size={16} style={{ color: "rgba(255,255,255,0.25)" }} />
                                )}
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>
                                {emailCopied ? "Copied!" : "Email Us"}
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                                contact@zeroshot.productions
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .contact-card:hover .contact-card-glow {
                    opacity: 1 !important;
                }
                .contact-card:hover {
                    transform: translateY(-4px);
                }
                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
