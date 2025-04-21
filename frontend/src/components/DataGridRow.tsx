import React from 'react';
import { GridColumn } from '../types/GridColumn';
import DataGridCell from './DataGridCell';

interface Props<T> {
    row: T;
    columns: GridColumn<T>[];
    rowIndex?: number;
}

function DataGridRow<T>({ row, columns, rowIndex = 0 }: Props<T>) {
    return (
        <>
            {columns.map((col, colIndex) => {
                const rowId = (row as any)?.id ?? `row-${rowIndex}`;
                const key = `${rowId}-${String(col.key ?? colIndex)}`;
                return (
                    <DataGridCell
                        key={key}
                        value={row[col.key]}
                        row={row}
                        column={col}
                    />
                );
            })}
        </>
    );
}

export default React.memo(DataGridRow);