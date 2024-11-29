import { Request, Response } from 'express';
import { fetchXeroData } from '../services/xero-service';

export const getXeroData = async (req: Request, res: Response) => {
  try {
    const data = await fetchXeroData();
    res.json(data);
  } catch (error) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({ message: 'Error fetching data from Xero API', error: errorMessage });
  }
};
