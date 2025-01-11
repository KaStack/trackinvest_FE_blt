<template>
  <div class="bg-surface border-b border-white/10 z-40 sticky top-0">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex justify-end items-center">
        <!-- User Menu -->
        <div class="relative">
          <button 
            @click="isUserMenuOpen = !isUserMenuOpen"
            class="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition"
          >
            <div class="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-accent" />
            </div>
            <span class="text-white">John Doe</span>
            <ChevronDownIcon class="w-4 h-4 text-gray-400" />
          </button>
          
          <!-- Dropdown Menu -->
          <div 
            v-if="isUserMenuOpen"
            class="absolute right-0 mt-2 w-48 bg-surface rounded-lg shadow-xl border border-white/10 py-1"
          >
            <button 
              v-for="item in menuItems" 
              :key="item.label"
              class="w-full px-4 py-2 text-left text-white hover:bg-white/5 flex items-center space-x-2"
              @click="handleMenuAction(item.action)"
            >
              <component :is="item.icon" class="w-5 h-5 text-accent" />
              <span>{{ item.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  UserIcon, 
  ChevronDownIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  CreditCardIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/vue/24/outline'
import { onClickOutside } from '@vueuse/core'

const isUserMenuOpen = ref(false)

const menuItems = [
  { 
    label: 'Profile',
    icon: UserCircleIcon,
    action: 'profile'
  },
  { 
    label: 'Settings',
    icon: Cog6ToothIcon,
    action: 'settings'
  },
  { 
    label: 'Membership',
    icon: CreditCardIcon,
    action: 'membership'
  },
  { 
    label: 'Sign Out',
    icon: ArrowRightOnRectangleIcon,
    action: 'signout'
  }
]

const handleMenuAction = (action) => {
  isUserMenuOpen.value = false
  
  switch (action) {
    case 'profile':
      // Handle profile action
      break
    case 'settings':
      // Handle settings action
      break
    case 'membership':
      // Handle membership action
      break
    case 'signout':
      // Handle sign out action
      break
  }
}

// Close menu when clicking outside
const menuRef = ref(null)
onClickOutside(menuRef, () => {
  isUserMenuOpen.value = false
})
</script>