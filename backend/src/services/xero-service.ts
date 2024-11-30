import axios from 'axios';
import { BalanceSheet } from '../models/balance-sheet';

const API_BASE = process.env.XERO_API_URL || "http://localhost:3000";
 
export const fetchXeroData = async (): Promise<BalanceSheet> => {
  const url = `${API_BASE}/api.xro/2.0/Reports/BalanceSheet`;
  console.log('BBBB', url);
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
};

const data = fetchXeroData();

// curl http://mock-xero:3000/api.xro/2.0/Reports/BalanceSheet