import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="iFreedmen Creative Suite - Home">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.brand}>iFreedmen</span> Creative Suite
          </h1>
          <p className={styles.subtitle}>
            Sovereignty, culture, commerce, and communications.
          </p>
          <p className={styles.description}>
            The flagship hub connecting all our domains and services. Navigate using the header above to explore our ecosystem.
          </p>
        </div>

        <div className={styles.grid}>
          <a href="https://ifreedmen.net" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Network (.NET) &rarr;</h2>
            <p>Community engagement, directories, and events. Digital town hall for Freedmen worldwide.</p>
          </a>

          <a href="https://docs.ifreedmen.com" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Docs/Research &rarr;</h2>
            <p>Lineage guides, treaties, legal references, and educational resources.</p>
          </a>

          <a href="https://ifreedmen.shop" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Shop &rarr;</h2>
            <p>Open marketplace for Freedmen entrepreneurs and grassroots SaaS solutions.</p>
          </a>

          <a href="https://ifreedmen.store" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Store &rarr;</h2>
            <p>Official regalia, curated catalog, limited drops, and cultural artifacts.</p>
          </a>

          <a href="https://status.ifreedmen.com" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Status &rarr;</h2>
            <p>Service status and uptime monitoring for all iFreedmen platforms.</p>
          </a>

          <a href="https://api.ifreedmen.com" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>API &rarr;</h2>
            <p>Developer resources and API documentation for platform integration.</p>
          </a>
        </div>
      </div>
    </Layout>
  )
}