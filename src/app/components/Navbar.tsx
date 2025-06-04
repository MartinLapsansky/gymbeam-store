'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import Logo from "@/app/assets/app_images/gymbeam_logo.png"
import Image from "next/image";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            {!menuOpen && (
                <nav className="bg-black text-white p-4 flex items-center justify-between sticky-top-0 z-50">
                    <div className="flex items-center space-x-10">
                        <Image src={Logo} alt="logo" className="w-40 h-auto" />
                        <Link className="border p-2 rounded-2xl hover:bg-gray-600 hidden md:inline" href="/products">Produkty</Link>
                    </div>

                    <Link className="border p-2 rounded-2xl hover:bg-gray-600 hidden md:inline" href="/login">Odhlásiť sa</Link>
                    {/*mobile hamburger*/}
                    <button
                        className="md:hidden text-2xl p-3 hover:bg-gray-600"
                    >
                        <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faBars} />
                    </button>
                </nav>
            )}


        {menuOpen && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-60" onClick={() => setMenuOpen(false)}>
                <div
                    className="fixed right-0 h-full w-2/3 bg-white text-black shadow-lg p-6 flex flex-col space-y-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="text-right text-xl mb-4 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </button>
                    <Link
                        href="/products"
                        className="w-full border-b-2  px-3 py-2 rounded cursor-pointer hover:bg-gray-200 transition-colors font-bold flex items-center space-x-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FontAwesomeIcon icon={faBoxOpen} />
                        <span>Produkty</span>
                    </Link>

                    <Link
                        href="/login"
                        className="w-full px-3 py-2 rounded cursor-pointer hover:bg-gray-200 transition-colors font-bold flex items-center space-x-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>Odhlásiť sa</span>
                    </Link>
                </div>
            </div>
        )}
        </>
    );
}