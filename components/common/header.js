import React, { Component, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UserIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline'


const style0 =' text-xl xl:text-2xl font-bold text-gray-800 ii-logo self-center';
const style1 = 'font-medium text-lg mr-4 text-blue-600 hover:text-blue-600 duration-700 ease-in-out cursor-pointer';
const style2 = 'font-medium text-lg mr-4 text-gray-900 hover:text-blue-600 duration-700 ease-in-out cursor-pointer';

export default function Header(props) {

    const router = useRouter();

    return (
        <header className="w-full h-20 bg-gray-100 bg-opacity-20 flex flex-col justify-center px-7 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-44">

            <div className="w-full flex flex-row justify-between">

                <Link href='/'>
                    <div className="flex flex-row self-center cursor-pointer">
                        <div className="w-9 self-center mr-1 cursor-pointer hover:rotate-180 duration-700 ease-in-out">
                            <img className="w-full" src="images/logo/logo2.png" />
                        </div>
                        <div className={style0}>Gadget</div>
                    </div>
                </ Link>

                <div className="flex flex-row self-center">

                    <Link href='/'>
                        <div className={router.asPath === '/' ? style1 : style2}>Accueil</div>
                    </Link>

                    <Link href='/'>
                        <div className={router.asPath === '/about' ? style1 : style2}>Catégories</div>
                    </Link>

                    <Link href='/'>
                        <div className={router.asPath === '/produits' ? style1 : style2}>Produits</div>
                    </Link>

                    <Link href='/'>
                        <div className={router.asPath === '/contact' ? style1 : style2}>Contact</div>
                    </Link>

                </div>

                <div className='flex flex-row self-center'>

                    <div className="w-8 h-8 rounded-full border border-gray-100 shadow-md flex flex-row justify-center cursor-pointer btn-effect1 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 mr-2">
                        <Link  href={'/'} >
                            <SearchIcon className="h-4 w-4 text-gray-700 self-center"/>
                        </Link>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-gray-100 shadow-md flex flex-row justify-center cursor-pointer btn-effect1 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 mr-2">
                        <Link  href={'/'} >
                            <ShoppingCartIcon className="h-4 w-4 text-gray-700 self-center"/>
                        </Link>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-gray-100 shadow-md flex flex-row justify-center cursor-pointer btn-effect1 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 mr-2">
                        <Link  href={'/'} >
                            <UserIcon className="h-4 w-4 text-gray-700 self-center"/>
                        </Link>
                    </div>

                </div>


            </div>
                
        </header>
    );
}
