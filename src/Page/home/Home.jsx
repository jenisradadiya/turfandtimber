import React from 'react'
import Hero from '../../Compotment/Home/Hero'
import ChooseUs from '../../Compotment/Home/ChooseUs'
import KeepInTouch from '../../Compotment/Home/KeepInTouch'
import OtherServices from '../../Compotment/Home/OtherServices'
import HomeQuote from '../../Compotment/Home/HomeQuote'
// import Friendly from '../../Compotment/Home/Friendly'
import CredibilitySection from '../../Compotment/Home/CredibilitySection'

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeQuote/>
      {/* <Friendly/> */}
      <OtherServices/>
      <CredibilitySection/>
      <KeepInTouch/>
      <ChooseUs/>
    </div>
  )
}
