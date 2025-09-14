<template>
    <div class="bg-white rounded-xl shadow-md p-6 h-full">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
          <img :src="image" :alt="name" class="w-full h-full object-cover">
        </div>
        <div>
          <h4 class="font-semibold">{{ name }}</h4>
          <p class="text-gray-600 text-sm">{{ position }}, {{ company }}</p>
        </div>
      </div>
      <p class="text-gray-700 italic">"{{ testimonial }}"</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    position: String,
    company: String,
    testimonial: String,
    image: String
  })
  </script>