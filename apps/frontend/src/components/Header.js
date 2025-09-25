import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const navLinks = [
    { href: 'https://ifreedmen.com', label: 'Home' },
    { href: 'https://ifreedmen.net', label: 'Network (.NET)' },
    { href: 'https://docs.ifreedmen.com', label: 'Docs/Research' },
    { href: 'https://ifreedmen.shop', label: 'Shop' },
    { href: 'https://ifreedmen.store', label: 'Store' },
    { href: 'https://status.ifreedmen.com', label: 'Status' },
    { href: 'https://api.ifreedmen.com', label: 'API' },
    { href: 'https://id.ifreedmen.com', label: 'Sign In' }
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="https://ifreedmen.com" className={styles.logo}>
          iFreedmen
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles.navItem}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  target={link.href.startsWith('https://ifreedmen.com') ? '_self' : '_blank'}
                  rel={link.href.startsWith('https://ifreedmen.com') ? undefined : 'noopener noreferrer'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}