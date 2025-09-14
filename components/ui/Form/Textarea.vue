<template>
    <div class="w-full">
      <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-1">
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </label>
      
      <textarea
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :rows="rows"
        :class="[
          'w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition',
          error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
        ]"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      
      <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
      <p v-else-if="help" class="mt-1 text-sm text-gray-500">{{ help }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: String,
    id: String,
    label: String,
    placeholder: String,
    required: Boolean,
    disabled: Boolean,
    error: String,
    help: String,
    rows: {
      type: Number,
      default: 4
    }
  })
  
  defineEmits(['update:modelValue'])
  </script>