# BoilerplateHub 🚀

> A collection of reusable development boilerplates for developers

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](https://opensource.org/licenses/MIT)

## 📖 About

BoilerplateHub is a modern web application built with Next.js that serves as a comprehensive collection of high-quality, reusable boilerplates for developers. Whether you're starting a new React project, building a SaaS application, or creating a mobile app, BoilerplateHub provides you with production-ready templates to jumpstart your development process.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and intuitive interface built with Tailwind CSS
- 🔍 **Smart Search & Filtering** - Find boilerplates by category, tags, and keywords
- 📱 **Responsive Design** - Perfect experience across all devices
- ⚡ **Fast Performance** - Optimized with Next.js and TypeScript
- 📊 **Categories & Collections** - Organized boilerplates for easy discovery
- ❤️ **Favorites System** - Save and manage your preferred boilerplates
- 📈 **Recent Activity** - Track recently viewed and used templates
- 🎯 **Featured Content** - Highlighted top-quality boilerplates
- 📤 **Community Submissions** - Submit your own boilerplates
- ⚙️ **User Settings** - Customizable preferences and profile management

## 🛠️ Tech Stack

- **Framework:** Next.js 15.4.6 with App Router
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.1.11
- **UI Components:** Custom React components
- **State Management:** React Context API
- **Development:** ESLint, Prettier, Turbopack
- **Package Manager:** npm

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/boilerplatehub.git
   cd boilerplatehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
boilerplatehub/
├── public/                 # Static assets
│   ├── logo.svg           # Application logo
│   └── *.svg              # Various icons
├── src/
│   ├── components/        # React components
│   │   ├── BoilerplateCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   └── Sidebar.tsx
│   ├── context/          # React Context providers
│   │   └── BoilerplateContext.tsx
│   ├── data/             # Static data
│   │   └── boilerplates.json
│   ├── hooks/            # Custom React hooks
│   │   └── useFetchBoilerplates.ts
│   ├── pages/            # Next.js pages
│   │   ├── _app.tsx      # App wrapper
│   │   ├── index.tsx     # Home page
│   │   ├── categories.tsx
│   │   ├── collections.tsx
│   │   ├── favorites.tsx
│   │   ├── recent.tsx
│   │   ├── settings.tsx
│   │   ├── snippets.tsx
│   │   ├── submit.tsx
│   │   └── templates.tsx
│   ├── styles/           # Global styles
│   │   ├── globals.css
│   │   └── typography.ts
│   └── utils/            # Utility functions
│       └── formatDate.ts
├── eslint.config.mjs     # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎯 Available Pages

- **Home** (`/`) - Main landing page with featured boilerplates
- **Categories** (`/categories`) - Browse boilerplates by category
- **Templates** (`/templates`) - All available templates
- **Snippets** (`/snippets`) - Code snippets and utilities
- **Collections** (`/collections`) - Curated collections
- **Favorites** (`/favorites`) - User's favorite boilerplates
- **Recent** (`/recent`) - Recently viewed items
- **Submit** (`/submit`) - Submit new boilerplates
- **Settings** (`/settings`) - User preferences
- **My Assets** (`/my-assets`) - User's submitted content

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Utilities
npm run clean        # Clean build artifacts
npm run analyze      # Analyze bundle size
npm run export       # Export static site
```

## 🎨 Boilerplate Categories

- **Frontend** - React, Vue.js, Angular applications
- **Backend** - Express.js, Django, FastAPI servers
- **Full Stack** - Complete application stacks
- **Mobile** - React Native, Flutter apps
- **Desktop** - Electron, Tauri applications
- **DevOps** - Docker, CI/CD configurations
- **Utilities** - Tools and helper libraries

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting PR

## 🐛 Bug Reports & Feature Requests

If you encounter any bugs or have feature requests, please:

1. Check if the issue already exists in [Issues](https://github.com/yourusername/boilerplatehub/issues)
2. Create a new issue with detailed information
3. Use the appropriate issue template

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment and hosting platform
- All the amazing contributors and boilerplate creators

## 📞 Support

- **Website:** [https://boilerplatehub.dev](https://boilerplatehub.dev)
- **Email:** your.email@example.com
- **GitHub Issues:** [Create an issue](https://github.com/yourusername/boilerplatehub/issues/new)

---

<div align="center">
  <sub>Built with ❤️ by Achraf</sub>
</div>
