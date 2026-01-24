# Professional Portfolio Website

A clean, responsive portfolio website built with React, Vite, and Tailwind CSS to showcase professional projects and experience.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections**: Hero, About, Projects, Skills, Experience, and Contact
- **Smooth Scrolling**: Navigation with smooth scroll between sections
- **Contact Form**: Functional contact form (placeholder implementation)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
personal_website/
├── src/
│   ├── components/     # React components
│   ├── data/          # Data files (projects, etc.)
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html
└── package.json
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx` to update your name and tagline
2. **About Section**: Edit `src/components/About.jsx` with your personal information
3. **Projects**: Update `src/data/projects.js` with your actual projects
4. **Skills**: Modify `src/components/Skills.jsx` to reflect your skills
5. **Experience**: Update `src/components/Experience.jsx` with your work history
6. **Contact**: Edit `src/components/Contact.jsx` with your contact information and social links

### Styling

The project uses Tailwind CSS. You can customize colors, fonts, and other design elements in `tailwind.config.js` or by modifying the Tailwind classes in components.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## License

This project is open source and available for personal use.
