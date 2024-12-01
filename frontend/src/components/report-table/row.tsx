import { useCallback, memo } from 'react';
import { type Row } from "../../services/context";
import ReportTableCell from './cell';

type ReportTableRowProps = {
  row: Row;
  nesting?:  number;
}
const ReportTableRow = memo((props: ReportTableRowProps) => {
  const { row, nesting } = props;
  const { RowType } = row;

  let nestedLevel = nesting !== undefined ? nesting : 0;

  const isFirstLevel = useCallback(() => {
    const isFirstLevelTitle = row.RowType == 'Section' && row.Title.length > 0 && row.Rows?.length == 0;
    const isFIrstLevelSummary = row.RowType == 'Section' && row.Title.length === 0;
    return nesting === undefined && isFirstLevelTitle || isFIrstLevelSummary;
  }, [row, nesting]);

  nestedLevel = isFirstLevel() ? 0 : nestedLevel + 2;
  const rowTitleCssClass = `ps-${nestedLevel}`;
  
  if (row.RowType === 'Section') {
    const rowCssClass = nestedLevel ? `font-bold text-lg leading-10` : `border-b-2 border-slate-800 font-bold text-lg leading-10`;
    const rows = row.Rows?.map((childRow, index) => <ReportTableRow key={`row-${row.Title}-${index}`} row={childRow} nesting={nestedLevel}/>); 
    return (
      <>
        {row.Title.length ? (
          <tr className={rowCssClass}>
            <ReportTableCell cssClass={rowTitleCssClass} content={row.Title}/>
          </tr>
        ) : (
          null
        )}
        {rows && rows}
      </>
    );
  } else {
    const rowCssClass = RowType === 'SummaryRow' ? 'border-t border-slate-800 bg-slate-300 font-bold' : '';
    const cells = row.Cells.map((cell, index) => {
      const cssClass = index === 0 ? rowTitleCssClass : 'px-3';
      return <ReportTableCell cssClass={cssClass} content={cell.Value} key={`cell-${cell.Value}-${index}`}/>;
    });
    return <tr className={rowCssClass}>{cells}</tr>
  }
});

export default ReportTableRow;