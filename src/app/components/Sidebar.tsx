'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryClick = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (category === 'all') {
            params.delete('category');
        } else {
            params.set('category', category);
        }
        router.push(`${pathname}?${params.toString()}`);
        setIsOpen(false);
    };

    const categories = [
        { key: 'all', label: 'Všetko' },
        { key: 'electronics', label: 'Elektronika' },
        { key: 'clothing', label: 'Oblečenie' },
        { key: 'accessories', label: 'Príslušenstvo' }
    ];

    return (
        <aside className="bg-gray-100 p-4 w-full md:w-50">
            <h2 className="font-bold mb-2 text-xl md:mb-4">Kategórie</h2>

            {/* Mobile (dropdown) */}
            <div className="flex flex-col items-center ml-2 md:hidden">

                <button
                    className="w-full flex flex-row border rounded p-2 mb-2 text-left justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <p>Vybrať kategóriu</p>
                    <FontAwesomeIcon icon={faArrowDown} onClick={() => setIsOpen}></FontAwesomeIcon>
                </button>
                {isOpen && (
                    <ul className="w-full space-y-2 text-gray-700 border rounded p-2">
                        {categories.map((c) => (
                            <li
                                key={c.key}
                                onClick={() => handleCategoryClick(c.key)}
                                className="w-full px-3 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 transition-colors"
                            >
                                {c.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/*desktop always visible*/}
            <ul className="space-y-2 text-gray-700 hidden md:block">
                {categories.map((c) => (
                    <li
                        key={c.key}
                        onClick={() => handleCategoryClick(c.key)}
                        className="hover:underline cursor-pointer"
                    >
                        {c.label}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
