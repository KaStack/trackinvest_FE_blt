<template>
  <div class="space-y-8">
    <h1 class="text-2xl font-bold text-white">Profile & Settings</h1>

    <!-- Profile Section -->
    <div class="bg-surface p-6 rounded-xl border border-white/10">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-white flex items-center gap-2">
          <UserIcon class="w-5 h-5 text-accent" />
          Profile
        </h2>
        <button 
          @click="saveProfile"
          class="bg-accent hover:bg-accent/90 text-black px-4 py-2 rounded-lg font-semibold transition"
        >
          Save Changes
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex flex-col items-center space-y-4">
          <div class="relative">
            <img 
              :src="profile.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'" 
              alt="Profile"
              class="w-32 h-32 rounded-full border-4 border-accent/20"
            />
            <button class="absolute bottom-0 right-0 bg-accent text-black p-2 rounded-full hover:bg-accent/90 transition">
              <PencilIcon class="w-4 h-4" />
            </button>
          </div>
          <p class="text-white font-semibold">{{ profile.name }}</p>
          <p class="text-gray-400">Member since {{ profile.joinDate }}</p>
        </div>

        <div class="md:col-span-2 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
              <input 
                v-model="profile.name"
                type="text"
                class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input 
                v-model="profile.email"
                type="email"
                class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Phone</label>
              <input 
                v-model="profile.phone"
                type="tel"
                class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Country</label>
              <select 
                v-model="profile.country"
                class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
              >
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Timezone</label>
              <select 
                v-model="profile.timezone"
                class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
              >
                <option v-for="tz in timezones" :key="tz" :value="tz">{{ tz }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Preferences Section -->
    <div class="bg-surface p-6 rounded-xl border border-white/10">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-white flex items-center gap-2">
          <Settings2Icon class="w-5 h-5 text-accent" />
          Preferences
        </h2>
      </div>

      <div class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">Currency</label>
            <select 
              v-model="preferences.currency"
              class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
            >
              <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">Default Landing View</label>
            <select 
              v-model="preferences.defaultView"
              class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
            >
              <option value="overview">Overview</option>
              <option value="portfolios">Portfolios</option>
              <option value="investments">Investments</option>
            </select>
          </div>
        </div>
        <div class="flex items-center justify-between p-4 bg-background rounded-lg">
          <div class="flex items-center gap-2">
            <MoonIcon class="w-5 h-5 text-accent" />
            <span class="text-white">Dark Mode</span>
          </div>
          <Switch
            v-model="preferences.darkMode"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            :class="preferences.darkMode ? 'bg-accent' : 'bg-gray-700'"
          >
            <span class="sr-only">Dark Mode</span>
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              :class="preferences.darkMode ? 'translate-x-6' : 'translate-x-1'"
            />
          </Switch>
        </div>
      </div>
    </div>

    <!-- Security Section -->
    <div class="bg-surface p-6 rounded-xl border border-white/10">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-white flex items-center gap-2">
          <ShieldCheckIcon class="w-5 h-5 text-accent" />
          Security
        </h2>
      </div>

      <div class="space-y-6">
        <form @submit.prevent="changePassword" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Current Password</label>
              <input 
                v-model="security.currentPassword"
                type="password"
                class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">New Password</label>
              <input 
                v-model="security.newPassword"
                type="password"
                class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
              />
            </div>
          </div>
          <div class="flex justify-end">
            <button 
              type="submit"
              class="bg-accent hover:bg-accent/90 text-black px-4 py-2 rounded-lg font-semibold transition"
            >
              Change Password
            </button>
          </div>
        </form>

        <div class="flex items-center justify-between p-4 bg-background rounded-lg">
          <div class="flex items-center gap-2">
            <KeyIcon class="w-5 h-5 text-accent" />
            <span class="text-white">Two-Factor Authentication</span>
          </div>
          <Switch
            v-model="security.twoFactorEnabled"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            :class="security.twoFactorEnabled ? 'bg-accent' : 'bg-gray-700'"
          >
            <span class="sr-only">Enable 2FA</span>
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              :class="security.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'"
            />
          </Switch>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-3">Active Sessions</h3>
          <div class="space-y-2">
            <div v-for="session in security.sessions" :key="session.id" class="flex items-center justify-between p-4 bg-background rounded-lg">
              <div>
                <p class="text-white">{{ session.device }}</p>
                <p class="text-sm text-gray-400">{{ session.location }} · {{ session.lastActive }}</p>
              </div>
              <button 
                @click="revokeSession(session.id)"
                class="text-red-500 hover:text-red-400 transition"
              >
                Revoke
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Assistant Settings -->
    <div class="bg-surface p-6 rounded-xl border border-white/10">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-white flex items-center gap-2">
          <BotIcon class="w-5 h-5 text-accent" />
          Assistant Settings
        </h2>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Daily Briefing Time</label>
          <input 
            v-model="assistant.briefingTime"
            type="time"
            class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-400 mb-3">News Categories</label>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <label 
              v-for="category in newsCategories" 
              :key="category"
              class="flex items-center p-3 bg-background rounded-lg cursor-pointer hover:bg-white/5 transition"
            >
              <input
                type="checkbox"
                v-model="assistant.selectedCategories"
                :value="category"
                class="rounded border-white/10 text-accent focus:ring-accent bg-background"
              />
              <span class="ml-2 text-white">{{ category }}</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Language</label>
          <select 
            v-model="assistant.language"
            class="w-full rounded-lg border border-white/10 bg-background px-4 py-2 text-white focus:border-accent focus:ring-accent"
          >
            <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Privacy Section -->
    <div class="bg-surface p-6 rounded-xl border border-white/10">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-white flex items-center gap-2">
          <LockIcon class="w-5 h-5 text-accent" />
          Privacy
        </h2>
      </div>

      <div class="space-y-4">
        <div class="flex items-center justify-between p-4 bg-background rounded-lg">
          <div>
            <h3 class="text-white font-semibold">Export Data</h3>
            <p class="text-sm text-gray-400">Download all your data in JSON format</p>
          </div>
          <button class="bg-accent hover:bg-accent/90 text-black px-4 py-2 rounded-lg font-semibold transition">
            Export
          </button>
        </div>

        <div class="flex items-center justify-between p-4 bg-background rounded-lg">
          <div>
            <h3 class="text-white font-semibold">Clear Assistant Memory</h3>
            <p class="text-sm text-gray-400">Reset all AI assistant preferences and history</p>
          </div>
          <button class="bg-accent hover:bg-accent/90 text-black px-4 py-2 rounded-lg font-semibold transition">
            Clear
          </button>
        </div>

        <div class="flex items-center justify-between p-4 bg-background rounded-lg border border-red-500/20">
          <div>
            <h3 class="text-red-500 font-semibold">Delete Account</h3>
            <p class="text-sm text-gray-400">Permanently delete your account and all data</p>
          </div>
          <button 
            @click="confirmDelete"
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import {
  UserIcon,
  PencilIcon
} from '@heroicons/vue/24/outline'
import {
  Settings2Icon,
  MoonIcon,
  ShieldCheckIcon,
  KeyIcon,
  BotIcon,
  LockIcon
} from 'lucide-vue-next'

definePageMeta({
  layout: 'dashboard'
})

const profile = ref({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 234 567 890',
  country: 'United States',
  timezone: 'America/New_York',
  avatar: null,
  joinDate: 'March 2024'
})

const preferences = ref({
  currency: 'USD',
  darkMode: true,
  defaultView: 'overview'
})

const security = ref({
  currentPassword: '',
  newPassword: '',
  twoFactorEnabled: false,
  sessions: [
    {
      id: 1,
      device: 'Chrome on MacBook Pro',
      location: 'San Francisco, US',
      lastActive: 'Active now'
    },
    {
      id: 2,
      device: 'Safari on iPhone 13',
      location: 'San Francisco, US',
      lastActive: '2 hours ago'
    }
  ]
})

const assistant = ref({
  briefingTime: '09:00',
  selectedCategories: ['Stocks', 'Crypto'],
  language: 'en'
})

// Sample data
const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France']
const timezones = ['America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney']
const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD']
const newsCategories = ['Stocks', 'Crypto', 'Commodities', 'Forex', 'Economy', 'Technology']
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' }
]

// Methods
const saveProfile = () => {
  // Handle profile save
  console.log('Saving profile...')
}

const changePassword = () => {
  // Handle password change
  console.log('Changing password...')
  security.value.currentPassword = ''
  security.value.newPassword = ''
}

const revokeSession = (sessionId) => {
  // Handle session revocation
  security.value.sessions = security.value.sessions.filter(s => s.id !== sessionId)
}

const confirmDelete = () => {
  // Show confirmation dialog
  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
    console.log('Deleting account...')
  }
}
</script>