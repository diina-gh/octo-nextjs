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

const opening1 = {
  id: 1,
  image: 'images/product/image2.webp',
  title: 'Lorem ipsum dolor sit amet consectetur',
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  category: 'Ipad',
  brand: 'Apple'
}

const offre1 = {
  id: 1,
  image: 'images/product/image4.webp',
  title: 'Lorem ipsunm dolor sit amet consectetur aute magna aliqua',
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
}

const promos1 = {
  id: 1,
  image: 'images/product/image3.webp',
  title: 'Lorem ipsum dolor sit amet consectetur aute magna aliqua',
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
}


export default function Home() {

  return (
    <div className="app-container gt-bg1">

      <HeadInfo title= 'Title here' description='description here'/>

      <Header/>

      <OpeningType1 image={opening1.image} title={opening1.title} description={opening1.description} category={opening1.category} brand={opening1.brand} />

      <Catalogue1 />

      <Offre image={offre1.image} title={offre1.title} description={offre1.description} />

      <Promos image={promos1.image} title={promos1.title} description={promos1.description} />
      
      <Newsletter />

      <Footer/>

    </div>
  )
}
