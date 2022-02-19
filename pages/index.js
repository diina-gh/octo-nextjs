import { useState } from 'react'
import Link from 'next/link'
import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import Catalogue1 from '../components/product/catalogue1'
import Footer from "../components/common/footer"
import Offre from '../components/section/offre'
import Promos from '../components/section/promos'
import Newsletter from '../components/common/newsletter'

const offre1 = {
  id: 1,
  image: 'images/product/image4.webp',
  title: 'Lorem ipsun dolor sit amet consectetur aute magna aliqua',
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
}

const promos1 = {
  id: 1,
  image: 'images/product/image3.webp',
  title: 'Lorem ipsun dolor sit amet consectetur aute magna aliqua',
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
}


export default function Home() {

  return (
    <div className="app-container gt-bg1">

      <HeadInfo title= 'Title here' description='description here'/>

      <Header/>

      <section className="ii-present flex justify-center bg-gray-100 bg-opacity-5 px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48">
          <div className="w-full flex flex-col md:flex-row-reverse justify-between items-center">
              <div className="w-full md:w-5/12 flex-auto">
                <img className="w-full float-right mt-5 md:mt-0" src="images/product/image2.webp" />
              </div>

              <div className="w-full md:w-7/12 flex-auto mt-4 md:mt-0">
                
                <div className="sm:text-center lg:text-left">

                  <h1 className="w-full md:w-4/5 text-2xl sm:text-4xl md:text-6xl tracking-tight font-bold text-gray-900">
                    <span className="block xl:inline">Lorem ipsun dolor</span>
                    <span className="block text-blue-600 gt-text-gradient xl:inline"> amet consectetur</span>
                  </h1>

                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>

                  <div className="mt-5 sm:mt-8 flex flex-row justify-start">

                    <div className='w-32 md:w-40 h-12 md:h-14 flex flex-row justify-center rounded-md shadow-xl text-base md:text-lg font-medium text-white gt-btn-type1 cursor-pointer mr-2'>
                      <div className='self-center'>Commander</div>
                    </div>

                    <div className='w-32 md:w-40 h-12 md:h-14 flex flex-row justify-center text-base md:text-lg font-medium text-gtpurple hover:text-gtblue duration-700 ease-in-out cursor-pointer'>
                      <div className='self-center underline'>En savoir +</div>
                    </div>

                  </div>

                </div>

              </div>
          </div>
      </section>

      <Catalogue1 />
      
      <Offre image={offre1.image} title={offre1.title} description={offre1.description} />

      <Promos image={promos1.image} title={promos1.title} description={promos1.description} />
      
      <Newsletter />

      <Footer/>

    </div>
  )
}
