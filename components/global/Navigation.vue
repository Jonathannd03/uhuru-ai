<template>
  <nav class="flex space-x-8">
    <NuxtLink 
      v-for="item in navigationItems" 
      :key="item.path"
      :to="item.path"
      class="text-gray-700 hover:text-primary-500 transition-colors font-medium relative group"
      active-class="text-primary-500"
    >
      {{ item.name }}
      <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
    </NuxtLink>
  </nav>
</template>

<script setup>
const navigationItems = [
  { name: 'Startseite', path: '/' },
  { name: 'Leistungen', path: '/services' },
  { name: 'Über uns', path: '/about-us' },
  { name: 'Cases', path: '/cases' },
  { name: 'Blog', path: '/blog' },
  { name: 'Kontakt', path: '/contact' }
]
</script>