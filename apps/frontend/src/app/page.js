import Layout from '../components/Layout'
import styles from './page.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.brand}>iFreedmen</span>
          </h1>
          <p className={styles.subtitle}>
            Flagship hub for the iFreedmen Creative Suite: sovereignty, culture, commerce, and communications
          </p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Network (.NET)</h3>
            <p>Community engagement, collaboration, and events. Digital town hall for Freedmen worldwide.</p>
            <a href="https://ifreedmen.net" target="_blank" rel="noopener noreferrer">Visit Network →</a>
          </div>
          
          <div className={styles.card}>
            <h3>Docs/Research</h3>
            <p>Research portal with lineage guides, treaties, and legal references for identity verification.</p>
            <a href="https://docs.ifreedmen.com" target="_blank" rel="noopener noreferrer">Visit Docs →</a>
          </div>
          
          <div className={styles.card}>
            <h3>Shop</h3>
            <p>Open marketplace for Freedmen entrepreneurs and grassroots SaaS with community reinvestment.</p>
            <a href="https://ifreedmen.shop" target="_blank" rel="noopener noreferrer">Visit Shop →</a>
          </div>
          
          <div className={styles.card}>
            <h3>Store</h3>
            <p>Official regalia and cultural artifacts. Curated catalog with limited drops.</p>
            <a href="https://ifreedmen.store" target="_blank" rel="noopener noreferrer">Visit Store →</a>
          </div>
        </div>
        
        <div className={styles.utilityLinks}>
          <h2>Platform Services</h2>
          <div className={styles.utilityGrid}>
            <a href="https://status.ifreedmen.com" target="_blank" rel="noopener noreferrer" className={styles.utilityCard}>
              <h4>Status</h4>
              <p>System status and uptime monitoring</p>
            </a>
            <a href="https://api.ifreedmen.com" target="_blank" rel="noopener noreferrer" className={styles.utilityCard}>
              <h4>API</h4>
              <p>Developer resources and API documentation</p>
            </a>
            <a href="https://id.ifreedmen.com" target="_blank" rel="noopener noreferrer" className={styles.utilityCard}>
              <h4>Sign In</h4>
              <p>Identity verification and account management</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}