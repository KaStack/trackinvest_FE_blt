<template>
  <TransitionRoot appear :show="isModalOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-surface p-6 shadow-xl transition-all border border-white/10">
              <DialogTitle as="h3" class="text-2xl font-poppins font-bold text-white mb-4">
                Add New Investment
              </DialogTitle>

              <form @submit.prevent="addInvestment" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Investment Name</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
                    placeholder="e.g., Apple Inc."
                  />
                </div>

                <div>
                  <label for="type" class="block text-sm font-medium text-gray-300 mb-1">Type</label>
                  <select
                    id="type"
                    v-model="formData.type"
                    required
                    class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
                  >
                    <option v-for="type in investmentTypes" :key="type.value" :value="type.value">
                      {{ type.label }}
                    </option>
                  </select>
                </div>
              
              <div>
                <label for="portfolio" class="block text-sm font-medium text-gray-300 mb-1">Add to Portfolio</label>
                <select
                  id="portfolio"
                  v-model="formData.portfolioId"
                  class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
                >
                  <option value="">None</option>
                  <option v-for="portfolio in portfolios" :key="portfolio.id" :value="portfolio.id">
                    {{ portfolio.name }}
                  </option>
                </select>
              </div>

                <div>
                  <label for="amount" class="block text-sm font-medium text-gray-300 mb-1">Investment Amount</label>
                  <input
                    id="amount"
                    v-model="formData.amount"
                    type="number"
                    step="0.01"
                    required
                    class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
                    placeholder="1000.00"
                  />
                </div>

                <div>
                  <label for="date" class="block text-sm font-medium text-gray-300 mb-1">Purchase Date</label>
                  <input
                    id="date"
                    v-model="formData.date"
                    type="date"
                    required
                    class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
                  />
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
                    @click="closeModal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="bg-accent hover:bg-accent/90 text-black px-6 py-2 rounded-lg font-semibold transition"
                  >
                    Add Investment
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { useInvestments } from '~/composables/useInvestments'

const { isModalOpen, formData, investmentTypes, closeModal, addInvestment } = useInvestments()
</script>