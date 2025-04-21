import React, { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    avatar: string;
}

interface Option {
    label: string;
    value: number;
    avatar: string;
    name: string;
}

export function MultiUserEditor({
                                    value,
                                    onChange
                                }: {
    value: Option[];
    onChange: (val: Option[]) => void;
}) {
    const [options, setOptions] = useState<Option[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/users').then(res => {
            const users: User[] = res.data;
            const mapped = users
                .filter(user => user.id != null && user.name)
                .map((user, index) => ({
                    label: user.name ?? `Unnamed-${index}`,
                    value: user.id ?? index,
                    avatar: user.avatar ?? '',
                    name: user.name ?? `User ${index}`
                }));
            setOptions(mapped);
        });
    }, []);

    const safeValue: Option[] = Array.isArray(value)
        ? value.filter((v) => v && v.value != null && v.label != null)
        : [];

    const MenuList = (props: any) => (
        <components.MenuList {...props}>
            {props.children}
            <div
                style={{
                    padding: '10px',
                    textAlign: 'center',
                    borderTop: '1px solid #eee',
                    cursor: 'pointer',
                    fontSize: 13,
                    color: '#007bff'
                }}
                onClick={() => alert('Open Add User Modal')}
            >
                ➕ Add New User
            </div>
        </components.MenuList>
    );

    return (
        <div style={{ position: 'relative', minWidth: 250, zIndex: 1000 }}>
            <Select
                isMulti
                value={safeValue}
                options={options}
                onChange={(selected) => {
                    const cleaned = (selected as Option[]).filter(
                        (v) => v && v.value != null && v.label != null
                    );
                    onChange(cleaned);
                }}
                formatOptionLabel={(e: Option) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <img
                            src={e.avatar}
                            alt={e.name}
                            width="20"
                            height="20"
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                        />
                        {e.name}
                    </div>
                )}
                menuPortalTarget={document.body}
                components={{ MenuList }}
                styles={{
                    menuPortal: base => ({ ...base, zIndex: 9999 }),
                    control: base => ({ ...base, minHeight: 38, borderRadius: 6 }),
                    multiValue: base => ({ ...base, backgroundColor: '#f1f1f1', borderRadius: 4 }),
                    multiValueLabel: base => ({ ...base, fontSize: 13 }),
                    multiValueRemove: base => ({
                        ...base,
                        ':hover': {
                            backgroundColor: '#e0e0e0',
                            color: '#000'
                        }
                    })
                }}
            />
        </div>
    );
}
