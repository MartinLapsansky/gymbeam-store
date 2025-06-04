'use client';
import React from 'react';
import {useRouter} from 'next/navigation';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function ProductCard({ product }: { product: Product }) {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${product.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="relative flex flex-col border rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer h-full"
        >
            <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.category}</p>

            <p className="absolute bottom-4 right-4 text-gray-800 font-bold">
                ${product.price}
            </p>
        </div>

);
}