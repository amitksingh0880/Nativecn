"use client";

import React, { useState, useEffect } from "react";
import { Wifi, Battery, Signal } from "lucide-react";
import styles from "../styles/components.module.css";

interface SimulatorProps {
  children: React.ReactNode;
}

export default function Simulator({ children }: SimulatorProps) {
  const [time, setTime] = useState("09:41");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const strHours = hours < 10 ? `0${hours}` : hours;
      setTime(`${strHours}:${strMinutes}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.simulatorFrame}>
      {/* Notch */}
      <div className={styles.notch} />
      
      {/* Status Bar */}
      <div className={styles.statusBar}>
        <span>{time}</span>
        <div className={styles.statusBarIcons}>
          <Signal size={12} fill="currentColor" strokeWidth={0} />
          <Wifi size={12} />
          <Battery size={14} fill="currentColor" strokeWidth={1} />
        </div>
      </div>

      {/* Screen Container */}
      <div className={styles.simulatorScreen}>
        {children}
      </div>

      {/* Home Indicator */}
      <div className={styles.homeBar} />
    </div>
  );
}
