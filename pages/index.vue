<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- Navigation -->
    <Header />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30"></div>
        <div class="absolute inset-0 opacity-20">
          <div class="floating-particles"></div>
        </div>
      </div>
      
      <!-- Dynamic Geometric Patterns -->
      <div class="absolute inset-0 overflow-hidden">
        <svg class="absolute top-20 left-20 w-40 h-40 text-purple-500/10 animate-pulse" fill="currentColor" viewBox="0 0 100 100">
          <polygon points="50,5 20,35 35,70 65,70 80,35" />
        </svg>
        <svg class="absolute bottom-32 right-32 w-56 h-56 text-blue-500/10 animate-bounce" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="25" fill="black" />
          <circle cx="50" cy="50" r="10" fill="currentColor" />
        </svg>
        <svg class="absolute top-1/3 right-1/4 w-32 h-32 text-cyan-500/10 animate-spin-slow" fill="currentColor" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        </svg>
        <svg class="absolute bottom-1/4 left-1/4 w-28 h-28 text-green-500/10 animate-float" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50,5 L90,25 L90,75 L50,95 L10,75 L10,25 Z" />
        </svg>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 container mx-auto px-6 text-center pt-20">
        <div class="max-w-5xl mx-auto">
          <!-- Badge -->
          <div class="mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">
            <span class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-lg font-semibold text-purple-300">
              <i class="fas fa-rocket mr-3 text-yellow-400"></i>
              INTELLIGENTE AUTOMATISIERUNG MIT KI & N8N
            </span>
          </div>
          
          <!-- Main Headline -->
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none animate-fade-in-up" style="animation-delay: 0.4s;">
            <span class="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Wir befreien
            </span>
            <span class="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Ihr Business
            </span>
            <span class="block text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-light mt-4">
              von repetitiven Aufgaben
            </span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl md:text-3xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in-up" style="animation-delay: 0.6s;">
            Schaffen Sie Raum für 
            <span class="text-purple-400 font-semibold">Innovation</span> mit 
            <span class="text-blue-400 font-semibold">KI-Agenten</span> und 
            <span class="text-cyan-400 font-semibold">n8n-Workflows</span>
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col lg:flex-row gap-8 justify-center mb-16 animate-fade-in-up" style="animation-delay: 0.8s;">
            <NuxtLink to="/services" class="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl font-bold text-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-block">
              <span class="relative z-10 flex items-center justify-center">
                <i class="fas fa-magic mr-4 text-yellow-300"></i>
                Leistungen entdecken
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
            
            <NuxtLink to="/kontakt" class="group px-12 py-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-3xl font-bold text-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 inline-block">
              <span class="flex items-center justify-center">
                <i class="fas fa-calendar mr-4 text-purple-400"></i>
                Kostenlose Beratung
              </span>
            </NuxtLink>
          </div>

          <!-- Trust Indicators -->
          <!-- <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 1s;">
            <div class="text-center group">
              <div class="text-5xl font-black text-yellow-400 group-hover:scale-110 transition-transform">
                {{ animatedStats.processes }}+
              </div>
              <div class="text-lg text-gray-300 font-medium">Automatisierte Prozesse</div>
            </div>
            <div class="text-center group">
              <div class="text-5xl font-black text-yellow-400 group-hover:scale-110 transition-transform">
                {{ animatedStats.satisfaction }}%
              </div>
              <div class="text-lg text-gray-300 font-medium">Kundenzufriedenheit</div>
            </div>
            <div class="text-center group">
              <div class="text-5xl font-black text-yellow-400 group-hover:scale-110 transition-transform">
                {{ animatedStats.clients }}+
              </div>
              <div class="text-lg text-gray-300 font-medium">Zufriedene Kunden</div>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" @click="scrollToSection('trusted')">
        <div class="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center hover:border-white/60 transition-all duration-300">
          <div class="w-1 h-4 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <!-- <section id="trusted" class="py-20 bg-gray-900/50 backdrop-blur-sm border-y border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-300">
          Vertrauen von <span class="text-gradient">Innovativen Unternehmen</span>
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          <div v-for="i in 4" :key="i" class="flex justify-center group">
            <div class="h-16 w-40 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300 group-hover:scale-105">
              <span class="text-gray-400 font-bold text-lg">PARTNER {{ i }}</span>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Services Preview Section -->
    <section id="services" class="py-32 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-7xl font-black mb-6">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Unsere
            </span>
            <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
              Power Services
            </span>
          </h2>
          <p class="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Von der Beratung bis zur Implementierung: 
            Ganzheitliche Automatisierungslösungen
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- n8n Workflow Development -->
          <div class="group relative">
            <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-blue-500/20 h-full">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <i class="fas fa-project-diagram text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">n8n Workflows</h3>
                  <p class="text-purple-300 font-medium">Workflow Entwicklung</p>
                </div>
              </div>
              
              <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                Maßgeschneiderte Automationslösungen für Ihre spezifischen Geschäftsprozesse und Systemintegrationen.
              </p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-purple-400 mr-3"></i>
                  Individuelle Workflow-Entwicklung
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-purple-400 mr-3"></i>
                  Integration in bestehende Systeme
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-purple-400 mr-3"></i>
                  Testing & Qualitätssicherung
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-purple-400 mr-3"></i>
                  Dokumentation & Schulung
                </li>
              </ul>
              
              <NuxtLink to="/leistungen#workflow" class="block w-full px-6 py-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl font-semibold text-white hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 group-hover:border-purple-400 text-center">
                Workflows erkunden →
              </NuxtLink>
            </div>
          </div>

          <!-- KI & Chatbot Automation -->
          <div class="group relative">
            <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-cyan-500/20 h-full">
              <!-- Popular Badge -->
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  🔥 BELIEBT
                </span>
              </div>
              
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <i class="fas fa-robot text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">KI-Agenten</h3>
                  <p class="text-blue-300 font-medium">Chatbot-Automatisierung</p>
                </div>
              </div>
              
              <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                Intelligente Automatisierungen mit künstlicher Intelligenz für anspruchsvolle und komplexe Aufgaben.
              </p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-blue-400 mr-3"></i>
                  KI-gestützte Datenanalyse
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-blue-400 mr-3"></i>
                  Chatbot-Integration
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-blue-400 mr-3"></i>
                  Natural Language Processing
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-blue-400 mr-3"></i>
                  Predictive Analytics
                </li>
              </ul>
              
              <NuxtLink to="/leistungen#ki" class="block w-full px-6 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl font-semibold text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 group-hover:border-blue-400 text-center">
                KI-Power erleben →
              </NuxtLink>
            </div>
          </div>

          <!-- Data Integration -->
          <div class="group relative">
            <div class="bg-gradient-to-br from-cyan-500/10 to-green-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-green-500/20 h-full">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mr-4">
                  <i class="fas fa-link text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">Data Integration</h3>
                  <p class="text-cyan-300 font-medium">Synchronisation</p>
                </div>
              </div>
              
              <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                Nahtlose Verbindung Ihrer Systeme für einen reibungslosen und effizienten Datenfluss.
              </p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-cyan-400 mr-3"></i>
                  API-Integrationen
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-cyan-400 mr-3"></i>
                  Datenbank-Anbindungen
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-cyan-400 mr-3"></i>
                  Echtzeit-Synchronisation
                </li>
                <li class="flex items-center text-gray-300">
                  <i class="fas fa-check-circle text-cyan-400 mr-3"></i>
                  Sichere Datenmigration
                </li>
              </ul>
              
              <NuxtLink to="/leistungen#daten" class="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl font-semibold text-white hover:from-cyan-500/30 hover:to-green-500/30 transition-all duration-300 group-hover:border-cyan-400 text-center">
                Integration starten →
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- View All Services Button -->
        <div class="text-center mt-16">
          <NuxtLink to="/services" class="group relative px-12 py-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl font-bold text-2xl text-white overflow-hidden transition-all duration-300 hover:border-purple-400 hover:scale-105 inline-block">
            <span class="relative z-10 flex items-center justify-center">
              Alle Leistungen ansehen
              <i class="fas fa-arrow-right ml-4 group-hover:translate-x-2 transition-transform"></i>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="process" class="py-32 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-7xl font-black mb-6">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              So funktioniert's
            </span>
          </h2>
          <p class="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Unser bewährter Prozess für erfolgreiche Automatisierungsprojekte
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="index" class="text-center group">
            <div class="relative mb-8">
              <div :class="`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-3xl font-black text-white mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl`">
                {{ index + 1 }}
              </div>
              
              <!-- Connection Line -->
              <div v-if="index < processSteps.length - 1" class="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-current via-transparent to-transparent transform translate-x-12 opacity-30"></div>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
              {{ step.title }}
            </h3>
            <p class="text-gray-400 leading-relaxed text-lg">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    

    <!-- CTA Section -->
    <section class="py-32 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30"></div>
        <div class="absolute inset-0 opacity-20">
          <div class="floating-particles"></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-5xl md:text-7xl font-black mb-8">
          <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Bereit für die
          </span>
          <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
            Automatisierung?
          </span>
        </h2>
        
        <p class="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Vereinbaren Sie ein unverbindliches Beratungsgespräch und entdecken Sie die Möglichkeiten der Prozessautomatisierung für Ihr Unternehmen.
        </p>
        
        <div class="flex flex-col lg:flex-row gap-6 justify-center">
          <NuxtLink to="/kontakt" class="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl font-bold text-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-block">
            <span class="relative z-10 flex items-center justify-center">
              <i class="fas fa-calendar-check mr-4 text-yellow-300"></i>
              Termin vereinbaren
            </span>
          </NuxtLink>
          
          <NuxtLink to="/leistungen" class="group px-12 py-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-3xl font-bold text-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 inline-block">
            <span class="flex items-center justify-center">
              <i class="fas fa-book-open mr-4 text-purple-400"></i>
              Mehr erfahren
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({
  title: 'Safari Neural - Intelligente Automatisierung mit n8n & KI',
  meta: [
    { name: 'description', content: 'Wir automatisieren Ihre Geschäftsprozesse mit n8n und KI. Von der Beratung bis zur Implementierung: Wir bieten ganzheitliche Automatisierungslösungen.' }
  ]
})

