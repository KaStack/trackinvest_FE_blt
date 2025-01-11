<template>
  <div>
    <div class="mb-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-white">Your Portfolios</h1>
        <button 
          @click="openAddPortfolioModal"
          class="bg-accent hover:bg-accent/90 text-black px-6 py-2 rounded-lg font-semibold transition"
        >
          Add Portfolio
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="portfolio in portfolios" 
          :key="portfolio.id"
          class="bg-surface p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-colors"
        >
          <h3 class="text-xl font-semibold text-white mb-2">{{ portfolio.name }}</h3>
          <p class="text-gray-400 mb-4">{{ portfolio.description }}</p>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-400">Total Value:</span>
              <span class="text-white">${{ portfolio.totalValue.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Investments:</span>
              <span class="text-white">{{ portfolio.investmentCount }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Performance:</span>
              <span :class="portfolio.performance >= 0 ? 'text-accent' : 'text-red-500'">
                {{ portfolio.performance >= 0 ? '+' : '' }}{{ portfolio.performance }}%
              </span>
            </div>
          </div>
          <div class="mt-6 flex justify-end space-x-3">
            <button class="text-secondary hover:text-accent transition">Edit</button>
            <button class="text-secondary hover:text-accent transition">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePortfolios } from '~/composables/usePortfolios'

const { portfolios, openAddPortfolioModal } = usePortfolios()

definePageMeta({
  layout: 'dashboard'
})
</script>