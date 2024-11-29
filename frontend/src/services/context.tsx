import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { fetchBalanceSheet } from './api';


export type Attribute = {
  Id: string;
  Value: string;
};
  
export type Cell = {
  Value: string;
  Attributes?: Attribute[];
};

export type SectionRow = {
  RowType: 'Section';
  Title: string;
  Rows?: SimpleRow[];
};

export type SimpleRow = {
  RowType: 'Header' | 'Row' | 'SummaryRow';
  Cells: Cell[];
};

export type Row = SectionRow | SimpleRow;

export type Report = {
  ReportID: string,
  ReportName: string,
  ReportType: string,
  Fields: [],
  ReportDate: string,
  ReportTitles: string[]
  Rows: Row[],
  UpdatedDateUTC: string
};

type ReportContextType = {
  reports: Report[];
  isLoading: boolean;
  error?: string;
};

const initialState: ReportContextType = {
  reports: [],
  isLoading: true,
  error: undefined
};

export const ReportContext = createContext<ReportContextType>(initialState);

export const ReportProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const fetchReports = async () => {
    try {
      setIsLoading(true);
      const { Reports}: { Status: string, Reports:Report[] } = await fetchBalanceSheet();
      setReports(Reports);
      
    } catch (error) {
      setError(`Error fetching balance sheets:  ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <ReportContext.Provider
      value={{ reports, isLoading, error }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export const useReport = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error('useReport must be used within a ShowMeTheMoneyProvider');
  }
  return context;
};
