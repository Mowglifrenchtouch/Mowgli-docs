import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = useBaseUrl;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main
        className="hero hero--primary"
        style={{
          backgroundImage: `url(${baseUrl('/img/bandeau-mowgli.png')})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: '#fff',
          textShadow: '0 1px 3px rgba(0,0,0,0.6)',
          minHeight: '60vh',
          maxHeight: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 0',
        }}
      >
        <div className="container text--center">
          <h1 className="hero__title">🤖 Mowgli Docs</h1>
          <p className="hero__subtitle">
            Tuto complet pour robotiser votre tondeuse Yardforce 500 / 500B avec OpenMower + Mowgli
          </p>
          <div className="buttons" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link className="button button--info button--lg" to="/docs/Guide-OpenMower-Mowgli/Avertissements/">
              📘 Démarrer le guide
            </Link>
            <Link className="button button--info button--lg" to="/docs/Guide-OpenMower-Mowgli/a-propos">
              👤 À propos du projet
            </Link>
            <Link className="button button--info button--lg" to="/docs/Guide-OpenMower-Mowgli/mise-a-jour-guide">
              🆕 Mises à jour du guide
            </Link>
          </div>
        </div>
      </main>

      <section className="features" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
              <img src={baseUrl('/img/robot-gps-v2.png')} alt="Robot GPS" style={{ height: '160px', marginBottom: '1rem', borderRadius: '50%' }} />
              <img src={useBaseUrl('/img/robot-gps-v2.png')} alt="Robot GPS" style={{ height: '160px', marginBottom: '1rem', borderRadius: '50%' }} />
              <h3>⚙️ Modifiez votre robot</h3>
              <p>Ajoutez un GPS RTK, contrôlez les moteurs, configurez le firmware Mowgli et transformez votre Yardforce en robot autonome.</p>
            </div>
              <img src={baseUrl('/img/step-by-step-v2.png')} alt="Tutoriel pas à pas" style={{ height: '160px', marginBottom: '1rem', borderRadius: '50%' }} />
              <img src={useBaseUrl('/img/step-by-step-v2.png')} alt="Tutoriel pas à pas" style={{ height: '160px', marginBottom: '1rem', borderRadius: '50%' }} />
              <h3>🧠 Tutoriels pas-à-pas</h3>
              <p>Chaque étape est expliquée en détail, depuis l’ouverture du robot jusqu’à la première tonte.</p>
            </div>
              <img src={baseUrl('/img/interface-web-v2.png')} alt="Interface Web" style={{ height: '160px', marginBottom: '1rem', borderRadius: '50%' }} />
              <img src={useBaseUrl('/img/interface-web-v2.png')} alt="Interface Web" style={{ height: '160px', marginBottom: '1rem', borderRadius: '50%' }} />
              <h3>🌐 Interface Web & Mobile</h3>
              <p>Utilisez l’interface Web personnalisée pour contrôler, diagnostiquer et configurer votre robot tondeuse Mowgli.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
