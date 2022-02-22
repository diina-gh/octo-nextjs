import HeadInfo from '../components/common/headinfo'
import Header from '../components/common/header'
import Newsletter from '../components/common/newsletter'
import Footer from '../components/common/footer'
import Catalogue2 from '../components/product/catalogue2'


export default function Index() {
    
  return (

    <div className="app-container gt-bg1">

    <HeadInfo title= 'Title here' description='description here'/>
    <Header/>
    <Catalogue2 />
    <Newsletter />
    <Footer/>

  </div>
  )
}
