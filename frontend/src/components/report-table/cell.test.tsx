
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReportTableCell from './cell';

const props = {
  cssClass: 'test-class',
  content: 'Test Content',
};

describe('ReportTableCell', () => {
  it('renders the passed content inside a span', () => {
    render(<ReportTableCell {...props} />);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the correct css class to the span', () => {
    render(<ReportTableCell {...props} />);

    // Assert the class is applied
    const spanElement = screen.getByText('Test Content').closest('span');
    expect(spanElement).toHaveClass('test-class');
  });

  it('renders the content inside a table cell with correct css classes ', () => {
    render(<ReportTableCell {...props} />);
    const tdElement = screen.getByText('Test Content').closest('td');
    expect(tdElement).toHaveClass('px-3 py-1');
  });
});
