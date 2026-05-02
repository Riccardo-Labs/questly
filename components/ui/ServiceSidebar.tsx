"use client";

import { useEffect, useRef } from "react";
import styles from "./ServiceSidebar.module.css";
import type { ServiceData } from "@/types";

interface ServiceSidebarProps {
  service: ServiceData | null;
  onClose: () => void;
}

export default function ServiceSidebar({ service, onClose }: ServiceSidebarProps) {
  const isOpen = service !== null;
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={service?.tag ?? "Dettaglio servizio"}
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.header}>
          <span className={styles.tag}>{service?.tag ?? ""}</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Chiudi">
            ×
          </button>
        </div>

        <div className={styles.body}>
          {service && (
            <>
              <h2
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
              <p className={styles.desc}>{service.desc}</p>

              <ul className={styles.featureList}>
                {service.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{f.icon}</div>
                    <div>
                      <p className={styles.featureTitle}>{f.title}</p>
                      <p className={styles.featureText}>{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.statGrid}>
                {service.stats.map((s, i) => (
                  <div key={i} className={styles.statCard}>
                    <span className={styles.statVal}>{s.val}</span>
                    <span className={styles.statLbl}>{s.lbl}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className={styles.footer}>
          <button className={styles.cta}>
            Prenota una chiamata gratuita →
          </button>
        </div>
      </aside>
    </>
  );
}
