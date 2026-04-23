# Esther Maina - Geospatial Expert Portfolio

A modern, fully-featured portfolio website for Esther Wanjiku Maina, Senior Cartographer and Geospatial Analyst. This single-page application showcases professional experience, educational background, completed projects, and contact information with a beautiful, responsive design and dark mode support.

## Features

- **Single-Page Navigation**: Smooth scrolling between Home, Education, Experience, Projects, and Contact sections
- **Dark Mode Support**: Automatic system preference detection with manual toggle option
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Professional Layout**: Clean, modern aesthetic suitable for technical professionals
- **Project Showcase**: Featured projects with descriptions, technology stacks, and links to live visualizations
- **Rich Content**: Comprehensive sections covering education, certifications, work experience, and achievements
- **Accessibility**: Semantic HTML, ARIA labels, and screen reader support

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Image Optimization**: Next.js Image component
- **Type Safety**: TypeScript
- **Package Manager**: pnpm

## Project Structure

```
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout with fonts
│   └── globals.css           # Global styles and design tokens
├── components/
│   ├── navigation.tsx        # Top navigation bar with dark mode toggle
│   ├── theme-provider.tsx    # Dark mode theme provider
│   └── sections/
│       ├── hero-section.tsx        # Home section with profile
│       ├── education-section.tsx   # Education & certifications
│       ├── experience-section.tsx  # Work experience timeline
│       ├── projects-section.tsx    # Project showcase
│       └── footer-section.tsx      # Contact information footer
├── public/
│   └── images/
│       ├── profile.jpg            # Profile photo
│       ├── project-landcover.jpg  # Project visualizations
│       ├── project-flood.jpg
│       └── project-ndvi.jpg
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository or download the project files

```bash
cd portfolio
```

2. Install dependencies

```bash
pnpm install
# or
npm install
```

3. Run the development server

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio

## Customization

### Update Personal Information

Edit the content in each section component:

- **Hero Section** (`components/sections/hero-section.tsx`): Update name, summary, and skills
- **Education** (`components/sections/education-section.tsx`): Modify degrees, institutions, and certifications
- **Experience** (`components/sections/experience-section.tsx`): Update job history with company details and achievements
- **Projects** (`components/sections/projects-section.tsx`): Add or edit project descriptions, images, and links
- **Contact** (`components/sections/footer-section.tsx`): Update email, phone, and social media links

### Update Profile Photo

Replace `/public/images/profile.jpg` with your own headshot (recommended size: 400x500px or similar aspect ratio)

### Modify Design Colors

Edit the CSS variables in `app/globals.css` to change the color scheme:

```css
@theme inline {
  --color-primary: #0891b2;        /* Primary brand color */
  --color-secondary: #e0f2fe;      /* Secondary accent */
  --color-background: #ffffff;     /* Light mode background */
  --color-foreground: #0f172a;     /* Light mode text */
  --color-muted: #64748b;          /* Muted text color */
}
```

For dark mode colors, update the `@media (prefers-color-scheme: dark)` section in the same file.

### Change Navigation Sections

Edit the `navigation.tsx` component to add, remove, or rename sections. Update the corresponding section components as needed.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your project
4. Vercel will auto-detect Next.js and configure settings
5. Click "Deploy"

Your portfolio will be live at a Vercel URL. You can add a custom domain in project settings.

### Deploy Elsewhere

Since this is a Next.js 16 project, it can be deployed to any Node.js hosting platform:

- **Netlify**: Install `@netlify/plugin-nextjs` and deploy
- **AWS**: Use AWS Amplify for easy Next.js deployment
- **DigitalOcean**, **Railway**, **Render**: All support Next.js out of the box

For self-hosted servers:

```bash
pnpm run build
pnpm start
```

## Performance Optimization

- Images are automatically optimized with Next.js Image component
- CSS is minimized and tree-shaken with Tailwind v4
- Dark mode colors are precomputed to avoid flash of unstyled content
- Smooth scroll behavior for better UX

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## License

This portfolio is personal and proprietary. Customization and deployment for personal use is encouraged. Attribution to original design would be appreciated.

## Support & Questions

For questions about customizing this portfolio or need technical help, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

---

**Portfolio Website for**: Esther Wanjiku Maina | Senior Cartographer & Geospatial Analyst

**Contact**: esmainaa8@gmail.com | +254 718 624 359 | Nairobi, Kenya
