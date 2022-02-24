import { useState } from 'react'
import Link from 'next/link'
import HeadInfo from "../../components/common/headinfo"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import Newsletter from '../../components/common/newsletter'
import SectionHeader2 from '../../components/ui/Others/sectionHeader2'


export default function Home() {

  return (
    <div className="app-container gt-bg1">

      <HeadInfo title= 'Title here' description='description here'/>

      <Header/>

      <section className='bg-gtblack text-gray-100 py-6'>

        <SectionHeader2 text="Mon compte" textColor="text-gray-100" />
        
        
      </section>
      
      <Newsletter />

      <Footer/>

    </div>
  )
}
