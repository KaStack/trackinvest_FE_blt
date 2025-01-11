<template>
  <section id="features" class="py-20 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
          Powerful Features
        </h2>
        <p class="text-xl text-gray-400">Everything you need to manage your investments</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              ease: 'easeOut',
            }
          }"
          class="group bg-background p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/10"
        >
          <div 
            class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 bg-accent/10"
          >
            <component 
              :is="feature.icon" 
              class="w-8 h-8 text-accent transition-all duration-500 group-hover:scale-110" 
            />
          </div>
          <h3 class="font-poppins font-semibold text-xl mb-3 text-white">{{ feature.title }}</h3>
          <p class="text-gray-400">{{ feature.description }}</p>
          <div class="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a href="#" class="text-accent font-semibold hover:text-secondary transition-colors">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFeatures } from '~/composables/useFeatures'

const { features } = useFeatures()
</script>