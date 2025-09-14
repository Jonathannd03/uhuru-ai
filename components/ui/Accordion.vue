<template>
    <div class="w-full">
      <button
        :class="[
          'flex justify-between items-center w-full py-4 px-6 text-left font-medium transition',
          isOpen ? 'bg-primary-50 text-primary-700' : 'bg-white text-gray-700 hover:bg-gray-50'
        ]"
        @click="toggle"
      >
        <span class="text-lg font-semibold">{{ title }}</span>
        <svg
          :class="[
            'w-5 h-5 transition-transform',
            isOpen ? 'transform rotate-180' : ''
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="isOpen" class="px-6 pb-4 bg-white">
          <slot />
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    isOpen: Boolean
  })
  
  const emit = defineEmits(['toggle'])
  
  const toggle = () => {
    emit('toggle')
  }
  </script>