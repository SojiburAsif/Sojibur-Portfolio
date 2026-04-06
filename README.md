# 🎨 Sojibur Rahman Asif - Professional Portfolio Website

A modern, animated, and responsive portfolio website built with **Next.js 15**, showcasing professional projects, skills, certifications, and achievements of **Sojibur Rahman Asif**, a passionate MERN Stack Developer from Bangladesh.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Project Sections](#project-sections)
- [Featured Projects](#featured-projects)
- [Customization Guide](#customization-guide)
- [Performance Optimizations](#performance-optimizations)
- [Browser Support](#browser-support)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact & Social Links](#contact--social-links)
- [License](#license)

---

## 🎯 Overview

This is a **professional portfolio website** that serves as a digital resume and showcase for a web developer. The website is built with modern web technologies and includes:

- **Hero Section** with animated typewriter effect showing professional title
- **About Section** with educational background, work experience, and personal details
- **Skills Section** displaying technical expertise
- **Projects Gallery** featuring 3 major MERN stack projects with detailed descriptions
- **Certificates Section** showcasing professional certifications and achievements
- **Contact Section** with easy way to reach out
- **Dark/Light Theme Toggle** for user preference
- **Fully Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion
- **SEO Optimized** with proper meta tags and structured data

---

## ✨ Features

### 🎭 Visual Features
- ✅ **Modern Dark Gradient Design** - Professional black-to-gray gradient background
- ✅ **Smooth Animations** - Framer Motion animations on scroll and page load
- ✅ **Typewriter Effect** - Dynamic title animation showing multiple roles
- ✅ **Theme Toggle** - Light/Dark mode switcher (stored in localStorage)
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Interactive Cards** - Hover effects and animated project cards
- ✅ **Intersection Observer** - Elements animate when they come into view

### 📱 Functional Features
- ✅ **Project Showcase** - 3 detailed project cards with technology badges
- ✅ **Downloadable Resume** - Direct PDF download button (CV & Resume)
- ✅ **Social Media Links** - Quick links to GitHub and LinkedIn
- ✅ **Certificate Gallery** - Display of professional certifications
- ✅ **Contact Form** - Get in touch functionality (integrated with SweetAlert2)
- ✅ **Image Optimization** - Next.js Image component for optimized loading
- ✅ **Font Optimization** - Geist font family from Vercel

### 🚀 Performance Features
- ✅ **Server-Side Rendering** - Fast initial page load
- ✅ **Code Splitting** - Automatic chunking for better performance
- ✅ **Image Lazy Loading** - Images load on demand
- ✅ **Optimized Build** - Production build with minification
- ✅ **CSS Optimization** - Tailwind's purge feature removes unused CSS

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.5.3** - React meta-framework for production apps
- **React 19.1.0** - UI library for building components

### Styling & UI
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **DaisyUI 5.3.9** - Tailwind CSS component library
- **PostCSS 4** - CSS transformations

### Animations & Interactions
- **Framer Motion 12.23.18** - React animation library
- **React Simple Typewriter 5.0.1** - Typewriter text effect
- **React Intersection Observer 9.16.0** - Trigger animations on scroll
- **Swiper 12.0.2** - Carousel/slider functionality

### Icons & Notifications
- **React Icons 5.5.0** - Icon library (Font Awesome, Feather, etc.)
- **SweetAlert2 11.26.1** - Beautiful alert/notification library

### Development Tools
- **ESLint 9** - Code quality and style
- **Tailwind CSS 4.1.16** - PostCSS-based CSS framework
- **Next.js Config** - Configuration for Next.js

---

## 📁 Project Structure

```
my-app/
├── public/
<<<<<<< HEAD
│   ├── Certificate/                 # Certificate images/PDFs
│   ├── CV & Resume/                 # Resume file
│   ├── Logo/                        # Logos and branding
│   ├── My img/                      # Profile images
│   ├── Project-1/                   # Workfleed project images
│   │   └── img1.png
│   ├── Project-2/                   # Service Sharing project images
│   │   └── img11.png
│   └── project-3/                   # Micro Freelance project images
│       └── img1.png
│
├── src/
│   └── app/
│       ├── layout.js                # Root layout wrapper
│       ├── page.js                  # Home page (main portfolio)
│       ├── loading.jsx              # Loading state component
│       ├── globals.css              # Global styles
│       │
│       ├── lib/
│       │   └── theme.js             # Theme configuration
│       │
│       ├── Components/
│       │   ├── Hero.jsx             # Hero banner section
│       │   ├── About.jsx            # About section
│       │   ├── Skils.jsx            # Skills section
│       │   ├── Projects.jsx         # Projects grid section
│       │   ├── Certificate.jsx      # Certificates section
│       │   ├── Contact.jsx          # Contact form section
│       │   ├── ThemeProvider.jsx    # Theme context provider
│       │   ├── ThemeToggle.jsx      # Theme toggle button
│       │   └── StarsBG.js           # Animated stars background
│       │
│       ├── Header/
│       │   └── Header.jsx           # Navigation header
│       │
│       ├── Fooder/
│       │   └── Footer.jsx           # Footer component
│       │
│       └── Projects/
│           ├── Project1.jsx         # Workfleed detailed view
│           ├── Project2.jsx         # Service Sharing detailed view
│           └── project3.jsx         # Micro Freelance detailed view
│
├── eslint.config.mjs                # ESLint configuration
├── next.config.mjs                  # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.mjs               # PostCSS configuration
├── jsconfig.json                    # JavaScript path aliases
├── next-env.d.ts                    # TypeScript definitions for Next.js
├── package.json                     # Project dependencies
└── README.md                        # This file
=======
│   ├── Certificate/                 # Certificate images/PDFs
│   ├── CV & Resume/                 # Resume file
│   ├── Logo/                        # Logos and branding
│   ├── My img/                      # Profile images
│   ├── Project-1/                   # Workfleed project images
│   │   └── img1.png
│   ├── Project-2/                   # Service Sharing project images
│   │   └── img11.png
│   └── project-3/                   # Micro Freelance project images
│       └── img1.png
│
├── src/
│   └── app/
│       ├── layout.js                # Root layout wrapper
│       ├── page.js                  # Home page (main portfolio)
│       ├── loading.jsx              # Loading state component
│       ├── globals.css              # Global styles
│       │
│       ├── lib/
│       │   └── theme.js             # Theme configuration
│       │
│       ├── Components/
│       │   ├── Hero.jsx             # Hero banner section
│       │   ├── About.jsx            # About section
│       │   ├── Skils.jsx            # Skills section
│       │   ├── Projects.jsx         # Projects grid section
│       │   ├── Certificate.jsx      # Certificates section
│       │   ├── Contact.jsx          # Contact form section
│       │   ├── ThemeProvider.jsx    # Theme context provider
│       │   ├── ThemeToggle.jsx      # Theme toggle button
│       │   └── StarsBG.js           # Animated stars background
│       │
│       ├── Header/
│       │   └── Header.jsx           # Navigation header
│       │
│       ├── Fooder/
│       │   └── Footer.jsx           # Footer component
│       │
│       └── Projects/
│           ├── Project1.jsx         # Workfleed detailed view
│           ├── Project2.jsx         # Service Sharing detailed view
│           └── project3.jsx         # Micro Freelance detailed view
│
├── eslint.config.mjs                # ESLint configuration
├── next.config.mjs                  # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.mjs               # PostCSS configuration
├── jsconfig.json                    # JavaScript path aliases
├── next-env.d.ts                    # TypeScript definitions for Next.js
├── package.json                     # Project dependencies
└── README.md                        # This file
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **Git** - For version control

You can verify your installation:
```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/SojiburAsif/portfolio-website.git
cd my-app
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all packages listed in `package.json`:
- React and React DOM
- Next.js framework
- Tailwind CSS and styling
- Animation libraries (Framer Motion)
- Icon libraries (React Icons)
- UI components (DaisyUI)

### Step 3: Verify Installation
```bash
npm list
```

---

## ▶️ Running the Project

### Development Mode
Run the development server with hot reload:
```bash
npm run dev
```

Then open your browser and navigate to:
```
http://localhost:3000
```

The page will automatically refresh when you make changes to the code.

### Production Build
Create an optimized production build:
```bash
npm run build
```

This process:
1. Compiles all React components
2. Optimizes images
3. Generates static pages
4. Bundles JavaScript and CSS
5. Minifies code for faster loading

### Start Production Server
```bash
npm start
```

This runs the optimized production build on:
```
http://localhost:3000
```

---

## 🏗️ Building for Production

### Build Steps
```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Build the application
npm run build

# Start the production server
npm start
```

### Build Output
The build process creates:
- `.next/` folder with optimized builds
- Static assets in `public/` folder
- JavaScript bundles for faster loading
- Optimized images

---

## 📑 Project Sections

### 🎯 Hero Section (`Hero.jsx`)
**Purpose:** First impression and introduction
- **Features:**
<<<<<<< HEAD
  - Animated gradient background
  - Typewriter effect showing job titles
  - Professional introduction text
  - Social media links (GitHub, LinkedIn)
  - Download Resume button
  - Call-to-action buttons

- **Key Elements:**
  - Name: "Sojibur Rahman Asif"
  - Title: "MERN Stack Developer | Web Application Developer"
  - Location: Bangladesh
  - Social Links: GitHub, LinkedIn
  - Resume Download: Available in PDF format
=======
  - Animated gradient background
  - Typewriter effect showing job titles
  - Professional introduction text
  - Social media links (GitHub, LinkedIn)
  - Download Resume button
  - Call-to-action buttons

- **Key Elements:**
  - Name: "Sojibur Rahman Asif"
  - Title: "MERN Stack Developer | Web Application Developer"
  - Location: Bangladesh
  - Social Links: GitHub, LinkedIn
  - Resume Download: Available in PDF format
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2

### 👤 About Section (`About.jsx`)
**Purpose:** Personal and professional background
- **Features:**
<<<<<<< HEAD
  - Tab-based content (Achievements, Education, Work)
  - Animated content transitions
  - Personal information display
  - Educational background
  - Work experience
  - Personal interests and hobbies

- **Content Areas:**
  - Personal overview
  - Educational qualifications
  - Professional experience
  - Interests and passions
=======
  - Tab-based content (Achievements, Education, Work)
  - Animated content transitions
  - Personal information display
  - Educational background
  - Work experience
  - Personal interests and hobbies

- **Content Areas:**
  - Personal overview
  - Educational qualifications
  - Professional experience
  - Interests and passions
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2

### 💻 Skills Section (`Skils.jsx`)
**Purpose:** Technical expertise showcase
- **Displays:**
<<<<<<< HEAD
  - Frontend technologies (React, Tailwind CSS, etc.)
  - Backend technologies (Node.js, MongoDB, etc.)
  - Tools and databases
  - Proficiency levels
=======
  - Frontend technologies (React, Tailwind CSS, etc.)
  - Backend technologies (Node.js, MongoDB, etc.)
  - Tools and databases
  - Proficiency levels
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2

### 🎨 Projects Section (`Projects.jsx`)
**Purpose:** Showcase major work and achievements
- **Features:**
<<<<<<< HEAD
  - Grid layout of project cards
  - Project images with hover effects
  - Technology badges
  - Detailed project modals
  - View project details button
  - Live demo and GitHub links
=======
  - Grid layout of project cards
  - Project images with hover effects
  - Technology badges
  - Detailed project modals
  - View project details button
  - Live demo and GitHub links
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2

### 🏆 Certificate Section (`Certificate.jsx`)
**Purpose:** Display professional certifications
- **Features:**
<<<<<<< HEAD
  - Certificate image gallery
  - Certificate descriptions
  - Achievement dates
  - Interactive gallery view
=======
  - Certificate image gallery
  - Certificate descriptions
  - Achievement dates
  - Interactive gallery view
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2

### 📧 Contact Section (`Contact.jsx`)
**Purpose:** Enable user communication
- **Features:**
<<<<<<< HEAD
  - Contact form with validation
  - Email sending capability
  - Success/error notifications (SweetAlert2)
  - Form reset after submission
=======
  - Contact form with validation
  - Email sending capability
  - Success/error notifications (SweetAlert2)
  - Form reset after submission
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2

---

## 🎯 Featured Projects

### Project 1: Workfleed - Employee Management System
**Type:** Role-based Enterprise Application
**URL:** [View Project Details](public/Project-1/)

- **Description:** Comprehensive employee management system with role-based dashboards
- **Features:**
<<<<<<< HEAD
  - Employee Dashboard (task tracking, profile management)
  - HR Dashboard (payroll, team management, leave approve)
  - Admin Dashboard (full system control, analytics)
  - Real-time updates using Firebase
  - Stripe payment integration for payroll
  - JWT authentication
=======
  - Employee Dashboard (task tracking, profile management)
  - HR Dashboard (payroll, team management, leave approve)
  - Admin Dashboard (full system control, analytics)
  - Real-time updates using Firebase
  - Stripe payment integration for payroll
  - JWT authentication
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2
- **Technologies:** React, Node.js, MongoDB, Firebase, JWT, Stripe, Tailwind CSS
- **Users:** Employees, HR, Admin roles
- **Key Functionality:** Payroll handling, task tracking, leave management, real-time notifications

### Project 2: Service Sharing Web Application
**Type:** Service Management Platform
**URL:** [View Project Details](public/Project-2/)

- **Description:** Platform for users to add, manage, and book services
- **Features:**
<<<<<<< HEAD
  - Service listing and management
  - Booking system with status tracking
  - User dashboards
  - Real-time notifications
  - Service provider profiles
  - Rating and review system
=======
  - Service listing and management
  - Booking system with status tracking
  - User dashboards
  - Real-time notifications
  - Service provider profiles
  - Rating and review system
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2
- **Technologies:** React, Node.js, MongoDB, Firebase, JWT, Tailwind CSS
- **Users:** Service providers, customers
- **Key Functionality:** Service CRUD, booking management, provider profiles, reviews

### Project 3: Micro Freelance Platform
**Type:** Freelance Marketplace
**URL:** [View Project Details](public/project-3/)

- **Description:** Connect individuals with freelancers for small tasks
- **Features:**
<<<<<<< HEAD
  - Task posting by clients
  - Freelancer bidding system
  - Skill-based matching
  - Budget and deadline filtering
  - Direct messaging
  - Dispute resolution
=======
  - Task posting by clients
  - Freelancer bidding system
  - Skill-based matching
  - Budget and deadline filtering
  - Direct messaging
  - Dispute resolution
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2
- **Technologies:** React, Node.js, MongoDB, Firebase, JWT, Tailwind CSS
- **Users:** Clients, Freelancers
- **Key Functionality:** Task posting, bidding, messaging, ratings, payments

---

## 🎨 Customization Guide

### Changing Personal Information

**1. Update Hero Section** (`src/app/Components/Hero.jsx`)
```javascript
// Change name
<span className="text-purple-500">Your Name Here</span>

// Change title words
words={["Your Title 1", "Your Title 2"]}

// Change bio
I am from [Your Country], passionate about...
```

**2. Update Social Links** (`src/app/Components/Hero.jsx`)
```javascript
const socialLinks = [
<<<<<<< HEAD
  { icon: <FaGithub />, href: "https://github.com/YourUsername" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/YourProfile" },
=======
  { icon: <FaGithub />, href: "https://github.com/YourUsername" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/YourProfile" },
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2
];
```

**3. Update Resume Path** (`src/app/Components/Hero.jsx`)
```javascript
<a href="/YourResume.pdf" download>Download Resume</a>
```

### Customizing Projects

**Edit Projects** (`src/app/Components/Projects.jsx`)
```javascript
const projects = [
<<<<<<< HEAD
  {
    title: 'Your Project Title',
    subtitle: 'Project Subtitle',
    banner: project1Img,
    component: Project1,
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
  },
=======
  {
    title: 'Your Project Title',
    subtitle: 'Project Subtitle',
    banner: project1Img,
    component: Project1,
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
  },
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2
];
```

### Changing Colors & Theme

**Update Tailwind Config** (`tailwind.config.js`)
```javascript
// Change primary color from purple to your preference
className="bg-purple-600" → className="bg-blue-600"
```

**Update Global Styles** (`src/app/globals.css`)
```css
/* Customize color variables */
:root {
<<<<<<< HEAD
  --primary: #a855f7; /* Purple */
  --secondary: #050f1a; /* Dark blue-black */
=======
  --primary: #a855f7; /* Purple */
  --secondary: #050f1a; /* Dark blue-black */
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2
}
```

### Adding New Sections

1. Create new component in `src/app/Components/YourSection.jsx`
2. Import in `src/app/page.js`
3. Add to main render:
```javascript
<YourSection></YourSection>
```

---

## ⚡ Performance Optimizations

### Implemented Optimizations

1. **Image Optimization**
<<<<<<< HEAD
   - Using Next.js Image component for lazy loading
   - Automatic format conversion (WebP)
   - Responsive sizing

2. **Code Splitting**
   - Automatic chunk splitting by Next.js
   - Dynamic imports for heavy components
   - Route-based code splitting

3. **CSS Optimization**
   - Tailwind CSS purges unused styles
   - DaisyUI provides optimized components
   - PostCSS compilation

4. **Font Optimization**
   - Using Geist font family (optimized)
   - Minimal font files

5. **Animation Performance**
   - Framer Motion GPU-accelerated
   - transform and opacity for animations
   - Will-change CSS properties
=======
   - Using Next.js Image component for lazy loading
   - Automatic format conversion (WebP)
   - Responsive sizing

2. **Code Splitting**
   - Automatic chunk splitting by Next.js
   - Dynamic imports for heavy components
   - Route-based code splitting

3. **CSS Optimization**
   - Tailwind CSS purges unused styles
   - DaisyUI provides optimized components
   - PostCSS compilation

4. **Font Optimization**
   - Using Geist font family (optimized)
   - Minimal font files

5. **Animation Performance**
   - Framer Motion GPU-accelerated
   - transform and opacity for animations
   - Will-change CSS properties
>>>>>>> 8e83850b3164ae19b17af97b1c967f73d5f1f9d2

### Performance Tips

```bash
# Analyze bundle size
npm run build

# Check with Lighthouse
# 1. Run: npm run build && npm start
# 2. Open DevTools → Lighthouse tab
```

---

## 🌐 Browser Support

The website is tested and works on:

- ✅ **Chrome** (latest versions)
- ✅ **Firefox** (latest versions)
- ✅ **Safari** (latest versions)
- ✅ **Edge** (latest versions)
- ✅ **Mobile Browsers** (iOS Safari, Chrome Mobile)

### Responsive Breakpoints

- **Mobile:** 320px - 640px (sm)
- **Tablet:** 640px - 1024px (md, lg)
- **Desktop:** 1024px+ (xl, 2xl)

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

**Vercel** is the official hosting platform for Next.js.

**Steps:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! Your site is live

**Environment Variables:** (if needed)
- Create `.env.local` in root
- Add variables: `NEXT_PUBLIC_VAR_NAME=value`
- Vercel automatically deploys on push to main

### Deploy on Netlify

1. Build locally: `npm run build`
2. Push to GitHub
3. Go to [netlify.com](https://netlify.com)
4. Click "New site from Git"
5. Select repository
6. Build command: `npm run build`
7. Publish directory: `.next`
8. Deploy

### Deploy on Custom Server

**Step 1:** Build the app
```bash
npm run build
```

**Step 2:** Upload to server
```bash
# Using SSH
scp -r .next user@server:/path/to/app/
scp -r public user@server:/path/to/app/
scp package.json user@server:/path/to/app/
```

**Step 3:** SSH into server and run
```bash
npm install --production
npm start
```

### Using Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Deploy:
```bash
docker build -t portfolio-app .
docker run -p 3000:3000 portfolio-app
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style
- Use consistent naming conventions
- Follow ESLint rules
- Keep components modular
- Comment complex logic

---

## 📞 Contact & Social Links

### Direct Contact
- **Email:** [Contact form on website]
- **Website:** [Your deployed URL]

### Social Media
- **GitHub:** [https://github.com/SojiburAsif](https://github.com/SojiburAsif)
- **LinkedIn:** [https://www.linkedin.com/in/sojibur-asif/](https://www.linkedin.com/in/sojibur-asif/)

### Get in Touch
- Use the contact form on the website
- DM on LinkedIn
- Email through contact form
- Fork and contribute on GitHub

---

## 📄 License

This project is open source and available under the MIT License.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📚 Additional Resources

### Documentation Links
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [DaisyUI Components](https://daisyui.com/)

### Useful Tools
- [Color Palette Generator](https://coolors.co)
- [Favicon Generator](https://favicon.io)
- [Font Pairing](https://www.fontpair.co)
- [Image Compression](https://tinypng.com)
- [Code Formatter](https://prettier.io)

---

## 🎯 Future Enhancements

Potential improvements for future versions:

- [ ] Add blog section with MDX
- [ ] Implement dark mode toggle persistence
- [ ] Add testimonials section
- [ ] Create projects API backend
- [ ] Add newsletter subscription
- [ ] Implement search functionality
- [ ] Add multi-language support
- [ ] Create admin panel for content management
- [ ] Add PWA (Progressive Web App) capability
- [ ] Implement analytics tracking

---

## ⚠️ Troubleshooting

### Issue: Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: Dependencies not installing
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

### Issue: Build fails
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Issue: Styles not applying
```bash
# Rebuild Tailwind CSS
npm run build
# Check tailwind.config.js path patterns
```

---

## 📊 Project Statistics

- **Lines of Code:** ~2000+ LOC
- **Components:** 10+ React components
- **Projects Showcased:** 3 major projects
- **Technologies Used:** 15+ libraries
- **Performance Score:** 95+/100 (Lighthouse)
- **Mobile Responsive:** 100% optimized

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React meta-framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [DaisyUI](https://daisyui.com/) - Tailwind components

---

**Last Updated:** April 6, 2026
**Version:** 1.0.0
**Maintainer:** Sojibur Rahman Asif
<<<<<<< HEAD
