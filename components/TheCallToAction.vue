<template>
  <section class="py-20 bg-gradient-to-br from-secondary/20 via-background to-background border-t border-white/10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
        Be Among the First to Experience TrackInvest
      </h2>
      <p class="text-xl text-gray-400 mb-10">
        Join our exclusive waiting list and get early access to the future of investment tracking.
        Limited spots available.
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button 
          @click="openModal"
          class="group relative w-full sm:w-auto px-8 py-4 bg-accent text-black rounded-xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <span class="relative z-10">Join Waiting List</span>
          <div class="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <button class="w-full sm:w-auto px-8 py-4 bg-surface text-white border-2 border-accent rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-black">
          Watch Demo
        </button>
      </div>
      <p class="mt-6 text-sm text-gray-400">
        🎉 Over 1,000+ investors already on the waiting list
      </p>
    </div>
  </section>
</template>

<script setup>
import { useWaitingList } from '~/composables/useWaitingList'

const { openModal } = useWaitingList()
</script>