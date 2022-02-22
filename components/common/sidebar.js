import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import AngleRightIcon from '../ui/icons/angleRightIcon';


const categories = [
    { name: 'Ordinateur Portable', href: '#' },
    { name: 'Téléphone', href: '#' },
    { name: 'Tablette', href: '#' },
    { name: 'Accessoires', href: '#' },
  ]

const subCategories = [
    { name: 'Ordinateur de bureau', href: '#' },
    { name: 'Ordinateur portable', href: '#' },
    { name: 'Mini PC', href: '#' },
    { name: 'Netbook', href: '#' },
    { name: 'Tablette PC', href: '#' },
  ]

export default function Sidebar({onOpen2Change, open2}) {

  return (
    <Transition.Root show={open2} as={Fragment}>

        <Dialog as="div" className="fixed inset-0 overflow-hidden z-30" onClose={() => onOpen2Change(false)}>

            <div className="absolute inset-0 overflow-hidden">

                <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">

                    <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="-translate-x-full">

                        <div className="w-screen max-w-md">

                            <div className="h-full flex flex-col bg-gray-900">

                                <div className="flex items-start justify-between h-16 px-4 sm:px-6">
                                    <Dialog.Title className="text-xl xl:text-2xl font-bold text-gray-200 self-center">Untitled</Dialog.Title>
                                    <div className="ml-3 h-7 flex items-center self-center">
                                        <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-300" onClick={() => onOpen2Change(false)}>
                                            <span className="sr-only">Close panel</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>

                                <div className="border-t border-gray-600 py-6 sidebar-items-height overflow-auto overflow-y-scroll">
                                    
                                    <div className='w-full bg-gray-800 bg-opacity-40 text-white font-semibold text-base md:text-lg px-4  sm:px-6 py-2 mb-2'>Ordinateurs</div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Ordinateur de bureau</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Ordinateur Portable</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Mini PC</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Tablette PC</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='w-full bg-gray-800 bg-opacity-40 text-white font-semibold text-base md:text-lg px-4 sm:px-6 py-2 mb-2'>Téléphones portable</div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Téléphone portable classique</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Téléphone multimédia</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Smartphone</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='w-full bg-gray-800 bg-opacity-40 text-white font-semibold text-base md:text-lg px-4 sm:px-6 py-2 mb-2'>Accessoires IT</div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Accessoires d'ordinateurs</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Accessoire téléphone</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-between font-medium text-sm md:text-base text-gray-200 gt-hover-text-gradient duration-700 ease-in-out cursor-pointer bg-gray-100 bg-opacity-0 hover:bg-opacity-50 px-4 sm:px-6 py-3'>
                                        <div className='self-center'>Autres accessoires</div>
                                        <div className='self-center'>
                                            {/* <AngleRightIcon customClass="self-center font-medium w-4 h-4" /> */}
                                        </div>
                                    </div>

                                    
                                </div>

                                

                            </div>

                        </div>

                    </Transition.Child>
                </div>
            
            </div>

        </Dialog>

    </Transition.Root>
  );
}
