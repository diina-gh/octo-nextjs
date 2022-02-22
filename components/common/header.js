import React, { Component,Fragment, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'
import { UserIcon, ShoppingCartIcon, SearchIcon, HeartIcon, XIcon } from '@heroicons/react/outline'

const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 3,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    // More products...
  ]

const style0 =' text-2xl xl:text-3xl font-bold text-gray-200 self-center';
const style1 = 'font-medium text-sm md:text-base mx-3 gt-text-gradient duration-700 ease-in-out cursor-pointer gt-border1';
const style2 = 'font-medium text-sm md:text-base mx-3 text-gray-900 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer';
const style4 =' hidden lg:block';
const style5 =' hidden md:block';


export default function Header(props) {

    const router = useRouter();
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)


    return (
        <header className="w-full bg-gray-100 bg-opacity-0">

            <div className='fixed top-0 left-0 right-0 w-full h-16 bg-gtblack z-20 flex flex-row justify-between px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48'>

                <Link href='/'>
                    <div className="flex flex-row self-center cursor-pointer">
                    
                        <div className="mr-2 text-gray-400 self-center md:hidden">
                            <button onClick={() => setOpen2(true)} className="w-7 h-7 flex items-center px-2 py-2 border rounded text-gray-300 border-gray-300 focus:outline-none">
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div className={style0}>Untitled</div>
                    </div>
                </ Link>

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
                        <SearchIcon className="w-4 md:w-5 h-4 md:h-5 text-white self-center"/>
                    </div>
                    

                </div>

                <div className='flex flex-row self-center'>

                    <div className="w-7 md:w-8 h-7 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                         <UserIcon className="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                    </div>

                    <div className="w-7 md:w-8 h-7 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                        <HeartIcon className="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                    </div>

                    <div onClick={() => setOpen(true)} className="w-7 md:w-8 h-7 md:h-8 rounded-full  flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2">
                        <ShoppingCartIcon className="w-3 md:w-4 h-3 md:h-4 text-white self-center"/>
                    </div>


                </div>

            </div>

            <div className="bg-gray-400 bg-opacity-40 w-0 h-0 md:w-full md:h-10 mt-16 flex flex-row justify-between px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 overflow-hidden">

                <div onClick={() => setOpen2(true)} className="flex float-right items-center">
                    <div className="mr-0 text-gray-400">
                        <button className="flex items-center py-2 text-gtblack border-teal-500 focus:outline-none">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
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

        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden z-30" onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                    <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                    >
                    <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                            <div className="ml-3 h-7 flex items-center">
                                <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                                >
                                <span className="sr-only">Close panel</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            </div>

                            <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="py-6 flex">
                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                        <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover"
                                        />
                                    </div>

                                    <div className="ml-4 flex-1 flex flex-col">
                                        <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                            <a href={product.href}>{product.name}</a>
                                            </h3>
                                            <p className="ml-4">{product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                        </div>
                                        <div className="flex-1 flex items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {product.quantity}</p>

                                        <div className="flex">
                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Remove
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                            <a
                                href="#"
                                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Checkout
                            </a>
                            </div>
                            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                            <p>
                                or{' '}
                                <button
                                type="button"
                                className="text-indigo-600 font-medium hover:text-indigo-500"
                                onClick={() => setOpen(false)}
                                >
                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
        </Transition.Root>

        <Transition.Root show={open2} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden z-30" onClose={setOpen2}>
                <div className="absolute inset-0 overflow-hidden">
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-y-0 left-0 max-w-full flex">
                    <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    >
                    <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">Menu</Dialog.Title>
                            <div className="ml-3 h-7 flex items-center">
                                <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen2(false)}
                                >
                                <span className="sr-only">Close panel</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            </div>

                            <div className="mt-8">
                            <div className="flow-root">
                                
                            </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                            
                        </div>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
        </Transition.Root>
                
        </header>
    );
}
