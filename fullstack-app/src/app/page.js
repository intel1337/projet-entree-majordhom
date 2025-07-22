'use client'
import styles from './page.module.css'
import { motion } from "framer-motion"
import CoordonneesForm from './component/Coordonees'
import MessageComponent from './component/Message'
import React, { useState } from 'react';

export default function Landing() {
  const apos = "'"
  const [coordonnees, setCoordonnees] = useState({});
  const [message, setMessage] = useState({}); 

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Coordonnées :', coordonnees);
    console.log('Message :', message);
    alert('Formulaire envoyé ! (voir console pour les données)');
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
              <button type="submit" className={styles.submitBtn} style={{marginTop: 24, gridColumn: '1 / span 2'}}>ENVOYER</button>
            </div>
    
          </form>
        </div>
      </div>
    </motion.div>
  );
}