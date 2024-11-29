import request from 'supertest';
import app from '../app';
import { fetchXeroData } from '../services/xero-service';
import { BalanceSheet } from '../models/balance-sheet';

jest.mock('../services/xero-service');

let server: any;

const mockReports: BalanceSheet = {
  Fields: [],
  ReportDate: "28 November 2024",
  ReportID: "BalanceSheet",
  ReportName: "Balance Sheet",
  ReportTitles: ["Balance Sheet", "Demo Org", "As at 28 November 2024"],
  ReportType: "BalanceSheet",
  Rows: [
    { RowType: 'Header', Cells: [{ Value: 'Header Cell 1' }] },
    { RowType: 'Row', Cells: [{ Value: 'Row Cell 1' }] },
    { RowType: 'SummaryRow', Cells: [{ Value: 'Summary Cell 1' }] },
    { RowType: 'Section', Title: 'Test Section', Rows: [] }
  ],
  UpdatedDateUTC: "/Date(1732833516801)/"
};

describe('Xero Controller', () => {
  describe('GET /balance-sheet', () => {
    it('should return a list of reports', async () => {
      (fetchXeroData as jest.Mock).mockResolvedValue(mockReports);

      const response = await request(app).get('/api/balance-sheet');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockReports);
    });
  });
});