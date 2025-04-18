
const { getData } = useApi()

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

  const getInvestments = async()=> {
    return await getData('/fetch/top_investments', 'GET', null, null)
  }

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


  // Modify add investment functionality later. Currently broken as part of TI-1 as we change the variables of investments
  const addInvestment = () => {
    const newInvestment = {
      id: 0,
      type:'',
      amount : 0,
      currentValue:0,
      gain:0
    }
    
    // {
    //   id: investments.value.length + 1,
    //   name: formData.value.name,
    //   type: formData.value.type,
    //   amount: formData.value.amount,
    //   currentValue: formData.value.amount,
    //   gain: 0
    // }
    
    // investments.value.push(newInvestment)
    
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
    getInvestments,
    isModalOpen,
    formData,
    investmentTypes,
    openAddInvestmentModal,
    closeModal,
    addInvestment
  }
}