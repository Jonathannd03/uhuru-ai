<template>
    <div :class="cardClasses">
      <div v-if="$slots.header || title" class="px-6 py-4 border-b border-gray-200">
        <slot name="header">
          <h3 v-if="title" class="text-lg font-semibold text-gray-900">{{ title }}</h3>
        </slot>
      </div>
      
      <div :class="bodyClasses">
        <slot />
      </div>
      
      <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <slot name="footer" />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    hover: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl', 'none'].includes(value)
    },
    rounded: {
      type: String,
      default: 'lg',
      validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl', 'none'].includes(value)
    },
    padding: {
      type: String,
      default: '6'
    },
    background: {
      type: String,
      default: 'white'
    }
  })
  
  const cardClasses = computed(() => {
    const base = 'overflow-hidden border border-gray-200'
    
    const shadows = {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      none: ''
    }
    
    const rounded = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      none: ''
    }
    
    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      transparent: 'bg-transparent'
    }
    
    let classes = [
      base,
      shadows[props.shadow],
      rounded[props.rounded],
      backgrounds[props.background] || `bg-${props.background}`
    ]
    
    if (props.hover) {
      classes.push('hover-lift cursor-pointer')
    }
    
    return classes.filter(Boolean).join(' ')
  })
  
  const bodyClasses = computed(() => {
    return `p-${props.padding}`
  })
  </script>