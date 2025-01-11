<template>
  <section class="pt-32 pb-20 bg-gradient-radial from-secondary/20 via-background to-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800, ease: 'easeOut' } }"
          class="text-center lg:text-left"
        >
          <h1 class="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Smart <span class="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent animate-gradient">Investing</span><br>Made Simple
          </h1>
          <p class="text-xl text-gray-400 mb-8 max-w-lg">
            Track investments, get AI insights, and optimize your portfolio - all in one place.
          </p>
          <div class="space-x-4">
            <button 
              @click="openModal"
              class="group relative px-8 py-4 bg-accent text-black rounded-xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span class="relative z-10">Join Waiting List</span>
              <div class="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button class="relative px-8 py-4 bg-surface text-white border-2 border-accent rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-black">
              Watch Demo
            </button>
          </div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800, ease: 'easeOut' } }"
          class="relative animate-float"
        >
          <div class="relative bg-surface/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl transform hover:rotate-0 transition-all duration-500 border border-white/10">
            <svg class="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 250 C100 200, 200 300, 300 100, 350 150" stroke="url(#gradient)" stroke-width="4" fill="none" class="animate-pulse-slow"/>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#6C63FF"/>
                <stop offset="100%" style="stop-color:#00F5A0"/>
              </linearGradient>
              <circle cx="150" cy="180" r="6" fill="#6C63FF"/>
              <circle cx="250" cy="120" r="6" fill="#00F5A0"/>
              <g class="animate-pulse">
                <circle cx="350" cy="150" r="6" fill="#6C63FF"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useWaitingList } from '~/composables/useWaitingList'

const { openModal } = useWaitingList()
</script>