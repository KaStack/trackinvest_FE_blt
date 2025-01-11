<template>
  <div>
    <PortfolioSummary />
    
    <div class="bg-surface p-6 rounded-xl border border-white/10 mb-8">
      <h2 class="text-xl font-semibold text-white mb-4">Portfolio Performance</h2>
      <div class="h-64">
        <LineChart />
      </div>
    </div>

    <InvestmentList />
  </div>
</template>

<script setup>
import PortfolioSummary from '~/components/dashboard/PortfolioSummary.vue'
import InvestmentList from '~/components/dashboard/InvestmentList.vue'
import LineChart from '~/components/LineChart.vue'

definePageMeta({
  layout: 'dashboard'
})
</script>