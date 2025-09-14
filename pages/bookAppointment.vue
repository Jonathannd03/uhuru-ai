<template>
    <div class="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8 mt-[3rem]" >
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Termin vereinbaren
            </span>
          </h1>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Buchen Sie eine kostenlose Beratung für Ihre Automatisierungsprojekte oder chat Bot mit n8n und KI.
          </p>
        </div>
  
        <!-- Booking Container -->
        <div class="bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800/50 overflow-hidden">
          <div class="grid md:grid-cols-2 gap-0">
            <!-- Calendar Section -->
            <div class="p-6 border-r border-gray-800/50">
              <div class="mb-6">
                <h2 class="text-2xl font-semibold mb-2">Verfügbare Termine</h2>
                <p class="text-gray-400 text-sm">Wählen Sie ein passendes Datum und Zeitfenster</p>
              </div>
  
              <!-- Date Navigation -->
              <div class="flex items-center justify-between mb-6">
                <button 
                  @click="previousMonth" 
                  class="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                >
                  <i class="fas fa-chevron-left text-cyan-400"></i>
                </button>
                <h3 class="text-lg font-medium">{{ currentMonth }} {{ currentYear }}</h3>
                <button 
                  @click="nextMonth" 
                  class="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                >
                  <i class="fas fa-chevron-right text-cyan-400"></i>
                </button>
              </div>
  
              <!-- Calendar Grid -->
              <div class="grid grid-cols-7 gap-2 mb-6">
                <div v-for="day in ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']" :key="day" class="text-center text-gray-500 text-sm py-2">
                  {{ day }}
                </div>
                <div 
                  v-for="day in calendarDays" 
                  :key="day.date"
                  @click="selectDate(day)"
                  :class="[
                    'text-center py-3 rounded-lg cursor-pointer transition-all',
                    day.isCurrentMonth ? 'text-white hover:bg-cyan-500/10' : 'text-gray-600',
                    day.isToday ? 'bg-cyan-500/20 text-cyan-400' : '',
                    selectedDate && selectedDate.date === day.date ? 'bg-cyan-500/30 text-white ring-2 ring-cyan-400' : ''
                  ]"
                >
                  {{ day.day }}
                </div>
              </div>
  
              <!-- Time Slots -->
              <div v-if="selectedDate" class="mt-6">
                <h4 class="text-lg font-medium mb-4">Verfügbare Uhrzeiten</h4>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="time in availableTimes"
                    :key="time"
                    @click="selectTime(time)"
                    :class="[
                      'py-3 px-4 rounded-xl border transition-all',
                      selectedTime === time 
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                        : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-400/50'
                    ]"
                  >
                    {{ time }}
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Form Section -->
            <div class="p-6 bg-gray-900/60">
              <div class="mb-6">
                <h2 class="text-2xl font-semibold mb-2">Ihre Daten</h2>
                <p class="text-gray-400 text-sm">Füllen Sie das Formular aus, um Ihren Termin zu bestätigen</p>
              </div>
  
              <form @submit.prevent="submitBooking" class="space-y-5">
                <div>
                  <label class="block text-sm font-medium text-gray-400 mb-2">Vollständiger Name</label>
                  <input
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all"
                    placeholder="Max Mustermann"
                  >
                </div>
  
                <div>
                  <label class="block text-sm font-medium text-gray-400 mb-2">E-Mail Adresse</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all"
                    placeholder="max@mustermann.de"
                  >
                </div>
  
                <div>
                  <label class="block text-sm font-medium text-gray-400 mb-2">Telefonnummer</label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all"
                    placeholder="+49 123 456789"
                  >
                </div>
  
                <div>
                  <label class="block text-sm font-medium text-gray-400 mb-2">Unternehmen</label>
                  <input
                    v-model="formData.company"
                    type="text"
                    class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all"
                    placeholder="Mustermann GmbH"
                  >
                </div>
  
                <div>
                  <label class="block text-sm font-medium text-gray-400 mb-2">Projektbeschreibung</label>
                  <textarea
                    v-model="formData.message"
                    rows="3"
                    class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all"
                    placeholder="Beschreiben Sie kurz Ihr Automatisierungsvorhaben..."
                  ></textarea>
                </div>
  
                <div class="flex items-center">
                  <input
                    v-model="formData.agreeTerms"
                    type="checkbox"
                    required
                    class="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-700 rounded focus:ring-cyan-500/50"
                  >
                  <label class="ml-3 text-sm text-gray-400">
                    Ich stimme den <a href="#" class="text-cyan-400 hover:text-cyan-300">Datenschutzbestimmungen</a> zu
                  </label>
                </div>
  
                <button
                  type="submit"
                  :disabled="!isFormComplete"
                  :class="[
                    'w-full py-3 px-4 rounded-xl font-medium transition-all',
                    isFormComplete
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  ]"
                >
                  <span v-if="loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    Wird gebucht...
                  </span>
                  <span v-else>
                    Termin buchen
                  </span>
                </button>
              </form>
  
              <!-- Appointment Summary -->
              <div v-if="selectedDate && selectedTime" class="mt-6 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <h4 class="text-lg font-medium text-cyan-300 mb-2">Ihr Termin</h4>
                <p class="text-sm">
                  <span class="text-cyan-400">{{ selectedDate.formatted }}</span> um 
                  <span class="text-cyan-400">{{ selectedTime }}</span> Uhr
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Success Modal -->
        <div v-if="showSuccess" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div class="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-cyan-500/30">
            <div class="text-center">
              <div class="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-check text-cyan-400 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Termin gebucht!</h3>
              <p class="text-gray-400 mb-6">
                Vielen Dank für Ihre Buchung. Wir haben eine Bestätigung an 
                <span class="text-cyan-400">{{ formData.email }}</span> gesendet.
              </p>
              <button
                @click="resetForm"
                class="px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-xl transition-colors"
              >
                Neuen Termin buchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  
  const currentDate = ref(new Date())
  const selectedDate = ref(null)
  const selectedTime = ref(null)
  const loading = ref(false)
  const showSuccess = ref(false)
  
  const formData = ref({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    agreeTerms: false
  })
  
  // Generate calendar days
  const calendarDays = computed(() => {
    const year = currentDate.value.getFullYear()
    const month = currentDate.value.getMonth()
    
    // First day of the month
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    
    // Days from previous month to show
    const daysFromPrevMonth = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
    
    const days = []
    
    // Previous month days
    for (let i = daysFromPrevMonth; i > 0; i--) {
      const date = new Date(year, month, -i + 1)
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        isCurrentMonth: false,
        isToday: false
      })
    }
    
    // Current month days
    const today = new Date().toDateString()
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i)
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        isCurrentMonth: true,
        isToday: date.toDateString() === today,
        formatted: date.toLocaleDateString('de-DE', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      })
    }
    
    // Next month days (to complete the grid)
    const daysNeeded = 42 - days.length // 6 rows of 7 days
    for (let i = 1; i <= daysNeeded; i++) {
      const date = new Date(year, month + 1, i)
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        isCurrentMonth: false,
        isToday: false
      })
    }
    
    return days
  })
  
  const currentMonth = computed(() => {
    return currentDate.value.toLocaleDateString('de-DE', { month: 'long' })
  })
  
  const currentYear = computed(() => {
    return currentDate.value.getFullYear()
  })
  
  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ]
  
  const isFormComplete = computed(() => {
    return selectedDate.value && selectedTime.value && 
           formData.value.name && formData.value.email && 
           formData.value.agreeTerms
  })
  
  function previousMonth() {
    currentDate.value = new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth() - 1,
      1
    )
  }
  
  function nextMonth() {
    currentDate.value = new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth() + 1,
      1
    )
  }
  
  function selectDate(day) {
    if (day.isCurrentMonth) {
      selectedDate.value = day
    }
  }
  
  function selectTime(time) {
    selectedTime.value = time
  }
  
  async function submitBooking() {
    if (!isFormComplete.value) return
    
    loading.value = true
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    loading.value = false
    showSuccess.value = true
    
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', {
      ...formData.value,
      date: selectedDate.value,
      time: selectedTime.value
    })
  }
  
  function resetForm() {
    selectedDate.value = null
    selectedTime.value = null
    formData.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      agreeTerms: false
    }
    showSuccess.value = false
  }
  
  onMounted(() => {
    // Set today as default selected date
    const today = calendarDays.value.find(day => day.isToday)
    if (today) {
      selectedDate.value = today
    }
  })
  </script>
  
  <style scoped>
  /* Smooth transitions */
  input, textarea, button, select {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Custom calendar styling */
  .calendar-day {
    transition: all 0.2s ease;
  }
  
  /* Focus styles for accessibility */
  input:focus, textarea:focus, select:focus {
    box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.1);
  }
  
  /* Scrollbar styling for webkit browsers */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(31, 41, 55, 0.4);
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(34, 211, 238, 0.4);
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(34, 211, 238, 0.6);
  }
  </style>