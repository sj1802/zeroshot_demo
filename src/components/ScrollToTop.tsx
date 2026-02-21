"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 600);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
                position: "fixed",
                bottom: "32px",
                right: "32px",
                zIndex: 9999,
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(10,10,10,0.8)",
                backdropFilter: "blur(12px)",
                color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
                transform: visible ? "translateY(0)" : "translateY(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.2)";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                e.currentTarget.style.color = "#818cf8";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(10,10,10,0.8)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            }}
        >
            <ArrowUp size={20} />
        </button>
    );
}
