import {memo} from 'react';
type ReportTableCellProps = {
  cssClass?: string;
  content: string;
};

const ReportTableCell = memo((props: ReportTableCellProps) => {
  const { cssClass, content} = props;
  return (
    <td className='px-3 py-1'>
      <span className={cssClass}>{content}</span>
    </td>
  );
});

export default ReportTableCell;