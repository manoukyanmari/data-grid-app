export type ColumnType = 'text' | 'number' | 'tag' | 'link' | 'user';

export interface GridColumn<T = any> {
    key: keyof T;
    label: string;
    type: ColumnType;
    renderer?: (value: any, row: T) => React.ReactNode;
    editor?: React.ComponentType<{
        value: any;
        onChange: (newValue: any) => void;
    }>;
}