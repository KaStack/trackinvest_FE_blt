import { useState } from '#app'

export function useDashboard() {
  const isSidebarCollapsed = useState<boolean>('sidebarCollapsed', () => false)

  const toggleSidebar = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
  }

  return {
    isSidebarCollapsed,
    toggleSidebar
  }
}