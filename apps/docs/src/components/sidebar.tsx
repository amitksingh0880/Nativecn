"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsRegistry } from "../data/docs-registry";
import styles from "../styles/docs.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      {/* Getting Started Group */}
      <div className={styles.sidebarGroup}>
        <div className={styles.sidebarGroupTitle}>Getting Started</div>
        <div className={styles.sidebarLinks}>
          <Link
            href="/docs"
            className={`${styles.sidebarLink} ${pathname === "/docs" ? styles.sidebarLinkActive : ""}`}
          >
            Introduction
          </Link>
        </div>
      </div>

      {/* Composite Simulations Group */}
      <div className={styles.sidebarGroup}>
        <div className={styles.sidebarGroupTitle}>Composite Showcase</div>
        <div className={styles.sidebarLinks}>
          <Link
            href="/docs/simulations"
            className={`${styles.sidebarLink} ${pathname === "/docs/simulations" ? styles.sidebarLinkActive : ""}`}
          >
            Multi-Component Sandbox
          </Link>
        </div>
      </div>

      {/* Core Components Group */}
      <div className={styles.sidebarGroup}>
        <div className={styles.sidebarGroupTitle}>Core Components</div>
        <div className={styles.sidebarLinks}>
          {Object.entries(docsRegistry.core || {}).map(([slug, item]) => {
            const path = `/docs/core/${slug}`;
            const isActive = pathname === path;
            return (
              <Link
                key={slug}
                href={path}
                className={`${styles.sidebarLink} ${isActive ? styles.sidebarLinkActive : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Premium Components Group */}
      <div className={styles.sidebarGroup}>
        <div className={styles.sidebarGroupTitle}>Premium Components</div>
        <div className={styles.sidebarLinks}>
          {Object.entries(docsRegistry.premium || {}).map(([slug, item]) => {
            const path = `/docs/premium/${slug}`;
            const isActive = pathname === path;
            return (
              <Link
                key={slug}
                href={path}
                className={`${styles.sidebarLink} ${isActive ? styles.sidebarLinkActive : ""}`}
              >
                {item.name}
                <span className={styles.badge}>Premium</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
