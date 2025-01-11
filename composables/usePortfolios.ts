import { useState } from '#app'

interface PortfolioForm {
  name: string
  description: string
}

interface Portfolio {
  id: number
  name: string
  description: string
  totalValue: number
  investmentCount: number
  performance: number
}

export function usePortfolios() {
  const portfolios = useState<Portfolio[]>('portfolios', () => [
    {
      id: 1,
      name: 'Growth Portfolio',
      description: 'High-risk, high-reward investment strategy',
      totalValue: 50000,
      investmentCount: 8,
      performance: 15.4
    },
    {
      id: 2,
      name: 'Dividend Portfolio',
      description: 'Focus on stable dividend-paying stocks',
      totalValue: 75000,
      investmentCount: 12,
      performance: 8.2
    },
    {
      id: 3,
      name: 'Tech Stocks',
      description: 'Technology sector investments',
      totalValue: 30000,
      investmentCount: 5,
      performance: -5.8
    }
  ])

  const isModalOpen = useState('portfolioModalOpen', () => false)
  const formData = useState<PortfolioForm>('portfolioForm', () => ({
    name: '',
    description: ''
  }))

  const openAddPortfolioModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
    formData.value = {
      name: '',
      description: ''
    }
  }

  const addPortfolio = () => {
    portfolios.value.push({
      id: portfolios.value.length + 1,
      name: formData.value.name,
      description: formData.value.description,
      totalValue: 0,
      investmentCount: 0,
      performance: 0
    })
    closeModal()
  }

  return {
    portfolios,
    isModalOpen,
    formData,
    openAddPortfolioModal,
    closeModal,
    addPortfolio
  }
}