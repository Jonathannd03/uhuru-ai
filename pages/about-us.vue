<template>
    <div class="min-h-screen bg-black text-white overflow-x-hidden">
      <!-- Navigation -->
      <Header />
      
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-secondary-900/20"></div>
          <div class="absolute inset-0 opacity-20">
            <div class="floating-particles"></div>
          </div>
        </div>
  
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-7xl font-black mb-6">
              <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Über
              </span>
              <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent block">
                Uhuru AI
              </span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Ihr Partner für intelligente Automatisierungslösungen mit n8n und KI
            </p>
          </div>
        </div>
      </section>
  
      <!-- Founder Section -->
      <section class="py-20 relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
        </div>
  
        <div class="container mx-auto px-6 relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="mb-8">
                <span class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-lg font-semibold text-primary-300">
                  <i class="fas fa-lightbulb mr-3 text-yellow-400"></i>
                  EINZELUNTERNEHMEN
                </span>
              </div>
              
              <h2 class="text-4xl md:text-5xl font-black mb-6">
                <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Jonathan Ndinga
                </span>
              </h2>
              
              <p class="text-xl text-gray-300 mb-6 leading-relaxed">
                Gründer und leidenschaftlicher Softwareentwickler mit mehr als 5 Jahren Erfahrung in der Entwicklung innovativer Lösungen.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-code text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">Software-Developer</h3>
                    <p class="text-gray-400">Über 5 Jahre Erfahrung in Softwareentwicklung </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-brain text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">KI-Spezialist</h3>
                    <p class="text-gray-400">Passionierter Entwickler von RAG KI Bots und intelligenten Systemen</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-rocket text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white mb-1">Innovator</h3>
                    <p class="text-gray-400">Spezialisiert auf die Integration von KI in Websites und Apps</p>
                  </div>
                </div>
              </div>
              
              <NuxtLink 
                to="/contact" 
                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 group"
              >
                Projekt besprechen
                <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
              </NuxtLink>
            </div>
            
            <div class="relative">
              <div class="relative z-10">
                <div class="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-500/20">
                  <div class="aspect-square w-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                    <i class="fas fa-robot text-white text-8xl"></i>
                  </div>
                </div>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Mission Section -->
      <section class="py-20 relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-black to-secondary-900/20"></div>
          <div class="absolute inset-0 opacity-10">
            <div class="floating-particles"></div>
          </div>
        </div>
  
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6">
              <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unsere Mission
              </span>
            </h2>
            <p class="text-xl text-gray-300 leading-relaxed">
              Wir möchten Ihr Business erleichtern durch intelligente Automatisierungslösungen, 
              die Zeit sparen und Prozesse optimieren.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Zeitersparnis</h3>
              <p class="text-gray-400">
                Automatisieren Sie repetitive Aufgaben und gewinnen Sie wertvolle Zeit für Ihr Kerngeschäft.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Effizienzsteigerung</h3>
              <p class="text-gray-400">
                Optimieren Sie Ihre Arbeitsabläufe und steigern Sie die Produktivität Ihres Unternehmens.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p class="text-gray-400">
                Nutzen Sie modernste KI-Technologie, um wettbewerbsfähig zu bleiben und zu wachsen.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Expertise Section -->
      <section class="py-20 relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent"></div>
        </div>
  
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6">
              <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unsere Expertise
              </span>
            </h2>
          </div>
          
          <div class="grid lg:grid-cols-2 gap-12">
            <div>
              <div class="mb-8">
                <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                  <span class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-cogs text-white text-sm"></i>
                  </span>
                  n8n Workflow Automation
                </h3>
                <p class="text-gray-400 mb-6">
                  Wir entwickeln maßgeschneiderte Automationslösungen mit n8n, die perfekt auf Ihre Geschäftsprozesse zugeschnitten sind.
                </p>
                
                <div class="space-y-3">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-primary-500 mr-3"></i>
                    <span class="text-gray-300">Datenintegration zwischen verschiedenen Systemen</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-primary-500 mr-3"></i>
                    <span class="text-gray-300">Automatisierte Berichterstellung und Benachrichtigungen</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-primary-500 mr-3"></i>
                    <span class="text-gray-300">E-Commerce Prozessautomatisierung</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                  <span class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-plug text-white text-sm"></i>
                  </span>
                  API-Entwicklung & Integration
                </h3>
                <p class="text-gray-400">
                  Nahtlose Verbindung Ihrer Software-Lösungen durch professionelle API-Entwicklung und Integration.
                </p>
              </div>
            </div>
            
            <div>
              <div class="mb-8">
                <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                  <span class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-robot text-white text-sm"></i>
                  </span>
                  RAG KI Bot Entwicklung
                </h3>
                <p class="text-gray-400 mb-6">
                  Wir entwickeln intelligente KI-Chatbots mit Retrieval-Augmented Generation (RAG) Technologie für natürliche und kontextbewusste Interaktionen.
                </p>
                
                <div class="space-y-3">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-primary-500 mr-3"></i>
                    <span class="text-gray-300">Kundensupport Automatisierung</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-primary-500 mr-3"></i>
                    <span class="text-gray-300">Datenanalyse und -interpretation</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-primary-500 mr-3"></i>
                    <span class="text-gray-300">Integration in Websites und Apps</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                  <span class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-database text-white text-sm"></i>
                  </span>
                  Datenanalyse & Processing
                </h3>
                <p class="text-gray-400">
                  Transformieren Sie Ihre Daten in wertvolle Erkenntnisse mit modernsten Analyse- und Verarbeitungstechniken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-32 relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-secondary-900/30 to-cyan-900/30"></div>
          <div class="absolute inset-0 opacity-20">
            <div class="floating-particles"></div>
          </div>
        </div>
  
        <div class="container mx-auto px-6 relative z-10 text-center">
          <h2 class="text-5xl md:text-7xl font-black mb-8">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Starten Sie Ihr
            </span>
            <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent block">
              Automatisierungsprojekt
            </span>
          </h2>
          
          <p class="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam Ihre Geschäftsprozesse optimieren und automatisieren.
          </p>
          
          <div class="flex flex-col lg:flex-row gap-6 justify-center">
            <NuxtLink to="/contact" class="group relative px-12 py-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl font-bold text-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 inline-block">
              <span class="relative z-10 flex items-center justify-center">
                <i class="fas fa-calendar-check mr-4 text-yellow-300"></i>
                Termin vereinbaren
              </span>
            </NuxtLink>
            
            <NuxtLink to="/services" class="group px-12 py-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-3xl font-bold text-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 inline-block">
              <span class="flex items-center justify-center">
                <i class="fas fa-book-open mr-4 text-primary-400"></i>
                Leistungen entdecken
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>
  
      
    </div>
  </template>
  
  <script setup>
  useHead({
    title: 'Über Uns - Uhuru AI - Intelligente Automatisierung mit n8n & KI',
    meta: [
      { name: 'description', content: 'Uhuru AI wurde von Jonathan Ndinga gegründet, einem Softwareentwickler mit über 5 Jahren Erfahrung, der sich auf n8n Automatisierung und KI-Integration spezialisiert hat.' }
    ]
  })
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
  </style>