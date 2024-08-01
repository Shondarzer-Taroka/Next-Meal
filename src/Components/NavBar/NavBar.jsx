'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const NavBar = () => {
    const pathName = usePathname()
    const session = useSession()
    console.log(session.data);
    const links = [
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },

    ]

    // if (pathName.includes('dashboard')) {

    //     return <div className="bg-green-300">
    //         <p>dashboard</p>
    //     </div>
    // }

    return (
        <nav className="bg-slate-300 text-black flex justify-between items-center p-4">
            <h5 className="text-[34px] font-bold">
                <span className="mr-2">Next</span>
                <span className="text-green-400">Meal</span>
            </h5>

            <ul className="flex gap-2">
                {
                    links.map(link => <li key={link.path}> <Link className={pathName === link.path && 'text-fuchsia-500'} href={link.path}> {link.title}</Link> </li>)
                }
            </ul>


            {/* {session.status !== 'authenticated' ? <button className="bg-green-400 text-white p-3 rounded-xl" onClick={()=> signIn()}>  log In</button> :
                <button onClick={()=> signOut()} className="bg-green-400 text-white p-3 rounded-xl">  log out</button>
            } */}

            <div className=" flex gap-4">

            {session.status !== 'authenticated' ? <> <button className="bg-green-400 text-white p-3 rounded-xl" onClick={()=> signIn()}>  log In</button> 
            
           <Link href={'/api/auth/signup'}> <button className="bg-green-400 text-white p-3 rounded-xl">Register</button> </Link> 
             </>:
                <button onClick={()=> signOut()} className="bg-green-400 text-white p-3 rounded-xl">  log out</button>
            }


                {session && <div className="flex gap-1 items-center">

                    <Image width={60} height={60} className="rounded-full border" alt={session.data?.user?.name} src={session.data?.user?.image} />
                    <div>
                        {session.data?.user.name}
                        <br />
                        {session.data?.user.email}
                    </div>

                </div>}
            </div>

            {/* {session.data?.user.name}
            <br />
           {session.data?.user.email} */}
        </nav>

    );
};

export default NavBar;