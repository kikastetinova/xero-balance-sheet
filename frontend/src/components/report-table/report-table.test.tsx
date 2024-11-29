import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReportTable from './report-table';
import { Row } from '../../services/context';

const mockRows:Row[] = [
  { RowType: 'Header', Cells: [{ Value: 'Header Cell 1' }] },
  { RowType: 'Row', Cells: [{ Value: 'Row Cell 1' }] },
  { RowType: 'SummaryRow', Cells: [{ Value: 'Summary Cell 1' }] },
  { RowType: 'Section', Title: 'Test Section', Rows: [] },
];

describe('ReportTable', () => {
  it('renders all body rows including the header row', () => {
    render(<ReportTable rows={mockRows} />);
    expect(screen.getAllByRole('row')).toHaveLength(4);
  });

  it('renders table without a header row', () => {
    const rowsWithoutHeader = mockRows.filter(row => row.RowType != 'Header');
    render(<ReportTable rows={rowsWithoutHeader} />);
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });

  it('renders the table element with correct classes', () => {
    render(<ReportTable rows={mockRows} />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveClass('bg-slate-100');
  });
});
