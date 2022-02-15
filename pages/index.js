import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import Footer from "../components/common/footer"
import Newsletter from '../components/common/newsletter'
import Product from '../components/product/product'

const item = {
    id: 1,
    name: 'Macbook Pro',
    category: 'Laptop',
    price: '780 000 CFA',
    image: "images/product/product1.png",
}

const item2 = {
  id: 1,
  name: 'Ipad Air',
  category: 'Tablette',
  price: '575 000 CFA',
  image: "images/product/product4.png",
}

const item3 = {
  id: 1,
  name: 'Iphone 13 Pro',
  category: 'Phone',
  price: '880 000 CFA',
  image: "images/product/product3.png",
}

const item4 = {
  id: 1,
  name: 'Smart Watch',
  category: 'Smart Watch',
  price: '450 000 CFA',
  image: "images/product/product5.png",
}

const item5 = {
id: 1,
name: 'Homepod mini',
category: 'Acessories',
price: '265 000 CFA',
image: "images/product/product6.png",
}

const item6 = {
id: 1,
name: 'Airpod Pro',
category: 'Acessories',
price: '140 000 CFA',
image: "images/product/product7.png",
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {

  let [categories] = useState({

    Téléphone: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],

    Tablette: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],

    Ordinateur: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],

    Montre: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],

  })


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

      <section className="w-full gt-bg3 py-16 px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48">

        <div className='w-full text-center text-gtpurple2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-loose tracking-normal'>NOS PRODUITS</div>

        <div className="w-full px-2 py-10 md:py-12 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 border-b border-gray-500 border-opacity-50">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2 md:py-4 text-sm md:text-lg leading-5 font-medium rounded-t-lg mb-minus1 tracking-normal',
                      'focus:outline-none focus:ring-0 ring-opacity-0',
                      selected
                        ? 'text-gtpurple2 bg-gray-400 bg-opacity-30 shadow-sm border-b gt-border1'
                        : 'text-gray-300 hover:bg-gray-400 hover:bg-opacity-10 hover:text-gray-200'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-10">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'bg-opacity-0',
                    'focus:outline-none focus:ring-0 ring-opacity-0'
                  )}
                >
                  {/* <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative p-3 rounded-md hover:bg-coolGray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>

                        <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>

                        <a
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                          )}
                        />
                      </li>
                    ))}
                  </ul> */}

                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 md:grid-cols-3 md:gap-10">

                        <div className="">
                          <Product product={item} />
                        </div>

                        <div className="">
                          <Product product={item2} />
                        </div>

                        <div className="">
                          <Product product={item3} />
                        </div>

                        <div className="">
                          <Product product={item4} />
                        </div>

                        <div className="">
                          <Product product={item5} />
                        </div>

                        <div className="">
                          <Product product={item6} />
                        </div>

                    </div>


                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

      </section>

      <section className="ii-present flex justify-center bg-gray-100 bg-opacity-5 px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 items-center">

              <div className="">
                <img className="w-full float-right mt-5 md:mt-0" src="images/product/image4.webp" />
              </div>

              <div className="mt-4 md:mt-0">
                
                <div className="sm:text-center lg:text-left">
                    <div className='w-max px-5 py-1 text-base font-medium gt-bg-type1 rounded-sm'>
                      <div className='gt-text-gradient'>Offres</div>
                    </div>
                  <h1 className="w-full text-2xl sm:text-4xl md:text-6xl tracking-tight font-semibold text-gray-900 mt-8">
                    <span className="block xl:inline">Lorem ipsun dolor sit amet consectetur aute magna aliqua </span>
                  </h1>
                  <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  
                  <div className="mt-6 sm:mt-10 flex flex-row justify-start">

                    <div className='w-32 md:w-40 h-12 md:h-14 flex flex-row justify-center rounded-md shadow-xl text-base md:text-lg font-medium text-white gt-btn-type1 cursor-pointer mr-2'>
                      <div className='self-center'>Commander</div>
                    </div>

                    <div className='px-6 h-12 md:h-14 flex flex-row justify-center text-base md:text-lg font-medium text-gtpurple hover:text-gtblue duration-700 ease-in-out cursor-pointer'>
                      <div className='self-center underline'>Voir +</div>
                    </div>

                  </div>

                </div>

              </div>
          </div>
      </section>


      <section className="ii-present flex justify-center bg-gray-100 bg-opacity-5 px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 my-5  md:my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 items-center">

              <div className="">
                
                <div className="sm:text-center lg:text-left">

                  <div className='w-max px-5 py-1 text-base font-medium gt-bg-type1 rounded-sm'>
                    <div className='gt-text-gradient'>Nouveauté</div>
                  </div>

                  <h1 className="w-full text-2xl sm:text-4xl md:text-6xl tracking-tight font-semibold text-gray-900 mt-8">
                    <span className="block xl:inline">Lorem ipsun dolor sit amet consectetur aute magna aliqua </span>
                  </h1>

                  <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  
                  <div className="mt-6 sm:mt-10 flex flex-row justify-start">

                    <div className='w-32 md:w-40 h-12 md:h-14 flex flex-row justify-center rounded-md shadow-xl text-base md:text-lg font-medium text-white gt-btn-type1 cursor-pointer mr-2'>
                      <div className='self-center'>Commander</div>
                    </div>

                    <div className='px-6 h-12 md:h-14 flex flex-row justify-center text-base md:text-lg font-medium text-gtpurple hover:text-gtblue duration-700 ease-in-out cursor-pointer'>
                      <div className='self-center underline'>Voir +</div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="mt-4 md:mt-0">
                <img className="w-full float-right mt-5 md:mt-0" src="images/product/image3.webp" />
              </div>

          </div>
      </section>


      <Newsletter />

      <Footer/>

    </div>
  )
}
