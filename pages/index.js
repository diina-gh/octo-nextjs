import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import Footer from "../components/common/footer"

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

      <section className="ii-present flex justify-center bg-gray-100 bg-opacity-5 px-7 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-44">
          <div className="w-full flex flex-col md:flex-row-reverse justify-between items-center">
              <div className="w-full md:w-5/12 flex-auto">
                <img className="w-full float-right mt-5 md:mt-0" src="images/product/image1.webp" />
              </div>
              <div className="w-full md:w-7/12 flex-auto">
                
                <div className="sm:text-center lg:text-left">
                  <h1 className="w-4/5 text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Lorem ipsun dolor sit</span>
                    <span className="block text-blue-600 xl:inline"> amet consectetur</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                    <div className='w-40 h-14 flex flex-row justify-center rounded-md shadow border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer mr-2'>
                      <div className='self-center'>Commander</div>
                    </div>

                    <div className='w-40 h-14 flex flex-row justify-center text-base font-medium text-blue-600 cursor-pointer mr-2'>
                      <div className='self-center underline'>En savoir +</div>
                    </div>

                    
                  </div>
                </div>

              </div>
          </div>
        </section>

      <section className="w-full bg-gtblack py-16 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-44">

        <div className='w-full text-center text-gray-100 text-4xl font-semibold'>New Promos</div>

        <div className="w-full px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-5">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'bg-white rounded-xl p-3',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                  )}
                >
                  <ul>
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
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

      </section>

      <section className="w-full h-56 py-7 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-44">


      </section>

      <Footer/>

    </div>
  )
}
