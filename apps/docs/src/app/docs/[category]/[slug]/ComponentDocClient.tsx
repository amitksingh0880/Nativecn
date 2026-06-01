"use client";

import React, { useState } from "react";
import styles from "../../../../styles/docs.module.css";
import compStyles from "../../../../styles/components.module.css";
import CodeBlock from "../../../../components/code-block";
import Simulator from "../../../../components/simulator";

interface DocEntry {
  name: string;
  description: string;
  category: string;
  installation: string;
  usageCode: string;
  componentMockup: () => React.ReactNode;
}

export default function ComponentDocClient({ entry }: { entry: DocEntry }) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div style={{ maxWidth: "1000px" }}>
      {/* Header */}
      <header className={styles.docHeader}>
        <h1 className={styles.title}>{entry.name}</h1>
        <p className={styles.description}>{entry.description}</p>
      </header>

      {/* Interactive Showcase Tabs */}
      <div className={compStyles.tabsContainer}>
        <div className={compStyles.tabList}>
          <button
            onClick={() => setActiveTab("preview")}
            className={`${compStyles.tabTrigger} ${activeTab === "preview" ? compStyles.tabTriggerActive : ""}`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`${compStyles.tabTrigger} ${activeTab === "code" ? compStyles.tabTriggerActive : ""}`}
          >
            Code
          </button>
        </div>

        <div className={compStyles.tabContent}>
          {activeTab === "preview" ? (
            <div className={compStyles.previewArea}>
              <Simulator>
                {entry.componentMockup()}
              </Simulator>
            </div>
          ) : (
            <div className={compStyles.codeArea}>
              <CodeBlock code={entry.usageCode} filename={`${entry.name}.tsx`} />
            </div>
          )}
        </div>
      </div>

      {/* Installation guide */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Installation</h2>
        <p className={styles.paragraph}>
          Add the component and all associated sub-modules to your Expo project automatically using our CLI command:
        </p>
        <CodeBlock code={entry.installation} filename="Terminal" />
      </section>
    </div>
  );
}
