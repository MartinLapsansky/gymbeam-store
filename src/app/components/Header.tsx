import React from 'react';

export default function Header({ title }: { title: string }) {
    return (
        <header className="p-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </header>
    );
}