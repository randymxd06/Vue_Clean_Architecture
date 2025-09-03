<template>
  <div class="min-h-screen p-6">
    <div class="max-w-6xl mx-auto space-y-8">
      <!-- Header -->
             <div>
              <label for="message" class="block text-sm font-medium text-text-primary mb-2">
                Mensaje
              </label>
              <textarea 
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                rows="3"
                class="w-full px-3 py-2 border border-border rounded-lg bg-card text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
            </div>class="text-center mb-12">
        <h1 class="text-4xl font-bold text-text-primary mb-4">
          Demostración de Temas Personalizados
        </h1>
        <p class="text-lg text-text-secondary">
          Experimenta con diferentes paletas de colores y modos de tema
        </p>
      </div>

      <!-- Tarjetas de muestra -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Tarjeta Principal -->
        <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Icon name="palette" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text-primary">Colores Primarios</h3>
              <p class="text-sm text-text-muted">Acento principal del tema</p>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div v-for="shade in primaryShades" :key="shade" 
                 :class="`bg-primary-${shade} h-8 rounded`" 
                 :title="`primary-${shade}`" />
          </div>
        </div>

        <!-- Tarjeta Secundaria -->
        <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
              <Icon name="layers" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text-primary">Colores Secundarios</h3>
              <p class="text-sm text-text-muted">Elementos de apoyo</p>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div v-for="shade in secondaryShades" :key="shade" 
                 :class="`bg-secondary-${shade} h-8 rounded`" 
                 :title="`secondary-${shade}`" />
          </div>
        </div>

        <!-- Tarjeta de Acento -->
        <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
              <Icon name="zap" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text-primary">Colores de Acento</h3>
              <p class="text-sm text-text-muted">Elementos destacados</p>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div v-for="shade in accentShades" :key="shade" 
                 :class="`bg-accent-${shade} h-8 rounded`" 
                 :title="`accent-${shade}`" />
          </div>
        </div>
      </div>

      <!-- Componentes de ejemplo -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Botones -->
        <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-text-primary mb-6">Botones</h3>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <button class="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                Primario
              </button>
              <button class="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors">
                Secundario
              </button>
              <button class="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors">
                Acento
              </button>
            </div>
            <div class="flex flex-wrap gap-3">
              <button class="px-4 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors">
                Outline Primario
              </button>
              <button class="px-4 py-2 border border-border text-text-primary rounded-lg hover:bg-surface-50 transition-colors">
                Outline Neutral
              </button>
            </div>
          </div>
        </div>

        <!-- Inputs -->
        <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-text-primary mb-6">Formularios</h3>
          <div class="space-y-4">
            <div>
              <label for="username" class="block text-sm font-medium text-text-primary mb-2">
                Nombre de usuario
              </label>
              <input 
                id="username"
                type="text" 
                placeholder="Ingresa tu usuario"
                class="w-full px-3 py-2 border border-border rounded-lg bg-card text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-text-primary mb-2">
                Mensaje
              </label>
              <textarea 
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                rows="3"
                class="w-full px-3 py-2 border border-border rounded-lg bg-card text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Alertas -->
        <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-text-primary mb-6">Alertas</h3>
          <div class="space-y-4">
            <div class="p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <p class="text-primary-800 font-medium">Información</p>
              <p class="text-primary-700 text-sm">Esta es una alerta informativa.</p>
            </div>
            <div class="p-4 bg-accent-50 border border-accent-200 rounded-lg">
              <p class="text-accent-800 font-medium">Éxito</p>
              <p class="text-accent-700 text-sm">Operación completada correctamente.</p>
            </div>
          </div>
        </div>

        <!-- Navegación -->
        <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-text-primary mb-6">Navegación</h3>
          <nav class="space-y-2">
            <a href="#" class="flex items-center space-x-3 px-3 py-2 text-text-primary hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors group">
              <Icon name="home" class="w-5 h-5" />
              <span>Inicio</span>
            </a>
            <a href="#" class="flex items-center space-x-3 px-3 py-2 text-text-primary hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors group">
              <Icon name="users" class="w-5 h-5" />
              <span>Usuarios</span>
            </a>
            <a href="#" class="flex items-center space-x-3 px-3 py-2 bg-primary-50 text-primary-600 rounded-lg">
              <Icon name="settings" class="w-5 h-5" />
              <span>Configuración</span>
            </a>
          </nav>
        </div>
      </div>

      <!-- Información del tema actual -->
      <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 class="text-xl font-semibold text-text-primary mb-4">Tema Actual</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-3 rounded-full" :style="{ backgroundColor: currentTheme.colors.primary }"></div>
            <p class="font-medium text-text-primary">{{ currentTheme.name }}</p>
            <p class="text-sm text-text-muted">{{ currentTheme.description }}</p>
          </div>
          <div class="space-y-2">
            <p class="text-sm text-text-secondary">
              <span class="font-medium">Modo:</span> {{ currentTheme.mode === 'dark' ? 'Oscuro' : 'Claro' }}
            </p>
            <p class="text-sm text-text-secondary">
              <span class="font-medium">ID:</span> {{ currentTheme.id }}
            </p>
          </div>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 rounded" :style="{ backgroundColor: currentTheme.colors.primary }"></div>
              <span class="text-sm text-text-secondary">Primario: {{ currentTheme.colors.primary }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 rounded" :style="{ backgroundColor: currentTheme.colors.accent }"></div>
              <span class="text-sm text-text-secondary">Acento: {{ currentTheme.colors.accent }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { Icon } from "@/presentation/components"
import { useThemeStore } from "@/presentation/stores/themeStore"

const themeStore = useThemeStore()

const currentTheme = computed(() => themeStore.currentTheme)

const primaryShades = [100, 300, 500, 700, 900]
const secondaryShades = [100, 300, 500, 700, 900]
const accentShades = [100, 300, 500, 700, 900]
</script>
