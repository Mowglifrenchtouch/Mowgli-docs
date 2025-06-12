import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Mowgli Open Source" description="Robot tondeuse DIY basé sur OpenMower">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Bienvenue dans l’univers Mowgli 🦁</h1>
          <p className="hero__subtitle">
            Un robot tondeuse libre, modulaire et évolutif basé sur OpenMower
          </p>
          <div>
            <a className="button button--primary" href="/docs/intro">
              Commencer
            </a>
            <a
              className="button button--secondary"
              href="https://github.com/Mowglifrenchtouch/mowgli_installer"
              style={{ marginLeft: '1rem' }}
            >
              Voir le GitHub
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="container margin-vert--lg">
          <h2>🛠️ Construisez votre robot</h2>
          <p>
            Explorez la documentation pour assembler, configurer et personnaliser
            votre tondeuse Mowgli.
          </p>
        </section>
        <section className="container margin-vert--lg">
          <h2>🔧 Firmware Mowgli</h2>
          <p>
            Un firmware basé sur OpenMower, enrichi pour les modèles YardForce,
            avec dockerisation complète.
          </p>
        </section>
        <section className="container margin-vert--lg">
          <h2>💬 Communauté</h2>
          <p>
            Rejoignez le canal Telegram{' '}
            <a href="https://t.me/openmower" target="_blank" rel="noreferrer">
              OpenMower 🇫🇷
            </a>{' '}
            pour échanger avec d'autres passionnés.
          </p>
        </section>
      </main>
    </Layout>
  );
}
