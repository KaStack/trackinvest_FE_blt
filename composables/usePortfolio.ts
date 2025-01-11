import { useState } from '#app'

export function usePortfolio() {
  const portfolioStats = useState('portfolioStats', () => [
    {
      title: 'Total Portfolio Value',
      value: '$125,430.00',
      change: '+12.5% this month'
    },
    {
      title: 'Total Gains',
      value: '$15,430.00',
      change: '+5.2% this week'
    },
    {
      title: 'Number of Investments',
      value: '12',
      change: 'Active investments'
    }
  ])

  return {
    portfolioStats
  }
}