import express from 'express';
import { getXeroData } from '../controllers/xero-controller';

const router = express.Router();

router.get('/balance-sheet', getXeroData);

export default router;