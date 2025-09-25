import Header from './Header'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 iFreedmen. Sovereignty-first. No resale of third-party data.</p>
      </footer>
    </div>
  )
}