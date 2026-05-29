"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "../styles/docs.module.css";
import compStyles from "../styles/components.module.css";

interface CodeBlockProps {
  code: string;
  filename?: string;
}

export default function CodeBlock({ code, filename = "App.tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className={styles.codeArea}>
      <div className={styles.codeBlockHeader}>
        <span>{filename}</span>
        <button className={styles.copyBtn} onClick={handleCopy} aria-label="Copy code">
          {copied ? (
            <>
              <Check size={14} className="text-emerald-500" />
              <span style={{ color: "#22c55e" }}>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className={compStyles.codeContent}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
