import { ref } from 'vue'

export function useFAQ() {
  const faqs = ref([
    {
      question: 'How secure is my data?',
      answer: 'We use military-grade encryption and never store your sensitive financial data. Your security is our top priority.',
      isOpen: false
    },
    {
      question: 'What investments can I track?',
      answer: 'TrackInvest supports stocks, crypto, NFTs, mutual funds, ETFs, bonds, and real estate investments.',
      isOpen: false
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Start with a 30-day free trial. No credit card needed. Full access to all premium features.',
      isOpen: false
    },
    {
      question: 'How does the AI prediction work?',
      answer: 'Our AI analyzes market trends, historical data, and various economic indicators to provide personalized investment recommendations.',
      isOpen: false
    },
    {
      question: 'Can I connect multiple accounts?',
      answer: 'Yes, you can connect and track multiple investment accounts from different brokers and platforms.',
      isOpen: false
    },
    {
      question: 'Is my data shared with third parties?',
      answer: 'No, we never share your personal or financial data with third parties. Your privacy is our priority.',
      isOpen: false
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 customer support via chat, email, and phone. Plus, access to our comprehensive knowledge base.',
      isOpen: false
    },
    {
      question: 'Can I export my data?',
      answer: 'Yes, you can export your portfolio data, tax reports, and analytics in various formats including PDF and Excel.',
      isOpen: false
    }
  ])

  return {
    faqs
  }
}