<template>
  <div class="fixed bottom-8 right-8 z-50">
    <div class="relative group">
      <button 
        @click="isOpen = !isOpen"
        class="w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center text-black shadow-lg transition-all duration-300 hover:scale-110"
      >
        <PlusIcon v-if="!isOpen" class="w-6 h-6" />
        <XMarkIcon v-else class="w-6 h-6" />
      </button>
      
      <!-- Action Menu -->
      <div 
        v-show="isOpen"
        class="absolute bottom-16 right-0 bg-surface rounded-lg shadow-xl border border-white/10 w-48 overflow-hidden"
      >
        <button
          v-for="action in actions"
          :key="action.label"
          @click="handleAction(action.action)"
          class="w-full px-4 py-3 text-left text-white hover:bg-white/5 flex items-center space-x-2"
        >
          <component :is="action.icon" class="w-5 h-5 text-accent" />
          <span>{{ action.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useState } from '#app'
import { PlusIcon, XMarkIcon, CurrencyDollarIcon, FolderPlusIcon } from '@heroicons/vue/24/outline'
import { useInvestments } from '~/composables/useInvestments'
import { usePortfolios } from '~/composables/usePortfolios'

const isOpen = useState('floatingActionOpen', () => false)
const { openAddInvestmentModal } = useInvestments()
const { openAddPortfolioModal } = usePortfolios()

const actions = [
  { 
    label: 'Add Investment',
    icon: CurrencyDollarIcon,
    action: 'addInvestment'
  },
  { 
    label: 'Create Portfolio',
    icon: FolderPlusIcon,
    action: 'createPortfolio'
  }
]

const handleAction = (action: string): void => {
  if (action === 'addInvestment') {
    openAddInvestmentModal()
  } else if (action === 'createPortfolio') {
    openAddPortfolioModal()
  }
  isOpen.value = false
}
</script>