"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Cpu, Zap, Eye, RefreshCw } from "lucide-react";
import styles from "../styles/landing.module.css";
import docStyles from "../styles/docs.module.css";
import compStyles from "../styles/components.module.css";
import Simulator from "../components/simulator";
import { docsRegistry } from "../data/docs-registry";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"biometric" | "progress" | "otp">("biometric");

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Hero Section */}
      <section className={styles.heroContainer}>
        <div className={styles.gridOverlay} />
        
        <span className={styles.heroTagline}>
          <Sparkles size={14} style={{ marginRight: "6px", verticalAlign: "middle" }} />
          The future of React Native UI
        </span>
        
        <h1 className={styles.heroTitle}>
          Build Fully Interactive, <span className="text-gradient-primary">Ultra-Modern</span> Mobile Apps
        </h1>
        
        <p className={styles.heroDescription}>
          A premier shadcn/ui and Radix UI-inspired component library for React Native and Expo. 
          translucent glassmorphism, biometric keys, vector charts, and physics-based motion.
        </p>
        
        <div className={styles.heroActions}>
          <Link href="/docs" className={styles.btnPrimary}>
            Start Building
            <ArrowRight size={18} />
          </Link>
          <a href="https://github.com/amitksingh0880/Nativecn" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            View on GitHub
          </a>
        </div>

        {/* Live Interactive Showcase Grid */}
        <div className={styles.showcaseSection}>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseInfo}>
              <h2 className={styles.showcaseTitle}>
                Exquisite Showcase of <span className="text-gradient-cyan">Premium Dynamics</span>
              </h2>
              <p className={styles.showcaseDesc}>
                Experience how our components respond immediately to interactions directly on this high-fidelity iOS simulator.
                Switch tabs below to test different premium mobile widgets instantly.
              </p>
              
              <div style={{ display: "flex", gap: "10px", marginTop: "12px", flexWrap: "wrap" }}>
                <button 
                  onClick={() => setActiveTab("biometric")}
                  style={{
                    background: activeTab === "biometric" ? "rgba(168, 85, 247, 0.15)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${activeTab === "biometric" ? "#a855f7" : "rgba(255,255,255,0.08)"}`,
                    color: activeTab === "biometric" ? "#ffffff" : "#94a3b8",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600",
                    transition: "all 0.2s"
                  }}
                >
                  Biometrics
                </button>
                <button 
                  onClick={() => setActiveTab("progress")}
                  style={{
                    background: activeTab === "progress" ? "rgba(168, 85, 247, 0.15)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${activeTab === "progress" ? "#a855f7" : "rgba(255,255,255,0.08)"}`,
                    color: activeTab === "progress" ? "#ffffff" : "#94a3b8",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600",
                    transition: "all 0.2s"
                  }}
                >
                  Progress Ring
                </button>
                <button 
                  onClick={() => setActiveTab("otp")}
                  style={{
                    background: activeTab === "otp" ? "rgba(168, 85, 247, 0.15)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${activeTab === "otp" ? "#a855f7" : "rgba(255,255,255,0.08)"}`,
                    color: activeTab === "otp" ? "#ffffff" : "#94a3b8",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600",
                    transition: "all 0.2s"
                  }}
                >
                  OTP Verification
                </button>
              </div>
            </div>

            {/* Simulated Device Frame */}
            <div>
              <Simulator>
                {activeTab === "biometric" && docsRegistry.premium["biometric-button"].componentMockup()}
                {activeTab === "progress" && docsRegistry.premium["progress-ring"].componentMockup()}
                {activeTab === "otp" && docsRegistry.premium["otp-input"].componentMockup()}
              </Simulator>
            </div>
          </div>
        </div>

        {/* Feature Cards Bento-Inspired Section */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Zap size={20} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700" }}>Lightning Fast</h3>
            <p style={{ color: "var(--muted-foreground)", fontSize: "14px", lineHeight: "1.6" }}>
              Zero boilerplate setup. Inject premium components seamlessly using our CLI in one single instruction.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Cpu size={20} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700" }}>Tactile Physics</h3>
            <p style={{ color: "var(--muted-foreground)", fontSize: "14px", lineHeight: "1.6" }}>
              Supports tactile haptic vibrations and spring-loaded scaling micro-animations that respond organically to touch.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Shield size={20} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700" }}>Native Hardware API</h3>
            <p style={{ color: "var(--muted-foreground)", fontSize: "14px", lineHeight: "1.6" }}>
              Pre-integrated bindings for camera, fingerprint, biometrics, secure storage, and hardware sensors.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
