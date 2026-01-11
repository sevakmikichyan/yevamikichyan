"use client"

import classNames from "classnames"
import React, { useRef, useState } from "react"
import { TableBodyProps, TableCellProps, TableComponent, TableHeadProps, TableProps, TableRowProps } from "./types"

const TableCell: React.FC<TableCellProps> = ({ children, head, className, ...props }) => {
  const baseStyles = "px-4 py-md whitespace-nowrap"
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
      className={classNames(
        `text-left text-sm md:text-base text-color-dark font-medium border-t border-secondary ${baseStyles}`,
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}

const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>
}

const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
  return <thead {...props}>{children}</thead>
}

const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>
}

function Table<T>({
  children,
  className,
  data = [],
  renderRow,
  ...props
}: TableProps<T>) {
  const ref = useRef<HTMLDivElement>(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const start = (x: number) => {
    if (!ref.current) return
    setIsDown(true)
    setStartX(x)
    setScrollLeft(ref.current.scrollLeft)
  }

  const move = (x: number) => {
    if (!isDown || !ref.current) return
    const walk = (x - startX) * 1.5
    ref.current.scrollLeft = scrollLeft - walk
  }

  const end = () => setIsDown(false)

  return (
    <div className="w-full flex justify-center items-center">
      <div
        ref={ref}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
        onMouseDown={(e) => start(e.pageX)}
        onMouseMove={(e) => move(e.pageX)}
        onMouseUp={end}
        onMouseLeave={end}
        onTouchStart={(e) => start(e.touches[0].pageX)}
        onTouchMove={(e) => move(e.touches[0].pageX)}
        onTouchEnd={end}
      >
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
  )
}

;(Table as TableComponent).Head = TableHead
;(Table as TableComponent).Body = TableBody
;(Table as TableComponent).Row = TableRow
;(Table as TableComponent).Cell = TableCell

export default Table as TableComponent
