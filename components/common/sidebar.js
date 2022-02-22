import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function Sidebar({onOpen2Change, open2}) {

  return (
    <Transition.Root show={open2} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden z-30" onClose={() => onOpen2Change(false)}>
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

                    <div className="h-full flex flex-col bg-gray-900">

                        <div className="flex items-start justify-between h-16 px-4 sm:px-6">
                            <Dialog.Title className="text-lg font-medium text-gray-100 self-center">Untitled</Dialog.Title>
                            <div className="ml-3 h-7 flex items-center self-center">
                                <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-300" onClick={() => onOpen2Change(false)}>
                                    <span className="sr-only">Close panel</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <div className="border-t border-gray-600 py-6 px-4 sm:px-6 overflow-auto overflow-y-scroll">
                            
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
