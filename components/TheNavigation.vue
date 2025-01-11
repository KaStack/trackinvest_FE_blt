<template>
  <nav class="fixed w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-300">
            <svg class="w-5 h-5 text-black -rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z" fill="currentColor"/>
              <path d="M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5z" fill="currentColor"/>
              <path d="M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4z" fill="currentColor"/>
              <path d="M14 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4z" fill="currentColor"/>
            </svg>
          </div>
          <span class="text-2xl font-poppins font-bold text-white">Track<span class="text-accent">Invest</span></span>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-gray-300 hover:text-accent transition">Features</a>
          <a href="#benefits" class="text-gray-300 hover:text-accent transition">Benefits</a>
          <a href="#testimonials" class="text-gray-300 hover:text-accent transition">Testimonials</a>
          <a href="#faq" class="text-gray-300 hover:text-accent transition">FAQ</a>
          <button 
            @click="openModal"
            class="bg-accent hover:bg-accent/90 text-black px-6 py-2 rounded-lg font-semibold transition"
          >
            Join Waiting List
          </button>
        </div>
        <button class="md:hidden p-2" @click="toggleMobileMenu">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-show="mobileMenu" class="md:hidden bg-surface border-t border-white/10">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#features" class="block px-3 py-2 text-gray-300 hover:text-accent transition">Features</a>
        <a href="#benefits" class="block px-3 py-2 text-gray-300 hover:text-accent transition">Benefits</a>
        <a href="#testimonials" class="block px-3 py-2 text-gray-300 hover:text-accent transition">Testimonials</a>
        <a href="#faq" class="block px-3 py-2 text-gray-300 hover:text-accent transition">FAQ</a>
        <button 
          @click="openModal"
          class="w-full mt-2 bg-accent hover:bg-accent/90 text-black px-6 py-2 rounded-lg font-semibold transition"
        >
          Join Waiting List
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useNavigation } from '~/composables/useNavigation'
import { useWaitingList } from '~/composables/useWaitingList'

const { mobileMenu, toggleMobileMenu } = useNavigation()
const { openModal } = useWaitingList()
</script>