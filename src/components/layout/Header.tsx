'use client'
import Link from 'next/link'
import React from 'react'
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';


const Header = () => {
    const router = useRouter()
    const [role, setRole] = React.useState<string>('');
    const cookieRole = Cookie.get("role");


    React.useEffect(() => {
        setRole(cookieRole as string);
    }, [cookieRole]);

    const onClickLogoutBtn = () => {
        Cookie.remove("role");
        router.push("/login")
        setRole('');
        router.refresh()
    }

    return (
        <header className='sticky top-0'>
            <nav className="bg-slate-200 px-8 shadow-xl py-4">
                <div className="flex justify-between items-center">
                    <ul className="flex gap-4">
                        <li><Link href="/" className="text-gray-700 border-b hover:bg-gray-50 px-2 py-1">Home</Link></li>
                        <li><Link href="/admin/list" className="text-gray-700 border-b hover:bg-gray-50 px-2 py-1">List</Link></li>
                        <li><Link href="/admin/settings" className="text-gray-700 border-b hover:bg-gray-50 px-2 py-1">Settings</Link></li>
                    </ul>
                    {role
                        ? <button onClick={onClickLogoutBtn} className='px-4 py-2 rounded-md text-red-600'>Logout</button>
                        : <Link href="/login" className="text-gray-700 border-b hover:bg-gray-50 px-2 py-1">Login</Link>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header