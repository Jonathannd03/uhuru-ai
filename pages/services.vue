<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section with Parallax Effect -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div class="absolute inset-0 opacity-30">
          <div class="floating-particles"></div>
        </div>
      </div>
      
      <!-- Geometric Patterns -->
      <div class="absolute inset-0 overflow-hidden">
        <svg class="absolute top-10 left-10 w-32 h-32 text-purple-500/10 animate-pulse" fill="currentColor" viewBox="0 0 100 100">
          <polygon points="50,5 20,35 35,70 65,70 80,35" />
        </svg>
        <svg class="absolute bottom-20 right-20 w-40 h-40 text-blue-500/10 animate-bounce" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="25" fill="black" />
        </svg>
        <svg class="absolute top-1/3 right-1/4 w-24 h-24 text-cyan-500/10 animate-spin" fill="currentColor" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 container mx-auto px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="mb-6">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-4">
              KI-GESTEUERTE AUTOMATISIERUNG
            </span>
          </div>
          
          <h1 class="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span class="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Unsere
            </span>
            <br>
            <span class="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Leistungen
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Revolutionieren Sie Ihr Unternehmen mit hochmodernen 
            <span class="text-purple-400 font-medium">KI-Agenten</span> und 
            <span class="text-blue-400 font-medium">n8n-Automatisierungen</span>
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <NuxtLink to='/contact' class="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span class="relative z-10">Kostenlose Beratung</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
            
            <button class="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              <i class="fas fa-play mr-3 text-purple-400"></i>
              Mit dem KI-Bot reden
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="relative py-32 overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div class="relative z-10 container mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-black mb-6">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Zwei Services,
            </span>
            <br>
            <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Unendliche Möglichkeiten
            </span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Spezialisiert auf die Zukunft der Automatisierung
          </p>
        </div>

        <!-- AI Agents Service -->
        <div class="mb-32">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
              <div class="flex items-center space-x-4 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-robot text-white text-2xl"></i>
                </div>
                <div>
                  <span class="text-sm font-medium text-purple-400 uppercase tracking-wide">SERVICE 01</span>
                  <h3 class="text-4xl font-black text-white">KI-Agenten</h3>
                </div>
              </div>
              
              <p class="text-xl text-gray-300 leading-relaxed mb-8">
                Entwickeln Sie intelligente Agenten, die komplexe Aufgaben autonom ausführen. 
                Von Kundenservice bis zur Datenanalyse – unsere KI-Agenten arbeiten rund um die Uhr.
              </p>

              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="group">
                  <div class="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10">
                    <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i class="fas fa-brain text-purple-400 text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-2">Intelligente Entscheidungen</h4>
                      <p class="text-sm text-gray-400">Agenten lernen und verbessern sich kontinuierlich</p>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10">
                    <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i class="fas fa-comments text-purple-400 text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-2">Natural Language</h4>
                      <p class="text-sm text-gray-400">Natürliche Kommunikation mit Kunden</p>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10">
                    <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i class="fas fa-chart-line text-purple-400 text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-2">Predictive Analytics</h4>
                      <p class="text-sm text-gray-400">Vorausschauende Datenanalyse</p>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10">
                    <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i class="fas fa-shield-alt text-purple-400 text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-2">Enterprise Security</h4>
                      <p class="text-sm text-gray-400">DSGVO-konforme Implementierung</p>
                    </div>
                  </div>
                </div>
              </div>

              <button class="group relative px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl font-semibold text-lg text-white overflow-hidden transition-all duration-300 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30">
                <span class="relative z-10 flex items-center">
                  KI-Agenten erkunden
                  <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </button>
            </div>

            <!-- AI Visualization -->
            <div class="relative">
              <div class="relative p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl border border-purple-500/20">
                <!-- AI Agent Dashboard Mockup -->
                <div class="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center space-x-3">
                      <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span class="text-sm text-gray-400">KI-Agent Dashboard</span>
                  </div>
                  
                  <div class="space-y-4">
                    <div class="flex items-center justify-between p-4 bg-purple-500/20 rounded-xl">
                      <div class="flex items-center space-x-3">
                        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span class="text-sm text-white">Customer Support Agent</span>
                      </div>
                      <span class="text-sm text-purple-300">247 Tickets bearbeitet</span>
                    </div>
                    
                    <div class="flex items-center justify-between p-4 bg-blue-500/20 rounded-xl">
                      <div class="flex items-center space-x-3">
                        <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span class="text-sm text-white">Data Analysis Agent</span>
                      </div>
                      <span class="text-sm text-blue-300">89 Berichte generiert</span>
                    </div>
                    
                    <div class="flex items-center justify-between p-4 bg-cyan-500/20 rounded-xl">
                      <div class="flex items-center space-x-3">
                        <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span class="text-sm text-white">Content Agent</span>
                      </div>
                      <span class="text-sm text-cyan-300">156 Posts erstellt</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 animate-float"></div>
              <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- n8n Automation Service -->
        <div>
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- n8n Visualization -->
            <div class="relative lg:order-1">
              <div class="relative p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl border border-blue-500/20">
                <!-- n8n Workflow Mockup -->
                <div class="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center space-x-3">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ea4b71'%3E%3Cpath d='M12 0L24 12L12 24L0 12Z'/%3E%3C/svg%3E" alt="n8n" class="w-6 h-6">
                      <span class="text-sm text-white font-semibold">n8n Workflow</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span class="text-xs text-green-400">Aktiv</span>
                    </div>
                  </div>
                  
                  <div class="space-y-3">
                    <div class="flex items-center space-x-4 p-3 bg-green-500/20 rounded-lg">
                      <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <i class="fas fa-play text-white text-xs"></i>
                      </div>
                      <div class="flex-1">
                        <div class="text-sm text-white">Email Trigger</div>
                        <div class="text-xs text-gray-400">Neue E-Mail empfangen</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-center">
                      <div class="w-px h-6 bg-gray-600"></div>
                    </div>
                    
                    <div class="flex items-center space-x-4 p-3 bg-blue-500/20 rounded-lg">
                      <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <i class="fas fa-cog text-white text-xs"></i>
                      </div>
                      <div class="flex-1">
                        <div class="text-sm text-white">Data Processing</div>
                        <div class="text-xs text-gray-400">KI-Analyse & Kategorisierung</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-center">
                      <div class="w-px h-6 bg-gray-600"></div>
                    </div>
                    
                    <div class="flex items-center space-x-4 p-3 bg-purple-500/20 rounded-lg">
                      <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <i class="fas fa-paper-plane text-white text-xs"></i>
                      </div>
                      <div class="flex-1">
                        <div class="text-sm text-white">Auto Response</div>
                        <div class="text-xs text-gray-400">Intelligente Antwort senden</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 animate-bounce"></div>
              <div class="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full opacity-10 animate-pulse"></div>
            </div>

            <div class="space-y-8 lg:order-2">
              <div class="flex items-center space-x-4 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-project-diagram text-white text-2xl"></i>
                </div>
                <div>
                  <span class="text-sm font-medium text-blue-400 uppercase tracking-wide">SERVICE 02</span>
                  <h3 class="text-4xl font-black text-white">n8n Automatisierung</h3>
                </div>
              </div>
              
              <p class="text-xl text-gray-300 leading-relaxed mb-8">
                Verbinden Sie alle Ihre Tools und Services mit leistungsstarken n8n-Workflows. 
                Von einfachen Integrationen bis zu komplexen Geschäftsprozessen.
              </p>

              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="group">
                  <div class="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
                    <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i class="fas fa-link text-blue-400 text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-2">API-Integration</h4>
                      <p class="text-sm text-gray-400">Verbinden Sie hunderte von Services</p>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
                    <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i class="fas fa-sync text-blue-400 text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-2">Real-time Sync</h4>
                      <p class="text-sm text-gray-400">Daten in Echtzeit synchronisieren</p>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
                    <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i class="fas fa-code-branch text-blue-400 text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-2">Conditional Logic</h4>
                      <p class="text-sm text-gray-400">Intelligente Verzweigungen</p>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
                    <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i class="fas fa-clock text-blue-400 text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-2">Scheduling</h4>
                      <p class="text-sm text-gray-400">Zeitgesteuerte Automatisierung</p>
                    </div>
                  </div>
                </div>
              </div>

              <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl font-semibold text-lg text-white overflow-hidden transition-all duration-300 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30">
                <span class="relative z-10 flex items-center">
                  n8n Workflows entdecken
                  <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
        <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      <div class="relative z-10 container mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-black mb-6">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Unser Prozess
            </span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Vier Schritte zur perfekten Automatisierung
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="index" class="text-center group">
            <div class="relative mb-8">
              <div :class="`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-2xl font-black text-white mb-6 group-hover:scale-110 transition-transform duration-300`">
                {{ index + 1 }}
              </div>
              
              <!-- Connection Line (except for last item) -->
              <div v-if="index < processSteps.length - 1" class="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent transform translate-x-10"></div>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
              {{ step.title }}
            </h3>
            <p class="text-gray-400 leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20"></div>
        <div class="absolute inset-0 opacity-10">
          <div class="floating-particles"></div>
        </div>
      </div>

      <div class="relative z-10 container mx-auto px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-5xl md:text-6xl font-black mb-8">
            <span class="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Bereit für die
            </span>
            <br>
            <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Automatisierung?
            </span>
          </h2>
          
          <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam analysieren, wie KI-Agenten und n8n-Workflows 
            Ihr Unternehmen revolutionieren können.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button class="group relative px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span class="relative z-10">Kostenlose Beratung buchen</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button class="group px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              <i class="fas fa-calendar mr-3 text-purple-400"></i>
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const processSteps = [
  {
    title: 'Analyse',
    description: 'Wir analysieren Ihre Prozesse und identifizieren KI-Potentiale für Agenten und n8n-Workflows.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Konzeption',
    description: 'Gemeinsame Entwicklung einer maßgeschneiderten Lösung mit KI-Agenten und n8n-Integration.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Implementierung',
    description: 'Professionelle Umsetzung der KI-Agenten und n8n-Workflows in Ihrer Systemlandschaft.',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    title: 'Optimierung',
    description: 'Kontinuierliche Verbesserung und Anpassung der KI-Agenten und n8n-Workflows an neue Anforderungen.',
    gradient: 'from-green-500 to-emerald-500'
  }
]

