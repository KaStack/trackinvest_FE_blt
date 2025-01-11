import { ref } from 'vue'
import {
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  CubeIcon,
  BanknotesIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

interface InvestmentType {
  id: number
  name: string
  description: string
  count: number
  totalValue: number
  performance: number
  icon: any
}

export function useInvestmentTypes() {
  const investmentTypes = ref<InvestmentType[]>([
    {
      id: 1,
      name: 'Stocks',
      description: 'Individual company shares',
      count: 15,
      totalValue: 50000,
      performance: 12.5,
      icon: CurrencyDollarIcon
    },
    {
      id: 2,
      name: 'Real Estate',
      description: 'Property investments and REITs',
      count: 3,
      totalValue: 250000,
      performance: 8.2,
      icon: BuildingOfficeIcon
    },
    {
      id: 3,
      name: 'Cryptocurrency',
      description: 'Digital assets',
      count: 6,
      totalValue: 25000,
      performance: -15.3,
      icon: CubeIcon
    },
    {
      id: 4,
      name: 'Bonds',
      description: 'Fixed income securities',
      count: 8,
      totalValue: 100000,
      performance: 3.5,
      icon: BanknotesIcon
    },
    {
      id: 5,
      name: 'ETFs',
      description: 'Exchange-traded funds',
      count: 10,
      totalValue: 75000,
      performance: 9.8,
      icon: ChartBarIcon
    }
  ])

  return {
    investmentTypes
  }
}