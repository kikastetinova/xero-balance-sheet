import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReportTableRow from './row';
import { type Row } from '../../services/context';


describe('ReportTableRow', () => {
  it('renders a Section row with a title and nested rows', () => {
    const mockRow: Row = {
      RowType: 'Section',
      Title: 'Section Title',
      Rows: [
        { RowType: 'Row', Cells: [{ Value: 'Child Cell 1' }] },
        { RowType: 'SummaryRow', Cells: [{ Value: 'Child Cell 2' }] },
      ],
    };

    render(<ReportTableRow row={mockRow} />);
    expect(screen.getByText('Section Title')).toBeInTheDocument();

    // Check for nested rows
    expect(screen.getByText('Child Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Child Cell 2')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });

  it('renders a Section row without a title', () => {
    const mockRow: Row = {
      RowType: 'Section',
      Title: '',
      Rows: [{ RowType: 'Row', Cells: [{ Value: 'Child Cell' }] }],
    };

    render(<ReportTableRow row={mockRow} />);
    expect(screen.getAllByRole('row')).toHaveLength(1);
    expect(screen.getByText('Child Cell')).toBeInTheDocument();
  });

  it('renders a SummaryRow with correct classes and cells', () => {
    const mockRow: Row = {
      RowType: 'SummaryRow',
      Cells: [{ Value: 'Summary Cell 1' }, { Value: 'Summary Cell 2' }],
    };

    render(<ReportTableRow row={mockRow} />);

    // Check that the row has the correct class
    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveClass('border-t border-slate-800 bg-slate-300 font-bold');

    // Check that cells are rendered
    expect(screen.getByText('Summary Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Summary Cell 2')).toBeInTheDocument();
  });

  it('renders a simple Row with cells', () => {
    const mockRow: Row = {
      RowType: 'Row',
      Cells: [
        { Value: 'Row Cell 1' },
        { Value: 'Row Cell 2' },
      ],
    };

    render(<ReportTableRow row={mockRow} />);

    // Check for cell rendering
    expect(screen.getByText('Row Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Row Cell 2')).toBeInTheDocument();
  });

  it('adjusts nesting levels correctly', () => {
    const mockRow: Row = {
      RowType: 'Section',
      Title: 'Nested Section',
      Rows: [
        { RowType: 'Row', Cells: [{ Value: 'Nested Cell' }] },
      ],
    };

    render(<ReportTableRow row={mockRow} nesting={4} />);

    // Check the applied nesting level
    const titleCell = screen.getByText('Nested Section');
    expect(titleCell).toHaveClass('ps-6'); // nesting = 4 + 2
  });
});
