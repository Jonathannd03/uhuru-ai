<template>
    <div class="w-full">
      <div class="border-b border-gray-200">
        <nav class="flex -mb-px space-x-8">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="[
              'py-4 px-1 text-sm font-medium border-b-2 transition whitespace-nowrap',
              activeTab === index
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
            @click="setActiveTab(index)"
          >
            {{ tab.title }}
          </button>
        </nav>
      </div>
      
      <div class="mt-6">
        <slot :name="`tab-${activeTab}`" />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    tabs: Array,
    initialTab: {
      type: Number,
      default: 0
    }
  })
  
  const activeTab = ref(props.initialTab)
  
  const setActiveTab = (index) => {
    activeTab.value = index
  }
  </script>