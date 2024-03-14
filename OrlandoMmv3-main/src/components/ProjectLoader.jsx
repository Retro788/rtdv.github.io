import React from "react";
import styles from "@/styles/ProjectLoader.module.css";

export default function ProjectLoader() {
  return (
    <div className={styles.loader}>
      {/* Enlace a la aplicación en Vercel */}
      <a href="https://ferio.vercel.app" target="_blank" rel="noopener noreferrer">
        Visita la aplicación
      </a>
    </div>
  );
}
