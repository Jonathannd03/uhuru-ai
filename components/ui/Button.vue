<template>
  <component 
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon" class="mr-2"></i>
    <slot />
    <i v-if="iconRight" :class="iconRight" class="ml-2"></i>
  </component>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  to: String,
  href: String,
  type: {
    type: String,
    default: 'button'
  },
  disabled: Boolean,
  loading: Boolean,
  icon: String,
  iconRight: String,
  fullWidth: Boolean
})

const emit = defineEmits(['click'])

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:opacity-90 focus:ring-primary-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }
  
  const classes = [base, variants[props.variant], sizes[props.size]]
  
  if (props.fullWidth) classes.push('w-full')
  if (props.disabled || props.loading) classes.push('opacity-50 cursor-not-allowed')
  
  return classes.join(' ')
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>