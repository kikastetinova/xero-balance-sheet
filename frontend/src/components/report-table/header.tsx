import { type Cell } from "../../services/context";

type ReportTableHeaderProps = {
  cells: Cell[];
};

const ReportTableHeader = (props: ReportTableHeaderProps) => {
  const { cells } = props;
  return <thead><tr className="border-b-2 border-solid border-slate-800">{cells.map((cell, index) => <th className='px-3 py-3' key={`cell-${cell.Value}-${index}`}>{cell.Value}</th>)}</tr></thead>;
};

export default ReportTableHeader;