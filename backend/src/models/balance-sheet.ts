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

export  interface BalanceSheet {
  ReportID: string,
  ReportName: string,
  ReportType: string,
  Fields: [],
  ReportDate: string,
  ReportTitles: string[]
  Rows: Row[],
  UpdatedDateUTC: string
}