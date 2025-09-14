<template>
    <div class="min-h-screen bg-black text-white">
      <!-- Navigation -->
      <Header />
  
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 overflow-hidden">
        <!-- Animated Background -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
          <div class="absolute inset-0 opacity-10">
            <div class="floating-particles"></div>
          </div>
        </div>
  
        <!-- Geometric Patterns -->
        <div class="absolute inset-0 overflow-hidden">
          <svg class="absolute top-20 right-20 w-32 h-32 text-purple-500/10 animate-pulse" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg class="absolute bottom-20 left-20 w-40 h-40 text-blue-500/10 animate-bounce" fill="currentColor" viewBox="0 0 100 100">
            <polygon points="50,5 20,35 35,70 65,70 80,35" />
          </svg>
        </div>
  
        <div class="container mx-auto px-6 relative z-10">
          <div class="text-center mb-16">
            <div class="mb-6">
              <span class="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-lg font-semibold text-purple-300">
                <i class="fas fa-handshake mr-3 text-yellow-400"></i>
                LASSEN SIE UNS SPRECHEN
              </span>
            </div>
            
            <h1 class="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span class="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Kontaktieren
              </span>
              <span class="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Sie uns
              </span>
            </h1>
            
            <p class="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bereit für die <span class="text-purple-400 font-semibold">Automatisierung</span>? 
              Lassen Sie uns über Ihre <span class="text-blue-400 font-semibold">Herausforderungen</span> sprechen.
            </p>
          </div>
  
          <!-- Contact Options Grid -->
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div class="text-center p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">E-Mail</h3>
              <p class="text-gray-300 mb-4">Schreiben Sie uns eine Nachricht</p>
              <a href="mailto:hello@uhuru-ai.de" class="text-purple-400 hover:text-purple-300 font-semibold text-lg transition-colors">
                hello@uhuru-ai.de
              </a>
            </div>
  
            <div class="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Telefon</h3>
              <p class="text-gray-300 mb-4">Rufen Sie uns direkt an</p>
              <a href="tel:+4930123456789" class="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors">
                +49 (0) 17 664669520
              </a>
            </div>
  
            <div class="text-center p-8 bg-gradient-to-br from-cyan-500/10 to-green-500/10 backdrop-blur-sm rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Antwortzeit</h3>
              <p class="text-gray-300 mb-4">Schnelle Rückmeldung garantiert</p>
              <span class="text-cyan-400 font-semibold text-lg">
                &lt; 24 Stunden
              </span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Main Contact Section -->
      <section class="py-20 relative">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <!-- Contact Form -->
            <div class="animate-fade-in-up">
              <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                <div class="mb-8">
                  <h2 class="text-4xl font-bold text-white mb-4">
                    Nachricht senden
                  </h2>
                  <p class="text-xl text-gray-300">
                    Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
  
                <ContactForm />
              </div>
            </div>
  
            <!-- Appointment Booking -->
            <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
              <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                <div class="mb-8">
                  <h2 class="text-4xl font-bold text-white mb-4">
                    Termin buchen
                  </h2>
                  <p class="text-xl text-gray-300">
                    Buchen Sie direkt einen kostenlosen Beratungstermin. Wir besprechen Ihre Automatisierungsziele.
                  </p>
                </div>
  
                <AppointmentBooking />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Additional Info Section -->
      <section class="py-20 bg-gray-900/30">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                Weitere <span class="text-gradient">Informationen</span>
              </h2>
              <p class="text-xl text-gray-400">
                Alles was Sie über unseren Service wissen müssen
              </p>
            </div>
  
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- FAQ Card -->
              <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <i class="fas fa-question-circle text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-4">Häufige Fragen</h3>
                <p class="text-gray-300 mb-6">
                  Antworten auf die wichtigsten Fragen zu unseren Services und Automatisierungslösungen.
                </p>
                <NuxtLink to="/faq" class="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  FAQ ansehen →
                </NuxtLink>
              </div>
  
              <!-- Case Studies Card -->
              <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <i class="fas fa-chart-line text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-4">Erfolgsgeschichten</h3>
                <p class="text-gray-300 mb-6">
                  Sehen Sie, wie andere Unternehmen von unseren KI-Agenten und n8n-Workflows profitiert haben.
                </p>
                <NuxtLink to="/cases" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Cases ansehen →
                </NuxtLink>
              </div>
  
              <!-- Blog Card -->
              <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center mb-6">
                  <i class="fas fa-blog text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-4">Blog & Insights</h3>
                <p class="text-gray-300 mb-6">
                  Aktuelle Trends, Best Practices und Tipps rund um KI-Automatisierung und n8n-Workflows.
                </p>
                <NuxtLink to="/blog" class="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                  Blog lesen →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Office Info Section -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
              <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 class="text-3xl font-bold text-white mb-6">
                    Unser Standort
                  </h2>
                  <div class="space-y-4 text-gray-300">
                    <div class="flex items-start space-x-4">
                      <i class="fas fa-map-marker-alt text-purple-400 mt-1"></i>
                      <div>
                        <div class="font-semibold text-white">Adresse</div>
                        <div>
                          Uhuru AI Agency<br>
                          Kremerstraße 53<br>
                          47051 Duisburg, Deutschland
                        </div>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                
                <div class="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                  <h3 class="text-xl font-bold text-white mb-4">Erreichbarkeit</h3>
                  <div class="space-y-2 text-gray-300">
                    <div class="flex justify-between">
                      <span>Montag - Freitag</span>
                      <span class="text-white">09:00 - 18:00</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Samstag</span>
                      <span class="text-white">10:00 - 14:00</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Sonntag</span>
                      <span class="text-gray-500">Geschlossen</span>
                    </div>
                  </div>
                  
                  <div class="mt-6 pt-6 border-t border-gray-600">
                    <div class="flex items-center space-x-3">
                      <i class="fas fa-headset text-green-400"></i>
                      <div>
                        <div class="font-semibold text-white">24/7 Support</div>
                        <div class="text-sm text-gray-400">Für Enterprise Kunden</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  useHead({
    title: 'Kontakt - Uhuru AI Agency - Kostenlose Beratung',
    meta: [
      { name: 'description', content: 'Kontaktieren Sie Uhuru AI Agency für eine kostenlose Beratung zu KI-Agenten und n8n-Automatisierung. Buchen Sie einen Termin oder senden Sie uns eine Nachricht.' },
      { name: 'keywords', content: 'Kontakt, Beratung, KI Automatisierung, n8n Support, Termin buchen' }
    ]
  })
  </script>
  
  <style scoped>
  .floating-particles {
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba(167, 139, 250, 0.2), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(59, 130, 246, 0.2), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(34, 211, 238, 0.2), transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    animation: float-particles 20s linear infinite;
  }
  
  @keyframes float-particles {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-200px, -100px, 0); }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  </style>