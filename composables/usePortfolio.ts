  const { getData } = useApi()

  export async function usePortfolio() {
    const portfolioStats = await getData('/fetch/home_stats', 'GET', null, null)

    return { portfolioStats }
  }