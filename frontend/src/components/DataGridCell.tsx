import React, { useMemo, useState } from 'react';
import { GridColumn } from '../types/GridColumn';

interface Props<T> {
    value: any;
    row: T;
    column: GridColumn<T>;
    onChange?: (val: any) => void;
}

function DataGridCell<T>({ value, row, column, onChange }: Props<T>) {
    const [editing, setEditing] = useState(false);
    const [showEditIcon, setShowEditIcon] = useState(false);

    const handleBlur = () => setEditing(false);

    const renderedContent = useMemo(() => {
        return column.renderer
            ? column.renderer(value, row)
            : String(value);
    }, [value, row, column]);

    return (
        <div
            className={`grid-cell ${editing ? 'editing' : ''}`}
            onClick={() => column.editor && setEditing(true)}
            style={{ position: 'relative' }}
            onMouseEnter={() => setShowEditIcon(true)}
            onMouseLeave={() => setShowEditIcon(false)}
        >
            {editing && column.editor ? (
                <div style={{ position: 'relative' }}>
                    <column.editor
                        value={value}
                        onChange={(newValue: any) => {
                            onChange?.(newValue);
                            setEditing(false);
                        }}
                    />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setEditing(false);
                        }}
                        style={{
                            position: 'absolute',
                            top: -10,
                            right: -10,
                            background: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                            width: 22,
                            height: 22,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: 12,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            zIndex: 9999
                        }}
                    >
                        ✖
                    </button>
                </div>
            ) : (
                <>
                    {renderedContent}
                    {column.editor && showEditIcon && (
                        <span style={{
                            position: 'absolute',
                            right: 6,
                            top: 6,
                            fontSize: 12,
                            cursor: 'pointer',
                            color: '#999'
                        }}>✏️</span>
                    )}
                </>
            )}
        </div>
    );
}

export default React.memo(DataGridCell) as typeof DataGridCell;
