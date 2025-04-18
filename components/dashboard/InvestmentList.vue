<template>
  <div class="bg-surface p-6 rounded-xl border border-white/10">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-white">Your Investments</h2>
      <button 
        @click="openAddInvestmentModal"
        class="bg-accent hover:bg-accent/90 text-black px-6 py-2 rounded-lg font-semibold transition"
      >
        Add Investment
      </button>
    </div>
    
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="text-left border-b border-white/10">
            <th class="pb-4 text-gray-400">Name</th>
            <th class="pb-4 text-gray-400">Type</th>
            <th class="pb-4 text-gray-400">Amount</th>
            <th class="pb-4 text-gray-400">Current Value</th>
            <th class="pb-4 text-gray-400">Gain/Loss</th>
            <th class="pb-4 text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="investment in investments" :key="investment.id" class="border-b border-white/10">
            <td class="py-4 text-white">{{ investment.name }}</td>
            <td class="py-4 text-white">{{ investment.type }}</td>
            <td class="py-4 text-white">${{ investment.amount }}</td>
            <td class="py-4 text-white">${{ investment.currentValue }}</td>
            <td class="py-4" :class="investment.gain >= 0 ? 'text-accent' : 'text-red-500'">
              {{ investment.gain >= 0 ? '+' : '' }}{{ investment.gain }}%
            </td>
            <td class="py-4">
              <button class="text-secondary hover:text-accent transition">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>

const { getInvestments, openAddInvestmentModal } = useInvestments()

const investments = await getInvestments()

</script>