export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  head?: boolean;
  colSpan?: number;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
}

export interface TableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
  className?: string;
  data?: T[];
  renderRow?: (item: T, index: number) => React.ReactNode;
}

export interface TableComponent {
  <T>(props: TableProps<T>): JSX.Element;
  Head: typeof TableHead;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Cell: typeof TableCell;
}