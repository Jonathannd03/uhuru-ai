<template>
  <footer class="bg-black/80 backdrop-blur-sm border-t border-gray-800/50 pt-20 pb-10 relative overflow-hidden">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-4 gap-12 mb-16">
        <!-- Company Info -->
        <div class="space-y-6">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div class="relative">
              <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-105">
                <i class="fas fa-robot text-white text-lg"></i>
              </div>
              <div class="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
              Uhuru AI
            </span>
          </NuxtLink>
          
          <p class="text-gray-400 leading-relaxed">
            Wir automatisieren Ihre Geschäftsprozesse mit n8n und KI für mehr Effizienz und Innovation.
          </p>
          
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href" 
              :aria-label="social.name"
              class="w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 group/social hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i :class="social.icon" class="text-white text-sm group-hover/social:scale-110 transition-transform duration-300"></i>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6 flex items-center">
            <i class="fas fa-cogs text-cyan-500 mr-2"></i>
            Leistungen
          </h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service" class="group">
              <NuxtLink 
                to="/services" 
                class="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center py-1 px-2 -mx-2 rounded-lg hover:bg-cyan-500/5 group/link"
              >
                <i class="fas fa-arrow-right text-cyan-500 text-xs mr-3 opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:translate-x-1"></i>
                <span class="group-hover/link:translate-x-1 transition-transform duration-300">{{ service }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6 flex items-center">
            <i class="fas fa-building text-cyan-500 mr-2"></i>
            Unternehmen
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in companyLinks" :key="index" class="group">
              <NuxtLink 
                :to="link.href" 
                class="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center py-1 px-2 -mx-2 rounded-lg hover:bg-cyan-500/5 group/link"
              >
                <i class="fas fa-arrow-right text-cyan-500 text-xs mr-3 opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:translate-x-1"></i>
                <span class="group-hover/link:translate-x-1 transition-transform duration-300">{{ link.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6 flex items-center">
            <i class="fas fa-address-book text-cyan-500 mr-2"></i>
            Kontakt
          </h3>
          
          <div class="text-gray-400 space-y-4 mb-6">
            <div 
              v-for="contact in contactInfo" 
              :key="contact.type"
              class="flex items-start group/contact hover:text-cyan-400 transition-colors duration-300"
            >
              <div class="w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                <i :class="contact.icon" class="text-cyan-500 group-hover/contact:text-cyan-400 transition-colors duration-300"></i>
              </div>
              <div>
                <a 
                  v-if="contact.href"
                  :href="contact.href" 
                  class="hover:text-cyan-300 transition-colors duration-300"
                >
                  {{ contact.text }}
                </a>
                <span v-else>{{ contact.text }}</span>
              </div>
            </div>
          </div>
          
          <NuxtLink 
            to="/contact" 
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-medium transition-all duration-300 group/cta shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 backdrop-blur-sm border border-cyan-500/20"
          >
            <i class="fas fa-calendar-alt mr-2 group-hover/cta:scale-110 transition-transform duration-300"></i>
            Termin Vereinbarung
            <i class="fas fa-arrow-right ml-2 group-hover/cta:translate-x-1 transition-transform duration-300"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p class="text-gray-500 text-sm">
            © {{ currentYear }} Uhuru AI. Alle Rechte vorbehalten.
          </p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-6">
          <NuxtLink 
            v-for="legal in legalLinks" 
            :key="legal.name"
            :to="legal.href" 
            class="text-gray-500 hover:text-cyan-400 transition-all duration-300 text-sm hover:scale-105"
          >
            {{ legal.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const services = [
  'n8n Workflow Entwicklung',
  'KI Automatisierung', 
  'Datenintegration',
  'API Entwicklung',
  'Beratung & Audit'
]

const companyLinks = [
  { name: 'Über uns', href: '/about-us' },
  { name: 'Kontakt', href: '/contact' },
  { name: 'Referenzen', href: '/referenzen' }
]

const contactInfo = [
  {
    type: 'address',
    icon: 'fas fa-map-marker-alt',
    text: 'Kremerstraße 53, 47051 Duisburg',
    href: null
  },
  {
    type: 'phone',
    icon: 'fas fa-phone',
    text: '+49 17 664669520',
    href: 'tel:+4917664669520'
  },
  {
    type: 'email',
    icon: 'fas fa-envelope',
    text: 'hello@uhuru-ai.de',
    href: 'mailto:hello@uhuru-ai.de'
  }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/uhuru-ai',
    icon: 'fab fa-linkedin-in'
  },
  {
    name: 'Instagram',
    href: 'https://twitter.com/uhuru_ai',
    icon: 'fab fa-x-instagram'
  },
  {
    name: 'GitHub', 
    href: 'https://github.com/uhuru-ai',
    icon: 'fab fa-github'
  }
]

const legalLinks = [
  { name: 'Datenschutz', href: '/datenschutz' },
  { name: 'Impressum', href: '/impressum' },
  { name: 'AGB', href: '/agb' }
]
</script>

<style scoped>
/* Enhanced smooth transitions */
a, button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Improved focus states for accessibility */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid rgba(34, 211, 238, 0.6);
  outline-offset: 2px;
  border-radius: 8px;
  box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.1);
}

/* Enhanced hover effects */
@media (hover: hover) {
  .group\/link:hover {
    background-color: rgba(34, 211, 238, 0.05);
  }
  
  .group\/contact:hover {
    transform: translateX(2px);
  }
}

/* Gradient text fallback */
.bg-gradient-to-r {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Newsletter input enhancements */
input[type="email"] {
  background-clip: padding-box;
}

input[type="email"]:focus {
  background-color: rgba(31, 41, 55, 0.8);
}

/* Animation for heart icon */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
  
  .animate-pulse {
    animation: none !important;
  }
}

/* Touch device optimizations */
@media (hover: none) {
  .hover-effect {
    transform: none !important;
  }
  
  /* Larger touch targets for mobile */
  button, a {
    min-height: 44px;
    min-width: 44px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .bg-gradient-to-r {
    background: #00bcd4 !important;
    -webkit-text-fill-color: #00bcd4 !important;
  }
  
  .text-cyan-400 {
    color: #00e5ff !important;
  }
  
  .border-cyan-500\/50 {
    border-color: #00bcd4 !important;
  }
}

/* Print styles */
@media print {
  footer {
    background: white !important;
    color: black !important;
  }
  
  .bg-gradient-to-r {
    background: none !important;
    -webkit-text-fill-color: black !important;
    color: black !important;
  }
}
</style>