'use client';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/app/assets/app_images/gymbeam_logo.png';
import Image from "next/image";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        const res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            router.push('/products');
        } else {
            alert('Login failed');
        }
    }

    //console log users for login
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/users', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                })
                const data = await res.json();
                //console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        getUsers();

    },[])

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Ľavá časť */}
            <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center p-10">
                <Image src={Logo} alt="Logo" color={'white'} width={300} height={300} className="mb-5"/>
                <p className="text-lg text-center max-w-md">
                    Váš komplexný obchod s produktmi pre fitness, zdravie a wellness.
                    Prihláste sa a začnite nakupovať!
                </p>
            </div>

            {/* Pravá časť */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-10">
                <div className="flex flex-col justify-center items-center w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Prihlásiť sa</h1>
                    <input
                        className="flex w-full border p-3 mb-4 rounded"
                        type="text"
                        placeholder="Používateľské meno"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="flex w-full border p-3 mb-4 rounded"
                        type="password"
                        placeholder="Heslo"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={handleLogin}
                        className="flex flex-col w-60 bg-blue-600 text-white py-3 rounded-3xl hover:bg-blue-700 cursor-pointer"
                    >
                        Prihlásiť sa
                    </button>
                    <p className="text-lg font-bold mb-6 text-center mt-5 cursor-pointer">Nemáš ešte účet?<span onClick={() => router.push('/registration')} className="font-bold hover:underline ml-3">Registruj sa tu!</span></p>
                </div>
            </div>
        </div>
    );
}