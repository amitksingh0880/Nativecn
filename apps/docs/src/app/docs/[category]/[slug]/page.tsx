"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { getDocEntry } from "../../../../data/docs-registry";
import styles from "../../../../styles/docs.module.css";
import compStyles from "../../../../styles/components.module.css";
import CodeBlock from "../../../../components/code-block";
import Simulator from "../../../../components/simulator";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default function ComponentDocPage({ params }: PageProps) {
  const { category, slug } = React.use(params);
  const entry = getDocEntry(category, slug);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  if (!entry) {
    notFound();
  }

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
