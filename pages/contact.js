import { useState } from 'react'
import Link from 'next/link'
import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import Footer from "../components/common/footer"
import Newsletter from '../components/common/newsletter'
import MarkerIcon from '../components/ui/icons/markerIcon'
import PhoneIcon from '../components/ui/icons/phoneIcon'
import EnvelopeIcon from '../components/ui/icons/envelopeIcon'
import ContactForm from '../components/ui/Forms/contact'


export default function Inddex() {

  return (
    <div className="app-container gt-bg1">

      <HeadInfo title= 'Title here' description='description here'/>

      <Header/>

      <section className='px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 mt-10'>

        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

            <h2 className="max-w-lg mb-2 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                <span className="relative inline-block z-0">
                    <svg viewBox="0 0 52 24" fill="currentColor" className="absolute bottom-2 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                        <defs>
                            <pattern id="70326c9b-4a0f-429b-9c76-792941e326d5" x="0" y="0" width=".135" height=".30">
                                <circle cx="1" cy="1" r=".7" />
                            </pattern>
                        </defs>
                        <rect fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)" width="52" height="24" />
                    </svg>
                </span>

                <span className="z-10">Contact</span>

            </h2>

            <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>

        </div>

        <div className='w-full mt-4 flex flex-col lg:flex-row justify-between'>

            <div className='w-full lg:w-6/12 pr-0 lg:pr-10'>

                <p className='text-base font-medium'>
                    Si vous avez des questions n'hésitez pas à nous contacter par téléphone aux heures d'ouvertures ou par courriel à <span className="text-gtpurple font-semibold">services@untitled.com</span> .
                </p>

                <p className='text-base font-medium mt-3'>
                    Nous sommes disponible du <span className="text-gtpurple font-semibold">Lundi au Vendredi</span> Lundi au Vendredi de <span className="text-gtpurple font-semibold">8h à 17h</span> et les <span className="text-gtpurple font-semibold">Samedis</span> de <span className="text-gtpurple font-semibold">9h à 14h 30</span>.
                </p>

                <h3 className='mt-5 text-lg font-bold underline'>Nos informations</h3>

                <div className="mt-3 flex flex-row">
                    <div className="w-6 h-6 border border-gray-300 shadow-inner rounded-full flex flex-row justify-center mr-2 cursor-pointer">
                        <MarkerIcon customClass="w-3 h-3 text-gray-900 self-center" />
                    </div>
                    <div className="text-base font-medium">Adresse: Dakar, Sénégal</div>
                </div>

                <div className="mt-3 flex flex-row">
                    <div className="w-6 h-6 border border-gray-300 shadow-inner rounded-full flex flex-row justify-center mr-2 cursor-pointer">
                        <PhoneIcon customClass="w-3 h-3 text-gray-900 self-center" />
                    </div>
                    <div className="text-base font-medium">Téléphone: 331234567 / 339876737</div>
                </div>

                <div className="mt-3 flex flex-row">
                    <div className="w-6 h-6 border border-gray-300 shadow-inner rounded-full flex flex-row justify-center mr-2 cursor-pointer">
                        <EnvelopeIcon customClass="w-3 h-3 text-gray-900 self-center" />
                    </div>
                    <div className="text-base font-medium">Mail: services@untitled.com</div>
                </div>

            </div>

            <div className='w-full lg:w-6/12 mt-10 lg:mt-0'>
                <ContactForm />
            </div>

        </div>

      </section>
      
      <Newsletter />

      <Footer/>

    </div>
  )
}
