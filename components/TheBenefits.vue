<template>
  <section id="benefits" class="py-20 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
          Why Choose TrackInvest
        </h2>
        <p class="text-xl text-gray-400">Built for modern investors like you</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="text-center p-8 bg-surface rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
        >
          <div class="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6 transform rotate-45">
            <div class="-rotate-45">
              <component :is="benefit.icon" class="w-10 h-10 text-accent" />
            </div>
          </div>
          <h3 class="font-poppins font-semibold text-2xl mb-4 text-white">{{ benefit.title }}</h3>
          <p class="text-gray-400">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBenefits } from '~/composables/useBenefits'

const { benefits } = useBenefits()
</script>