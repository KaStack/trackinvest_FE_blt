<template>
  <aside 
    class="bg-surface border-r border-white/10 transition-all duration-300 h-screen sticky top-0 overflow-y-auto flex flex-col"
    :class="[
      isSidebarCollapsed ? 'w-20' : 'w-64'
    ]"
  >
    <!-- Logo and Collapse Button -->
    <div class="p-4 border-b border-white/10 flex items-center justify-between">
      <NuxtLink to="/dashboard" class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z" fill="currentColor"/>
            <path d="M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5z" fill="currentColor"/>
            <path d="M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4z" fill="currentColor"/>
            <path d="M14 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4z" fill="currentColor"/>
          </svg>
        </div>
        <span v-if="!isSidebarCollapsed" class="text-2xl font-poppins font-bold text-white">Track<span class="text-accent">Invest</span></span>
      </NuxtLink>
      <button 
        @click="toggleSidebar"
        class="p-2 text-white hover:text-accent transition"
      >
        <ChevronLeftIcon v-if="!isSidebarCollapsed" class="w-5 h-5" />
        <ChevronRightIcon v-else class="w-5 h-5" />
      </button>
    </div>

    <!-- Navigation Menu -->
    <nav class="p-4 border-b border-white/10">
      <div class="space-y-1">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center px-3 py-2 rounded-lg transition-colors"
          :class="[
            route.path === item.path
              ? 'bg-accent/10 text-accent'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          ]"
        >
          <component :is="item.icon" class="w-5 h-5" :class="route.path === item.path ? 'text-accent' : 'text-gray-400'" />
          <span v-if="!isSidebarCollapsed" class="ml-3">{{ item.name }}</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Sidebar Content -->
    <div class="flex-1 p-4 overflow-y-auto">
      <div class="space-y-6">
        <!-- Quick Actions -->
        <div>
          <h3 class="text-sm font-medium text-gray-400 mb-3" :class="{ 'sr-only': isSidebarCollapsed }">
            Quick Actions
          </h3>
          <div class="space-y-2">
            <button 
              @click="openAddInvestmentModal"
              class="w-full flex items-center px-3 py-2 text-white hover:bg-white/5 rounded-lg transition group"
              :class="{ 'justify-center': isSidebarCollapsed }"
            >
              <PlusCircleIcon class="w-5 h-5 text-accent" />
              <span v-if="!isSidebarCollapsed" class="ml-2 transition-opacity duration-300">Add Investment</span>
              <span v-else class="sr-only">Add Investment</span>
            </button>
            <button 
              @click="openAddPortfolioModal"
              class="w-full flex items-center px-3 py-2 text-white hover:bg-white/5 rounded-lg transition group"
              :class="{ 'justify-center': isSidebarCollapsed }"
            >
              <FolderPlusIcon class="w-5 h-5 text-accent" />
              <span v-if="!isSidebarCollapsed" class="ml-2 transition-opacity duration-300">Create Portfolio</span>
              <span v-else class="sr-only">Create Portfolio</span>
            </button>
          </div>
        </div>

        <!-- Watchlist -->
        <div v-if="!isSidebarCollapsed">
          <h3 class="text-sm font-medium text-gray-400 mb-3">Watchlist</h3>
          <div class="space-y-2">
            <div v-for="stock in watchlist" :key="stock.symbol" class="p-3 bg-background rounded-lg">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-white font-medium">{{ stock.symbol }}</p>
                  <p class="text-sm text-gray-400">{{ stock.name }}</p>
                </div>
                <p :class="stock.change >= 0 ? 'text-accent' : 'text-red-500'">
                  {{ stock.change >= 0 ? '+' : '' }}{{ stock.change }}%
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div v-if="!isSidebarCollapsed">
          <h3 class="text-sm font-medium text-gray-400 mb-3">Recent Activity</h3>
          <div class="space-y-2">
            <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg">
              <component :is="activity.icon" class="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p class="text-white text-sm">{{ activity.description }}</p>
                <p class="text-xs text-gray-400">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Overview -->
        <div v-if="!isSidebarCollapsed">
          <h3 class="text-sm font-medium text-gray-400 mb-3">Market Overview</h3>
          <div class="space-y-2">
            <div v-for="index in marketIndices" :key="index.name" class="flex justify-between items-center p-3 bg-background rounded-lg">
              <span class="text-white">{{ index.name }}</span>
              <span :class="index.change >= 0 ? 'text-accent' : 'text-red-500'">
                {{ index.change >= 0 ? '+' : '' }}{{ index.change }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon, 
  FolderPlusIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  HomeIcon,
  FolderIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  ChartPieIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
import { useInvestments } from '~/composables/useInvestments'
import { usePortfolios } from '~/composables/usePortfolios'
import { useDashboard } from '~/composables/useDashboard'

const { openAddInvestmentModal } = useInvestments()
const { openAddPortfolioModal } = usePortfolios()
const { isSidebarCollapsed, toggleSidebar } = useDashboard()

const menuItems = [
  { name: 'Overview', path: '/dashboard', icon: HomeIcon },
  { name: 'Portfolios', path: '/dashboard/portfolios', icon: FolderIcon },
  { name: 'Brokers', path: '/dashboard/brokers', icon: BuildingLibraryIcon },
  { name: 'Investment Types', path: '/dashboard/types', icon: ChartBarIcon },
  { name: 'Analytics', path: '/dashboard/analytics', icon: ChartPieIcon }
]

// Sample data - in a real app, this would come from your backend
const watchlist = [
  { symbol: 'AAPL', name: 'Apple Inc.', change: 2.5 },
  { symbol: 'TSLA', name: 'Tesla Inc.', change: -1.2 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', change: 1.8 }
]

const recentActivity = [
  { 
    id: 1, 
    description: 'Added $5,000 to Growth Portfolio',
    time: '2 hours ago',
    icon: CurrencyDollarIcon
  },
  { 
    id: 2, 
    description: 'Stock split: AAPL 4:1',
    time: '5 hours ago',
    icon: ArrowPathIcon
  },
  { 
    id: 3, 
    description: 'Dividend received: $420',
    time: '1 day ago',
    icon: ArrowTrendingUpIcon
  }
]

const marketIndices = [
  { name: 'S&P 500', change: 0.8 },
  { name: 'NASDAQ', change: -0.3 },
  { name: 'DOW', change: 1.2 }
]
</script>