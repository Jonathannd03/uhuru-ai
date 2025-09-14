<template>
    <div :class="[
      'rounded-xl border p-8 flex flex-col',
      featured ? 'border-primary-300 shadow-xl relative' : 'border-gray-200'
    ]">
      <div v-if="featured" class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span class="bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full">Empfohlen</span>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-6">{{ description }}</p>
      
      <div class="mb-6">
        <span class="text-4xl font-bold text-gray-900">{{ price }}</span>
        <span class="text-gray-600">/Monat</span>
      </div>
      
      <ul class="space-y-3 mb-8 flex-grow">
        <li v-for="(feature, index) in features" :key="index" class="flex items-start">
          <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-700">{{ feature }}</span>
        </li>
      </ul>
      
      <Button :variant="featured ? 'primary' : 'outline'" size="lg" class="w-full" to="/contact">
        {{ featured ? 'Kostenlos starten' : 'Mehr erfahren' }}
      </Button>
      
      <p v-if="trialInfo" class="text-sm text-gray-500 text-center mt-4">{{ trialInfo }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    price: String,
    features: Array,
    featured: Boolean,
    trialInfo: String
  })
  </script>