import { useState } from 'react'
import Link from 'next/link'
import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import Footer from "../components/common/footer"
import Newsletter from '../components/common/newsletter'
import ProductGalery from '../components/product/productGalery'
import VariantType1 from '../components/product/variantType1'
import VariantType2 from '../components/product/variantType2'
import Console from '../components/product/console'
import ButtonType1 from '../components/ui/Buttons/buttonType1'
import ButtonType2 from '../components/ui/Buttons/buttonType2'
import CardType0 from '../components/ui/Cards/cardType0'
import SectionHeader1 from '../components/ui/Others/sectionHeader1'

const tailles = [
  {
    id: 1,
    value:"XS"
  },
  {
    id: 2,
    value:"S"
  },
  {
    id: 3,
    value:"M"
  },
  {
    id: 4,
    value:"L"
  },
  {
    id: 5,
    value: 'XL'
  },
  {
    id: 6,
    value: 'XXL'
  }
]

const memoires = [
  {
    id: 1,
    value: 32
  },
  {
    id: 2,
    value: 64
  },
  {
    id: 3,
    value: 128
  },
  {
    id: 4,
    value: 256
  }
]

const colors = [
  {
    id: 1,
    value: '#a52732'
  },
  {
    id: 2,
    value: 'gray'
  },
  {
    id: 3,
    value: '#6c27d7'
  },
  {
    id: 4,
    value: '#222222'
  }
]

export default function Home() {

  return (
    <div className="app-container gt-bg1 text-gtblack">

      <HeadInfo title= 'Title here' description='description here'/>

      <Header/>

      <section className="px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 mt-4">

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">

              <ProductGalery />

              <div className="mt-4 md:mt-0">
                
                <div className='w-full text-xl md:text-2xl font-bold'>Apple MacBook Air</div>
                <div className='w-full text-gray-400 text-base tracking-wide font-medium'>MacBook - Apple</div>
                <div className='w-full text-xl md:text-2xl font-bold truncate mt-2'>780 000 CFA</div>

                {/* <div className='mt-4'>
                  <div className='w-full text-base font-medium mb-2'>Choisir une tailles</div>
                  <VariantType1 variant_types={tailles} />
                </div> */}

                <div className='mt-4'>
                  <div className='w-full text-base font-medium mb-2'>Choisir une mémoire <span className='text-gray-600 text-sm'>(en GB)</span></div>
                  <VariantType1 variant_types={memoires} />
                </div>

                <div className='mt-4'>
                  <div className='w-full text-base font-medium mb-2'>Choisir une couleur</div>
                  <VariantType2 variant_types={colors} />
                </div>

                <div className='mt-4'>
                  <div className='w-full text-base font-medium mb-2'>Quantité</div>
                  <div className='flex flex-row'>
                    <Console />
                    <div className='text-base font-normal text-gray-500 self-center ml-3'>(1 produit(s) ajouté(s))</div>
                  </div>
                </div>

                <div className='mt-5 flex flex-row'>
                  <ButtonType1 text="Ajouter au panier" mr="8px" />
                  <ButtonType2 text="Favoris" />
                </div>

                <div className='mt-5 flex flex-row flex-wrap'>
                  <CardType0 icon="badge" text="Produits 100% authentique" />
                  <CardType0 icon="truck" text="Livraison à partir de 500 CFA" />
                  <CardType0 icon="return" text="Retours gratuit sous 15 Jours" />
                </div>

              </div>

          </div>
      </section>

      <section className='px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 mt-14'>

        <SectionHeader1 text="Détails du produits" />

        <p className='text-base xl:text-lg font-normal mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>

      </section>

      <Newsletter />

      <Footer/>

    </div>
  )
}
