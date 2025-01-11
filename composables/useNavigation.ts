import { ref } from 'vue'

export function useNavigation() {
  const mobileMenu = ref(false)
  
  const toggleMobileMenu = () => {
    mobileMenu.value = !mobileMenu.value
  }

  return {
    mobileMenu,
    toggleMobileMenu
  }
}