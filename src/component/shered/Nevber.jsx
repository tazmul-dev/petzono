"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assert/logo.png'

const Nevber = () => {

 const { data:session } = authClient.useSession()

 const user = session?.user
//  console.log(user)
    const link = [
        <>
            <li><Link href={'/'} >Home</Link></li>
            <li><Link href={'/allPets'} >All pet</Link></li>
            <li><Link href={'/deshboard'} >Deshboard</Link></li>
        </>
    ]
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                   <div className='flex items-center'>
                    <Image
                    src={logo}
                    alt='logo'
                    width={60}
                    height={60}
                    ></Image>
                    <p className='font-bold text-xl'>PetZono</p>
                   </div>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user? 
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn m-1"> 
                            <Image
                            src={user?.image}
                            alt='profile image'
                            height={40}
                            width={40}
                            className=' rounded-full'
                            ></Image> <p>⬇️</p></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><Link href={"/deshboard"}>Deshboard</Link></li>
                            <li><button onClick={async()=>{await authClient.signOut();}} className='text-red-500 btn' href={"/deshboard"}>logout</button></li>
                            
                            
                        </ul>
                    </div> : <div className=''>
                        <Link className='btn mr-2' href={'/register'}>SingUp</Link>
                        <Link className='btn' href={'/login'}>LogIn</Link>
                    </div>}
                    

                </div>
            </div>
        </div>
    );
};

export default Nevber;