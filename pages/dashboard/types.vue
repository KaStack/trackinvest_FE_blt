<template>
  <div>
    <div class="mb-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-white">Investment Types</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="type in investmentTypes" 
          :key="type.id"
          class="bg-surface p-6 rounded-xl border border-white/10"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
              <component :is="type.icon" class="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white">{{ type.name }}</h3>
              <p class="text-gray-400">{{ type.count }} investments</p>
            </div>
          </div>
          <p class="text-gray-400 mb-4">{{ type.description }}</p>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-400">Total Value:</span>
              <span class="text-white">${{ type.totalValue.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Performance:</span>
              <span :class="type.performance >= 0 ? 'text-accent' : 'text-red-500'">
                {{ type.performance >= 0 ? '+' : '' }}{{ type.performance }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useInvestmentTypes } from '~/composables/useInvestmentTypes'

definePageMeta({
  layout: 'dashboard'
})

const { investmentTypes } = useInvestmentTypes()
</script>