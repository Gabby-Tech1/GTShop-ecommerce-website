import {React, useState, useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Category from './Components/Category/Category'
import Category2 from './Components/Category/Category2'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'
import headphone from '../src/assets/hero/headphone.png'
import Products from './Components/Products/Products'
import smartwatch2 from '../src/assets/category/smartwatch2-removebg-preview.png'
import Blogs from './Components/Blogs/Blogs'
import Partners from './Components/Partners/Partners'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BannerData = {
  discount: "25% Off",
  title: "Cute Smile",
  date: "January, 08 to May, 22",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Autum Sale",
  title4: "Have the real accessories at a discount to make you feel comfortable",
  bgColor: "#f42c37",

}

const BannerData2 ={
  discount: "15% Off",
  title: "Best Hours",
  date: "Febraury, 12 to April, 13",
  image: smartwatch2,
  title2: "Smart Tech",
  title3: "Winter Sales",
  title4: "Amazing smart devices which is portable and very affordable to everyone most especially students and workers.",
  bgColor: "#2dcc6f",

}

const App = () => {

  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
        
      }
    )
    AOS.refresh()
  }, [])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App