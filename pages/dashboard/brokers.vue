<template>
  <div>
    <div class="mb-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-white">Connected Brokers</h1>
        <button 
          class="bg-accent hover:bg-accent/90 text-black px-6 py-2 rounded-lg font-semibold transition"
        >
          Connect Broker
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="broker in brokers" 
          :key="broker.id"
          class="bg-surface p-6 rounded-xl border border-white/10"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
              <component :is="broker.icon" class="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white">{{ broker.name }}</h3>
              <p class="text-gray-400">{{ broker.status }}</p>
            </div>
          </div>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span class="text-gray-400">Account Type:</span>
              <span class="text-white">{{ broker.accountType }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Last Sync:</span>
              <span class="text-white">{{ broker.lastSync }}</span>
            </div>
          </div>
          <div class="flex justify-end space-x-3">
            <button class="text-secondary hover:text-accent transition">Sync</button>
            <button class="text-secondary hover:text-accent transition">Settings</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBrokers } from '~/composables/useBrokers'

definePageMeta({
  layout: 'dashboard'
})

const { brokers } = useBrokers()
</script>