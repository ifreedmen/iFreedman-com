import Navigation from './Navigation'
import Head from 'next/head'

const Layout = ({ children, title = 'iFreedmen Creative Suite' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Flagship hub for the iFreedmen Creative Suite: sovereignty, culture, commerce, and communications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <main>
        {children}
      </main>
      
      <footer style={{ 
        backgroundColor: '#1a1a1a', 
        color: '#e0e0e0', 
        textAlign: 'center', 
        padding: '2rem 1rem',
        marginTop: '4rem'
      }}>
        <p>&copy; 2024 iFreedmen Creative Suite. Sovereignty-first. No resale of third-party data.</p>
      </footer>
    </>
  )
}

export default Layout