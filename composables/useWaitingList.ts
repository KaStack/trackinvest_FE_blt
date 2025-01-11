import { useState } from '#app'

interface WaitingListForm {
  email: string
  name: string
  investmentInterests: string[]
}

export function useWaitingList() {
  const isModalOpen = useState('waitingListModalOpen', () => false)
  const isSubmitting = useState('waitingListSubmitting', () => false)
  const isSuccess = useState('waitingListSuccess', () => false)
  const formData = useState<WaitingListForm>('waitingListForm', () => ({
    email: '',
    name: '',
    investmentInterests: []
  }))

  const investmentOptions = [
    { id: 'stocks', label: 'Stocks' },
    { id: 'crypto', label: 'Cryptocurrency' },
    { id: 'nft', label: 'NFTs' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'etf', label: 'ETFs' }
  ]

  const openModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
    formData.value = {
      email: '',
      name: '',
      investmentInterests: []
    }
  }

  const closeSuccess = () => {
    isSuccess.value = false
  }

  const submitForm = async () => {
    try {
      isSubmitting.value = true
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      closeModal()
      isSuccess.value = true // Show success modal
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error joining the waiting list. Please try again.')
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    isModalOpen,
    isSubmitting,
    isSuccess,
    formData,
    investmentOptions,
    openModal,
    closeModal,
    closeSuccess,
    submitForm
  }
}