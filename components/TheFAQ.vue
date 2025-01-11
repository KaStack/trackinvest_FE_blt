<template>
  <section id="faq" class="py-20 bg-background">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
          Common Questions
        </h2>
        <p class="text-xl text-gray-400">Everything you need to know</p>
      </div>
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: index * 200 } }"
          class="bg-surface rounded-2xl border border-white/10"
        >
          <button
            class="w-full px-6 py-4 text-left focus:outline-none"
            @click="faq.isOpen = !faq.isOpen"
          >
            <div class="flex items-center justify-between">
              <span class="font-poppins font-semibold text-lg text-white">{{ faq.question }}</span>
              <span
                class="transform transition-transform text-accent"
                :class="{ 'rotate-180': faq.isOpen }"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </div>
          </button>
          <div
            v-show="faq.isOpen"
            class="px-6 pb-4"
          >
            <p class="text-gray-400">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFAQ } from '~/composables/useFAQ'

const { faqs } = useFAQ()
</script>