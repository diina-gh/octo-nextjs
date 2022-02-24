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
import SectionHeader2 from '../components/ui/Others/sectionHeader2'

const desc = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."

export default function Inddex() {

  return (
    <div className="app-container gt-bg1">

      <HeadInfo title= 'Title here' description='description here'/>

      <Header/>

      <section className='px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 mt-10'>

        <SectionHeader2 text="Contact" textColor="text-gray-900" description={desc} />

        <div className='w-full mt-4 flex flex-col lg:flex-row justify-between'>

            <div className='w-full lg:w-6/12 pr-0 lg:pr-10'>

                <p className='text-base font-medium'>
                    Si vous avez des questions n&#39;hésitez pas à nous contacter par téléphone aux heures d&#39;ouvertures ou par courriel à <span className="text-gtpurple font-semibold">services@untitled.com</span> .
                </p>

                <p className='text-base font-medium mt-3'>
                    Nous sommes disponible du <span className="text-gtpurple font-semibold">Lundi au Vendredi</span> de <span className="text-gtpurple font-semibold">8h à 17h</span> et les <span className="text-gtpurple font-semibold">Samedis</span> de <span className="text-gtpurple font-semibold">9h à 14h 30</span>.
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