useHead({
  title: 'Leistungen - Uhuru AI - KI-Agenten & n8n Automatisierung',
  meta: [
    { name: 'description', content: 'Entdecken Sie unsere Spezialisierungen: Intelligente KI-Agenten und leistungsstarke n8n-Automatisierungen für moderne Unternehmen.' },
    { name: 'keywords', content: 'KI-Agenten, n8n Automatisierung, Workflow Automation, AI Agents, Chatbots, Process Automation' }
  ]
})
</script>

<style scoped>
.floating-particles {
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(167, 139, 250, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(59, 130, 246, 0.3), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(34, 211, 238, 0.3), transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(147, 51, 234, 0.3), transparent),
    radial-gradient(2px 2px at 160px 30px, rgba(79, 70, 229, 0.3), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: float-particles 20s linear infinite;
}

@keyframes float-particles {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-200px, -100px, 0); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #8b5cf6, #3b82f6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #7c3aed, #2563eb);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom animations for better performance */
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-bounce,
  .animate-pulse,
  .animate-spin {
    animation: none;
  }
  
  .floating-particles {
    animation: none;
  }
}

/* Responsive text sizing */
@media (max-width: 640px) {
  .text-6xl {
    font-size: 3.5rem;
  }
  
  .text-8xl {
    font-size: 4.5rem;
  }
}

/* Improved focus states for accessibility */
button:focus,
a:focus {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

/* Enhanced hover effects */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Loading states for better UX */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

</style>
