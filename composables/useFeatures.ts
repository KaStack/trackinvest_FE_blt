import {
  ChartBarIcon,
  LightBulbIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  BellIcon,
  CubeIcon,
  DocumentTextIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  CloudArrowUpIcon
} from '@heroicons/vue/24/outline'

export function useFeatures() {
  const features = [
    {
      title: 'AI-Powered Insights',
      description: 'Our advanced AI analyzes your portfolio to provide growth opportunities, risk analysis, and tailored recommendations.',
      icon: BoltIcon,
      gradient: 'from-purple-500/10 to-blue-500/10'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Access live market updates, detailed analytics, and personalized reports to make informed decisions on the go.',
      icon: ArrowTrendingUpIcon,
      gradient: 'from-green-500/10 to-teal-500/10'
    },
    {
      title: 'Smart Tax Tools',
      description: 'Identify tax-saving opportunities and optimize your investment strategy with our intelligent tax planning features.',
      icon: CurrencyDollarIcon,
      gradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      title: 'Portfolio Analysis',
      description: 'Deep insights into your portfolio performance with advanced risk metrics and diversification analysis.',
      icon: ChartPieIcon,
      gradient: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      title: 'Smart Alerts',
      description: 'Stay informed with customizable alerts for price movements, market opportunities, and portfolio changes.',
      icon: BellIcon,
      gradient: 'from-pink-500/10 to-rose-500/10'
    },
    {
      title: 'Cloud Sync',
      description: 'Seamlessly sync your portfolio across all devices with secure cloud backup and real-time updates.',
      icon: CloudArrowUpIcon,
      gradient: 'from-cyan-500/10 to-sky-500/10'
    },
    {
      title: 'Multi-Asset Support',
      description: 'Track stocks, crypto, NFTs, real estate, and more in one unified platform with comprehensive analytics.',
      icon: CubeIcon,
      gradient: 'from-violet-500/10 to-purple-500/10'
    },
    {
      title: 'Expert Reports',
      description: 'Access detailed reports and professional analysis from top financial experts in the industry.',
      icon: DocumentTextIcon,
      gradient: 'from-emerald-500/10 to-green-500/10'
    }
  ]

  return {
    features
  }
}