import Link from 'next/link'
import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import Footer from "../components/common/footer"


export default function Home() {
  return (
    <div className="app-container">

      <HeadInfo title= 'Tile here' description='description here'/>

      <Header/>

      <section className="ii-present flex justify-center bg-gray-200 bg-opacity-20 px-7 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-44">
          <div className="w-full flex flex-col md:flex-row-reverse justify-between items-center">
              <div className="w-full md:w-5/12 flex-auto">
                <img className="w-full float-right mt-5 md:mt-0" src="images/product/image1.webp" />
              </div>
              <div className="w-full md:w-7/12 flex-auto">
                
                <div class="sm:text-center lg:text-left">
                  <h1 class="w-4/5 text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">Lorem ipsun dolor sit</span>
                    <span class="block text-blue-600 xl:inline"> amet consectetur</span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

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

      <section className="w-full h-56 bg-red-100 bg-opacity-50 flex flex-col justify-center px-7 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-44">

      </section>

      <Footer/>

    </div>
  )
}
