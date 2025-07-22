"use client"

import React, { useState, useEffect } from "react";
import style from "./message.module.css"



const motifs = [
  { value: "visite", label: "Demande de visite" },
  { value: "rappel", label: "Être rappelé/e" },
  { value: "photos", label: "Plus de photos" },
];

export default function MessageComponent({ onChange }) {
  // Hooks & States
  const [motif, setMotif] = useState("visite");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (onChange) {
      onChange({ motif, message });
    }
  }, [motif, message, onChange]);

  return (
    <div className={style.messageContainer}>
      <div style={{ fontWeight: "bold", marginBottom: 10 }}>
        VOTRE MESSAGE
      </div>
      <div className={style.radioGroup}>
        {motifs.map((m) => (
          <label
            key={m.value}
            className={motif === m.value ? `${style.radioLabel} ${style.selected}` : style.radioLabel}
          >
            <input
              type="radio"
              name="motif"
              value={m.value}
              checked={motif === m.value}
              onChange={() => setMotif(m.value)}
            />
            <span>{m.label}</span>
          </label>
        ))}
      </div>
      <textarea
        className={style.textarea}
        placeholder="Votre message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={6}
      />
    </div>
  );
}