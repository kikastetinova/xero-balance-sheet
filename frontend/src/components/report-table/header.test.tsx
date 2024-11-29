import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReportTableHeader from './header';

const cells = [
  { Value: 'Header 1' },
  { Value: 'Header 2' },
  { Value: 'Header 3' },
];

describe('ReportTableHeader', () => {
  it('renders all provided cells as table headers', () => {
    render(<ReportTableHeader cells={cells} />);
    cells.forEach((cell) => {
      expect(screen.getByText(cell.Value)).toBeInTheDocument();
    });
  });

  it('applies correct CSS classes to the row and headers', () => {
    render(<ReportTableHeader cells={cells} />);
    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveClass('border-b-2 border-solid border-slate-800');

    const headerCells = screen.getAllByRole('columnheader');
    headerCells.forEach((header) => {
      expect(header).toHaveClass('px-3 py-3');
    });
  });

  it('renders the correct number of header cells', () => {
    render(<ReportTableHeader cells={cells} />);
    const headerCells = screen.getAllByRole('columnheader');
    expect(headerCells).toHaveLength(cells.length);
  });
});
