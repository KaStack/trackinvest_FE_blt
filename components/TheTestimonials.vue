<template>
  <section id="testimonials" class="py-20 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
          Loved by Investors
        </h2>
        <p class="text-xl text-gray-400">See what our users have to say</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-background p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
        >
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
              <svg class="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div class="ml-4">
              <h4 class="font-poppins font-semibold text-lg text-white">{{ testimonial.name }}</h4>
              <p class="text-gray-400">{{ testimonial.title }}</p>
            </div>
          </div>
          <p class="text-gray-400 italic">"{{ testimonial.quote }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTestimonials } from '~/composables/useTestimonials'

const { testimonials } = useTestimonials()
</script>