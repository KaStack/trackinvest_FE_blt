<template>
  <div class="font-roboto bg-background text-white">
    <TheNavigation />
    <TheHero />
    <TheFeatures />
    <TheBenefits />
    <TheTestimonials />
    <TheFAQ />
    <TheCallToAction />
    <TheFooter />
    <TheWaitingListModal />
    <TheSuccessModal />
  </div>
</template>

<script setup>
import TheNavigation from '~/components/TheNavigation.vue'
import TheHero from '~/components/TheHero.vue'
import TheFeatures from '~/components/TheFeatures.vue'
import TheBenefits from '~/components/TheBenefits.vue'
import TheTestimonials from '~/components/TheTestimonials.vue'
import TheFAQ from '~/components/TheFAQ.vue'
import TheCallToAction from '~/components/TheCallToAction.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheWaitingListModal from '~/components/TheWaitingListModal.vue'
import TheSuccessModal from '~/components/TheSuccessModal.vue'
</script>