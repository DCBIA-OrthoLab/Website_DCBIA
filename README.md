# DCBIA Website - Working Group

A modern and responsive website to present a working group, with scroll snap effects and smooth animations.

## ✨ Features

### 🎯 Modern Design
- **Scroll Snap** : Smooth navigation between sections with automatic snapping
- **Responsive Design** : Optimized for all devices (desktop, tablet, mobile)
- **CSS Animations** : Transition effects and scroll animations
- **Modern Typography** : Inter font for optimal readability

### 🚀 Main Sections
1. **Home (Hero)** - Presentation with visual effects
2. **About** - Mission and working group statistics
3. **Team** - Team member profiles
4. **Projects** - Portfolio of ongoing and completed projects
5. **Contact** - Contact form with validation

### 🛠️ Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Modern styles with CSS variables and grid/flexbox
- **JavaScript ES6+** - Interactivity and animations
- **Scroll Snap API** - Smooth navigation between sections
- **Intersection Observer API** - Scroll animations and active navigation

## 🚀 Getting Started

### Installation
1. Clone or download the project
2. Open `index.html` in a modern web browser

### Local Development
For optimal development, use a local server:

```bash
# With Python 3
python -m http.server 8000

# With Node.js (if you have live-server installed)
npx live-server

# With PHP
php -S localhost:8000
```

## 📁 Project Structure

```
new dcbia website/
├── index.html              # Main page
├── styles/
│   └── main.css            # Main stylesheets
├── scripts/
│   └── main.js             # JavaScript for interactivity
└── README.md               # Documentation
```

## 🎨 Customization

### Colors
Colors are defined with CSS variables in `:root`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #f59e0b;
    --accent-color: #10b981;
    /* ... other variables */
}
```

### Content
- Modify HTML content in `index.html`
- Adjust styles in `styles/main.css`
- Customize animations in `scripts/main.js`

### Images
Replace placeholders with your images:
- Team photos in the team section
- Logo in navigation
- Project images if needed

## 📱 Responsive Design

The site automatically adapts to different screen sizes:

- **Desktop** (>768px): Column layout with full effects
- **Tablet** (768px-480px): Adaptive layout with hamburger menu
- **Mobile** (<480px): Optimized vertical layout

## 🎯 JavaScript Features

### NavigationManager
- Mobile hamburger menu management
- Smooth scroll to sections
- Active navigation updates
- Scroll progress bar

### AnimationManager
- Scroll entry animations
- Animated counters for statistics
- Particle effects in hero
- Typing effect for titles

### ContactForm
- Real-time field validation
- Error and success handling
- Responsive user interface

## 🔧 Advanced Configuration

### Main CSS Variables
```css
/* Colors */
--primary-color: #2563eb;
--text-primary: #0f172a;
--background: #ffffff;

/* Spacing */
--spacing-sm: 1rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;

/* Animations */
--transition-base: 0.3s ease;
```

### Scroll Snap Configuration
```css
.scroll-container {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
}
```

## 🌟 Performance

### Included Optimizations
- **Optimized CSS**: CSS variables for consistency
- **Modular JavaScript**: Code organized in classes
- **Optimized images**: Lightweight placeholders pending your images
- **GPU animations**: Using `transform` and `opacity`
- **Debouncing**: For scroll events

### Recommendations
- Optimize your images (WebP recommended)
- Minify CSS and JavaScript for production
- Use a CDN for Google Fonts

## 🎭 Animations and Effects

### Scroll Snap
Each section takes up 100% of screen height and automatically snaps during scroll.

### Scroll Animations
- **Fade In Up**: Elements appear while moving up
- **Animated counters**: Numbers increment progressively
- **Floating particles**: Visual effects in hero

### Transitions
- **Navigation**: Smooth hover effects
- **Cards**: Elevation on hover
- **Buttons**: Light 3D transformations

## 🌐 Browser Compatibility

### Full Support
- Chrome 88+
- Firefox 84+
- Safari 14+
- Edge 88+

### Graceful Degradation Features
- Scroll snap with fallback to standard scroll
- CSS animations with browser prefixes
- IntersectionObserver with optional polyfill

## 📋 TODO / Future Improvements

- [ ] Add light/dark theme system
- [ ] Integrate headless CMS for content management
- [ ] Add automated testing
- [ ] SEO optimization (meta tags, structured data)
- [ ] Add blog/news section
- [ ] Integrate Google Analytics
- [ ] Add interactive project gallery

## 🤝 Contributing

To contribute to the project:

1. Fork the project
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT license.

## 📞 Support

For any questions or assistance:
- Email: contact@dcbia.org
- GitHub Issues: Open an issue to report a bug

---

**Created with ❤️ for the DCBIA group**

*Modern, performant and accessible website to present your working group professionally.*
