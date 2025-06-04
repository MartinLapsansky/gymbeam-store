import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import Navbar from '@/app/components/Navbar';
import Header from '@/app/components/Header';

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

async function getProducts(): Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products', {
        cache: 'no-store',
    });
    return res.json();
}

export default async function ProductsPage({ searchParams }: { searchParams: { category?: string } }) {
    const allProducts = await getProducts();
    const category = searchParams.category || 'all';

    const filteredProducts = allProducts.filter((product) => {
        if (category === 'all') return true;
        if (category === 'electronics') return product.category === 'electronics';
        if (category === 'clothing') return (
            product.category === "men's clothing" || product.category === "women's clothing"
        );
        if (category === 'accessories') return product.category === 'jewelery';
        return true;
    });

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <Header title="Naše produkty" />
                    <ProductList products={filteredProducts} />
                </div>
            </div>
        </div>
    );
}
