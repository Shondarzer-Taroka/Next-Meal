'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const NavBar = () => {
    const pathName = usePathname()

    const links = [
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        
    ]

    if (pathName.includes('dashboard')) {

        return <div className="bg-green-300">
            <p>dashboard</p>
        </div>
    }

    return (
        <nav className="bg-slate-300 text-black flex justify-between items-center p-4">
            <h5 className="text-[34px] font-bold">
                <span className="mr-2">Next</span>
                <span className="text-green-400">Hero</span>
            </h5>

            <ul className="flex gap-2">
                {
                    links.map(link => <li key={link.path}> <Link className={pathName === link.path && 'text-fuchsia-500'} href={link.path}> {link.title}</Link> </li>)
                }
            </ul>

            <button className="bg-green-400 text-white p-3 rounded-xl"> <Link href={'/login'}> log In</Link></button>
        </nav>
    );
};

export default NavBar;