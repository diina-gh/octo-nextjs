import HeadInfo from "../components/common/headinfo"
import Header from "../components/common/header"
import Footer from "../components/common/footer"

export default function Home() {
  return (
    <div className="app-container">

      <HeadInfo title= 'Tile here' description='description here'/>

      <Header/>

      <section className="w-full h-56 bg-red-100 flex flex-col justify-center px-7 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-44">

      </section>

      <Footer/>

    </div>
  )
}
