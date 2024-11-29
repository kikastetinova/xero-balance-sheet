import cors from 'cors';
import express from 'express';
import balanceSheetRoutes from './routes/xero-routes';

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', balanceSheetRoutes);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Backend server running on http://localhost:${PORT}`);
// });

export default app;