// Animated stats
const animatedStats = ref({
  processes: 0,
  satisfaction: 0,
  clients: 0
})

const processSteps = [
  {
    title: 'Analyse',
    description: 'Wir analysieren Ihre Prozesse und identifizieren Automatisierungspotentiale.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Konzeption',
    description: 'Gemeinsam entwickeln wir ein Konzept für Ihre maßgeschneiderte Lösung.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Umsetzung',
    description: 'Wir implementieren die Automatisierung und integrieren sie in Ihre Systemlandschaft.',
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    title: 'Optimierung',
    description: 'Wir optimieren kontinuierlich und passen die Lösung an veränderte Anforderungen an.',
    gradient: 'from-green-500 to-green-600'
  }
]

// Animate stats on page load
onMounted(() => {
  // Animate statistics
  const animateValue = (obj, key, end, duration) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      obj[key] = Math.floor(progress * end)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  animateValue(animatedStats.value, 'processes', 500, 2000)
  animateValue(animatedStats.value, 'satisfaction', 98, 2500)
  animateValue(animatedStats.value, 'clients', 120, 3000)
})

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.floating-particles {
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.3) 0px, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.3) 0px, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(96, 165, 250, 0.3) 0px, transparent 50%),
    radial-gradient(circle at 60% 20%, rgba(45, 212, 191, 0.3) 0px, transparent 50%);
  background-size: 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  background-position: 0% 0%, 100% 100%, 40% 60%, 60% 20%;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(20px) rotate(240deg);
  }
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-spin-slow {
  animation: spin 15s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.text-gradient {
  background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>