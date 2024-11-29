import { type Row, type SimpleRow } from "../../services/context";
import ReportTableHeader from './header';
import ReportTableRow  from "./row";

type ReportTableProps = {
  rows: Row[];
};

const getHeaderRow = (rows: Row[]) => rows.find((row): row is SimpleRow => row.RowType === 'Header');
const getBodyRows = (rows: Row[]) => rows.filter((row) => row.RowType !== 'Header');

const ReportTable = (props: ReportTableProps) => {
  const {rows} = props;
  const headerRow = getHeaderRow(rows);
  const bodyRows = getBodyRows(rows);

  const header = headerRow ? <ReportTableHeader cells={headerRow.Cells}/> : <></>;
  
  return (
    <table className='bg-slate-100'>
      {header}
      <tbody>
        {bodyRows.map((row, index) => {
          return <ReportTableRow row={row} key={`balance-sheet-row-${index}`}/>
        })}
      </tbody>
    </table>
  );
};

export default ReportTable;