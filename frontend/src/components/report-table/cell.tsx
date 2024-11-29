type ReportTableCellProps = {
  cssClass?: string;
  content: string;
};

const ReportTableCell = (props: ReportTableCellProps) => {
  const { cssClass, content} = props;
  return (
    <td className='px-3 py-1'>
      <span className={cssClass}>{content}</span>
    </td>
  );
};

export default ReportTableCell;