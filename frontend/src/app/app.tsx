import React from 'react';
import DataGrid from '../components/DataGrid';
import { MultiUserRenderer } from '../components/renderers/MultiUserRenderer';
import { MultiUserEditor } from '../components/editors/MultiUserEditor';
import { GridColumn } from '../types/GridColumn';

import '../assets/Grid.css'; // adjust path if needed

const data = [
    {
        id: 1,
        name: 'Task A',
        assignees: [
            { id: 1, name: 'Mariam', avatar: 'https://i.pravatar.cc/150?u=mariam' },
            { id: 2, name: 'Narek', avatar: 'https://i.pravatar.cc/150?u=narek' }
        ]
    },
    {
        id: 2,
        name: 'Task B',
        assignees: [
            { id: 3, name: 'Kaitlyn', avatar: 'https://i.pravatar.cc/150?u=kaitlyn' }
        ]
    }
];

const columns: GridColumn<typeof data[0]>[] = [
    {
        key: 'name',
        label: 'Task Name',
        type: 'text'
    },
    {
        key: 'assignees',
        label: 'Assignees',
        type: 'user',
        renderer: (value) => <MultiUserRenderer value={value} />,
        editor: MultiUserEditor
    }
];

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <h2 className="text-center">Interactive Data Grid</h2>
            <DataGrid data={data} columns={columns} />
        </div>
    );
}

export default App;
