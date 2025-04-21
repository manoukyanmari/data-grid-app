import React, { useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';
import DataGridRow from './DataGridRow';
import { GridColumn } from '../types/GridColumn';

interface DataGridProps<T> {
    data: T[];
    columns: GridColumn<T>[];
}

function DataGrid<T extends { id?: string | number }>({ data, columns }: DataGridProps<T>) {
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoizedData = useMemo(() => {
        return data.map((item, index) => ({
            ...item,
            id: item.id ?? `row-${index}`
        }));
    }, [data]);

    return (
        <div className="grid-wrapper">
            <div className="grid-header">
                {memoizedColumns.map((col) => (
                    <div key={String(col.key)} className="grid-cell header">
                        {col.label}
                    </div>
                ))}
            </div>

            <List
                height={400}
                itemCount={memoizedData.length}
                itemSize={60}
                width="100%"
            >
                {({ index, style }) => {
                    const row = memoizedData[index];
                    return (
                        <div key={row.id} className="grid-row" style={style}>
                            <DataGridRow row={row} columns={memoizedColumns} rowIndex={index} />
                        </div>
                    );
                }}
            </List>
        </div>
    );
}

export default DataGrid;