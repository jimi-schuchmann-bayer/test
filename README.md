# React + Vite + TypeScript Template

A modern React template with Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡️ Vite for fast development and builds
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 📦 ESLint for code quality
- 🔍 Lucide React for icons

## �️ Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📦 Deployment

Dockerfile included for containerized deployment.

## 🎨 Styling

This template uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

```tsx
// Example usage
function MyComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  )
}
```

## 📝 Project Structure

```
src/
  ├── App.tsx          # Main app component
  ├── main.tsx         # App entry point
  ├── index.css        # Global styles with Tailwind
  └── vite-env.d.ts    # Vite type definitions
```
