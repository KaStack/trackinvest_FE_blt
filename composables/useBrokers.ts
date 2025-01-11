import { ref } from 'vue'
import {
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/vue/24/outline'

interface Broker {
  id: number
  name: string
  status: string
  accountType: string
  lastSync: string
  icon: any
}

export function useBrokers() {
  const brokers = ref<Broker[]>([
    {
      id: 1,
      name: 'Fidelity',
      status: 'Connected',
      accountType: 'Investment Account',
      lastSync: '2 hours ago',
      icon: BuildingLibraryIcon
    },
    {
      id: 2,
      name: 'Robinhood',
      status: 'Connected',
      accountType: 'Trading Account',
      lastSync: '1 hour ago',
      icon: CurrencyDollarIcon
    },
    {
      id: 3,
      name: 'Coinbase',
      status: 'Connected',
      accountType: 'Crypto Exchange',
      lastSync: '30 minutes ago',
      icon: GlobeAltIcon
    }
  ])

  return {
    brokers
  }
}