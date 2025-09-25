const fs = require('fs');
const path = require('path');

const BRAND_CONFIG_PATH = './config/brand.json';
// Load brand configuration
let brandConfig = null;
try {
    brandConfig = JSON.parse(fs.readFileSync(BRAND_CONFIG_PATH, 'utf8'));
} catch (err) {
    console.error(`❌ Failed to load brand configuration from ${BRAND_CONFIG_PATH}.`);
    console.error('Reason:', err.message);
    process.exit(1);
}

// Create public directory if it doesn't exist
if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public', { recursive: true });
}

// Build the main HTML file
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${brandConfig.name}</title>
    <meta name="description" content="${brandConfig.description}">
    <style>
        :root {
            --primary: ${brandConfig.colors.primary};
            --secondary: ${brandConfig.colors.secondary};
            --accent: ${brandConfig.colors.accent};
            --background: ${brandConfig.colors.background};
            --text: ${brandConfig.colors.text};
            --muted: ${brandConfig.colors.muted};
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: ${brandConfig.typography.fontFamily.body};
            background-color: var(--background);
            color: var(--text);
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        h1 {
            font-family: ${brandConfig.typography.fontFamily.heading};
            font-size: ${brandConfig.typography.fontSizes['4xl']};
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .subtitle {
            font-size: ${brandConfig.typography.fontSizes.lg};
            color: var(--muted);
            margin-bottom: 2rem;
        }
        
        .navigation {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .nav-card {
            background: white;
            border: 2px solid var(--primary);
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
            color: var(--text);
        }
        
        .nav-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(44, 85, 48, 0.2);
        }
        
        .nav-card h2 {
            font-family: ${brandConfig.typography.fontFamily.heading};
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: ${brandConfig.typography.fontSizes['2xl']};
        }
        
        .nav-card p {
            color: var(--muted);
            font-size: ${brandConfig.typography.fontSizes.base};
        }
        
        .footer {
            text-align: center;
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid var(--muted);
            color: var(--muted);
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            h1 {
                font-size: ${brandConfig.typography.fontSizes['3xl']};
            }
            
            .navigation {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${brandConfig.name}</h1>
            <p class="subtitle">${brandConfig.description}</p>
        </header>
        
        <main>
            <div class="navigation">
                ${brandConfig.navigation.map(item => `
                <a href="${item.url}" class="nav-card" target="_blank" rel="noopener noreferrer">
                    <h2>${item.label}</h2>
                    <p>${item.description}</p>
                </a>
                `).join('')}
            </div>
        </main>
        
        <footer class="footer">
            <p>&copy; 2024 iFreedmen Creative Suite. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync('./public/index.html', html);

console.log('✅ Site built successfully!');
console.log('📁 Output: ./public/index.html');
console.log('🌐 Navigation links configured for:', brandConfig.navigation.map(n => n.url).join(', '));