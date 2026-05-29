import React from "react";
import Sidebar from "../../components/sidebar";
import styles from "../../styles/docs.module.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      {/* Sidebar Wrapper */}
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>

      {/* Content area */}
      <main className={styles.contentWrapper}>
        {children}
      </main>
    </div>
  );
}
