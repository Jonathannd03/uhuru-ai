<template>
  <header class="fixed w-full top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <i class="fas fa-robot text-white text-lg"></i>
            </div>
            <div class="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Uhuru AI</span>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative"
            :class="{ 'text-cyan-400': $route.path === item.href }"
          >
            {{ item.name }}
            <span v-if="$route.path === item.href" class="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400 rounded-full"></span>
          </NuxtLink>
        </nav>

        <!-- CTA -->
        <div class="flex items-center gap-3">
          <NuxtLink 
            to="/kontakt" 
            class="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-all duration-300 group/cta"
          >
            <i class="fas fa-comment-dots text-cyan-400 group-hover/cta:text-cyan-300"></i>
            Kontakt aufnehmen
            <i class="fas fa-arrow-right text-xs transition-transform duration-300 group-hover/cta:translate-x-1"></i>
          </NuxtLink>

          <!-- Mobile Menu -->
          <button 
            class="md:hidden p-2.5 rounded-lg bg-gray-800 hover:bg-gray-700/50 transition-colors group"
            @click="toggleMobileMenu"
            aria-label="Menü öffnen oder schließen"
          >
            <div class="w-5 h-5 relative">
              <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-cyan-400 transition-all duration-300" 
                :class="{'rotate-45': mobileMenuOpen, '-translate-y-1.5': !mobileMenuOpen}"></span>
              <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-cyan-400 transition-all duration-300" 
                :class="{'opacity-0': mobileMenuOpen}"></span>
              <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-cyan-400 transition-all duration-300" 
                :class="{'-rotate-45': mobileMenuOpen, 'translate-y-1.5': !mobileMenuOpen}"></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden fixed inset-0 bg-gray-950/95 backdrop-blur-md z-40 pt-20 px-4"
        @click="closeMobileMenu"
      >
        <div class="bg-gray-900 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20" @click.stop>
          <nav class="flex flex-col gap-2">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name" 
              :to="item.href"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-medium"
              :class="{ 'text-cyan-400 bg-cyan-500/10': $route.path === item.href }"
              @click="closeMobileMenu"
            >
              <i :class="item.icon" class="w-5 text-center text-cyan-500"></i>
              <span>{{ item.name }}</span>
            </NuxtLink>
          </nav>
          
          <div class="mt-6 pt-6 border-t border-cyan-500/20">
            <NuxtLink 
              to="/kontakt" 
              class="flex items-center justify-center gap-2 w-full px-4 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 hover:text-cyan-300 font-medium transition-all duration-300"
              @click="closeMobileMenu"
            >
              <i class="fas fa-calendar-alt"></i>
              Kostenlose Beratung
            </NuxtLink>
          </div>

        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  updateBodyScroll()
  toggleEscapeListener()
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  updateBodyScroll()
  toggleEscapeListener()
}

const updateBodyScroll = () => {
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'auto'
}

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') closeMobileMenu()
}

const toggleEscapeListener = () => {
  if (mobileMenuOpen.value) {
    document.addEventListener('keydown', handleEscapeKey)
  } else {
    document.removeEventListener('keydown', handleEscapeKey)
  }
}

// Close mobile menu when route changes
watch(route, closeMobileMenu)

// Close menu on resize to desktop breakpoint
const handleResize = () => {
  if (window.innerWidth >= 768) closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('keydown', handleEscapeKey)
})

const navigation = [
  { name: 'Leistungen', href: '/services', icon: 'fas fa-cogs' },
  { name: 'Preise', href: '/prices', icon: 'fas fa-tag' },
  { name: 'Über uns', href: '/about-us', icon: 'fas fa-info-circle' },
]
</script>

<style scoped>
/* Smooth transitions for all interactive elements */
a, button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Improve focus states for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid rgba(34, 211, 238, 0.5);
  outline-offset: 2px;
  border-radius: 8px;
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

/* Touch device optimizations */
@media (hover: none) {
  .hover-effect {
    transform: none !important;
  }
}
</style>