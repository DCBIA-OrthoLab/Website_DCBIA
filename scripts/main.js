// ===== NAVIGATION & SCROLL ===== 
class NavigationManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.scrollContainer = document.querySelector('.scroll-container');
        this.sections = document.querySelectorAll('.section');
        
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupScrollIndicator();
        this.setupActiveNavigation();
        this.setupNavbarScrollEffect();
    }

    // Menu mobile hamburger
    setupMobileMenu() {
        this.hamburger?.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu?.classList.toggle('active');
        });

        // Fermer le menu mobile lors du clic sur un lien
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Toujours fermer le menu mobile
                this.hamburger?.classList.remove('active');
                this.navMenu?.classList.remove('active');
            });
        });
    }

    // Défilement fluide vers les sections
    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Ne prévenir le comportement par défaut que pour les liens internes (commençant par #)
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        this.scrollToSection(targetSection);
                    }
                }
                // Laisser les autres liens (vers d'autres pages) fonctionner normalement
            });
        });
    }

    scrollToSection(targetSection) {
        const sectionTop = targetSection.offsetTop;
        this.scrollContainer.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }

    // Effet de transparence de la navbar au scroll
    setupNavbarScrollEffect() {
        this.scrollContainer?.addEventListener('scroll', () => {
            const scrollTop = this.scrollContainer.scrollTop;
            
            if (scrollTop > 50) {
                this.navbar?.classList.add('scrolled');
            } else {
                this.navbar?.classList.remove('scrolled');
            }
        });
    }

    // Mise à jour de la navigation active
    setupActiveNavigation() {
        const observerOptions = {
            threshold: 0.6,
            rootMargin: '-80px 0px 0px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveNavLink(entry.target.id);
                }
            });
        }, observerOptions);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    updateActiveNavLink(activeId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }

    // Indicateur de progression de scroll
    setupScrollIndicator() {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-progress';
        scrollIndicator.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(scrollIndicator);

        const progressBar = scrollIndicator.querySelector('.scroll-progress-bar');

        this.scrollContainer?.addEventListener('scroll', () => {
            const scrollTop = this.scrollContainer.scrollTop;
            const scrollHeight = this.scrollContainer.scrollHeight - this.scrollContainer.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            
            progressBar.style.width = `${progress}%`;
        });
    }
}

// ===== ANIMATIONS & EFFECTS =====
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupCounterAnimations();
        this.setupTeamInitials();
        this.setupTypingEffect();
    }

    // Animations au scroll
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observer les éléments à animer
        const animatedElements = document.querySelectorAll(
            '.team-member, .project-card, .stat-item, .presentation-text, .news-item, .event-item, .resource-card'
        );

        animatedElements.forEach(element => {
            element.classList.add('animate-element');
            observer.observe(element);
        });
    }

    // Animation des compteurs dans les statistiques
    setupCounterAnimations() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const animateCounter = (element, target) => {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + '+';
                }
            }, 20);
        };

        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    const text = entry.target.textContent.replace('+', '');
                    const target = parseInt(text);
                    entry.target.classList.add('animated');
                    animateCounter(entry.target, target);
                }
            });
        }, observerOptions);

        statNumbers.forEach(stat => observer.observe(stat));
    }

    // Ajouter les initiales aux photos placeholders
    setupTeamInitials() {
        const teamMembers = document.querySelectorAll('.team-member');
        const initials = ['LC', 'JP', 'BP', 'JB', 'MS', 'AR']; // Initials for 6 main team members
        
        teamMembers.forEach((member, index) => {
            const placeholder = member.querySelector('.photo-placeholder');
            if (placeholder && index < initials.length) {
                placeholder.textContent = initials[index];
            }
        });
    }

    // Effet de frappe pour le titre principal
    setupTypingEffect() {
        const titleLines = document.querySelectorAll('.title-line');
        
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            line.style.opacity = '1';
            
            setTimeout(() => {
                this.typeText(line, text, 100);
            }, index * 800);
        });
    }

    typeText(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(timer);
            }
        }, speed);
    }
}

// ===== UTILITAIRES =====
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// ===== CSS ANIMATIONS SUPPLÉMENTAIRES =====
const additionalStyles = `
<style>
/* Barre de progression de scroll */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(37, 99, 235, 0.1);
    z-index: 1001;
}

.scroll-progress-bar {
    height: 100%;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    width: 0%;
    transition: width 0.3s ease;
}

/* Animations d'entrée pour les éléments */
.animate-element {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.animate-element.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* Navigation active */
.nav-link.active {
    color: var(--primary-color);
}

.nav-link.active::after {
    width: 100%;
}

/* Navbar avec effet scroll - DÉSACTIVÉ pour transparence permanente */
/*
.navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
*/

/* Animation des particules - DÉSACTIVÉE */
/*
@keyframes floatParticle {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
    }
}
*/

/* Animation de slide pour les messages */
@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Améliorations du hamburger */
.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* Effet de focus amélioré pour l'accessibilité */
.nav-link:focus,
.btn:focus,
input:focus,
textarea:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* Transitions fluides pour les cartes */
.team-member,
.project-card,
.stat-item {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Amélioration des hovers */
.project-card:hover .project-title {
    color: var(--primary-color);
}

.team-member:hover .member-name {
    color: var(--primary-color);
}
</style>
`;

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Injecter les styles additionnels
    document.head.insertAdjacentHTML('beforeend', additionalStyles);
    
    // Initialiser tous les composants
    new NavigationManager();
    new AnimationManager();
    
    // Préloader pour une meilleure performance
    const preloader = document.createElement('div');
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: opacity 0.5s ease;
    `;
    preloader.innerHTML = `
        <div style="
            width: 40px;
            height: 40px;
            border: 4px solid #f3f4f6;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    `;
    
    document.body.appendChild(preloader);
    
    // Ajouter l'animation de rotation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    // Masquer le preloader après le chargement
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
                spinStyle.remove();
            }, 500);
        }, 500);
    });
    
    console.log('🚀 DCBIA Website initialized successfully!');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

// Export pour utilisation modulaire si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NavigationManager,
        AnimationManager,
        Utils
    };
}
