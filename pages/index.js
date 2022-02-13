import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import Footer from "../components/common/footer"
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
              <div className="w-full md:w-7/12 flex-auto">
                
                <div className="sm:text-center lg:text-left">
                  <h1 className="w-4/5 text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Lorem ipsun dolor sit</span>
                    <span className="block text-blue-600 gt-text-gradient xl:inline"> amet consectetur</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                    <div className='w-40 h-14 flex flex-row justify-center rounded-md shadow-xl text-lg font-medium text-white gt-btn-type1 gt-slide cursor-pointer mr-2'>
                      <div className='self-center'>Commander</div>
                    </div>

                    <div className='w-40 h-14 flex flex-row justify-center text-lg font-medium text-gtpurple hover:text-gtblue duration-700 ease-in-out cursor-pointer mr-2 '>
                      <div className='self-center underline'>En savoir +</div>
                    </div>

                    
                  </div>
                </div>

              </div>
          </div>
      </section>

      <section className="w-full gt-bg3 py-16 px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48">

        <div className='w-full text-center text-gtpurple2 text-4xl font-semibold leading-loose tracking-normal'>NOS PRODUITS</div>

        <div className="w-full px-2 py-12 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 border-b border-gray-500 border-opacity-50">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-4 text-lg leading-5 font-medium rounded-t-lg mb-minus1 tracking-normal',
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
          <div className="grid grid-cols-2 gap-20 items-center">

              <div className="">
                <img className="w-full float-right mt-5 md:mt-0" src="images/product/image4.webp" />
              </div>

              <div className="">
                
                <div className="sm:text-center lg:text-left">
                    <div className='w-max px-5 py-1 text-base font-medium gt-bg-type1 rounded-sm'>
                      <div className='gt-text-gradient'>Offres</div>
                    </div>
                  <h1 className="w-full text-2xl tracking-tight font-semibold text-gray-900 sm:text-4xl md:text-5xl mt-8">
                    <span className="block xl:inline">Lorem ipsun dolor sit amet consectetur aute magna aliqua </span>
                  </h1>
                  <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  
                  <div className="mt-6 sm:mt-10 sm:flex sm:justify-center lg:justify-start">

                    <div className='w-40 h-14 flex flex-row justify-center rounded-md shadow-xl text-lg font-medium text-white gt-btn-type1 gt-slide cursor-pointer mr-2'>
                      <div className='self-center'>Commander</div>
                    </div>

                    <div className='w-40 h-14 flex flex-row justify-center text-lg font-medium text-gtpurple hover:text-gtblue duration-700 ease-in-out cursor-pointer mr-2 '>
                      <div className='self-center underline'>En savoir +</div>
                    </div>

                  </div>

                </div>

              </div>
          </div>
      </section>


      <section className="ii-present flex justify-center bg-gray-100 bg-opacity-5 px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 my-10">
          <div className="grid grid-cols-2 gap-20 items-center">

              <div className="">
                
                <div className="sm:text-center lg:text-left">
                    <div className='w-max px-5 py-1 text-base font-medium gt-bg-type1 rounded-sm'>
                      <div className='gt-text-gradient'>Nouveauté</div>
                    </div>
                  <h1 className="w-full text-2xl tracking-tight font-semibold text-gray-900 sm:text-4xl md:text-5xl mt-8">
                    <span className="block xl:inline">Lorem ipsun dolor sit amet consectetur aute magna aliqua </span>
                  </h1>
                  <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  
                  <div className="mt-6 sm:mt-10 sm:flex sm:justify-center lg:justify-start">

                    <div className='w-40 h-14 flex flex-row justify-center rounded-md shadow-xl text-lg font-medium text-white gt-btn-type1 gt-slide cursor-pointer mr-2'>
                      <div className='self-center'>Commander</div>
                    </div>

                    <div className='w-40 h-14 flex flex-row justify-center text-lg font-medium text-gtpurple hover:text-gtblue duration-700 ease-in-out cursor-pointer mr-2 '>
                      <div className='self-center underline'>En savoir +</div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="">
                <img className="w-full float-right mt-5 md:mt-0" src="images/product/image3.webp" />
              </div>

          </div>
      </section>


      <section className="w-full py-16 px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 my-10">

        <div className='w-full h-72 gt-bg4 rounded-2xl'>

          <form className='w-full h-full flex flex-col justify-center rounded-2xl' method="post" onSubmit=''>
              <div className="w-full bg-opacity-0 flex flex-col justify-center self-center" >
                  <div className="text-2xl md:text-4xl text-center font-normal nws-text text-gray-100">Abonnez-vous à notre newsletter</div>
                  <div className="text-lg text-center font-medium hidden lg:block nws-text text-gray-200 mt-1">Soyez les premiers informés de nos actualités, promotions, nouveaux services et conseils.</div>
                  <div className="w-full flex flex-row justify-center my-4 md:my-5">
                      <div className="ii-nsl w-6/7 md:w-1/2 h-12 md:h-14 bg-white opacity-100 shadow-xl rounded-md px-2 py-2 flex flex-row justify-center border-1 border-gray-200 border-opacity-40">
                          <div className="h-full w-5/7 md:w-3/4 2xl:w-5/6">
                              <input className="h-full w-full px-4 text-tiny md:text-base border-0 active:border-0" type="email" id="" name="" placeholder="Ecrire votre adresse email.." required />
                          </div>
                          <div className="h-full w-2/7 md:w-1/4 2xl:w-1/6 gt-btn-type1 cursor-pointer rounded-md opacity-100 flex flex-col justify-center">
                              <button type="submit" className="text-center text-white text-tiny md:text-base">S'inscrire</button>
                          </div>
                      </div>
                  </div>
              </div>
          </form>

        </div>

      </section>

      <Footer/>

    </div>
  )
}
