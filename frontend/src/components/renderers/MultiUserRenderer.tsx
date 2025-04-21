import React from 'react';

interface User {
    id: number;
    name: string;
    avatar: string;
}

export const MultiUserRenderer = ({ value }: { value: User[] }) => {
    if (!value || value.length === 0) return <span>No users</span>;

    const visible = value.slice(0, 3);
    const overflow = value.length > 3 ? value.length - 3 : 0;

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {visible.map((user, i) => (
                <img
                    key={i}
                    src={user.avatar}
                    alt={user.name}
                    title={user.name}
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '1px solid #ddd'
                    }}
                />
            ))}
            {overflow > 0 && (
                <span
                    title={value.slice(3).map(u => u.name).join(', ')}
                    style={{
                        fontSize: 12,
                        background: '#eee',
                        borderRadius: '50%',
                        width: 24,
                        height: 24,
                        textAlign: 'center',
                        lineHeight: '24px',
                        border: '1px solid #ccc'
                    }}
                >
      +{overflow}
    </span>
            )}
        </div>

    );
};
