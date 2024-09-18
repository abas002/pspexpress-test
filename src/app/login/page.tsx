'use client'
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
    const router = useRouter()

    const onClickLogin = (role: string) => {
        Cookie.set('role', role, { path: '/' });
        router.push("/admin/list")
        router.refresh()
    }
    return (
        <section className='h-full flex justify-center items-center gap-4 [&>*]:rounded-xl [&>*]:px-4 [&>*]:py-2'>
            <button className='bg-green-400' onClick={() => onClickLogin("admin")}>Login as Admin</button>
            <button className='bg-purple-400' onClick={() => onClickLogin("user")}>Login as User</button>
        </section>
    )
}

export default LoginPage