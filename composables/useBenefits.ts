import {
  UserGroupIcon,
  LockClosedIcon,
  ChartPieIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

export function useBenefits() {
  const benefits = [
    {
      title: 'Easy to Use',
      description: 'Clean interface designed for modern investors of all experience levels.',
      icon: UserGroupIcon
    },
    {
      title: 'Data Security',
      description: 'Military-grade encryption protects your sensitive financial data.',
      icon: LockClosedIcon
    },
    {
      title: 'Live Analytics',
      description: 'Real-time insights help you make informed investment decisions.',
      icon: ChartPieIcon
    },
    {
      title: 'Mobile First',
      description: 'Access your portfolio anywhere with our powerful mobile app.',
      icon: DevicePhoneMobileIcon
    },
    {
      title: '24/7 Support',
      description: 'Get help anytime with our dedicated customer support team.',
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: 'Regular Updates',
      description: 'Stay ahead with continuous feature updates and improvements.',
      icon: ArrowPathIcon
    }
  ]

  return {
    benefits
  }
}