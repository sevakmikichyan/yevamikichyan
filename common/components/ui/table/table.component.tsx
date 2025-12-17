"use client"

import classNames from "classnames";
import React from "react";
import { TableBodyProps, TableCellProps, TableComponent, TableHeadProps, TableProps, TableRowProps } from "./types";

const TableCell: React.FC<TableCellProps> = ({ children, head, className, ...props }) => {
  const baseStyles = "px-4 py-md whitespace-nowrap";
  if (head)
    return (
      <th
        className={classNames(
          "text-left text-sm md:text-base font-semibold",
          baseStyles,
          className
        )}
        {...props}
      >
        {children}
      </th>
    )
  return (
    <td
      className={classNames(`text-left text-sm md:text-base text-color-dark font-medium border-t border-secondary ${baseStyles}`, className)}
      {...props}
    >
      {children}
    </td>
  );
};

const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
  return (
    <tbody className="divide-y" {...props}>
      {children}
    </tbody>
  );
};

const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
  return <thead {...props}>{children}</thead>;
};

const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

function Table<T>({
  children,
  className,
  data = [],
  renderRow,
  ...props
}: TableProps<T>) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="overflow-x-auto w-full">
        <table
          className={classNames(
            "w-full min-w-full divide-y text-left text-sm md:text-base",
            className
          )}
          {...props}
        >
          {children}

          {renderRow && (
            <TableBody>
              {data.map((item, index) => renderRow(item, index))}
            </TableBody>
          )}
        </table>
      </div>
    </div>
  );
}

(Table as TableComponent).Head = TableHead;
(Table as TableComponent).Body = TableBody;
(Table as TableComponent).Row = TableRow;
(Table as TableComponent).Cell = TableCell;

export default Table as TableComponent;
