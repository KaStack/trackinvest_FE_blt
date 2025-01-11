<template>
  <TransitionRoot appear :show="isSuccess" as="template">
    <Dialog as="div" @close="closeSuccess" class="relative z-50">
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
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-center shadow-xl transition-all">
              <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <DialogTitle as="h3" class="text-2xl font-poppins font-bold text-primary mb-4">
                Welcome to TrackInvest!
              </DialogTitle>
              
              <p class="text-gray-600 mb-6">
                You've successfully joined our waiting list. We'll notify you as soon as early access becomes available.
              </p>
              
              <button
                @click="closeSuccess"
                class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Got it!
              </button>
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

const { isSuccess, closeSuccess } = useWaitingList()
</script>