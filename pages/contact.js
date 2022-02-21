import { useState } from 'react'
import Link from 'next/link'
import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import OpeningType1 from '../components/section/openingType1'
import Catalogue1 from '../components/product/catalogue1'
import Footer from "../components/common/footer"
import Offre from '../components/section/offre'
import Promos from '../components/section/promos'
import Newsletter from '../components/common/newsletter'
import { contrast, grayscale } from 'tailwindcss/defaultTheme'


export default function Inddex() {

  return (
    <div className="app-container gt-bg1">

      <HeadInfo title= 'Title here' description='description here'/>

      <Header/>

      <section className="relative px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 mt-10">

        <div className="w-full flex flex-row justify-between flex-wrap items-center">

            <div className="w-full xl:w-6/12 bg-gray-300 h-64">

                {/* <iframe width="100%" height="100%" className="absolute inset-0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe> */}

                {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a className="text-purple-500 leading-relaxed">example@email.com</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p className="leading-relaxed">123-456-7890</p>
                    </div>
                </div> */}

            </div>

            <div className="w-full xl:w-6/12 pl-0 xl:pl-10 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">NOUS CONTACTEZ</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
        </div>
      </section>
      
      <Newsletter />

      <Footer/>

    </div>
  )
}
