"use client" 



import React, { useState, useEffect } from "react";
import styles from "./coordonnees.module.css";

// Options Locales pour éviter une dépendance externe
const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const heures = ["7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h"];
const minutes = ["0m", "15m", "30m", "45m"];

export default function CoordonneesForm({ onChange }) {
  // State & Hooks du Form
  const [civilite, setCivilite] = useState("mme");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [jour, setJour] = useState(jours[0]);
  const [heure, setHeure] = useState(heures[0]);
  const [minute, setMinute] = useState(minutes[0]);
  const [dispos, setDispos] = useState([]);

  // Appelle onChange à chaque modification d'un champ
  useEffect(() => {
    if (onChange) {
      onChange({ civilite, nom, prenom, email, telephone, dispos });
    }
  }, [civilite, nom, prenom, email, telephone, dispos, onChange]);

  function ajouterDispo() {
    setDispos([...dispos, `${jour} à ${heure}${minute !== "0m" ? minute : ""}`]); // Formatisation du tableau de Disponibilitées.
  }

  function supprimerDispo(index) {
    setDispos(dispos.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.formContainer}>
      {/* Civilité */}
      <div className={styles.radioGroup}>
        <label className={civilite === "mme" ? `${styles.radioLabel} ${styles.selected}` : styles.radioLabel}>
          <input
            type="radio"
            name="civilite"
            value="mme"
            checked={civilite === "mme"}
            onChange={() => setCivilite("mme")}
          />
          <span>Mme</span>
        </label>
        <label className={civilite === "mr" ? `${styles.radioLabel} ${styles.selected}` : styles.radioLabel}>
          <input
            type="radio"
            name="civilite"
            value="mr"
            checked={civilite === "mr"}
            onChange={() => setCivilite("mr")}
          />
          <span>M</span>
        </label>
      </div>
      {/* Nom & Prénom */}
      <div className={styles.inputRow}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={e => setNom(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={e => setPrenom(e.target.value)}
        />
      </div>
      {/*Contact*/}
      <input
        className={styles.inputField}
        type="email"
        placeholder="Adresse mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="tel"
        placeholder="Téléphone"
        value={telephone}
        onChange={e => setTelephone(e.target.value)}
      />
      {/* Disponibilités */}
      <div>
        <div style={{ fontWeight: "bold", marginBottom: 10 }}>DISPONIBILITÉS POUR UNE VISITE</div>
        <div className={styles.selectRow}>
          <select value={jour} onChange={e => setJour(e.target.value)} className={styles.dropdown}>
            {jours.map(j => <option key={j}>{j}</option>)}
          </select>
          <select value={heure} onChange={e => setHeure(e.target.value)} className={styles.dropdown}>
            {heures.map(h => <option key={h}>{h}</option>)}
          </select>
          <select value={minute} onChange={e => setMinute(e.target.value)} className={styles.dropdown}>
            {minutes.map(m => <option key={m}>{m}</option>)}
          </select>
          <button type="button" onClick={ajouterDispo} className={styles.addDispoBtn}>
            AJOUTER DISPO
          </button>
        </div>
        <div>
          {dispos.map((d, idx) => (
            <div key={idx} className={styles.dispoTag}>
              <span>{d}</span>
              <button type="button" onClick={() => supprimerDispo(idx)} className={styles.removeDispoBtn}>&times;</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 