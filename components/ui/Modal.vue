<template>
    <transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75" @click="close"></div>
          </div>
  
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
          <div class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <button
              @click="close"
              class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  const props = defineProps({
    isOpen: Boolean
  })
  
  const emit = defineEmits(['close'])
  
  const close = () => {
    emit('close')
  }
  
  // Close on ESC key
  const handleEscape = (e) => {
    if (e.key === 'Escape' && props.isOpen) {
      close()
    }
  }
  
  onMounted(() => {
    document.addEventListener('keydown', handleEscape)
  })
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
  </script>
  
  <style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  </style>