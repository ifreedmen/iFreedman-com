import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

const Navigation = () => {
  const navItems = [
    { label: 'Home', href: 'https://ifreedmen.com', external: true },
    { label: 'Network (.NET)', href: 'https://ifreedmen.net', external: true },
    { label: 'Docs/Research', href: 'https://docs.ifreedmen.com', external: true },
    { label: 'Shop', href: 'https://ifreedmen.shop', external: true },
    { label: 'Store', href: 'https://ifreedmen.store', external: true },
    { label: 'Status', href: 'https://status.ifreedmen.com', external: true },
    { label: 'API', href: 'https://api.ifreedmen.com', external: true },
    { label: 'Sign In', href: 'https://id.ifreedmen.com', external: true },
  ]

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="https://ifreedmen.com" className={styles.brandLink}>
            <span className={styles.brandText}>iFreedmen</span>
          </Link>
        </div>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.label} className={styles.navItem}>
              {item.external ? (
                <a
                  href={item.href}
                  className={styles.navLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation