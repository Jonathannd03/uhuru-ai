<template>
  <div :class="cardClasses">
    <!-- Icon -->
    <div :class="iconWrapperClasses">
      <i :class="icon" class="text-white text-2xl"></i>
    </div>
    
    <!-- Popular Badge -->
    <div v-if="popular" class="flex items-center justify-between mb-4">
      <span></span>
      <span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">BELIEBT</span>
    </div>
    
    <!-- Title -->
    <h3 class="text-xl font-bold text-gray-800 mb-4">{{ title }}</h3>
    
    <!-- Features -->
    <ul class="space-y-2 text-gray-600 mb-6">
      <li v-for="feature in features" :key="feature" class="flex items-start">
        <span class="text-primary-500 mr-2">•</span>
        <span>{{ feature }}</span>
      </li>
    </ul>
    
    <!-- Price -->
    <div class="mb-4">
      <div :class="priceClasses">{{ price }}</div>
      <div class="text-sm text-gray-500">{{ priceSubtext }}</div>
    </div>
    
    <!-- CTA Button -->
    <Button 
      :variant="popular ? 'primary' : 'outline'" 
      full-width
      @click="$emit('select', { title, price })"
    >
      {{ ctaText || 'Mehr erfahren' }}
    </Button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  priceSubtext: {
    type: String,
    default: ''
  },
  ctaText: String,
  color: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'purple', 'yellow', 'green', 'red'].includes(value)
  },
  popular: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select'])

const cardClasses = computed(() => {
  const base = 'p-8 rounded-2xl hover-lift transition-all duration-300'
  
  const colors = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100',
    yellow: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    green: 'bg-gradient-to-br from-green-50 to-green-100',
    red: 'bg-gradient-to-br from-red-50 to-red-100'
  }
  
  let classes = [base, colors[props.color]]
  
  if (props.popular) {
    classes.push('border-4 border-yellow-300 shadow-xl')
  }
  
  return classes.join(' ')
})

const iconWrapperClasses = computed(() => {
  const base = 'w-16 h-16 rounded-xl flex items-center justify-center mb-6'
  
  const colors = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    red: 'bg-red-500'
  }
  
  return `${base} ${colors[props.color]}`
})

const priceClasses = computed(() => {
  const base = 'text-2xl font-bold mb-2'
  
  const colors = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    yellow: 'text-yellow-600',
    green: 'text-green-600',
    red: 'text-red-600'
  }
  
  return `${base} ${colors[props.color]}`
})
</script>