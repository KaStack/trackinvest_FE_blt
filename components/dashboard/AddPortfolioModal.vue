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
                Create New Portfolio
              </DialogTitle>

              <form @submit.prevent="addPortfolio" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Portfolio Name</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
                    placeholder="e.g., Growth Portfolio"
                  />
                </div>

                <div>
                  <label for="description" class="block text-sm font-medium text-gray-300 mb-1">Description</label>
                  <textarea
                    id="description"
                    v-model="formData.description"
                    required
                    rows="3"
                    class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
                    placeholder="Describe your portfolio strategy..."
                  ></textarea>
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
                    Create Portfolio
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
import { usePortfolios } from '~/composables/usePortfolios'

const { isModalOpen, formData, closeModal, addPortfolio } = usePortfolios()
</script>