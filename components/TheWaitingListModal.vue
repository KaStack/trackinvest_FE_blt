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
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
              <DialogTitle as="h3" class="text-2xl font-poppins font-bold text-primary mb-4">
                Join the Waiting List
              </DialogTitle>

              <form @submit.prevent="submitForm" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-secondary focus:ring-secondary text-gray-700"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-secondary focus:ring-secondary text-gray-700"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Investment Interests (Optional)
                  </label>
                  <div class="space-y-2">
                    <div
                      v-for="option in investmentOptions"
                      :key="option.id"
                      class="flex items-center"
                    >
                      <input
                        :id="option.id"
                        type="checkbox"
                        v-model="formData.investmentInterests"
                        :value="option.id"
                        class="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary"
                      />
                      <label :for="option.id" class="ml-2 text-sm text-gray-700">
                        {{ option.label }}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                    @click="closeModal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-semibold transition disabled:opacity-50"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? 'Joining...' : 'Join Now' }}
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
import { useWaitingList } from '~/composables/useWaitingList'

const {
  isModalOpen,
  isSubmitting,
  formData,
  investmentOptions,
  closeModal,
  submitForm
} = useWaitingList()
</script>
