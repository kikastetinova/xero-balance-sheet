import ReportTable from "../components/report-table/report-table";
import {useReport } from '../services/context';

const BalanceSheetReport = () => {
  const { reports, isLoading, error } = useReport();

  if(isLoading) {
    return <p>Loading data sheets...</p>;
  }

  if(error) {
    return <p>{error}</p>;
  }
  
  if (reports.length === 0) {
    return <p>Balance sheet report doesn't exist</p>;
  } 

  /** 
    I understand from the documentation that even though Rports returns an array, 
    in case of the balance sheet report, the array only have max one item. 
  */
  const balanceSheetReport = reports[0];
  const { Rows: rows } = balanceSheetReport;

  return (
    <ReportTable rows={rows} />
  );
};

export default BalanceSheetReport;
