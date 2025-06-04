'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/app_images/gymbeam_logo.png';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


export default function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const router = useRouter();

    const handleRegister = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                }),
            });

            if (!res.ok) throw new Error('Registrácia zlyhala');

            const data = await res.json();
            toast.success('Registrácia prebehla úspešne!');
            router.push('/login');

            //console.log('User registered:', data);
        } catch (error) {
            toast.error('Registrácia zlyhala!');
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center p-6 md:p-10">
                <Image src={Logo} alt="Logo" width={200} height={200} className="mb-4" />
                <p className="text-center max-w-sm text-sm md:text-lg">
                    Vytvorte si účet a získajte prístup k našim exkluzívnym produktom.
                </p>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-md">
                    <p
                        onClick={() => router.push('/login')}
                        className="flex text-lg font-bold mb-30 cursor-pointer hover:underline text-gray-600"
                    >
                        ← Späť 
                    </p>
                    <div className="flex flex-col items-center space-x-2">
                    <h1 className="flex justify-center text-xl md:text-2xl font-bold mb-6 text-center">Registrovať sa</h1>

                    <input
                        className="flex w-full border p-3 mb-4 rounded"
                        type="text"
                        placeholder="Používateľské meno"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="flex w-full border p-3 mb-4 rounded"
                        type="email"
                        placeholder="Emailová adresa"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="flex w-full border p-3 mb-6 rounded"
                        type="password"
                        placeholder="Heslo"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={handleRegister}
                        className="flex justify-center w-50 bg-green-600 text-white py-3 rounded-3xl hover:bg-green-700"
                    >
                        Registrovať sa
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
