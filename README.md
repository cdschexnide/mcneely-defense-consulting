# McNeely Defense Consulting Website

A production-grade, professional website for McNeely Defense Consulting LLC, a defense technology consulting firm specializing in UAV integration, GNSS protection systems, and field operations support.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: User-controlled theme toggle
- **Smooth Animations**: Framer Motion for professional transitions
- **Fast Performance**: Code splitting, lazy loading, and optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG 2.1 AA compliant

## 📋 Pages

1. **Home** - Hero section, core competencies, differentiators, and CTA
2. **Services** - All 6 services with detailed descriptions and pricing
3. **About** - Company information and leadership bio
4. **Contact** - Professional contact form with validation
5. **Resources** - Downloadable PDFs (rate chart, capability statement)
6. **Privacy** - Privacy policy placeholder
7. **Terms** - Terms of service placeholder
8. **404** - Custom not found page

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Language**: TypeScript 5.3.3
- **Build Tool**: Vite 5.1.0
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router v6.22.0
- **Animations**: Framer Motion 11.0.5
- **Icons**: Lucide React 0.344.0

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup

1. Clone the repository:
```bash
cd McNeelyDefenseConsulting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── common/         # Common UI components (Button, Card, etc.)
│   ├── layout/         # Layout components (Header, Footer, PageLayout)
│   ├── home/           # Home page specific components
│   ├── services/       # Services page components
│   ├── contact/        # Contact form component
│   ├── about/          # About page components
│   └── resources/      # Resources page components
├── pages/              # Page components
├── data/               # Data and content files
├── types/              # TypeScript type definitions
├── styles/             # Global styles and Tailwind CSS
├── contexts/           # React contexts (Theme)
├── assets/             # Images and static assets
├── docs/               # PDF documents
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## 🎨 Design System

### Colors

- **Tactical**: Dark grays and blacks for backgrounds
- **Military**: Greens for accents and badges
- **Accent Blue**: `#0ea5e9` for primary CTAs
- **Accent Amber**: `#f59e0b` for secondary CTAs

### Typography

- **Font**: Inter (sans-serif)
- **Monospace**: Roboto Mono

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Namecheap (or any static hosting)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist/` directory to your hosting provider

3. Ensure your server is configured to redirect all routes to `index.html` for client-side routing

### Example `.htaccess` for Apache:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📧 Contact Form Integration

The contact form is currently frontend-only. To enable email functionality:

1. Choose an email service (e.g., FormSpree, Web3Forms, EmailJS)
2. Update the `handleSubmit` function in `src/components/contact/ContactForm.tsx`
3. Add your API key/endpoint to the form submission logic

Example with FormSpree:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 🔧 Customization

### Update Company Information

Edit `src/data/company.ts` to update:
- Contact information
- Company details
- Team member bios
- Resources/downloads

### Update Services

Edit `src/data/services.ts` to modify:
- Service descriptions
- Pricing
- Features

### Update Colors

Edit `tailwind.config.js` to customize the color palette

### Add New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/data/company.ts`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues

Make sure Tailwind is properly configured and the CSS file is imported in `main.tsx`

## 📄 License

© 2025 McNeely Defense Consulting LLC. All rights reserved.

## 🤝 Support

For questions or support:
- Email: dakota@mcneelydefense.com
- Phone: (832) 338-4625
- Website: mcneelydefense.com
