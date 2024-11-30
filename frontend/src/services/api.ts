const API_BASE = import.meta.env.VITE_API_URL;//|| 'http://localhost:3001';
const API_BALANCE_SHEET = `${API_BASE}/api/balance-sheet`;


export const fetchBalanceSheet = async () => {
  try {
    const response = await fetch(API_BALANCE_SHEET);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch the balance sheet');
    }
  } catch (error) {
    throw new Error(`Error fetching the balance sheet: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// curl http://backend:3001/api/balance-sheet