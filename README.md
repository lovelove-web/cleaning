# AKIsiivous palvelu - Cleaning Company Website

A modern, responsive website for AKIsiivous palvelu, a professional cleaning service company based in Turku, Finland.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Mobile-friendly navigation menu
  - Smooth scrolling navigation
  - Contact form with validation
  - Hover effects and animations
  - Back-to-top button
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized images and efficient code
- **Accessibility**: Keyboard navigation and screen reader friendly

## 📁 File Structure

```
akisiivous-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Download the files** to your local machine
2. **Open `index.html`** in your web browser
   - For the best experience, use a local web server
   - You can use tools like Live Server (VS Code extension) or Python's built-in server

### Using a Local Web Server

#### Option 1: Python (if installed)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

#### Option 2: Node.js (if installed)
```bash
# Install a simple HTTP server
npm install -g http-server

# Run the server
http-server
```

#### Option 3: VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎨 Customization

### Colors
The website uses a blue color scheme. To change colors, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    --accent-color: #10b981;
    --text-color: #1f2937;
    --light-bg: #f8fafc;
}
```

### Content
- **Company Information**: Update the company details in `index.html`
- **Services**: Modify the services section to match your offerings
- **Contact Information**: Update phone, email, and address details
- **Images**: Replace the placeholder images with your own

### Images
The website currently uses placeholder images from Unsplash. Replace them with your own:
- Hero section: Professional cleaning service image
- About section: Team or cleaning equipment image

## 📱 Responsive Design

The website is fully responsive and includes:
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted grid layouts and spacing
- **Mobile**: Single-column layout with hamburger menu

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Optimized images
- Efficient CSS animations
- Lazy loading for better performance
- Minimal JavaScript footprint

## 📞 Contact Form

The contact form includes:
- **Form Validation**: Client-side validation for all fields
- **Success/Error Messages**: User feedback for form submission
- **Phone Number Formatting**: Automatic formatting for Finnish phone numbers
- **Service Selection**: Dropdown for different cleaning services

### Form Fields
- Name (required)
- Email (required, validated)
- Phone (optional, formatted)
- Service Type (required)
- Message (required, minimum 10 characters)

## 🚀 Deployment

### Option 1: Static Hosting
Upload all files to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Option 2: Traditional Web Hosting
Upload files to your web hosting provider's public_html directory.

### Option 3: Content Management System
Convert the design to work with WordPress, Drupal, or other CMS platforms.

## 🔒 Security Considerations

For production use, consider:
- **HTTPS**: Always use HTTPS for security
- **Form Security**: Implement server-side validation and CSRF protection
- **Content Security Policy**: Add CSP headers
- **Input Sanitization**: Sanitize all user inputs

## 📈 SEO Optimization

The website includes:
- **Meta Tags**: Title, description, and viewport
- **Semantic HTML**: Proper heading structure and landmarks
- **Alt Text**: Descriptive alt attributes for images
- **Structured Data**: Ready for schema markup implementation

## 🎯 Future Enhancements

Potential improvements:
- **Blog Section**: Add a blog for cleaning tips and company news
- **Online Booking**: Integrate booking system
- **Customer Reviews**: Add testimonials section
- **Service Calculator**: Interactive pricing calculator
- **Multi-language**: Add English/Swedish versions
- **CMS Integration**: Make content editable through a CMS

## 📄 License

This website template is created for AKIsiivous palvelu. You are free to modify and use it for your own cleaning business.

## 🤝 Support

For questions or support:
- Email: info@akisiivous.fi
- Phone: +358 40 123 4567

---

**AKIsiivous palvelu** - Professional cleaning services in Turku, Finland 