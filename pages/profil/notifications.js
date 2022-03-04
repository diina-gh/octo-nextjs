import { useState } from 'react'
import Link from 'next/link'
import HeadInfo from "../../components/common/headinfo"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import Newsletter from '../../components/common/newsletter'
import SectionHeader2 from '../../components/ui/Others/sectionHeader2'
import Sidebar from '../../components/profil/sidebar'
import { Tab } from '@headlessui/react'
import MenuDotsVertical from '../../components/ui/icons/menuDotsVertical'
import MarkerIcon from '../../components/ui/icons/markerIcon'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Notifications() {

  return (
    <div className="app-container gt-bg1">

      <HeadInfo title= 'Title here' description='description here'/>

      <Header/>

      <section className='bg-gtblack text-gray-100 py-6 pb-20 px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48'>

        <SectionHeader2 text="Mon compte" textColor="text-gray-200" />

        <div className='w-full flex flex-row justify-between mt-5 relative'>

            <Sidebar />

            <div className='w-10/12 ml-10'>

                <Tab.Group>

                    <Tab.List className="flex space-x-1 border-b border-gray-500 border-opacity-50">

                            <Tab className={({ selected }) =>classNames('w-full py-2 text-sm md:text-base leading-5 font-medium rounded-t-lg mb-minus1 tracking-normal','focus:outline-none focus:ring-0 ring-opacity-0', selected ? 'text-gtpurple2 bg-gray-400 bg-opacity-30 shadow-sm border-b gt-border1' : 'text-gray-300 hover:bg-gray-400 hover:bg-opacity-10 hover:text-gray-200')}>
                                Informations personnelles
                            </Tab>

                            <Tab className={({ selected }) =>classNames('w-full py-2 text-sm md:text-base leading-5 font-medium rounded-t-lg mb-minus1 tracking-normal','focus:outline-none focus:ring-0 ring-opacity-0', selected ? 'text-gtpurple2 bg-gray-400 bg-opacity-30 shadow-sm border-b gt-border1' : 'text-gray-300 hover:bg-gray-400 hover:bg-opacity-10 hover:text-gray-200')}>
                                Mes adresses
                            </Tab>

                            {/* <Tab className={({ selected }) =>classNames('w-full py-2 text-sm md:text-base leading-5 font-medium rounded-t-lg mb-minus1 tracking-normal','focus:outline-none focus:ring-0 ring-opacity-0', selected ? 'text-gtpurple2 bg-gray-400 bg-opacity-30 shadow-sm border-b gt-border1' : 'text-gray-300 hover:bg-gray-400 hover:bg-opacity-10 hover:text-gray-200')}>
                                Paramètres
                            </Tab> */}
                        
                    </Tab.List>

                    <Tab.Panels className="mt-8">
                            <Tab.Panel key={1} className={classNames('bg-opacity-0','focus:outline-none focus:ring-0 ring-opacity-0')}>

                                <div className="grid grid-cols-2 gap-10">

                                    <div className='h-52 rounded-lg border-2 border-slate-200 border-opacity-20 hover:border-gtpurple p-5'>

                                        <div className='flex flex-row justify-between'>
                                            <div className='text-lg text-gray-200 font-semibold self-center'>Informations personnelles</div>
                                            <MenuDotsVertical customClass="w-4 h-4 text-gray-400 hover:text-gtpurple cursor-pointer self-center" />
                                        </div>

                                        <div className='mt-5'>

                                            <div className='text-base font-medium text-gray-200'>
                                                <span className='text-gray-400 text-opacity-60 mr-2'>Nom complet :</span>
                                                <span className=''>Seydina Gueye</span>
                                            </div>

                                            <div className='text-base font-medium text-gray-200 mt-2'>
                                                <span className='text-gray-400 text-opacity-60 mr-2'>Adresse email :</span>
                                                <span className=''>dina3903@gmail.com</span>
                                            </div>

                                            <div className='text-base font-medium text-gray-200 mt-2'>
                                                <span className='text-gray-400 text-opacity-60 mr-2'>Téléphone :</span>
                                                <span className=''>+221781234567</span>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='h-52 rounded-lg border-2 border-slate-200 border-opacity-20 hover:border-gtpurple  p-5'>

                                        <div className='flex flex-row justify-between'>
                                            <div className='text-lg text-gray-200 font-semibold self-center'>Adresse par défaut</div>
                                            <MenuDotsVertical customClass="w-4 h-4 text-gray-400 hover:text-gtpurple cursor-pointer self-center" />
                                        </div>

                                        <div className='mt-5'>

                                            <div className='text-base font-medium text-gray-200 flex flex-row'>
                                                <div className='mr-2 self-center'>
                                                    <MarkerIcon customClass="w-4 h-4 text-gray-400 text-opacity-60" />
                                                </div>
                                                <div className='text-gray-400 text-opacity-60 self-center'>
                                                    Dakar, Sénégal
                                                </div>
                                            </div>

                                            <div className='text-base font-medium text-gray-200 mt-2'>
                                                <span className=''>Cité Diamalaye II, Villa 60E</span>
                                            </div>


                                        </div>

                                    </div>

                                    <div className='h-52 rounded-lg border-2 border-slate-200 border-opacity-20 hover:border-gtpurple p-5'>

                                        <div className='flex flex-row justify-between'>
                                            <div className='text-lg text-gray-200 font-semibold self-center w-48 h-3 rounded-lg bg-slate-200 bg-opacity-20 animate-pulse'></div>
                                            <MenuDotsVertical customClass="w-4 h-4 text-gray-400 hover:text-gtpurple cursor-pointer self-center" />
                                        </div>

                                        <div className='mt-8'>

                                            <div className='text-base font-medium text-gray-200 w-72 h-2 rounded-lg bg-slate-200 bg-opacity-20 animate-pulse'>
                                                {/* <span className='text-gray-400 text-opacity-60 mr-2'>Nom complet :</span>
                                                <span className=''>Seydina Gueye</span> */}
                                            </div>

                                            <div className='text-base font-medium text-gray-200 mt-3 w-96 h-2 rounded-lg bg-slate-200 bg-opacity-20 animate-pulse'>
                                                {/* <span className='text-gray-400 text-opacity-60 mr-2'>Adresse email :</span>
                                                <span className=''>dina3903@gmail.com</span> */}
                                            </div>

                                            <div className='text-base font-medium text-gray-200 mt-3 w-80 h-2 rounded-lg bg-slate-200 bg-opacity-20 animate-pulse'>
                                                {/* <span className='text-gray-400 text-opacity-60 mr-2'>Téléphone :</span>
                                                <span className=''>+221781234567</span> */}
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </Tab.Panel>
                    </Tab.Panels>

                </Tab.Group>

            </div>

        </div>
        
        
      </section>
      
      <Newsletter />

      <Footer/>

    </div>
  )
}
