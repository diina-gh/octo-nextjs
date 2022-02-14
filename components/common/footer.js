import React, { Component, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer(props) {
    return (
        <footer className="w-full bg-gtblack">

            <div className="bg-gtblack gt-bg4 pt-10 md:pt-20 pb-4 px-7 sm:px-16 md:px-20 lg:px-28 xl:px-36 2xl:px-52 w-full">

                <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10 m-auto mt-2">

                    <div className="col-span-2 md:col-span-1 mb-3 md:mb-0">
                        <div className="w-full flex flex-row justify-center md:justify-start mb-3">
                            <div className="">
                                <a href="/" className="block lg:inline-block text-3xl font-bold mt-lg-0 mr-0 mr-md-10 no-underline cursor-pointer text-gray-200">
                                    Gadget
                                </a>
                            </div>
                        </div>

                        <div className="text-gray-300 flex flex-row justify-center md:justify-start">
                            <div className="text-xs flex flex-row">
                                <Link href={'https://web.facebook.com/Iris-Academy-102645905576715/?_rdc=1&_rdr'} >
                                    <div className="ii-social w-6 h-6 border border-gray-300 rounded-full flex flex-col justify-center mr-2 cursor-pointer">
                                        <div className="w-full text-center"><span className="fab fa-facebook-f"></span></div>
                                    </div>
                                </Link>
                                <Link href={'https://twitter.com/IrisAcademy1'} >
                                    <div className="ii-social w-6 h-6 border border-gray-300 rounded-full flex flex-col justify-center mr-2 cursor-pointer">
                                        <div className="w-full text-center"><span className="fab fa-twitter"></span></div>
                                    </div>
                                </Link>
                                <Link href={'https://www.instagram.com/invites/contact/?i=1dx6manw7yab9&utm_content=n188ren'} >
                                    <div className="ii-social w-6 h-6 border border-gray-300 rounded-full flex flex-col justify-center mr-2 cursor-pointer">
                                        <div className="w-full text-center"><span className="fab fa-instagram"></span></div>
                                    </div>
                                </Link>
                                <Link href={'https://www.linkedin.com/company/iris-academy-sn'} >
                                    <div className="ii-social w-6 h-6 border border-gray-300 rounded-full flex flex-col justify-center mr-2 cursor-pointer">
                                        <div className="w-full text-center"><span className="fab fa-linkedin-in"></span></div>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>

                    </div>

                    <div className="">
                        <div className="text-lg font-medium text-white">Contenu</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Accueil</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">A propos</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Produits</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Contact</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Terms & Condition</div>
                    </div>

                    <div className="">

                        <div className="text-lg font-medium text-white mb-3">Nos catégories</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Téléphone</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Ordinateur</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Tablette</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Accessoire</div>
                        <div className="text-base text-gray-200 font-normal mt-1 transition duration-700 ease-in-out underline cursor-pointer">Voir +</div>

                    </div>

                    <div className="">
                        <div className="text-lg font-medium text-white">En savoir plus</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">FAQ</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Paiement</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Livraison</div>
                        <div className="text-base text-gray-100 font-normal mt-1 transition duration-700 ease-in-out cursor-pointer">Politique de retour</div>
                    </div>

                </div>

                <div className="text-center text-xs text-gray-300 font-normal mt-20"> © 2022
                    <span className="text-gray-200 ml-1">Gadget</span> | Created by <a className="cursor-pointer text-gray-200 hover:text-gray-50 no-underline hover:underline transition duration-700 ease-in-out" href="https://www.linkedin.com/in/seydina-gueye-596b051b0/" target="_blank">Seydina GUEYE</a>
                </div>
                
            </div>
                
        </footer>
    );
}
