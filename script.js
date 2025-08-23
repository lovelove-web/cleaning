// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !service || !message) {
            showMessage('Täytä kaikki pakolliset kentät.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Syötä kelvollinen sähköpostiosoite.', 'error');
            return;
        }
        
        // Simulate form submission
        showMessage('Lähetetään viestiä...', 'success');
        
        // In a real application, you would send this data to your server
        // For now, we'll just show a success message
        setTimeout(() => {
            showMessage('Kiitos viestistäsi! Otamme sinuun yhteyttä pian.', 'success');
            contactForm.reset();
        }, 2000);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    
    // Insert message before the form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.parentNode.insertBefore(messageDiv, contactForm);
    }
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .contact-item, .about-content, .hero-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Service cards hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + ' ' + value.slice(3);
            } else {
                value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
            }
        }
        e.target.value = value;
    });
}

// Loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Back to top button functionality
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        if (!backToTop) {
            createBackToTopButton();
        }
    } else {
        if (backToTop) {
            backToTop.remove();
        }
    }
});

function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-3px)';
        backToTop.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
    });
    
    document.body.appendChild(backToTop);
}

// Add loading state to form submission
function setFormLoading(loading) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (loading) {
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Lähetetään...';
    } else {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Lähetä viesti';
    }
}

// Enhanced form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    let errorMessage = '';
    
    if (name.length < 2) {
        errorMessage = 'Nimen tulee olla vähintään 2 merkkiä pitkä.';
        isValid = false;
    } else if (!isValidEmail(email)) {
        errorMessage = 'Syötä kelvollinen sähköpostiosoite.';
        isValid = false;
    } else if (!service) {
        errorMessage = 'Valitse palvelu.';
        isValid = false;
    } else if (message.length < 10) {
        errorMessage = 'Viestin tulee olla vähintään 10 merkkiä pitkä.';
        isValid = false;
    }
    
    if (!isValid) {
        showMessage(errorMessage, 'error');
    }
    
    return isValid;
}

// Update contact form to use enhanced validation
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setFormLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setFormLoading(false);
            showMessage('Kiitos viestistäsi! Otamme sinuun yhteyttä pian.', 'success');
            contactForm.reset();
        }, 2000);
    });
}

