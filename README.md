# 🚀 BoilerplateHub

A modern, curated collection of reusable development boilerplates to jumpstart your projects. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **🎯 Curated Collection**: High-quality boilerplates across different categories (Frontend, Backend, Full Stack, Mobile)
- **🔍 Smart Search & Filtering**: Find exactly what you need with category filters and search functionality
- **💖 Favorites System**: Save your preferred boilerplates for quick access
- **📱 Responsive Design**: Beautiful UI that works on all devices
- **⚡ Fast Performance**: Built with Next.js for optimal loading speeds
- **🎨 Modern UI**: Styled with Tailwind CSS for a polished look
- **🔧 TypeScript**: Full type safety throughout the application
- **📊 Analytics Ready**: Built-in support for tracking and analytics

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: Custom React components
- **State Management**: React Context + useReducer
- **Development**: ESLint, Prettier

## 📁 Project Structure

```
boilerplateHub/
├── public/                # Static assets
│    └── logo.svg
│
├── src/                   # Source files
│    ├── pages/            # Next.js pages
│    │    ├── _app.tsx     # Custom App component
│    │    ├── index.tsx    # Homepage
│    │    └── [...slug].tsx # Dynamic routes
│    │
│    ├── components/       # Reusable UI components
│    │    ├── BoilerplateCard.tsx
│    │    ├── Header.tsx
│    │    └── Footer.tsx
│    │
│    ├── data/             # Boilerplate metadata
│    │    └── boilerplates.json
│    │
│    ├── hooks/            # Custom React hooks
│    │    └── useFetchBoilerplates.ts
│    │
│    ├── styles/           # Global styles
│    │    └── globals.css
│    │
│    ├── utils/            # Utility functions
│    │    └── formatDate.ts
│    │
│    └── context/          # React context providers
│         └── BoilerplateContext.tsx
│
├── .env.local             # Environment variables
├── next.config.js         # Next.js config
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── tsconfig.json          # TypeScript config
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+ (or yarn/pnpm)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   # .env.local is already configured with default values
   # Edit .env.local with your custom configuration if needed
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean build artifacts

## 🎨 Customization

### Adding New Boilerplates

1. **Update the data file**
   Edit `src/data/boilerplates.json` to add new boilerplate entries:

   ```json
   {
     "id": "your-boilerplate-id",
     "name": "Your Boilerplate Name",
     "description": "Description of your boilerplate",
     "category": "Frontend|Backend|Full Stack|Mobile",
     "tags": ["tag1", "tag2", "tag3"],
     "author": "Author Name",
     "createdAt": "2024-01-01T00:00:00Z",
     "updatedAt": "2024-01-01T00:00:00Z",
     "downloadUrl": "/downloads/your-boilerplate.zip",
     "demoUrl": "https://your-demo-url.com",
     "githubUrl": "https://github.com/user/repo",
     "featured": false
   }
   ```

2. **Add boilerplate files**
   Place your boilerplate zip files in the `public/downloads/` directory.

### Styling

- **Global Styles**: Edit `src/styles/globals.css`
- **Component Styles**: Use Tailwind classes in component files
- **Theme Configuration**: Modify `tailwind.config.js`

### Adding New Components

Create new components in `src/components/` and export them for use throughout the app.

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set environment variables** in Vercel dashboard

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

- **Netlify**: Connect your Git repository
- **Railway**: Use the Railway CLI or web interface
- **DigitalOcean App Platform**: Connect via GitHub/GitLab

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- All the amazing developers who create boilerplates

---

<p align="center">
  Made with ❤️ by the BoilerplateHub Team
</p>
