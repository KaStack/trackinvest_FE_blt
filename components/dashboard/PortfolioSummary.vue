<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div v-for="(stat, index) in portfolioStats" :key="index" class="bg-surface p-6 rounded-xl border border-white/10">
      <h3 class="text-gray-400 mb-2">{{ stat.title }}</h3>
      <p class="text-3xl font-bold text-white">{{ stat.value }}</p>
      <p class="text-accent mt-2">{{ stat.change }}</p>
    </div>
  </div>
</template>

<script setup>
import { usePortfolio } from '~/composables/usePortfolio'

const { portfolioStats } = usePortfolio()
</script>