// Service Modal Functionality
const modal = document.getElementById('serviceModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Service data for modals
const serviceData = {
    kotisiivous: {
        title: 'Kotisiivous',
        subtitle: 'Ammattimainen kotisiivous Turussa',
        description: 'Tarjoamme kattavia kotisiivouspalveluita, jotka tekevät kodistasi siistin ja terveellisen. Käytämme vain ympäristöystävällisiä siivousaineita ja ammattimaisia menetelmiä.',
        features: [
            'Kattava pölyjen poisto kaikista pinnoista',
            'Lattioiden pesu ja hoito',
            'Keittiön siivous ja desinfiointi',
            'Kylpyhuoneen perusteellinen puhdistus',
            'Makuuhuoneiden siivous',
            'Yhteistilojen hoito',
            'Roskien tyhjennys',
            'Ikkunoiden puhdistus (sisäpuoli)',
            'Kalusteiden puhdistus',
            'Kylpyhuoneen desinfiointi'
        ],
        pricing: [
            { service: 'Studio/kaksio', price: 'alk. 80€' },
            { service: 'Kolmiot', price: 'alk. 100€' },
            { service: 'Neliot', price: 'alk. 120€' },
            { service: 'Isommat asunnot', price: 'sopimuksen mukaan' }
        ],
        additional: 'Hinnat sisältävät siivousaineet ja välineet. Toistuvat siivoukset alennuksella.'
    },
    toimistosiivous: {
        title: 'Toimistosiivous',
        subtitle: 'Ammattimainen toimistosiivous yrityksille',
        description: 'Pidämme toimistosi siistinä ja terveellisenä. Tarjoamme joustavia siivouspalveluita, jotka sopivat yrityksesi tarpeisiin ja aikatauluun.',
        features: [
            'Työpöytien siivous ja puhdistus',
            'Yhteistilojen hoito (kokoushuoneet, aulat)',
            'Kopioiden ja tulostimien puhdistus',
            'Tietokoneiden ja näyttöjen puhdistus',
            'Roskien tyhjennys',
            'Lattioiden pesu ja hoito',
            'Kylpyhuoneiden siivous ja desinfiointi',
            'Keittiöiden siivous',
            'Ikkunoiden puhdistus',
            'Kalusteiden puhdistus'
        ],
        pricing: [
            { service: 'Pieni toimisto (alle 50m²)', price: 'alk. 150€' },
            { service: 'Keskikokoinen toimisto (50-150m²)', price: 'alk. 250€' },
            { service: 'Suuri toimisto (150-300m²)', price: 'alk. 400€' },
            { service: 'Yrityskeskukset', price: 'sopimuksen mukaan' }
        ],
        additional: 'Tarjoamme myös toistuvia siivouspalveluita sopimuksen mukaan. Hinnat sisältävät kaikki tarvikkeet.'
    },
    erikoissiivous: {
        title: 'Erikoissiivous',
        subtitle: 'Erikoissiivouspalvelut ja syväsiivous',
        description: 'Erikoissiivouspalvelut vaativiin tilanteisiin. Sisältää ikkunoiden pesun, mattojen puhdistuksen, syväsiivouksen ja jälkisiivouksen.',
        features: [
            'Ikkunoiden pesu (sisä- ja ulkopuoli)',
            'Mattojen ja sohvien puhdistus',
            'Syväsiivous ja desinfiointi',
            'Jälkisiivous (remonttien jälkeen)',
            'Kattojen puhdistus',
            'Liesituulettimien puhdistus',
            'Uunin ja mikroaaltouunin puhdistus',
            'Jääkaapin puhdistus',
            'Pesukoneen puhdistus',
            'Viemärien puhdistus'
        ],
        pricing: [
            { service: 'Ikkunoiden pesu (per ikkuna)', price: 'alk. 15€' },
            { service: 'Mattojen puhdistus (per m²)', price: 'alk. 8€' },
            { service: 'Sohvan puhdistus', price: 'alk. 80€' },
            { service: 'Syväsiivous', price: 'sopimuksen mukaan' }
        ],
        additional: 'Erikoissiivouspalvelut hinnoitellaan tapauskohtaisesti. Pyydä tarjous erikseen.'
    },
    hotellisiivous: {
        title: 'Hotellisiivous',
        subtitle: 'Ammattimainen hotellisiivous ja majoituspalvelut',
        description: 'Tarjoamme kattavia hotellisiivouspalveluita, jotka varmistavat vierailijoiden viihtyvyyden ja hygienian. Palvelumme sisältävät huoneiden siivouksen, yhteistilojen hoidon ja erikoissiivouspalvelut.',
        features: [
            'Huoneiden perusteellinen siivous',
            'Lakanoiden vaihto ja hoito',
            'Kylpyhuoneen desinfiointi',
            'Yhteistilojen hoito (aulat, ravintolat)',
            'Kokoushuoneiden siivous',
            'Reception ja aulojen hoito',
            'Keittiöiden siivous',
            'Ikkunoiden puhdistus',
            'Kalusteiden puhdistus',
            'Roskien tyhjennys'
        ],
        pricing: [
            { service: 'Huoneen siivous (per huone)', price: 'alk. 25€' },
            { service: 'Kokoushuoneiden siivous', price: 'alk. 50€' },
            { service: 'Yhteistilojen siivous', price: 'alk. 100€' },
            { service: 'Kokonaisvaltainen hotellisiivous', price: 'sopimuksen mukaan' }
        ],
        additional: 'Tarjoamme joustavia aikatauluja ja toistuvia siivouspalveluita. Hinnat sisältävät kaikki tarvikkeet.'
    },
    'loma-asuntosiivous': {
        title: 'Loma-asuntosiivous',
        subtitle: 'Kattava siivous loma-asunnoille ja vuokra-asunnoille',
        description: 'Erityisesti loma-asunnoille ja vuokra-asunnoille suunnitellut siivouspalvelut, jotka varmistavat vierailijoiden viihtyvyyden ja asunnon hyvän kunnon.',
        features: [
            'Syväsiivous kaikista tiloista',
            'Lakanoiden vaihto ja hoito',
            'Keittiön perusteellinen siivous',
            'Kylpyhuoneen desinfiointi',
            'Makuuhuoneiden siivous',
            'Yhteistilojen hoito',
            'Ikkunoiden puhdistus',
            'Kalusteiden puhdistus',
            'Roskien tyhjennys',
            'Tarkistuslista vierailijoiden saapumista varten'
        ],
        pricing: [
            { service: 'Studio/kaksio', price: 'alk. 120€' },
            { service: 'Kolmiot', price: 'alk. 150€' },
            { service: 'Neliot', price: 'alk. 180€' },
            { service: 'Isommat asunnot', price: 'sopimuksen mukaan' }
        ],
        additional: 'Sisältää tarkistuslistan ja kuvadokumentaation. Toistuvat siivoukset alennuksella.'
    },
    'toimisto-kiinteisto': {
        title: 'Toimisto- ja kiinteistösiivous',
        subtitle: 'Ammattimainen siivous toimistoille ja kiinteistöille',
        description: 'Kattavat siivouspalvelut toimistoille, liikekiinteistöille ja muille yritystiloille. Pidämme tilasi siistinä ja ammattimaisena.',
        features: [
            'Toimistotilojen siivous',
            'Liiketilojen hoito',
            'Yhteistilojen siivous',
            'Kylpyhuoneiden desinfiointi',
            'Keittiöiden siivous',
            'Ikkunoiden puhdistus',
            'Lattioiden pesu ja hoito',
            'Kalusteiden puhdistus',
            'Roskien tyhjennys',
            'Erikoissiivouspalvelut'
        ],
        pricing: [
            { service: 'Pieni toimisto (alle 100m²)', price: 'alk. 200€' },
            { service: 'Keskikokoinen toimisto (100-300m²)', price: 'alk. 350€' },
            { service: 'Suuri toimisto (300m²+)', price: 'alk. 500€' },
            { service: 'Liikekiinteistöt', price: 'sopimuksen mukaan' }
        ],
        additional: 'Tarjoamme joustavia aikatauluja ja toistuvia palveluita. Hinnat sisältävät kaikki tarvikkeet.'
    },
    myymalasiivous: {
        title: 'Myymäläsiivous',
        subtitle: 'Ammattimainen siivous myymälöille ja liiketiloille',
        description: 'Erityisesti myymälöille ja liiketiloille suunnitellut siivouspalvelut, jotka varmistavat asiakkaiden viihtyvyyden ja ammattimaisen ulkoasun.',
        features: [
            'Myymälätilojen siivous',
            'Näyteikkunoiden puhdistus',
            'Kassojen ja kassojen ympäristön siivous',
            'Varastotilojen hoito',
            'Kylpyhuoneiden desinfiointi',
            'Lattioiden pesu ja hoito',
            'Kalusteiden puhdistus',
            'Roskien tyhjennys',
            'Erikoissiivouspalvelut',
            'Jälkisiivous remonttien jälkeen'
        ],
        pricing: [
            { service: 'Pieni myymälä (alle 100m²)', price: 'alk. 180€' },
            { service: 'Keskikokoinen myymälä (100-300m²)', price: 'alk. 300€' },
            { service: 'Suuri myymälä (300m²+)', price: 'alk. 450€' },
            { service: 'Kauppakeskukset', price: 'sopimuksen mukaan' }
        ],
        additional: 'Tarjoamme joustavia aikatauluja ja toistuvia palveluita. Hinnat sisältävät kaikki tarvikkeet.'
    },
    laivasiivous: {
        title: 'Laivasiivous',
        subtitle: 'Ammattimainen siivous laivoille ja veneille',
        description: 'Erityisesti laivoille ja veneille suunnitellut siivouspalvelut, jotka huomioivat merenkulun erityisvaatimukset ja kestävät meriolosuhteet.',
        features: [
            'Kajutin siivous ja desinfiointi',
            'Yhteistilojen hoito',
            'Keittiöiden siivous',
            'Kylpyhuoneiden desinfiointi',
            'Korroosionestopuhdistus',
            'Ikkunoiden puhdistus',
            'Lattioiden pesu ja hoito',
            'Kalusteiden puhdistus',
            'Roskien tyhjennys',
            'Erikoissiivouspalvelut'
        ],
        pricing: [
            { service: 'Pieni vene (alle 10m)', price: 'alk. 150€' },
            { service: 'Keskikokoinen vene (10-20m)', price: 'alk. 250€' },
            { service: 'Suuri vene (20m+)', price: 'alk. 400€' },
            { service: 'Laivat ja risteilyalukset', price: 'sopimuksen mukaan' }
        ],
        additional: 'Huomioimme merenkulun erityisvaatimukset ja käytämme meriolosuhteisiin sopivia aineita.'
    },
    hoivakotisiivous: {
        title: 'Hoivakotisiivous',
        subtitle: 'Ammattimainen siivous hoivakoteihin ja terveydenhuoltotiloihin',
        description: 'Erityisesti hoivakoteihin ja terveydenhuoltotiloihin suunnitellut siivouspalvelut, jotka varmistavat hygienian ja asukkaiden terveyden.',
        features: [
            'Asukashuoneiden siivous',
            'Yhteistilojen hoito',
            'Kylpyhuoneiden desinfiointi',
            'Keittiöiden siivous',
            'Lääkintätilojen siivous',
            'Korona- ja infektioriskien minimointi',
            'Lattioiden pesu ja hoito',
            'Kalusteiden puhdistus',
            'Roskien tyhjennys',
            'Erikoissiivouspalvelut'
        ],
        pricing: [
            { service: 'Pieni hoivakoti (alle 50 asukasta)', price: 'alk. 300€' },
            { service: 'Keskikokoinen hoivakoti (50-100 asukasta)', price: 'alk. 500€' },
            { service: 'Suuri hoivakoti (100+ asukasta)', price: 'alk. 800€' },
            { service: 'Terveydenhuoltotilat', price: 'sopimuksen mukaan' }
        ],
        additional: 'Käytämme terveydenhuoltotiloihin sopivia desinfiointiaineita ja noudatamme tiukkoja hygieniasääntöjä.'
    },
    'varasto-terminaali': {
        title: 'Varasto- ja terminaalisiivous',
        subtitle: 'Ammattimainen siivous varastoille ja terminaaleille',
        description: 'Kattavat siivouspalvelut varastoille, terminaaleille ja logistiikkatiloille, jotka varmistavat toiminnan sujuvuuden ja työterveyden.',
        features: [
            'Varastotilojen siivous',
            'Terminaalitilojen hoito',
            'Ladonta- ja purkutilojen siivous',
            'Toimistotilojen siivous',
            'Kylpyhuoneiden desinfiointi',
            'Keittiöiden siivous',
            'Lattioiden pesu ja hoito',
            'Kalusteiden puhdistus',
            'Roskien tyhjennys',
            'Erikoissiivouspalvelut'
        ],
        pricing: [
            { service: 'Pieni varasto (alle 500m²)', price: 'alk. 400€' },
            { service: 'Keskikokoinen varasto (500-1500m²)', price: 'alk. 600€' },
            { service: 'Suuri varasto (1500m²+)', price: 'alk. 900€' },
            { service: 'Terminaalit ja logistiikkakeskukset', price: 'sopimuksen mukaan' }
        ],
        additional: 'Huomioimme logistiikkatoiminnan erityisvaatimukset ja tarjoamme joustavia aikatauluja.'
    },
    teollisuuskiinteisto: {
        title: 'Teollisuuskiinteistösiivous',
        subtitle: 'Ammattimainen siivous teollisuustiloille ja tuotantolaitoksille',
        description: 'Erityisesti teollisuustiloille ja tuotantolaitoksille suunnitellut siivouspalvelut, jotka huomioivat teollisuuden erityisvaatimukset ja turvallisuusmääräykset.',
        features: [
            'Tuotantotilojen siivous',
            'Toimistotilojen hoito',
            'Kylpyhuoneiden desinfiointi',
            'Keittiöiden siivous',
            'Lattioiden pesu ja hoito',
            'Kalusteiden puhdistus',
            'Roskien tyhjennys',
            'Erikoissiivouspalvelut',
            'Jälkisiivous remonttien jälkeen',
            'Korona- ja infektioriskien minimointi'
        ],
        pricing: [
            { service: 'Pieni teollisuuskiinteistö (alle 1000m²)', price: 'alk. 500€' },
            { service: 'Keskikokoinen teollisuuskiinteistö (1000-3000m²)', price: 'alk. 800€' },
            { service: 'Suuri teollisuuskiinteistö (3000m²+)', price: 'alk. 1200€' },
            { service: 'Tuotantolaitokset', price: 'sopimuksen mukaan' }
        ],
        additional: 'Noudatamme teollisuuden turvallisuusmääräyksiä ja käytämme teollisuustiloihin sopivia siivousaineita.'
    }
};

// Open modal function
function openModal(serviceType) {
    const service = serviceData[serviceType];
    if (!service) return;

    const modalHTML = `
        <div class="modal-header">
            <h2>${service.title}</h2>
            <p>${service.subtitle}</p>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>Palvelun kuvaus</h3>
                <p>${service.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Mitä sisältää</h3>
                <ul>
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-pricing">
                <h4>Hinnoittelu</h4>
                ${service.pricing.map(item => `
                    <div class="price-item">
                        <span>${item.service}</span>
                        <strong>${item.price}</strong>
                    </div>
                `).join('')}
                <p style="margin-top: 1rem; font-size: 0.9rem; color: #6b7280;">${service.additional}</p>
            </div>
            
            <div class="modal-cta">
                <a href="#contact" class="btn btn-primary" onclick="closeModal()">Pyydä tarjous</a>
                <button class="btn btn-secondary" onclick="closeModal()">Sulje</button>
            </div>
        </div>
    `;

    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus management for accessibility
    closeBtn.focus();
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Event listeners for modal
document.addEventListener('DOMContentLoaded', () => {
    // Service card click handlers
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on the button specifically
            if (e.target.classList.contains('service-btn')) {
                e.stopPropagation();
                const serviceType = card.getAttribute('data-service');
                openModal(serviceType);
            }
        });
    });

    // Close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}); 