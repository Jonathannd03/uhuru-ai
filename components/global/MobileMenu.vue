<template>
    <div class="md:hidden mt-4 pb-4 border-t border-white/20">
      <div class="flex flex-col space-y-4 pt-4">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.path"
          :to="item.path"
          class="text-gray-700 hover:text-primary-500 transition-colors font-medium"
          @click="$emit('close')"
        >
          {{ item.name }}
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="btn-primary text-center mt-4"
          @click="$emit('close')"
        >
          Kostenlose Beratung
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  defineEmits(['close'])
  
  const navigationItems = [
    { name: 'Startseite', path: '/' },
    { name: 'Leistungen', path: '/services' },
    { name: 'Über uns', path: '/about-us' },
    { name: 'Cases', path: '/cases' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontakt', path: '/contact' }
  ]
  </script>