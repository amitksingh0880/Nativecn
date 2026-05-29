import React from "react";
import styles from "../../styles/docs.module.css";
import CodeBlock from "../../components/code-block";

export default function DocsIntroductionPage() {
  return (
    <div style={{ maxWidth: "800px" }}>
      <header className={styles.docHeader}>
        <h1 className={styles.title}>Introduction</h1>
        <p className={styles.description}>
          Nativecn is an exquisite, dark-mode first component catalog built on top of Expo, React Native, 
          and Moti. It is fully modular, allowing you to copy, modify, and inject standard and premium controls directly into your app.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Nativecn?</h2>
        <p className={styles.paragraph}>
          Traditional React Native libraries lock you into heavy npm dependencies and generic styling. Nativecn brings 
          the freedom and control of shadcn/ui and Radix UI directly to mobile development:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", color: "var(--muted-foreground)", lineHeight: "1.7", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
          <li>
            <strong style={{ color: "#fff" }}>Complete Customization</strong>: You own the component code. Modify components inside your project at will.
          </li>
          <li>
            <strong style={{ color: "#fff" }}>Tactile Kinetics</strong>: Pre-engineered micro-animations using React Native Reanimated and Moti.
          </li>
          <li>
            <strong style={{ color: "#fff" }}>Sleek Dark Theme</strong>: A high-fidelity aesthetic system designed to fit premium application standards out-of-the-box.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Quick Start Installation</h2>
        <p className={styles.paragraph}>
          Initialize a new React Native project with Expo, then install dependencies using pnpm or npm:
        </p>
        <CodeBlock 
          filename="Terminal" 
          code="pnpm install @nativecn/ui lucide-react-native moti react-native-reanimated" 
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>CLI Usage</h2>
        <p className={styles.paragraph}>
          Inject custom components into your codebase instantly using our modern command-line interface:
        </p>
        <CodeBlock 
          filename="Terminal" 
          code="npx nativecn add biometric-button" 
        />
      </section>
    </div>
  );
}
