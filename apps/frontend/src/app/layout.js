import './globals.css'

export const metadata = {
  title: 'iFreedmen - Creative Suite Hub',
  description: 'Flagship hub for the iFreedmen Creative Suite: sovereignty, culture, commerce, and communications',
  keywords: ['ifreedmen', 'freedmen', 'creative suite', 'sovereignty', 'culture', 'commerce'],
  author: 'iFreedmen',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}