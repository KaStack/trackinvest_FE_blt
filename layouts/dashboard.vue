<template>
  <div class="min-h-screen bg-background flex">
    <!-- Sidebar -->
    <DashboardSidebar />
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <DashboardNav />
      <main class="flex-1 overflow-y-auto">
        <div class="max-w-6xl mx-auto px-6 py-6">
          <slot />
        </div>
      </main>
    </div>
    
    <AddInvestmentModal />
    <AddPortfolioModal />
    <FloatingActionButton />
  </div>
</template>

<script setup>
import DashboardNav from '~/components/dashboard/DashboardNav.vue'
import DashboardSidebar from '~/components/dashboard/DashboardSidebar.vue'
import AddInvestmentModal from '~/components/dashboard/AddInvestmentModal.vue'
import AddPortfolioModal from '~/components/dashboard/AddPortfolioModal.vue'
import FloatingActionButton from '~/components/dashboard/FloatingActionButton.vue'
</script>