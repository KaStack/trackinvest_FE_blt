import { useState } from '#app'
import { usePortfolios } from './usePortfolios'

interface Investment {
  id: number
  name: string
  type: string
  amount: string
  currentValue: string
  gain: number
}

interface InvestmentForm {
  name: string
  type: string
  amount: string
  date: string,
  portfolioId?: number
}

export function useInvestments() {
  const isModalOpen = useState('investmentModalOpen', () => false)
  const investments = useState<Investment[]>('investments', () => [
    {
      id: 1,
      name: 'Apple Inc.',
      type: 'Stock',
      amount: '10000.00',
      currentValue: '12500.00',
      gain: 25
    },
    {
      id: 2,
      name: 'S&P 500 ETF',
      type: 'Mutual Fund',
      amount: '25000.00',
      currentValue: '27500.00',
      gain: 10
    },
    {
      id: 3,
      name: 'Bitcoin',
      type: 'Cryptocurrency',
      amount: '15000.00',
      currentValue: '13500.00',
      gain: -10
    }
  ])

  const formData = useState<InvestmentForm>('investmentForm', () => ({
    name: '',
    type: 'stock',
    amount: '',
    date: '',
    portfolioId: undefined
  }))

  const investmentTypes = [
    { value: 'stock', label: 'Stock' },
    { value: 'bond', label: 'Bond' },
    { value: 'mutual_fund', label: 'Mutual Fund' },
    { value: 'crypto', label: 'Cryptocurrency' },
    { value: 'real_estate', label: 'Real Estate' }
  ]

  const { portfolios } = usePortfolios()

  const openAddInvestmentModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
    formData.value = {
      name: '',
      type: 'stock',
      amount: '',
      date: '',
      portfolioId: undefined
    }
  }

  const addInvestment = () => {
    const newInvestment = {
      id: investments.value.length + 1,
      name: formData.value.name,
      type: formData.value.type,
      amount: formData.value.amount,
      currentValue: formData.value.amount,
      gain: 0
    }
    
    investments.value.push(newInvestment)
    
    // If portfolio is selected, add investment to portfolio
    if (formData.value.portfolioId) {
      const portfolio = portfolios.value.find(p => p.id === formData.value.portfolioId)
      if (portfolio) {
        portfolio.investmentCount++
        portfolio.totalValue += parseFloat(formData.value.amount)
      }
    }
    
    closeModal()
  }

  return {
    investments,
    isModalOpen,
    formData,
    investmentTypes,
    openAddInvestmentModal,
    closeModal,
    addInvestment
  }
}