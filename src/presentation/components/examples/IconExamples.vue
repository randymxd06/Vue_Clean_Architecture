<!-- 
  🎉 EJEMPLO: Cómo usar CUALQUIER icono de Lucide
  
  ¡Ya no estás limitado a iconos predefinidos!
  Puedes usar más de 1000 iconos de https://lucide.dev/icons/
-->

<template>
  <div class="p-8 space-y-6">
    <h1 class="text-2xl font-bold">🎨 Sistema de Iconos Dinámico con Lucide</h1>
    
    <!-- Iconos básicos (ya los teníamos) -->
    <section>
      <h2 class="text-lg font-semibold mb-4">Iconos Básicos</h2>
      <div class="flex gap-4 items-center">
        <Icon name="layout-dashboard" :size="24" />
        <Icon name="users" :size="24" />
        <Icon name="settings" :size="24" />
        <Icon name="user" :size="24" />
        <Icon name="log-out" :size="24" />
      </div>
    </section>

    <!-- ¡NUEVOS! Cualquier icono de Lucide -->
    <section>
      <h2 class="text-lg font-semibold mb-4">🆕 Cualquier Icono de Lucide (sin agregar código)</h2>
      <div class="grid grid-cols-8 gap-4">
        <!-- Iconos de redes sociales -->
        <Icon name="facebook" :size="24" color="#1877F2" />
        <Icon name="twitter" :size="24" color="#1DA1F2" />
        <Icon name="instagram" :size="24" color="#E4405F" />
        <Icon name="github" :size="24" color="#333" />
        <Icon name="linkedin" :size="24" color="#0A66C2" />
        
        <!-- Iconos de archivos -->
        <Icon name="file-image" :size="24" color="#10B981" />
        <Icon name="file-video" :size="24" color="#EF4444" />
        <Icon name="file-audio" :size="24" color="#8B5CF6" />
        
        <!-- Iconos de clima -->
        <Icon name="sun" :size="24" color="#F59E0B" />
        <Icon name="cloud" :size="24" color="#6B7280" />
        <Icon name="cloud-rain" :size="24" color="#3B82F6" />
        <Icon name="snowflake" :size="24" color="#06B6D4" />
        
        <!-- Iconos de transporte -->
        <Icon name="car" :size="24" />
        <Icon name="plane" :size="24" />
        <Icon name="train" :size="24" />
        <Icon name="bike" :size="24" />
        
        <!-- Iconos de comida -->
        <Icon name="coffee" :size="24" color="#8B4513" />
        <Icon name="pizza" :size="24" color="#FF6B35" />
        <Icon name="ice-cream" :size="24" color="#FFC0CB" />
        <Icon name="wine" :size="24" color="#722F37" />
        
        <!-- Iconos de tecnología -->
        <Icon name="smartphone" :size="24" />
        <Icon name="laptop" :size="24" />
        <Icon name="monitor" :size="24" />
        <Icon name="headphones" :size="24" />
        
        <!-- Iconos de emociones -->
        <Icon name="heart" :size="24" color="#EF4444" />
        <Icon name="star" :size="24" color="#F59E0B" />
        <Icon name="thumbs-up" :size="24" color="#10B981" />
        <Icon name="smile" :size="24" color="#F59E0B" />
      </div>
    </section>

    <!-- Diferentes tamaños -->
    <section>
      <h2 class="text-lg font-semibold mb-4">Tamaños Flexibles</h2>
      <div class="flex gap-4 items-center">
        <Icon name="heart" size="sm" color="#EF4444" />   <!-- 16px -->
        <Icon name="heart" size="md" color="#EF4444" />   <!-- 20px -->
        <Icon name="heart" size="lg" color="#EF4444" />   <!-- 24px -->
        <Icon name="heart" :size="32" color="#EF4444" />  <!-- 32px custom -->
        <Icon name="heart" :size="48" color="#EF4444" />  <!-- 48px custom -->
      </div>
    </section>

    <!-- Stroke personalizado -->
    <section>
      <h2 class="text-lg font-semibold mb-4">Stroke Width Personalizado</h2>
      <div class="flex gap-4 items-center">
        <Icon name="star" :size="32" :stroke-width="1" color="#F59E0B" />
        <Icon name="star" :size="32" :stroke-width="1.5" color="#F59E0B" />
        <Icon name="star" :size="32" :stroke-width="2" color="#F59E0B" />
        <Icon name="star" :size="32" :stroke-width="2.5" color="#F59E0B" />
      </div>
    </section>

    <!-- Código de ejemplo -->
    <section>
      <h2 class="text-lg font-semibold mb-4">💻 Código de Ejemplo</h2>
      <pre class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"><code><!-- Ahora puedes usar CUALQUIER icono de Lucide: -->
&lt;Icon name="facebook" :size="24" color="#1877F2" /&gt;
&lt;Icon name="cloud-rain" :size="32" color="#3B82F6" /&gt;
&lt;Icon name="pizza" :size="24" color="#FF6B35" /&gt;
&lt;Icon name="rocket" :size="48" :stroke-width="1.5" /&gt;

<!-- ¡Más de 1000 iconos disponibles en https://lucide.dev/icons/ --></code></pre>
    </section>
  </div>
</template>

<script setup>
import Icon from '@/presentation/components/atoms/Icon.vue'
</script>
