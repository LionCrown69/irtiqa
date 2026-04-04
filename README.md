# Irtiqa AI - React Landing Page

A modern, high-performance React landing page for Irtiqa AI built with TypeScript, Vite, and React 18.

## Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimized builds
- 🎨 **Beautiful Design** - Modern gradient backgrounds, smooth animations, and responsive layout
- 📊 **Interactive Charts** - Canvas-based revenue trajectory visualization
- ✨ **Smooth Animations** - Scroll reveal effects and staggered animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔧 **Component-Based** - Modular React components for easy maintenance
- ⌨️ **TypeScript** - Full type safety throughout the project

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── ServicesSection.tsx
│   ├── ResultsSection.tsx
│   ├── ProcessSection.tsx
│   ├── WhySection.tsx
│   ├── TestimonialsSection.tsx
│   ├── BookSection.tsx
│   ├── Footer.tsx
│   └── ProgressBar.tsx
├── hooks/              # Custom React hooks
│   └── useScrollReveal.ts
├── App.tsx             # Main app component
├── index.css           # Global styles
└── main.tsx            # Entry point
```

## Installation

1. Navigate to the project directory:
```bash
cd irtiqa-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Design System

The design uses CSS custom properties (variables) for consistency:

- **Colors**: Primary blue (#1641F5), grays, and whites
- **Fonts**: Instrument Serif (headings), Outfit (UI)
- **Animations**: Smooth easing with cubic-bezier curves
- **Spacing**: Consistent padding and margins with rem units

## Deployment Notes

- Build output is generated with `npm run build` into `dist/`
- Preview the production bundle locally with `npm run preview`
- The audit form now posts to the serverless endpoint at `api/book-audit.ts`
- Set `LEAD_WEBHOOK_URL` from `.env.example` in your hosting platform so submissions can be forwarded to Make, Zapier, Slack, Airtable, or your own backend
- Replace the default `Calendly` and `hello@irtiqa.ai` values in `src/components/BookSection.tsx` before going live

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

To customize the content:

1. **Colors**: Edit CSS variables in `src/index.css` (`:root`)
2. **Content**: Update component JSX in respective files
3. **Animations**: Modify keyframes and transition values in `src/index.css`

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## License

All rights reserved © 2025 Irtiqa AI
