'use client'
import styles from './page.module.css'
import { motion } from "framer-motion"
import CoordonneesForm from './component/Coordonees'
import MessageComponent from './component/Message'
import Notification from './component/Notification'
import React, { useState } from 'react';

export default function Landing() {
  const apos = "'" // Apostrophe
  const [coordonnees, setCoordonnees] = useState({});
  const [message, setMessage] = useState({}); 
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState({ message: '', type: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...coordonnees, ...message })
      });
      const data = await res.json();
      if (res.ok) {
        setNotif({ message: 'Demande envoyée !', type: 'success' });
      } else {
        setNotif({ message: data?.error || 'Erreur inconnue', type: 'error' });
      }
    } catch (err) {
      setNotif({ message: 'Erreur réseau ou serveur.', type: 'error' });
    } finally {
      setLoading(false);
      setTimeout(() => setNotif({ message: '', type: '' }), 3000);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      }}
    >
      <Notification message={notif.message} type={notif.type} />
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles['hero-bg-filter']} />
          <form className={styles['hero-content']} onSubmit={handleSubmit}>
            <div className={styles.form}>
              <h1>CONTACTEZ L{apos}AGENCE</h1>
              <div className={styles.coordonees}>
                <strong>
                  <h3>VOS COORDONÉES</h3>
                </strong>
                <CoordonneesForm onChange={setCoordonnees} />
              </div>
            </div>
            <div className={styles.messageContainer}>
              <MessageComponent onChange={setMessage} />
            </div>
            <button type="submit" className={styles.submitBtn} style={{marginTop: 24, gridColumn: '1 / span 2'}} disabled={loading}>
              {loading ? 'Envoi en cours...' : 'ENVOYER'}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}