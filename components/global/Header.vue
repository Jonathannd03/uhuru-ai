<template>
  <header class="fixed w-full top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
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

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group/nav px-2 py-1 rounded-lg hover:bg-cyan-500/5"
            :class="{ 'text-cyan-400': $route.path === item.href }"
          >
            {{ item.name }}
            <span 
              v-if="$route.path === item.href" 
              class="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            ></span>
            <span 
              class="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 group-hover/nav:w-full"
              :class="{ 'w-0': $route.path === item.href }"
            ></span>
          </NuxtLink>
        </nav>

        <!-- CTA -->
        <div class="flex items-center gap-3">
          <NuxtLink 
            to="/bookAppointment" 
            class="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 rounded-xl text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-all duration-300 group/cta backdrop-blur-sm shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-105"
          >
            <i class="fas fa-calendar-alt text-cyan-400 group-hover/cta:text-cyan-300 transition-colors duration-300"></i>
            Termin Vereinbaren
            <i class="fas fa-arrow-right text-xs transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:text-cyan-300"></i>
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden p-2.5 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm transition-all duration-300 group/menu border border-gray-700/50 hover:border-cyan-500/30"
            @click="toggleMobileMenu"
            aria-label="Menü öffnen oder schließen"
          >
            <div class="w-5 h-5 relative">
              <span 
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-cyan-400 transition-all duration-300 rounded-full" 
                :class="{'rotate-45': mobileMenuOpen, '-translate-y-1.5': !mobileMenuOpen}"
              ></span>
              <span 
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-cyan-400 transition-all duration-300 rounded-full" 
                :class="{'opacity-0 scale-0': mobileMenuOpen}"
              ></span>
              <span 
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-cyan-400 transition-all duration-300 rounded-full" 
                :class="{'-rotate-45': mobileMenuOpen, 'translate-y-1.5': !mobileMenuOpen}"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 backdrop-blur-none"
      enter-to-class="opacity-100 backdrop-blur-md"
      leave-from-class="opacity-100 backdrop-blur-md"
      leave-to-class="opacity-0 backdrop-blur-none"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden fixed inset-0 bg-gray-950/95 backdrop-blur-md z-40 pt-20 px-4"
        @click="closeMobileMenu"
      >
        <!-- Mobile Menu Content -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div 
            v-if="mobileMenuOpen"
            class="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10" 
            @click.stop
          >
            <nav class="flex flex-col gap-2">
              <NuxtLink 
                v-for="item in navigation" 
                :key="item.name" 
                :to="item.href"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300 font-medium group/mobile border border-transparent hover:border-cyan-500/20"
                :class="{ 
                  'text-cyan-400 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20': $route.path === item.href 
                }"
                @click="closeMobileMenu"
              >
                <div class="w-6 h-6 flex items-center justify-center">
                  <i 
                    :class="item.icon" 
                    class="text-sm text-cyan-500 group-hover/mobile:text-cyan-400 transition-colors duration-300"
                  ></i>
                </div>
                <span class="flex-1">{{ item.name }}</span>
                <i class="fas fa-arrow-right text-xs opacity-0 group-hover/mobile:opacity-100 transition-all duration-300 group-hover/mobile:translate-x-1"></i>
              </NuxtLink>
            </nav>
            
            <div class="mt-6 pt-6 border-t border-cyan-500/20">
              <NuxtLink 
                to="/contact" 
                class="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 rounded-xl text-cyan-400 hover:text-cyan-300 font-medium transition-all duration-300 group/cta-mobile shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
                @click="closeMobileMenu"
              >
                <i class="fas fa-calendar-alt group-hover/cta-mobile:scale-110 transition-transform duration-300"></i>
                <span>Termin Vereinbarung</span>
                <i class="fas fa-arrow-right text-xs transition-all duration-300 group-hover/cta-mobile:translate-x-1"></i>
              </NuxtLink>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  updateBodyScroll()
  updateAriaAttributes()
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  updateBodyScroll()
  updateAriaAttributes()
}

const updateBodyScroll = () => {
  if (process.client) {
    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'auto'
    // Prevent scroll restoration when menu is open
    if (mobileMenuOpen.value) {
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }
}

const updateAriaAttributes = () => {
  if (process.client) {
    const button = document.querySelector('[aria-label="Menü öffnen oder schließen"]')
    if (button) {
      button.setAttribute('aria-expanded', mobileMenuOpen.value.toString())
    }
  }
}

const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Close mobile menu when route changes
watch(route, () => {
  if (mobileMenuOpen.value) {
    closeMobileMenu()
  }
})

// Close menu on resize to desktop breakpoint
const handleResize = () => {
  if (process.client && window.innerWidth >= 768 && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Improved scroll handling
let lastScrollY = 0
const handleScroll = () => {
  if (process.client && !mobileMenuOpen.value) {
    const currentScrollY = window.scrollY
    const header = document.querySelector('header')
    
    if (header) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-100%)'
      } else {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)'
      }
    }
    
    lastScrollY = currentScrollY
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleEscapeKey)
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateAriaAttributes()
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('keydown', handleEscapeKey)
    window.removeEventListener('scroll', handleScroll)
    
    // Cleanup body styles
    document.body.style.overflow = 'auto'
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
  }
})

const navigation = [
  { name: 'Leistungen', href: '/services', icon: 'fas fa-cogs' },
  { name: 'Preise', href: '/prices', icon: 'fas fa-tag' },
  { name: 'Kontakt', href: '/contact', icon: 'fas fa-tag' },
  { name: 'Über uns', href: '/about-us', icon: 'fas fa-info-circle' },
]
</script>

<style scoped>
/* Enhanced smooth transitions with cubic-bezier easing */
a, button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Improved focus states for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid rgba(34, 211, 238, 0.6);
  outline-offset: 2px;
  border-radius: 8px;
  box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.1);
}

/* Enhanced header scroll behavior */
header {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Improved mobile menu animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Enhanced hover effects for desktop */
@media (hover: hover) {
  .group\/nav:hover .absolute {
    animation: slideIn 0.3s ease-out;
  }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
  
  header {
    transform: none !important;
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
  }
  
  .text-cyan-400 {
    color: #00e5ff !important;
  }
  
  .border-cyan-500\/30 {
    border-color: #00bcd4 !important;
  }
}

/* Dark mode enhancements */
@media (prefers-color-scheme: dark) {
  .bg-gray-950\/95 {
    background-color: rgba(3, 7, 18, 0.98);
  }
}
</style>