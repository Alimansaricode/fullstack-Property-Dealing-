import React from 'react'
import Slider from './Slider.jsx'
import Main from './Main.jsx'
import Main2 from './Main2.jsx'
import PropertySection from './PropertySection.jsx'
import Footer from '../Footer/Footer.jsx'

function Home() {
  return (
    <div>
      <Slider/>
      <Main/>
      <Main2/>
      <PropertySection/>
      <Footer/>
    </div>
  )
}

export default Home