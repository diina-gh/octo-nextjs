import React, { Component, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UserIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline'


const style0 =' text-2xl xl:text-3xl font-bold gt-text-gradient self-center';
const style1 = 'font-medium text-lg mx-3 hidden md:block gt-text-gradient duration-700 ease-in-out cursor-pointer gt-border1';
const style2 = 'font-medium text-lg mx-3 hidden md:block text-gray-900 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer';

export default function Header(props) {

    const router = useRouter();

    return (
        <header className="w-full h-20 bg-gray-100 bg-opacity-0 flex flex-col justify-center px-7 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-44">

            <div className="w-full flex flex-row justify-between">

                <Link href='/'>
                    <div className="flex flex-row self-center cursor-pointer">
                        {/* <div className="w-9 self-center mr-1 cursor-pointer hover:rotate-180 duration-700 ease-in-out">
                            <img className="w-full" src="images/logo/logo2.png" />
                        </div> */}
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

                    <Link href='/'>
                        <div className={router.asPath === '/faq' ? style1 : style2}>FAQ</div>
                    </Link>

                </div>

                <div className='flex flex-row self-center'>

                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                        <Link  href={'/'} >
                            <SearchIcon className="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                        </Link>
                    </div>

                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                        <Link  href={'/'} >
                            <ShoppingCartIcon className="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                        </Link>
                    </div>

                    <div className="w-6 md:w-8 h-6 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                        <Link  href={'/'} >
                            <UserIcon className="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                        </Link>
                    </div>

                </div>


            </div>
                
        </header>
    );
}
