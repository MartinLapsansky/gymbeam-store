import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export const dynamic = 'force-dynamic';

async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Product fetch failed');
    }

    return res.json();
}

type PageProps = {
    params: { id: string };
};

export default async function ProductDetailPage(props: PageProps) {
    const { id } = props.params;
    const product = await getProduct(id);

    return (
        <>
            <Navbar />

            <Link
                href="/products"
                className="block text-black font-bold hover:underline text-lg ml-6 mt-4"
            >
                ← Späť na produkty
            </Link>

            <main className="max-w-6xl mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-10">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-96 w-96 object-contain mx-auto md:mx-0"
                    />

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                        <p className="text-gray-600 mb-2 capitalize">{product.category}</p>
                        <p className="text-2xl font-bold text-gray-800 mb-2">${product.price}</p>

                        <div className="flex items-center mb-2 text-xl">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i}>
                                    {i < Math.round(product.rating.rate) ? '⭐' : '☆'}
                                </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-600">
                                ({product.rating.count} hodnotení)
                            </span>
                        </div>

                        <p className="text-gray-700 mb-6 text-lg">{product.description}</p>

                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                min={1}
                                defaultValue={1}
                                className="w-20 border rounded p-2 text-center text-lg"
                            />
                            <button className="bg-black text-white px-6 py-2 rounded-lg text-lg hover:bg-gray-800">
                                Pridaj do košíka
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
