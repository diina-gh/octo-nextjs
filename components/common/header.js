import React, { Component,Fragment, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cart from '../shoppingcart/cart';
import Sidebar from './sidebar';
import CartIcon from '../ui/icons/cartIcon';
import UserIcon from '../ui/icons/userIcon';
import SearchIcon from '../ui/icons/searchIcon';
import HeartIcon from '../ui/icons/heartIcon';
import MenuBurgerIcon from '../ui/icons/menuBurgerIcon';


const style0 =' text-xl xl:text-2xl font-bold text-gray-200 self-center';
const style1 = 'font-medium text-sm md:text-base mx-3 gt-text-gradient duration-700 ease-in-out cursor-pointer gt-border1';
const style2 = 'font-medium text-sm md:text-base mx-3 text-gray-900 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer';
const style4 =' hidden lg:block';
const style5 =' hidden md:block';


export default function Header(props) {

    const router = useRouter();
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const onOpenChange = (cartData) => {
        setOpen(cartData);
    }

    const onOpen2Change = (sidebarData) => {
        setOpen2(sidebarData);
    }


    return (
        <header className="w-full bg-gray-100 bg-opacity-0">

            <div className='fixed top-0 left-0 right-0 w-full h-16 bg-gtblack z-20 flex flex-row justify-between px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48'>

                
                    <div className="flex flex-row self-center cursor-pointer">
                    
                        <div className="mr-2 text-gray-400 self-center md:hidden">
                            <button onClick={() => setOpen2(true)} className="w-7 h-7 flex items-center px-2 py-2 border rounded text-gray-300 border-gray-300 focus:outline-none">
                                <MenuBurgerIcon customClass="fill-current h-4 w-4" />
                            </button>
                        </div>

                        <Link href='/'>
                            <div className='flex flex-row h-max items-center self-center'>
                                <div className='h-[1.65rem] self-center mr-1.5'>
                                    <img src='logos/logo1.webp' className='h-full' />
                                </div>
                                <div className={style0}>Octo</div>
                            </div>
                           
                        </ Link>

                    </div>

                <div className="w-0 h-0 overflow-hidden lg:w-max lg:h-10 flex flex-row self-center rounded-lg">

                    <div className="gt-w-38 h-full">
                        <select className="w-full h-full px-1 xl:px-2 bg-gray-100 border-0 rounded-l-lg text-xs font-medium truncate cursor-pointer">
                            <option >Toutes les catégories</option>
                            <option value="1" >Oridnateurs</option>
                            <option value="2">Téléphones</option>
                            <option value="3">Tablettes</option>
                            <option value="4">Accessoires</option>
                        </select>
                    </div>

                    <div className='w-64 xl:w-80 h-full'>
                        <input type="search"  className='w-full h-full text-sm border-0 border-l border-gray-500' placeholder='Rechercher un produit ...' />
                    </div>

                    <div className='w-10 xl:w-12 h-10 gt-bg-gradient rounded-r-lg flex flex-row justify-center cursor-pointer'>
                        <SearchIcon customClass="w-4 md:w-5 h-4 md:h-5 text-white self-center" />
                    </div>
                    

                </div>

                <div className='flex flex-row self-center'>

                    <div className="w-7 md:w-8 h-7 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                         <UserIcon customClass="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                    </div>

                    <div className="w-7 md:w-8 h-7 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                        <HeartIcon customClass="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                    </div>

                    <div onClick={() => setOpen(true)} className="w-7 md:w-8 h-7 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                        <CartIcon customClass="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                    </div>


                </div>

            </div>

            <div className="bg-gray-400 bg-opacity-40 w-0 h-0 md:w-full md:h-10 mt-16 flex flex-row justify-between px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 overflow-hidden">

                <div onClick={() => setOpen2(true)} className="flex float-right items-center">
                    <div className="mr-0 text-gray-400">
                        <button className="flex items-center py-2 text-gtblack border-teal-500 focus:outline-none self-center">
                            <MenuBurgerIcon customClass="fill-current h-4 w-4" />
                        </button>
                    </div>
                    <div className={style2}>
                        Toutes
                    </div>
                </div>
                        
                <div className="flex flex-row self-center">

                    <Link href='/catalogue'>
                        <div className={style2}>Ordinateurs</div>
                    </Link>

                    <Link href='/catalogue'>
                        <div className={style2}>Téléphones</div>
                    </Link>

                    <Link href='/catalogue'>
                        <div className={style2}>Tablettes</div>
                    </Link>

                    <Link href='/catalogue'>
                        <div className={style2}>Accessoires</div>
                    </Link>

                    <Link href='/'>
                        <div className={style2 + style4}>Offres</div>
                    </Link>

                    <Link href='/'>
                        <div className={style2 + style4}>Promos</div>
                    </Link>

                    <Link href='/'>
                        <div className={style2 + style4}>Nouveauté</div>
                    </Link>


                </div>

                <div className="flex flex-row self-center">

                    <Link href='/contact'>
                        <div className={router.asPath === '/contact' ? style1 + style5 : style2 + style5}>Contact</div>
                    </Link>

                    <Link href='/faqs'>
                        <div className={router.asPath === '/faqs' ? style1 + style5 : style2 + style5}>FAQ</div>
                    </Link>

                </div>


            </div>


        <Cart open={open} onOpenChange={onOpenChange} />
        <Sidebar open2={open2} onOpen2Change={onOpen2Change} />
    
        </header>
    );
}
