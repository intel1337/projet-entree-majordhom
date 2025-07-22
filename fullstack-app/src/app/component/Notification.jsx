"use client" 

import styles from "./notification.module.css"

export default function Notification({ message, type }) {
  if (!message) return null;
  return (
    <div className={type === 'success' ? styles.success : styles.error}>
      {message}
    </div>
  );
}