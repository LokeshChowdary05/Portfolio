# Portfolio Website

A modern, responsive portfolio website inspired by Brittany Chiang's design. Built with vanilla HTML, CSS, and JavaScript, featuring a clean design, smooth animations, and excellent accessibility.

## ✨ Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with dark theme and teal accents
- **Interactive Elements**: Smooth scroll navigation, hover effects, and spotlight cursor effect
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation
- **Performance**: Optimized images, smooth animations, and fast loading times
- **SEO Ready**: Proper meta tags, semantic HTML structure
- **Cross-browser Compatible**: Works on all modern browsers

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. **Download/Clone the project**
   ```bash
   # If you have Git installed
   git clone <repository-url>
   
   # Or download and extract the ZIP file
   ```

2. **Navigate to the project folder**
   ```bash
   cd portfolio
   ```

3. **Option A: Open directly in browser**
   - Double-click on `index.html` to open in your default browser

4. **Option B: Use a local server (Recommended)**
   
   **Using Node.js and live-server:**
   ```bash
   # Install Node.js first (https://nodejs.org/)
   npm install -g live-server
   
   # Navigate to project folder and run
   live-server --port=3000
   ```
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 3000
   
   # Python 2
   python -m SimpleHTTPServer 3000
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:3000
   ```

5. **View your portfolio**
   - Open your browser and go to `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styles and responsive design
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── favicon.svg     # Website icon
│   ├── project1.svg    # Project 1 image
│   ├── project2.svg    # Project 2 image
│   └── project3.svg    # Project 3 image
├── package.json        # Project configuration
└── README.md          # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**Edit `index.html`:**

```html
<!-- Line 34: Change your name -->
<h1>Your Name</h1>

<!-- Line 37: Change your title -->
<h2>Frontend Developer</h2>

<!-- Line 40: Update your description -->
<p>I build accessible, pixel-perfect digital experiences for the web.</p>

<!-- Line 87: Update email -->
<a href="mailto:your.email@example.com">
```

### 2. Social Links

**Update social media links (lines 71-94):**

```html
<!-- GitHub -->
<a href="https://github.com/yourusername">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourusername">

<!-- Email -->
<a href="mailto:your.email@example.com">
```

### 3. About Section

**Edit the about section (lines 106-125):**
- Update the paragraphs to reflect your background
- Modify the technology links to match your skills
- Add or remove paragraphs as needed

### 4. Experience Section

**Update work experience (lines 136-205):**

```html
<!-- Date range -->
<header>2023 — Present</header>

<!-- Company and role -->
<h3>Senior Frontend Developer · Tech Company</h3>

<!-- Description -->
<p>Your job description here...</p>

<!-- Technologies -->
<div>JavaScript</div>
<div>React</div>
<!-- Add more technologies -->
```

### 5. Projects Section

**Update projects (lines 226-324):**

```html
<!-- Project title -->
<h3>Your Project Name</h3>

<!-- Project description -->
<p>Your project description...</p>

<!-- Technologies used -->
<div>React</div>
<div>Node.js</div>

<!-- Project image -->
<img src="./assets/your-project-image.svg" alt="Your Project">
```

### 6. Adding New Images

1. **Add your images to the `assets/` folder**
2. **Update the HTML image sources:**
   ```html
   <img src="./assets/your-image.jpg" alt="Description">
   ```
3. **Update the preload list in `js/main.js` (lines 194-198):**
   ```javascript
   const criticalImages = [
       './assets/your-image1.jpg',
       './assets/your-image2.jpg'
   ];
   ```

### 7. Color Customization

**Main colors are defined in `css/style.css`:**

```css
/* Dark background */
.bg-slate-900 { background-color: #0f172a; }

/* Text color */
.text-slate-400 { color: #94a3b8; }

/* Accent color (teal) */
.text-teal-300 { color: #5eead4; }

/* Highlight backgrounds */
.bg-teal-400/10 { background-color: rgba(45, 212, 191, 0.1); }
```

### 8. Adding New Sections

1. **Add navigation link:**
   ```html
   <li>
       <a href="#your-section">
           <span class="nav-indicator"></span>
           <span class="nav-text">Your Section</span>
       </a>
   </li>
   ```

2. **Add the section content:**
   ```html
   <section id="your-section" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
       <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
           <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Your Section</h2>
       </div>
       <!-- Your content here -->
   </section>
   ```

## 🛠 Advanced Customization

### Changing Fonts

The site uses the Inter font. To change it:

1. **Update the Google Fonts import in `index.html` (line 15):**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```

2. **Update the font-family in `css/style.css` (line 175):**
   ```css
   .font-sans { font-family: 'YourFont', ui-sans-serif, system-ui, sans-serif; }
   ```

### Spotlight Effect

The spotlight effect follows your mouse cursor on desktop. To modify it, edit the `updateSpotlight` function in `js/main.js` (lines 13-20).

### Animation Timing

Adjust animation durations in `css/style.css`:

```css
.transition { transition-duration: 150ms; }
.duration-300 { transition-duration: 300ms; }
```

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Layout changes automatically based on screen size.

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Skip to content link

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and make your own modifications!

## 📞 Support

If you need help customizing your portfolio:

1. Check this README for common customizations
2. Look at the code comments for guidance
3. Refer to the original design inspiration at [brittanychiang.com](https://brittanychiang.com/)

## 🎯 Tips for Success

1. **Keep it updated**: Regularly update your projects and experience
2. **Use real content**: Replace placeholder text with your actual information
3. **Optimize images**: Use appropriate image sizes for faster loading
4. **Test thoroughly**: Check your site on different devices and browsers
5. **Add analytics**: Consider adding Google Analytics to track visitors
6. **Deploy it**: Host your portfolio on GitHub Pages, Netlify, or Vercel

---

**Happy coding! 🚀**
