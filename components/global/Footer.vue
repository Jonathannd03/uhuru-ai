<template>
  <footer class="bg-black/80 backdrop-blur-sm border-t border-gray-800 pt-20 pb-10">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-4 gap-12 mb-16">
        <!-- Company Info -->
        <div>
          <NuxtLink to="/" class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-robot text-white text-lg"></i>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Uhuru AI
            </span>
          </NuxtLink>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Wir automatisieren Ihre Geschäftsprozesse mit n8n und KI für mehr Effizienz und Innovation.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300">
              <i class="fab fa-linkedin-in text-white"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300">
              <i class="fab fa-x-twitter text-white"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300">
              <i class="fab fa-github text-white"></i>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">Leistungen</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <NuxtLink to="/leistungen" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <i class="fas fa-arrow-right text-primary-500 text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                {{ service }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">Unternehmen</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in companyLinks" :key="index">
              <NuxtLink :to="link.href" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <i class="fas fa-arrow-right text-primary-500 text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">Kontakt</h3>
          <div class="text-gray-400 space-y-3 mb-6">
            <p class="flex items-center">
              <i class="fas fa-map-marker-alt text-primary-500 mr-3 w-5"></i>
              Musterstraße 123, 10115 Berlin
            </p>
            <p class="flex items-center">
              <i class="fas fa-phone text-primary-500 mr-3 w-5"></i>
              +49 30 12345678
            </p>
            <p class="flex items-center">
              <i class="fas fa-envelope text-primary-500 mr-3 w-5"></i>
              info@uhuru-ai.de
            </p>
          </div>
          <NuxtLink 
            to="/kontakt" 
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 group"
          >
            Kontakt aufnehmen
            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm mb-4 md:mb-0">
          © 2023 Uhuru AI. Alle Rechte vorbehalten.
        </p>
        <div class="flex space-x-6">
          <NuxtLink to="/datenschutz" class="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Datenschutz</NuxtLink>
          <NuxtLink to="/impressum" class="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Impressum</NuxtLink>
          <NuxtLink to="/agb" class="text-gray-500 hover:text-white transition-colors duration-300 text-sm">AGB</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const services = [
  'n8n Workflow Entwicklung',
  'KI Automatisierung',
  'Datenintegration',
  'API Entwicklung',
  'Beratung & Audit'
]

const companyLinks = [
  { name: 'Über uns', href: '/uber-uns' },
  { name: 'Karriere', href: '/karriere' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Referenzen', href: '/referenzen' }
]
</script>

<style scoped>
/* Add hover effects for list items */
a {
  @apply transition-all duration-300;
}

a:hover {
  transform: translateX(4px);
}

/* Ensure gradient text works across browsers */
.text-gradient {
  background: linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>