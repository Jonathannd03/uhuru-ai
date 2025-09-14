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
                Faire
              </span>
              <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent block">
                Preisgestaltung
              </span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transparente Preismodelle, die sich an Ihrem Erfolg orientieren
            </p>
            
            <div class="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-star text-white text-lg"></i>
                </div>
                <div class="text-left">
                  <h3 class="text-lg font-semibold text-white mb-2">1 Woche kostenlose Testphase</h3>
                  <p class="text-gray-300">Testen Sie unsere Lösungen uneingeschränkt - erst danach entscheiden wir gemeinsam über den fairen Preis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Pricing Philosophy Section -->
      <section class="py-20 relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
        </div>
  
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6">
              <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unsere Philosophie
              </span>
            </h2>
            <p class="text-xl text-gray-300 leading-relaxed">
              Fairer Preis basierend auf Wertschöpfung, nicht auf Standardpaketen
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-500/20">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-4">
                    <i class="fas fa-handshake text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Individuell & Fair</h3>
                  </div>
                </div>
                
                <p class="text-gray-300 mb-6 leading-relaxed">
                  Wir glauben an faire Preise, die sich an Ihrem tatsächlichen Nutzen und Erfolg orientieren. 
                  Nach einer kostenlosen Testwoche entwickeln wir gemeinsam ein Preismodell, das zu Ihrem 
                  Unternehmen passt.
                </p>
                
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-primary-500 mr-3 mt-1"></i>
                    <span class="text-gray-300">Keine versteckten Kosten</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-primary-500 mr-3 mt-1"></i>
                    <span class="text-gray-300">Transparente Aufschlüsselung</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-primary-500 mr-3 mt-1"></i>
                    <span class="text-gray-300">Skalierbare Modelle die mit Ihnen wachsen</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="relative">
              <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                <h3 class="text-2xl font-bold text-white mb-6 text-center">So funktioniert's</h3>
                
                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span class="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 class="text-lg font-semibold text-white mb-1">Kostenlose Testwoche</h4>
                      <p class="text-gray-400">Testen Sie unsere Lösungen uneingeschränkt</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span class="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 class="text-lg font-semibold text-white mb-1">Gemeinsame Auswertung</h4>
                      <p class="text-gray-400">Analysieren wir den Nutzen und ROI für Ihr Business</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span class="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 class="text-lg font-semibold text-white mb-1">Individuelles Angebot</h4>
                      <p class="text-gray-400">Erstellen wir ein faires, maßgeschneidertes Preismodell</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span class="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 class="text-lg font-semiband text-white mb-1">Umsetzung & Support</h4>
                      <p class="text-gray-400">Starten Sie durch mit unserer kontinuierlichen Unterstützung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Pricing Factors Section -->
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
                  Wie sich der Preis
              </span>
              <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent block">
                  zusammensetzt
              </span>
            </h2>
            <p class="text-xl text-gray-300 leading-relaxed">
              Transparente Aufschlüsselung der Faktoren, die in die Preisgestaltung einfließen
            </p>
          </div>
          
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Technical Factors -->
            <div>
              <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                <span class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                  <i class="fas fa-cogs text-white text-sm"></i>
                </span>
                Technische Faktoren
              </h3>
              
              <div class="space-y-6">
                <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                  <h4 class="text-lg font-semibold text-white mb-2 flex items-center">
                    <i class="fas fa-brain text-primary-500 mr-2"></i>
                    KI-Modell-Komplexität
                  </h4>
                  <p class="text-gray-400 text-sm">
                    Verschiedene KI-Modelle haben unterschiedliche Kosten. Einfache Klassifikationsmodelle sind günstiger als komplexe Generative AI oder Multimodale Modelle.
                  </p>
                </div>
                
                <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                  <h4 class="text-lg font-semibold text-white mb-2 flex items-center">
                    <i class="fas fa-database text-primary-500 mr-2"></i>
                    Datenverarbeitungsvolumen
                  </h4>
                  <p class="text-gray-400 text-sm">
                    Die Menge der zu verarbeitenden Daten beeinflusst die Kosten. Größere Datenmengen erfordern mehr Rechenleistung und Speicherkapazität.
                  </p>
                </div>
                
                <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                  <h4 class="text-lg font-semibold text-white mb-2 flex items-center">
                    <i class="fas fa-bolt text-primary-500 mr-2"></i>
                    API-Integrationen
                  </h4>
                  <p class="text-gray-400 text-sm">
                    Externe API-Nutzung verursacht Kosten basierend auf Aufrufanzahl und Datenvolumen. Wir optimieren diese für maximale Effizienz.
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Usage & Business Factors -->
            <div>
              <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                <span class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                  <i class="fas fa-chart-line text-white text-sm"></i>
                </span>
                Nutzungs- & Geschäftsfaktoren
              </h3>
              
              <div class="space-y-6">
                <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                  <h4 class="text-lg font-semibold text-white mb-2 flex items-center">
                    <i class="fas fa-users text-primary-500 mr-2"></i>
                    Nutzeranzahl & Skalierung
                  </h4>
                  <p class="text-gray-400 text-sm">
                    Die Anzahl der Systemnutzer und erwartetes Wachstum beeinflussen die Infrastrukturkosten. Wir planen skalierbare Lösungen.
                  </p>
                </div>
                
                <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                  <h4 class="text-lg font-semibold text-white mb-2 flex items-center">
                    <i class="fas fa-sync-alt text-primary-500 mr-2"></i>
                    Token-Nutzung (bei KI-Modellen)
                  </h4>
                  <p class="text-gray-400 text-sm">
                    Bei Sprachmodellen basieren Kosten auf Token-Nutzung (Ein- und Ausgabe). Komplexere Anfragen verbrauchen mehr Tokens.
                  </p>
                </div>
                
                <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                  <h4 class="text-lg font-semibold text-white mb-2 flex items-center">
                    <i class="fas fa-sliders-h text-primary-500 mr-2"></i>
                    Anpassungs- & Wartungsaufwand
                  </h4>
                  <p class="text-gray-400 text-sm">
                    Individuelle Anpassungen, regelmäßige Updates und Wartung fließen in die Gesamtkosten ein und gewährleisten langfristigen Erfolg.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-500/20">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i class="fas fa-lightbulb text-white text-lg"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Individuelle Bewertung</h3>
                <p class="text-gray-300">
                  Nach der Testphase analysieren wir gemeinsam alle Faktoren und erstellen ein transparentes, 
                  faires Preismodell das genau auf Ihre Anforderungen und Ihr Budget zugeschnitten ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Value Proposition Section -->
      <section class="py-20 relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent"></div>
        </div>
  
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6">
              <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ihr Investition
              </span>
              <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent block">
                zahlt sich aus
              </span>
            </h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Zeitersparnis</h3>
              <p class="text-gray-400">
                Automatisierung spart bis zu 80% manueller Arbeitszeit, die für strategische Aufgaben genutzt werden kann.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-bug text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Fehlerreduktion</h3>
              <p class="text-gray-400">
                Automatisierte Prozesse reduzieren menschliche Fehler um bis zu 90% und erhöhen die Datenqualität.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Skalierbarkeit</h3>
              <p class="text-gray-400">
                Unsere Lösungen wachsen mit Ihrem Business ohne proportionale Kostenerhöhung.
              </p>
            </div>
          </div>
          
          <div class="mt-12 text-center">
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Die Investition in Automatisierung amortisiert sich in der Regel innerhalb weniger Monate 
              durch gesteigerte Effizienz und reduzierte Betriebskosten.
            </p>
            
            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 group"
            >
              ROI für Ihr Business berechnen
              <i class="fas fa-calculator ml-3 group-hover:translate-x-1 transition-transform"></i>
            </NuxtLink>
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
              Starten Sie mit einer
            </span>
            <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent block">
              kostenlosen Testwoche
            </span>
          </h2>
          
          <p class="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Testen Sie unsere Lösungen uneingeschränkt. Erst danach entscheiden wir gemeinsam über den fairen Preis.
          </p>
          
          <div class="flex flex-col lg:flex-row gap-6 justify-center">
            <NuxtLink to="/contact" class="group relative px-12 py-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl font-bold text-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 inline-block">
              <span class="relative z-10 flex items-center justify-center">
                <i class="fas fa-calendar-check mr-4 text-yellow-300"></i>
                Testwoche starten
              </span>
            </NuxtLink>
            
            <NuxtLink to="/services" class="group px-12 py-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-3xl font-bold text-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 inline-block">
              <span class="flex items-center justify-center">
                <i class="fas fa-info-circle mr-4 text-primary-400"></i>
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
    title: 'Preise - Uhuru AI - Faire Preismodelle für Automatisierung',
    meta: [
      { name: 'description', content: 'Transparente Preisgestaltung bei Uhuru AI. Kostenlose Testwoche, dann faire Preise basierend auf KI-Modell-Komplexität, Token-Nutzung, API-Integrationen und individuellem Nutzen.' }
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