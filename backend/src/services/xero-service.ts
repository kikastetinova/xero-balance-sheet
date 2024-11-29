import axios from 'axios';
import { BalanceSheet } from '../models/balance-sheet';
const API_BASE = 'http://mock-xero:3000';
 
export const fetchXeroData = async (): Promise<BalanceSheet> => {
  const url = `http://mock-xero:3000/api.xro/2.0/Reports/BalanceSheet`;
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